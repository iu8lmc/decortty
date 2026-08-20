<?xml version='1.0' encoding='utf-8'?>
<TS version="2.1" language="ru" sourcelanguage="en">
<context>
    <name>DecoderPanel</name>
    <message>
        <source>Correction</source>
        <translation>Коррекция</translation>
    </message>
    <message>
        <source>Off</source>
        <translation>Выкл</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Обычная</translation>
    </message>
    <message>
        <source>Deep</source>
        <translation>Глубокая</translation>
    </message>
    <message>
        <source>Unshift on space — recovers a lost FIGS/LTRS, but
breaks long figure groups such as serial numbers.</source>
        <translation>Unshift on space — спасает потерянный FIGS/LTRS,
но ломает длинные группы цифр, например
порядковые номера.</translation>
    </message>
    <message>
        <source>Set radio</source>
        <translation>Настроить радио</translation>
    </message>
    <message>
        <source>Puts the radio into DIGU and narrows its filter
around the tones.</source>
        <translation>Переводит радио в DIGU и сужает его фильтр
вокруг тонов.</translation>
    </message>
</context>
<context>
    <name>FilterPanel</name>
    <message>
        <source>FILTERS</source>
        <translation>ФИЛЬТРЫ</translation>
    </message>
    <message>
        <source>Bandpass around the two tones: throws away
everything outside before the detector.</source>
        <translation>Полосовой фильтр вокруг двух тонов: отбрасывает
всё, что снаружи, ещё до детектора.</translation>
    </message>
    <message>
        <source>Removes one frequency. Ctrl+click the waterfall
to drop it on the carrier that is in the way.</source>
        <translation>Убирает одну частоту. Ctrl+щелчок по водопаду
ставит её на мешающую несущую.</translation>
    </message>
    <message>
        <source>Adaptive canceller: removes steady carriers by
itself. On weak signals it can eat the RTTY as
well — try it and listen.</source>
        <translation>Адаптивный подавитель: сам убирает стоячие
несущие. На слабых сигналах может съесть и сам
RTTY — попробуйте и послушайте.</translation>
    </message>
    <message>
        <source>BPF width</source>
        <translation>Ширина BPF</translation>
    </message>
    <message>
        <source>FRAMING</source>
        <translation>КАДР</translation>
    </message>
    <message>
        <source>Stop</source>
        <translation>Стоп</translation>
    </message>
    <message>
        <source>Bits</source>
        <translation>Биты</translation>
    </message>
    <message>
        <source>Par.</source>
        <translation>Чёт.</translation>
    </message>
    <message>
        <source>none</source>
        <translation>нет</translation>
    </message>
    <message>
        <source>even</source>
        <translation>чёт</translation>
    </message>
    <message>
        <source>odd</source>
        <translation>нечёт</translation>
    </message>
    <message>
        <source>Figures set: US has BELL and apostrophe where
ITA2 swaps the two.</source>
        <translation>Набор цифр: в US звонок и апостроф стоят там,
где ITA2 меняет их местами.</translation>
    </message>
    <message>
        <source>Prints characters whose stop bit read wrong too:
a few more characters on distorted signals, some
lines of rubbish in exchange.</source>
        <translation>Печатает и знаки с неверным стоповым битом:
несколько знаков больше на искажённых сигналах, в
обмен на несколько строк мусора.</translation>
    </message>
    <message>
        <source>TRANSMIT</source>
        <translation>ПЕРЕДАЧА</translation>
    </message>
    <message>
        <source>Fill</source>
        <translation>Заполн.</translation>
    </message>
    <message>
        <source>off</source>
        <translation>выкл</translation>
    </message>
    <message>
        <source>What to send between characters while you
type live.</source>
        <translation>Что передавать между знаками, пока вы печатаете
вживую.</translation>
    </message>
    <message>
        <source>Character wait</source>
        <translation>Пауза между знаками</translation>
    </message>
</context>
<context>
    <name>HeaderBar</name>
    <message>
        <source>Setup</source>
        <translation>Настройки</translation>
    </message>
