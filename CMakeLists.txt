cmake_minimum_required(VERSION 3.21)

project(DecoRTTY
    VERSION 0.6.1
    DESCRIPTION "Modern RTTY decoder with native FlexRadio VITA-49 transport"
    LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)
set(CMAKE_AUTOMOC ON)
set(CMAKE_INCLUDE_CURRENT_DIR ON)

if(NOT CMAKE_BUILD_TYPE AND NOT CMAKE_CONFIGURATION_TYPES)
    set(CMAKE_BUILD_TYPE Release CACHE STRING "" FORCE)
endif()

option(DECORTTY_BUILD_TOOLS "Build the command-line self-test and analysis tools" ON)

# ── DSP core ────────────────────────────────────────────────────────────────
# Deliberately free of Qt: the demodulator is the part worth testing in
# isolation and reusing headlessly.
add_library(decortty_dsp STATIC
    src/dsp/Fft.cpp
    src/dsp/Fft.h
    src/dsp/Baudot.cpp
    src/dsp/Baudot.h
    src/dsp/RttyTypes.h
    src/dsp/RttyDemodulator.cpp
    src/dsp/RttyDemodulator.h
    src/dsp/ViterbiBaudot.cpp
    src/dsp/ViterbiBaudot.h
    src/dsp/FirDecimator.cpp
    src/dsp/FirDecimator.h
    src/dsp/FskModulator.cpp
    src/dsp/FskModulator.h
    src/dsp/RxFilters.cpp
    src/dsp/RxFilters.h
    src/dsp/AutoTuner.cpp
    src/dsp/AutoTuner.h
)
target_include_directories(decortty_dsp PUBLIC ${CMAKE_CURRENT_SOURCE_DIR}/src)
set_target_properties(decortty_dsp PROPERTIES AUTOMOC OFF)

if(MSVC)
    target_compile_options(decortty_dsp PRIVATE /W4)
else()
    target_compile_options(decortty_dsp PRIVATE -Wall -Wextra -ffast-math)
endif()

# ── FlexRadio transport ─────────────────────────────────────────────────────
find_package(Qt6 6.5 REQUIRED COMPONENTS Core Network Gui Qml Quick QuickControls2
                                        Multimedia SerialPort LinguistTools)
qt_standard_project_setup(REQUIRES 6.5)

add_library(decortty_flex STATIC
    src/flex/VitaPacket.cpp
    src/flex/VitaPacket.h
    src/flex/FlexDiscovery.cpp
    src/flex/FlexDiscovery.h
    src/flex/FlexApiClient.cpp
    src/flex/FlexApiClient.h
    src/flex/FlexVitaStream.cpp
    src/flex/FlexVitaStream.h
    src/flex/OpusCodec.cpp
    src/flex/OpusCodec.h
    src/flex/FlexRadioLink.cpp
    src/flex/FlexRadioLink.h
    src/vita/VitaContext.cpp
    src/vita/VitaContext.h
    src/link/RadioLink.h
    src/link/GatewayLink.cpp
    src/link/GatewayLink.h
    src/link/RadioHub.cpp
    src/link/RadioHub.h
    src/link/SoundCardLink.cpp
    src/link/SoundCardLink.h
)
target_link_libraries(decortty_flex PUBLIC Qt6::Core Qt6::Network decortty_dsp decortty_audio)

# Opus is how the radio wants client transmit audio; without it DecoRTTY can
# still receive, so the dependency is optional and reported at configure time.
find_package(PkgConfig QUIET)
if(PkgConfig_FOUND)
    pkg_check_modules(OPUS IMPORTED_TARGET opus)
endif()
if(TARGET PkgConfig::OPUS)
    target_link_libraries(decortty_flex PUBLIC PkgConfig::OPUS)
    target_compile_definitions(decortty_flex PUBLIC DECORTTY_HAVE_OPUS=1)
    message(STATUS "DecoRTTY: Opus found — transmit enabled")
else()
    message(WARNING "DecoRTTY: Opus not found — receive only, transmit will be disabled")
endif()

# Icona dell'eseguibile: solo su Windows, dove la risorsa .rc e' il modo in cui
# il sistema la trova senza avviare il programma.
set(DECORTTY_WIN_RESOURCES "")
if(WIN32)
    configure_file(resources/decortty.rc.in
                   ${CMAKE_CURRENT_BINARY_DIR}/decortty.rc @ONLY)
    set(DECORTTY_WIN_RESOURCES ${CMAKE_CURRENT_BINARY_DIR}/decortty.rc)
endif()

