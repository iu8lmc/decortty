cmake_minimum_required(VERSION 3.21)

project(DecoRTTY
    VERSION 0.1.0
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
                                        Multimedia SerialPort)
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
)
target_link_libraries(decortty_flex PUBLIC Qt6::Core Qt6::Network decortty_dsp)

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
    set(DECORTTY_WIN_RESOURCES resources/decortty.rc)
endif()

# ── FT-991A gateway ─────────────────────────────────────────────────────────
# A separate program on purpose: it runs on whichever PC the radio is plugged
# into, which need not be the one running DecoRTTY.
add_library(decortty_gateway STATIC
    src/gateway/Ft991Cat.cpp
    src/gateway/Ft991Cat.h
    src/gateway/CodecAudio.cpp
    src/gateway/CodecAudio.h
    src/gateway/Ft991Gateway.cpp
    src/gateway/Ft991Gateway.h
)
target_link_libraries(decortty_gateway PUBLIC
    Qt6::Core Qt6::Network Qt6::Multimedia Qt6::SerialPort
    decortty_flex)
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
    src/app/WaterfallItem.cpp
    src/app/WaterfallItem.h
    src/app/Theme.h
)

qt_add_resources(decortty "appicon"
    PREFIX "/"
    BASE resources
    FILES resources/decortty.png
)

qt_add_qml_module(decortty
    URI DecoRTTY
    VERSION 1.0
    QML_FILES
        qml/DecoRTTY/Main.qml
    SOURCES
        src/app/Theme.h
        src/app/WaterfallItem.h
        src/app/WaterfallItem.cpp
)

# The reusable widgets live in their own QML module so `import
# DecoRTTY.components` resolves the same way in every file.
qt_add_qml_module(decortty_components
    URI DecoRTTY.components
    VERSION 1.0
    STATIC
    QML_FILES
        qml/DecoRTTY/components/GlassPanel.qml
        qml/DecoRTTY/components/GlassButton.qml
        qml/DecoRTTY/components/PanelHeading.qml
        qml/DecoRTTY/components/StatusItem.qml
        qml/DecoRTTY/components/StatusBar.qml
        qml/DecoRTTY/components/QsoField.qml
        qml/DecoRTTY/components/LabelledSlider.qml
        qml/DecoRTTY/components/HeaderBar.qml
        qml/DecoRTTY/components/WaterfallPanel.qml
        qml/DecoRTTY/components/TuningScope.qml
        qml/DecoRTTY/components/ReceivePanel.qml
        qml/DecoRTTY/components/TransmitPanel.qml
        qml/DecoRTTY/components/DecoderPanel.qml
        qml/DecoRTTY/components/RadioDialog.qml
        qml/DecoRTTY/components/SetupDialog.qml
        qml/DecoRTTY/components/FilterPanel.qml
        qml/DecoRTTY/components/LogDialog.qml
)

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