</context>
<context>
    <name>LogDialog</name>
    <message>
        <source>LOG</source>
        <translation>ЖУРНАЛ</translation>
    </message>
    <message numerus="yes">
        <source>%n contact(s)</source>
        <translation><numerusform>%n связь</numerusform><numerusform>%n связи</numerusform><numerusform>%n связей</numerusform></translation>
    </message>
    <message>
        <source>RST SENT</source>
        <translation>RST ПЕР</translation>
    </message>
    <message>
        <source>RST RCVD</source>
        <translation>RST ПРИН</translation>
    </message>
    <message>
        <source>NAME</source>
        <translation>ИМЯ</translation>
    </message>
    <message>
        <source>Log it</source>
        <translation>В журнал</translation>
    </message>
    <message>
        <source>Worked before: %1 — last on %2</source>
        <translation>Уже работали: %1 — последний раз %2</translation>
    </message>
    <message>
        <source>Export ADIF</source>
        <translation>Экспорт ADIF</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Закрыть</translation>
    </message>
</context>
<context>
    <name>Main</name>
    <message>
        <source>DECODER</source>
        <translation>ДЕКОДЕР</translation>
    </message>
    <message>
        <source>FILTERS</source>
        <translation>ФИЛЬТРЫ</translation>
    </message>
</context>
<context>
    <name>RadioDialog</name>
    <message>
        <source>FT-991A GATEWAY</source>
        <translation>ШЛЮЗ FT-991A</translation>
    </message>
    <message>
        <source>on</source>
        <translation>вкл</translation>
    </message>
    <message>
        <source>off</source>
        <translation>выкл</translation>
    </message>
    <message>
        <source>When on, the gateway opens at start-up and
closes with the program. Turn it off if the radio
is on another PC.</source>
        <translation>Если включено, шлюз открывается при запуске и
закрывается вместе с программой. Выключите, если
радио на другом компьютере.</translation>
    </message>
    <message>
        <source>close</source>
        <translation>закрыть</translation>
    </message>
    <message>
        <source>settings</source>
        <translation>настроить</translation>
    </message>
    <message>
        <source>Audio in</source>
        <translation>Звук вход</translation>
    </message>
    <message>
        <source>Restart</source>
        <translation>Перезапуск</translation>
    </message>
    <message>
        <source>Use after changing the port or a device.</source>
        <translation>Применять после смены порта или устройства.</translation>
    </message>
    <message>
        <source>Audio out</source>
        <translation>Звук выход</translation>
    </message>
    <message>
        <source>RADIOS ON THE NETWORK</source>
        <translation>СТАНЦИИ В СЕТИ</translation>
    </message>
    <message>
        <source>No radio has answered yet</source>
        <translation>Ни одна станция ещё не ответила</translation>
    </message>
    <message>
        <source>Radios announce themselves on UDP 4992.
Check the radio is on the same subnet, or enter its address below.</source>
        <translation>Станции объявляют себя по UDP 4992.
Проверьте, что радио в той же подсети, или впишите его адрес ниже.</translation>
    </message>
    <message>
        <source>Connect</source>
        <translation>Подключить</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Закрыть</translation>
    </message>
</context>
<context>
    <name>ReceivePanel</name>
    <message>
        <source>RECEIVE</source>
        <translation>ПРИЁМ</translation>
    </message>
    <message>
        <source>Call</source>
        <translation>Позывные</translation>
    </message>
    <message>
        <source>Highlights callsigns. Click one to put it
in the HIS CALL field.</source>
        <translation>Подсвечивает позывные. Щёлкните по одному,
чтобы поставить его в поле HIS CALL.</translation>
    </message>
    <message>
        <source>Follow</source>
        <translation>Следить</translation>
    </message>
    <message>
        <source>Copy</source>
        <translation>Копировать</translation>
    </message>
    <message>
        <source>Clear</source>
        <translation>Очистить</translation>
    </message>
    <message>
        <source>jump to end ↓</source>
        <translation>в конец ↓</translation>
    </message>