# ── FT-991A gateway ─────────────────────────────────────────────────────────
# A separate program on purpose: it runs on whichever PC the radio is plugged
# into, which need not be the one running DecoRTTY.
# Il codec audio sta per conto suo: lo usa il gateway per parlare con la scheda
# dell'FT-991A, e lo usa l'applicazione quando l'audio arriva da una scheda
# qualunque invece che dalla rete. Sono lo stesso mestiere — aprire un
# dispositivo e portare i campioni a 24 kHz — e vale la pena farlo scrivere una
# volta sola.
add_library(decortty_audio STATIC
    src/gateway/CodecAudio.cpp
    src/gateway/CodecAudio.h
)
target_link_libraries(decortty_audio PUBLIC Qt6::Core Qt6::Multimedia decortty_dsp)

add_library(decortty_gateway STATIC
    src/gateway/Ft991Cat.cpp
    src/gateway/Ft991Cat.h
    src/gateway/Ft991Gateway.cpp
    src/gateway/Ft991Gateway.h
)
target_link_libraries(decortty_gateway PUBLIC
    Qt6::Core Qt6::Network Qt6::Multimedia Qt6::SerialPort
    decortty_audio decortty_flex)
target_compile_definitions(decortty_gateway PUBLIC DECORTTY_VERSION="${PROJECT_VERSION}")

qt_add_executable(decortty-ft991 ${DECORTTY_WIN_RESOURCES} tools/gateway_main.cpp)
target_link_libraries(decortty-ft991 PRIVATE decortty_gateway Qt6::Gui)
set_target_properties(decortty-ft991 PROPERTIES WIN32_EXECUTABLE OFF)

# ── Application ─────────────────────────────────────────────────────────────
qt_add_executable(decortty
    ${DECORTTY_WIN_RESOURCES}
    src/main.cpp
    src/app/RttyEngine.cpp
    src/app/RttyEngine.h
    src/app/ReceiveTextModel.cpp
    src/app/ReceiveTextModel.h
    src/app/MacroModel.cpp
    src/app/MacroModel.h
    src/app/QsoLog.cpp
    src/app/QsoLog.h
    src/app/GatewaySupervisor.cpp
    src/app/GatewaySupervisor.h
    src/app/Language.cpp
    src/app/Language.h
    src/app/BandPlan.cpp
    src/app/BandPlan.h
    src/app/WaterfallItem.cpp
    src/app/WaterfallItem.h
    src/app/Theme.h
)

qt_add_resources(decortty "appicon"
    PREFIX "/"
    BASE resources
    FILES resources/decortty.png
)

set(DECORTTY_QML_FILES qml/DecoRTTY/Main.qml)

qt_add_qml_module(decortty
    URI DecoRTTY
    VERSION 1.0
    QML_FILES
        ${DECORTTY_QML_FILES}
    SOURCES
        src/app/Theme.h
        src/app/WaterfallItem.h
        src/app/WaterfallItem.cpp
)

# The reusable widgets live in their own QML module so `import
# DecoRTTY.components` resolves the same way in every file.
set(DECORTTY_COMPONENT_FILES
    qml/DecoRTTY/components/GlassPanel.qml
    qml/DecoRTTY/components/GlassButton.qml
    qml/DecoRTTY/components/PanelHeading.qml
    qml/DecoRTTY/components/StatusItem.qml
    qml/DecoRTTY/components/StatusBar.qml
    qml/DecoRTTY/components/QsoField.qml
    qml/DecoRTTY/components/LabelledSlider.qml
    qml/DecoRTTY/components/HeaderBar.qml
    qml/DecoRTTY/components/WaterfallPanel.qml
    qml/DecoRTTY/components/BandBar.qml
    qml/DecoRTTY/components/BandScale.qml
    qml/DecoRTTY/components/TuningScope.qml
    qml/DecoRTTY/components/ReceivePanel.qml
    qml/DecoRTTY/components/TransmitPanel.qml
    qml/DecoRTTY/components/DecoderPanel.qml
    qml/DecoRTTY/components/RadioDialog.qml
    qml/DecoRTTY/components/SetupDialog.qml
    qml/DecoRTTY/components/FilterPanel.qml
    qml/DecoRTTY/components/LogDialog.qml
)

qt_add_qml_module(decortty_components
    URI DecoRTTY.components
    VERSION 1.0
    STATIC
    QML_FILES
        ${DECORTTY_COMPONENT_FILES}
)

# Niente compilazione anticipata del QML.
#
# qmlcachegen trasforma i file QML in bytecode dentro l'eseguibile, il che fa
# guadagnare qualche millisecondo all'avvio. Ma il percorso con cui registra i
# file — /qt/qml/DecoRTTY/components/qml/DecoRTTY/components/DecoderPanel.qml —
# non e' quello da cui Qt ricava il contesto delle traduzioni, e il risultato e'
# che ogni stringa dell'interfaccia resta in inglese mentre quelle del C++ sono
# tradotte: un programma mezzo in una lingua e mezzo nell'altra. Verificato
# avviando con QML_DISABLE_DISK_CACHE=1, che lo traduce per intero.
#
# Fra un avvio impercettibilmente piu' rapido e un'interfaccia che parla la
# lingua di chi la usa, la scelta non e' in dubbio.
set_source_files_properties(
    ${DECORTTY_QML_FILES} ${DECORTTY_COMPONENT_FILES}
    PROPERTIES QT_QML_SKIP_CACHEGEN TRUE)