</context>
<context>
    <name>SetupDialog</name>
    <message>
        <source>LANGUAGE</source>
        <translation>ЯЗЫК</translation>
    </message>
    <message>
        <source>changes immediately</source>
        <translation>меняется сразу</translation>
    </message>
    <message>
        <source>STATION</source>
        <translation>СТАНЦИЯ</translation>
    </message>
    <message>
        <source>MY CALL</source>
        <translation>MY CALL</translation>
    </message>
    <message>
        <source>NAME</source>
        <translation>ИМЯ</translation>
    </message>
    <message>
        <source>QTH</source>
        <translation>QTH</translation>
    </message>
    <message>
        <source>MACROS</source>
        <translation>МАКРОСЫ</translation>
    </message>
    <message>
        <source>Restore defaults</source>
        <translation>Сбросить</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Закрыть</translation>
    </message>
</context>
<context>
    <name>TransmitPanel</name>
    <message>
        <source>Type here — Enter sends the line</source>
        <translation>Пишите здесь — Enter отправляет строку</translation>
    </message>
    <message>
        <source>Connect a radio to transmit</source>
        <translation>Подключите радио, чтобы передавать</translation>
    </message>
    <message>
        <source>TRANSMITTING</source>
        <translation>ПЕРЕДАЮ</translation>
    </message>
    <message>
        <source>TRANSMIT</source>
        <translation>ПЕРЕДАЧА</translation>
    </message>
    <message>
        <source>Abort</source>
        <translation>Прервать</translation>
    </message>
    <message>
        <source>Clear</source>
        <translation>Очистить</translation>
    </message>
    <message>
        <source>High enough to drive the ALC — check the meter.</source>
        <translation>Достаточно, чтобы раскачать ALC — смотрите на прибор.</translation>
    </message>
</context>
<context>
    <name>TuningScope</name>
    <message>
        <source>TUNING</source>
        <translation>НАСТРОЙКА</translation>
    </message>
</context>
<context>
    <name>WaterfallPanel</name>
    <message>
        <source>SPECTRUM</source>
        <translation>СПЕКТР</translation>
    </message>
    <message>
        <source>VIEW</source>
        <translation>ВИД</translation>
    </message>
    <message>
        <source>Zoom, palette, brightness and speed of the
waterfall.</source>
        <translation>Масштаб, палитра, яркость и скорость
водопада.</translation>
    </message>
    <message>
        <source>CENTRE</source>
        <translation>ЦЕНТР</translation>
    </message>
    <message>
        <source>Finds the tone pair in the band and moves the
tuning onto it. Once, now.</source>
        <translation>Находит пару тонов в диапазоне и переводит на
них настройку. Один раз, сейчас.</translation>
    </message>
    <message>
        <source>Searches by itself whenever nothing is being
copied, and tries the polarity too. While the
decoder is locked it touches nothing.</source>
        <translation>Ищет сам, пока ничего не принимается, и пробует
также полярность. Пока декодер держит сигнал, он
ничего не трогает.</translation>
    </message>
    <message>
        <source>Follows the drift of the signal already locked,
within a few tens of hertz.</source>
        <translation>Следит за уходом уже пойманного сигнала в
пределах нескольких десятков герц.</translation>
    </message>
    <message>
        <source>band</source>
        <translation>диапазон</translation>
    </message>
    <message>
        <source>How much band to show. Narrow around the tones
shows the individual bits; wide shows who is calling.</source>
        <translation>Сколько диапазона показывать. Узко вокруг тонов
видны отдельные биты; широко видно, кто зовёт.</translation>
    </message>
    <message>
        <source>DECO</source>
        <translation>DECO</translation>
    </message>
    <message>
        <source>GREY</source>
        <translation>СЕРЫЙ</translation>
    </message>
    <message>
        <source>FIRE</source>
        <translation>ОГОНЬ</translation>
    </message>
    <message>
        <source>speed %1x</source>
        <translation>скор. %1x</translation>
    </message>
    <message>
        <source>How fast it scrolls. Slower keeps a longer
stretch of band in view.</source>
        <translation>Как быстро он бежит. Медленнее — на экране
остаётся более длинный кусок диапазона.</translation>
    </message>
    <message>
        <source>light</source>
        <translation>яркость</translation>
    </message>
    <message>
        <source>contrast</source>
        <translation>контраст</translation>
    </message>
    <message>
        <source>floor %1 dB</source>
        <translation>шумы %1 дБ</translation>
    </message>
</context>
<context>
    <name>decortty::app::GatewaySupervisor</name>
    <message>
        <source>not started</source>
        <translation>не запущен</translation>
    </message>
    <message>
        <source>disabled</source>
        <translation>отключён</translation>
    </message>
    <message>
        <source>already listening (started elsewhere)</source>
        <translation>уже слушает (запущен в другом месте)</translation>
    </message>
    <message>
        <source>A gateway is already on the network: not starting another</source>
        <translation>Шлюз уже есть в сети: второй не запускаю</translation>
    </message>
    <message>
        <source>executable not found</source>
        <translation>программа не найдена</translation>
    </message>
    <message>
        <source>Cannot find %1 beside the application</source>
        <translation>Не нахожу %1 рядом с программой</translation>
    </message>
    <message>
        <source>start failed</source>
        <translation>запуск не удался</translation>
    </message>
    <message>
        <source>The gateway will not start: %1</source>
        <translation>Шлюз не запускается: %1</translation>
    </message>
    <message>
        <source>exited</source>
        <translation>завершён</translation>
    </message>
    <message>
        <source>exited (code %1)</source>
        <translation>завершён (код %1)</translation>
    </message>
    <message>
        <source>Gateway exited, code %1</source>
        <translation>Шлюз завершён, код %1</translation>
    </message>
    <message>
        <source>starting on %1</source>
        <translation>запускается на %1</translation>
    </message>
    <message>
        <source>Starting the gateway: %1 on port %2</source>
        <translation>Запускаю шлюз: %1 на порту %2</translation>
    </message>
    <message>
        <source>started</source>
        <translation>запущен</translation>
    </message>
    <message>
        <source>Closing the gateway</source>
        <translation>Закрываю шлюз</translation>
    </message>
    <message>
        <source>The gateway is staying up: leaving it to the other clients</source>
        <translation>Шлюз остаётся работать: оставляю его другим клиентам</translation>
    </message>
    <message>
        <source>left running</source>
        <translation>оставлен работать</translation>
    </message>
    <message>
        <source>closed</source>
        <translation>закрыт</translation>
    </message>
    <message>
        <source>running on %1</source>
        <translation>работает на %1</translation>
    </message>
    <message>
        <source>%1 is busy — receive only</source>
        <translation>%1 занят — только приём</translation>
    </message>
    <message>
        <source>running, no CAT</source>
        <translation>работает, без CAT</translation>
    </message>
</context>
<context>
    <name>decortty::app::QsoLog</name>
    <message>
        <source>A callsign is the least a contact needs to be logged</source>
        <translation>Без позывного связь в журнал не записать</translation>
    </message>
    <message>
        <source>Cannot write the log in %1</source>
        <translation>Не могу записать журнал в %1</translation>
    </message>
</context>
<context>
    <name>decortty::app::RttyEngine</name>
    <message>
        <source>Transmit ran for three minutes — stopped</source>
        <translation>Передача шла три минуты — остановлена</translation>
    </message>
    <message>
        <source>Trying the opposite polarity (%1)</source>
        <translation>Пробую обратную полярность (%1)</translation>
    </message>
    <message>
        <source>reversed</source>
        <translation>обратная</translation>
    </message>
    <message>
        <source>direct</source>
        <translation>прямая</translation>
    </message>
    <message>
        <source>Signal at %1 Hz: moving there</source>
        <translation>Сигнал на %1 Гц: перехожу туда</translation>
    </message>
    <message>
        <source>No recognisable RTTY signal in the band</source>
        <translation>В диапазоне нет узнаваемого сигнала RTTY</translation>
    </message>
    <message>
        <source>Centred on %1 Hz (%2 dB above the floor)</source>
        <translation>Настроено на %1 Гц (%2 дБ над шумами)</translation>
    </message>
    <message>
        <source>The radio is in %1: on voice modes the USB audio does not modulate. Press 'Set radio' in the DECODER panel.</source>
        <translation>Радио в режиме %1: в речевых режимах звук с USB не модулирует. Нажмите «Настроить радио» на панели ДЕКОДЕР.</translation>
    </message>