target_compile_definitions(decortty PRIVATE DECORTTY_VERSION="${PROJECT_VERSION}")
# src/app is on the include path as well as src, because the generated QML type
# registration includes the headers by their bare file name.
target_include_directories(decortty PRIVATE
    ${CMAKE_CURRENT_SOURCE_DIR}/src
    ${CMAKE_CURRENT_SOURCE_DIR}/src/app)
target_link_libraries(decortty PRIVATE
    Qt6::Core Qt6::Gui Qt6::Qml Qt6::Quick Qt6::QuickControls2
    decortty_flex
    decortty_componentsplugin
)

set_target_properties(decortty PROPERTIES
    WIN32_EXECUTABLE ON
    MACOSX_BUNDLE ON
)

# ── Traduzioni ──────────────────────────────────────────────────────────────
# Sedici lingue. I cataloghi .ts stanno sotto controllo di versione — sono il
# lavoro dei traduttori — mentre i .qm compilati si rigenerano a ogni build e
# finiscono accanto all'eseguibile, dove Language li cerca.
set(DECORTTY_LANGUAGES
    it de fr es pt nl ca da hu ro lv ru ja zh zh_TW)

set(DECORTTY_TS_FILES "")
foreach(lang IN LISTS DECORTTY_LANGUAGES)
    list(APPEND DECORTTY_TS_FILES ${CMAKE_CURRENT_SOURCE_DIR}/translations/decortty_${lang}.ts)
endforeach()

# qt_add_translations aggiorna i .ts dalle sorgenti e compila i .qm. Il
# `qt_add_lupdate` separato serve perche' i .ts vanno aggiornati a mano, con un
# bersaglio esplicito: rifarli a ogni compilazione sovrascriverebbe il lavoro di
# chi sta traducendo in quel momento.
qt_add_translations(decortty
    TS_FILES ${DECORTTY_TS_FILES}
    QM_FILES_OUTPUT_VARIABLE DECORTTY_QM_FILES
    LUPDATE_OPTIONS -no-obsolete -locations none
)

# I .qm accanto all'eseguibile: e' li' che Language li cerca, ed e' anche quello
# che lo script di distribuzione copia.
#
# Un bersaglio a se', non un POST_BUILD di decortty. Il POST_BUILD gira solo
# quando l'eseguibile viene rifatto: chi tocca soltanto una traduzione ricompila,
# vede passare "Generating decortty_it.qm", avvia il programma — e legge la
# vecchia frase, perche' il catalogo nuovo e' rimasto nella cartella di
# compilazione senza mai arrivare a destinazione. Un errore che non da' nessun
# segno, e che al momento di un rilascio si porta dietro sedici lingue ferme a
# ieri.
add_custom_target(decortty_translations ALL
    COMMAND ${CMAKE_COMMAND} -E make_directory $<TARGET_FILE_DIR:decortty>/translations
    COMMAND ${CMAKE_COMMAND} -E copy_if_different ${DECORTTY_QM_FILES}
            $<TARGET_FILE_DIR:decortty>/translations
    DEPENDS ${DECORTTY_QM_FILES}
    COMMENT "Copio i cataloghi tradotti accanto all'eseguibile"
    VERBATIM
)

# ── Tools ───────────────────────────────────────────────────────────────────
if(DECORTTY_BUILD_TOOLS)
    add_executable(decortty_selftest tools/selftest.cpp tools/hfchannel.h)
    target_link_libraries(decortty_selftest PRIVATE decortty_dsp)
    set_target_properties(decortty_selftest PROPERTIES AUTOMOC OFF)

    # Manda un WAV a un dispositivo di uscita scelto: e' cosi' che si prova la
    # catena di ricezione senza radio, iniettando un segnale noto in un cavo
    # audio virtuale.
    qt_add_executable(decortty_inject tools/inject_main.cpp)
    target_link_libraries(decortty_inject PRIVATE Qt6::Core Qt6::Gui Qt6::Multimedia)
    set_target_properties(decortty_inject PROPERTIES WIN32_EXECUTABLE OFF)

    # Generates and decodes WAV files, so the decoder can be compared against
    # another program on byte-identical input.
    add_executable(decortty_wavtool tools/wavtool.cpp)
    target_link_libraries(decortty_wavtool PRIVATE decortty_dsp)
    set_target_properties(decortty_wavtool PROPERTIES AUTOMOC OFF)
endif()

install(TARGETS decortty decortty-ft991
    BUNDLE  DESTINATION .
    RUNTIME DESTINATION bin)