</context>
<context>
    <name>decortty::flex::FlexApiClient</name>
    <message>
        <source>The radio refused the client registration (code 0x%1)</source>
        <translation>Радио отказало в регистрации клиента (код 0x%1)</translation>
    </message>
</context>
<context>
    <name>decortty::flex::FlexDiscovery</name>
    <message>
        <source>Cannot listen on UDP port %1: %2</source>
        <translation>Не могу слушать порт UDP %1: %2</translation>
    </message>
</context>
<context>
    <name>decortty::flex::FlexRadioLink</name>
    <message>
        <source>Disconnected</source>
        <translation>Отключено</translation>
    </message>
    <message>
        <source>Connecting to %1…</source>
        <translation>Подключаюсь к %1…</translation>
    </message>
    <message>
        <source>Connected to %1</source>
        <translation>Подключено к %1</translation>
    </message>
    <message>
        <source>Could not open the audio transport</source>
        <translation>Не удалось открыть звуковой канал</translation>
    </message>
    <message>
        <source>The radio rejected the UDP port registration</source>
        <translation>Радио отклонило регистрацию порта UDP</translation>
    </message>
    <message>
        <source>Could not create the receive audio stream</source>
        <translation>Не удалось создать поток приёма звука</translation>
    </message>
    <message>
        <source>Receiving from %1</source>
        <translation>Приём от %1</translation>
    </message>
    <message>
        <source>Could not create the transmit audio stream</source>
        <translation>Не удалось создать поток передачи звука</translation>
    </message>
    <message>
        <source>Transmit is unavailable: no Opus transmit stream</source>
        <translation>Передача невозможна: нет потока Opus для передачи</translation>
    </message>
</context>
<context>
    <name>decortty::flex::FlexVitaStream</name>
    <message>
        <source>Cannot open the VITA-49 UDP socket: %1</source>
        <translation>Не могу открыть UDP-сокет VITA-49: %1</translation>
    </message>
</context>
<context>
    <name>decortty::gateway::CodecAudio</name>
    <message>
        <source>No capture device matching '%1'. Available: %2</source>
        <translation>Нет устройства записи по имени '%1'. Доступны: %2</translation>
    </message>
    <message>
        <source>%1 cannot run at %2 Hz</source>
        <translation>%1 не работает на %2 Гц</translation>
    </message>
    <message>
        <source>No playback device matching '%1' — transmit is unavailable</source>
        <translation>Нет устройства воспроизведения по имени '%1' — передача невозможна</translation>
    </message>
    <message>
        <source>Transmit audio overrun — dropped %1 ms</source>
        <translation>Переполнение звука передачи — потеряно %1 мс</translation>
    </message>
</context>
<context>
    <name>decortty::gateway::Ft991Cat</name>
    <message>
        <source>Cannot open %1: %2</source>
        <translation>Не могу открыть %1: %2</translation>
    </message>
    <message>
        <source>Radio still shows %1 — repeating the PTT command (%2)</source>
        <translation>Радио всё ещё показывает %1 — повторяю команду PTT (%2)</translation>
    </message>
    <message>
        <source>transmit</source>
        <translation>transmit</translation>
    </message>
    <message>
        <source>receive</source>
        <translation>приём</translation>
    </message>
    <message>
        <source>The FT-991A has no mode called '%1'</source>
        <translation>У FT-991A нет режима '%1'</translation>
    </message>
    <message>
        <source>CAT: wrote TX0; (%1 bytes) on %2</source>
        <translation>CAT: записан TX0; (%1 байт) на %2</translation>
    </message>
    <message>
        <source>CAT: queued TX1; on %1</source>
        <translation>CAT: TX1; поставлен в очередь на %1</translation>
    </message>
</context>
<context>
    <name>decortty::gateway::Ft991Gateway</name>
    <message>
        <source>Cannot bind UDP port %1: %2</source>
        <translation>Не могу занять порт UDP %1: %2</translation>
    </message>
    <message>
        <source>Cannot open the discovery socket: %1</source>
        <translation>Не могу открыть сокет поиска: %1</translation>
    </message>
    <message>
        <source>Audio in: %1</source>
        <translation>Звук вход: %1</translation>
    </message>
    <message>
        <source>Audio out: %1</source>
        <translation>Звук выход: %1</translation>
    </message>
    <message>
        <source>CAT on %1 at %2 baud</source>
        <translation>CAT на %1, %2 бод</translation>
    </message>
    <message>
        <source>CAT disabled — receive only, no tuning or PTT</source>
        <translation>CAT отключён — только приём, без настройки и PTT</translation>
    </message>
    <message>
        <source>Gateway listening on UDP %1</source>
        <translation>Шлюз слушает на UDP %1</translation>
    </message>
    <message>
        <source>Client %1:%2 connected</source>
        <translation>Клиент %1:%2 подключился</translation>
    </message>
    <message>
        <source>Client %1:%2 timed out</source>
        <translation>Клиент %1:%2 не отвечает</translation>
    </message>
    <message>
        <source>No clients left — dropping PTT</source>
        <translation>Клиентов не осталось — снимаю PTT</translation>
    </message>
    <message>
        <source>No transmit audio for %1 ms — dropping PTT</source>
        <translation>Нет звука передачи %1 мс — снимаю PTT</translation>
    </message>
    <message>
        <source>No client for thirty seconds: closing</source>
        <translation>Тридцать секунд без клиентов: закрываюсь</translation>
    </message>
    <message>
        <source>Shutdown requested by whoever started me</source>
        <translation>Остановку запросил тот, кто меня запустил</translation>
    </message>
    <message>
        <source>Client %1 is leaving</source>
        <translation>Клиент %1 уходит</translation>
    </message>
    <message>
        <source>PTT requested by the client: %1  (CAT %2)</source>
        <translation>Клиент запросил PTT: %1  (CAT %2)</translation>
    </message>
    <message>
        <source>TRANSMIT</source>
        <translation>ПЕРЕДАЧА</translation>
    </message>
    <message>
        <source>receive</source>
        <translation>приём</translation>
    </message>
    <message>
        <source>open</source>
        <translation>открыт</translation>
    </message>
    <message>
        <source>CLOSED</source>
        <translation>ЗАКРЫТ</translation>
    </message>
    <message>
        <source>Shutdown deferred: %1 client(s) are still using the radio</source>
        <translation>Остановка отложена: %1 клиент(ов) ещё пользуются радио</translation>
    </message>
    <message>
        <source>Transmit requested but CAT is not open — ignored</source>
        <translation>Запрошена передача, но CAT не открыт — пропущено</translation>
    </message>
    <message>
        <source>TX: %1</source>
        <translation>TX: %1</translation>
    </message>
</context>
<context>
    <name>decortty::link::GatewayLink</name>
    <message>
        <source>The gateway is not answering — retrying</source>
        <translation>Шлюз не отвечает — пробую снова</translation>
    </message>
    <message>
        <source>Disconnected</source>
        <translation>Отключено</translation>
    </message>
    <message>
        <source>Waiting for the gateway…</source>
        <translation>Жду шлюз…</translation>
    </message>
    <message>
        <source>Reconnecting to %1…</source>
        <translation>Переподключаюсь к %1…</translation>
    </message>
    <message>
        <source>Cannot open a local UDP port: %1</source>
        <translation>Не могу открыть локальный порт UDP: %1</translation>
    </message>
    <message>
        <source>Connected to %1</source>
        <translation>Подключено к %1</translation>
    </message>
    <message>
        <source>%1 — audio only, no CAT</source>
        <translation>%1 — только звук, без CAT</translation>
    </message>
</context>
<context>
    <name>decortty::link::RadioHub</name>
    <message>
        <source>Disconnected</source>
        <translation>Отключено</translation>
    </message>
    <message>
        <source>Looking for radios…</source>
        <translation>Ищу станции…</translation>
    </message>
    <message>
        <source>Radio %1 is no longer on the network</source>
        <translation>Станции %1 больше нет в сети</translation>
    </message>
    <message>
        <source>'%1' is not a valid address</source>
        <translation>'%1' — недопустимый адрес</translation>
    </message>
    <message>
        <source>Transmit is unavailable on this connection</source>
        <translation>По этому соединению передача невозможна</translation>
    </message>
</context>
</TS>