<?xml version='1.0' encoding='utf-8'?>
<TS version="2.1" language="ru" sourcelanguage="en">
<context>
    <name>BandBar</name>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="34" />
        <source>No radio connected.</source>
        <translation>Радиостанция не подключена.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="36" />
        <source>The audio comes from a sound card: the radio is not
under our control. Change band with the dial.</source>
        <translation>Звук идёт со звуковой карты: станция нам не подчиняется.
Диапазон меняйте ручкой настройки.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="37" />
        <source>The serial port is held by another program, so the
radio takes no commands. Close it and reconnect.</source>
        <translation>Последовательный порт занят другой программой, станция
не принимает команд. Закройте её и подключитесь снова.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="70" />
        <source>%1 — RTTY at %2 MHz</source>
        <translation>%1 — RTTY на %2 МГц</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="117" />
        <source>Data on the upper sideband: the mode this
decoder is written for.</source>
        <translation>Данные в верхней боковой полосе: режим, для которого
написан этот декодер.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="119" />
        <source>Data on the lower sideband. The tones come out
reversed — REV puts them back.</source>
        <translation>Данные в нижней боковой полосе. Тоны выходят перевёрнутыми
— REV возвращает их на место.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="120" />
        <source>Voice sideband. RTTY is copied just the same,
but the radio's filter is wider than it needs.</source>
        <translation>Речевая боковая полоса. RTTY принимается так же, но фильтр
станции шире, чем нужно.</translation>
    </message>
</context>
<context>
    <name>BandScale</name>
    <message>
        <location filename="../qml/DecoRTTY/components/BandScale.qml" line="230" />
        <source>Drag to move the radio; the wheel tunes by 1 kHz —
100 Hz with Shift, 10 kHz with Ctrl.</source>
        <translation>Перетаскивайте, чтобы двигать станцию; колесо настраивает по 1 кГц —
100 Гц с Shift, 10 кГц с Ctrl.</translation>
    </message>
</context>
<context>
    <name>DecoderPanel</name>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="116" />
        <source>Correction</source>
        <translation>Коррекция</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="138" />
        <source>Off</source>
        <translation>Выкл</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="146" />
        <source>Normal</source>
        <translation>Обычная</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="154" />
        <source>Deep</source>
        <translation>Глубокая</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="178" />
        <source>Unshift on space — recovers a lost FIGS/LTRS, but
breaks long figure groups such as serial numbers.</source>
        <translation>Unshift on space — спасает потерянный FIGS/LTRS,
но ломает длинные группы цифр, например
порядковые номера.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="182" />
        <source>Set radio</source>
        <translation>Настроить радио</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="191" />
        <source>Puts the radio into DIGU and narrows its filter
around the tones.</source>
        <translation>Переводит радио в DIGU и сужает его фильтр
вокруг тонов.</translation>
    </message>
</context>
<context>
    <name>FilterPanel</name>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="48" />
        <source>FILTERS</source>
        <translation>ФИЛЬТРЫ</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="64" />
        <source>Bandpass around the two tones: throws away
everything outside before the detector.</source>
        <translation>Полосовой фильтр вокруг двух тонов: отбрасывает
всё, что снаружи, ещё до детектора.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="76" />
        <source>Removes one frequency. Ctrl+click the waterfall
to drop it on the carrier that is in the way.</source>
        <translation>Убирает одну частоту. Ctrl+щелчок по водопаду
ставит её на мешающую несущую.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="88" />
        <source>Adaptive canceller: removes steady carriers by
itself. On weak signals it can eat the RTTY as
well — try it and listen.</source>
        <translation>Адаптивный подавитель: сам убирает стоячие
несущие. На слабых сигналах может съесть и сам
RTTY — попробуйте и послушайте.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="95" />
        <source>BPF width</source>
        <translation>Ширина BPF</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="115" />
        <source>FRAMING</source>
        <translation>КАДР</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="123" />
        <source>Stop</source>
        <translation>Стоп</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="150" />
        <source>Bits</source>
        <translation>Биты</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="179" />
        <source>Par.</source>
        <translation>Чёт.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="185" />
        <source>none</source>
        <translation>нет</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="186" />
        <source>even</source>
        <translation>чёт</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="187" />
        <source>odd</source>
        <translation>нечёт</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="214" />
        <source>Figures set: US has BELL and apostrophe where
ITA2 swaps the two.</source>
        <translation>Набор цифр: в US звонок и апостроф стоят там,
где ITA2 меняет их местами.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="226" />
        <source>Prints characters whose stop bit read wrong too:
a few more characters on distorted signals, some
lines of rubbish in exchange.</source>
        <translation>Печатает и знаки с неверным стоповым битом:
несколько знаков больше на искажённых сигналах, в
обмен на несколько строк мусора.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="233" />
        <source>TRANSMIT</source>
        <translation>ПЕРЕДАЧА</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="241" />
        <source>Fill</source>
        <translation>Заполн.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="247" />
        <source>off</source>
        <translation>выкл</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="260" />
        <source>What to send between characters while you
type live.</source>
        <translation>Что передавать между знаками, пока вы печатаете
вживую.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="267" />
        <source>Character wait</source>
        <translation>Пауза между знаками</translation>
    </message>
</context>
<context>
    <name>HeaderBar</name>
    <message>
        <location filename="../qml/DecoRTTY/components/HeaderBar.qml" line="162" />
        <source>Setup</source>
        <translation>Настройки</translation>
    </message>
</context>
<context>
    <name>LogDialog</name>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="36" />
        <source>LOG</source>
        <translation>ЖУРНАЛ</translation>
    </message>
    <message numerus="yes">
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="40" />
        <source>%n contact(s)</source>
        <translation><numerusform>%n связь</numerusform><numerusform>%n связи</numerusform><numerusform>%n связей</numerusform></translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="78" />
        <source>RST SENT</source>
        <translation>RST ПЕР</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="85" />
        <source>RST RCVD</source>
        <translation>RST ПРИН</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="89" />
        <source>NAME</source>
        <translation>ИМЯ</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="94" />
        <source>Log it</source>
        <translation>В журнал</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="126" />
        <source>Worked before: %1 — last on %2</source>
        <translation>Уже работали: %1 — последний раз %2</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="207" />
        <source>Export ADIF</source>
        <translation>Экспорт ADIF</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="213" />
        <source>Close</source>
        <translation>Закрыть</translation>
    </message>
</context>
<context>
    <name>Main</name>
    <message>
        <location filename="../qml/DecoRTTY/Main.qml" line="106" />
        <source>DECODER</source>
        <translation>ДЕКОДЕР</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/Main.qml" line="106" />
        <source>FILTERS</source>
        <translation>ФИЛЬТРЫ</translation>
    </message>
</context>
<context>
    <name>RadioDialog</name>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="69" />
        <source>FT-991A GATEWAY</source>
        <translation>ШЛЮЗ FT-991A</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="85" />
        <source>on</source>
        <translation>вкл</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="85" />
        <source>off</source>
        <translation>выкл</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="94" />
        <source>When on, the gateway opens at start-up and
closes with the program. Turn it off if the radio
is on another PC.</source>
        <translation>Если включено, шлюз открывается при запуске и
закрывается вместе с программой. Выключите, если
радио на другом компьютере.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="98" />
        <source>close</source>
        <translation>закрыть</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="98" />
        <source>settings</source>
        <translation>настроить</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="142" />
        <source>Audio in</source>
        <translation>Звук вход</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="160" />
        <source>Restart</source>
        <translation>Перезапуск</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="169" />
        <source>Use after changing the port or a device.</source>
        <translation>Применять после смены порта или устройства.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="174" />
        <source>Audio out</source>
        <translation>Звук выход</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="199" />
        <source>RADIOS ON THE NETWORK</source>
        <translation>СТАНЦИИ В СЕТИ</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="309" />
        <source>No radio has answered yet</source>
        <translation>Ни одна станция ещё не ответила</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="315" />
        <source>Radios announce themselves on UDP 4992.
Check the radio is on the same subnet, or enter its address below.</source>
        <translation>Станции объявляют себя по UDP 4992.
Проверьте, что радио в той же подсети, или впишите его адрес ниже.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="351" />
        <source>FROM A SOUND CARD</source>
        <translation>СО ЗВУКОВОЙ КАРТЫ</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="359" />
        <source>no frequency, no PTT — transmit on VOX</source>
        <translation>нет частоты, нет PTT — передача по VOX</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="393" />
        <source>— no transmit —</source>
        <translation>— без передачи —</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="397" />
        <source>Listen</source>
        <translation>Слушать</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="462" />
        <source>Connect</source>
        <translation>Подключить</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="474" />
        <source>Close</source>
        <translation>Закрыть</translation>
    </message>
</context>
<context>
    <name>ReceivePanel</name>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="61" />
        <source>RECEIVE</source>
        <translation>ПРИЁМ</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="90" />
        <source>Call</source>
        <translation>Позывные</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="99" />
        <source>Highlights callsigns. Click one to put it
in the HIS CALL field.</source>
        <translation>Подсвечивает позывные. Щёлкните по одному,
чтобы поставить его в поле HIS CALL.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="104" />
        <source>Follow</source>
        <translation>Следить</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="118" />
        <source>Copy</source>
        <translation>Копировать</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="130" />
        <source>Clear</source>
        <translation>Очистить</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="291" />
        <source>jump to end ↓</source>
        <translation>в конец ↓</translation>
    </message>
</context>
<context>
    <name>SetupDialog</name>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="37" />
        <source>LANGUAGE</source>
        <translation>ЯЗЫК</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="59" />
        <source>changes immediately</source>
        <translation>меняется сразу</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="74" />
        <source>STATION</source>
        <translation>СТАНЦИЯ</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="82" />
        <source>MY CALL</source>
        <translation>MY CALL</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="89" />
        <source>NAME</source>
        <translation>ИМЯ</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="95" />
        <source>QTH</source>
        <translation>QTH</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="115" />
        <source>MACROS</source>
        <translation>МАКРОСЫ</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="196" />
        <source>Restore defaults</source>
        <translation>Сбросить</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="202" />
        <source>Close</source>
        <translation>Закрыть</translation>
    </message>
</context>
<context>
    <name>StatusBar</name>
    <message>
        <location filename="../qml/DecoRTTY/components/StatusBar.qml" line="79" />
        <source>shared with %1</source>
        <translation>совместно с %1</translation>
    </message>
</context>
<context>
    <name>TransmitPanel</name>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="72" />
        <source>Type here — Enter sends the line</source>
        <translation>Пишите здесь — Enter отправляет строку</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="73" />
        <source>Connect a radio to transmit</source>
        <translation>Подключите радио, чтобы передавать</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="102" />
        <source>TRANSMITTING</source>
        <translation>ПЕРЕДАЮ</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="102" />
        <source>TRANSMIT</source>
        <translation>ПЕРЕДАЧА</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="117" />
        <source>Abort</source>
        <translation>Прервать</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="127" />
        <source>Clear</source>
        <translation>Очистить</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="199" />
        <source>High enough to drive the ALC — check the meter.</source>
        <translation>Достаточно, чтобы раскачать ALC — смотрите на прибор.</translation>
    </message>
</context>
<context>
    <name>TuningScope</name>
    <message>
        <location filename="../qml/DecoRTTY/components/TuningScope.qml" line="26" />
        <source>TUNING</source>
        <translation>НАСТРОЙКА</translation>
    </message>
</context>
<context>
    <name>WaterfallPanel</name>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="52" />
        <source>SPECTRUM</source>
        <translation>СПЕКТР</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="72" />
        <source>VIEW</source>
        <translation>ВИД</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="81" />
        <source>Zoom, palette, brightness and speed of the
waterfall.</source>
        <translation>Масштаб, палитра, яркость и скорость
водопада.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="87" />
        <source>CENTRE</source>
        <translation>ЦЕНТР</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="95" />
        <source>Finds the tone pair in the band and moves the
tuning onto it. Once, now.</source>
        <translation>Находит пару тонов в диапазоне и переводит на
них настройку. Один раз, сейчас.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="108" />
        <source>Searches by itself whenever nothing is being
copied, and tries the polarity too. While the
decoder is locked it touches nothing.</source>
        <translation>Ищет сам, пока ничего не принимается, и пробует
также полярность. Пока декодер держит сигнал, он
ничего не трогает.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="121" />
        <source>Follows the drift of the signal already locked,
within a few tens of hertz.</source>
        <translation>Следит за уходом уже пойманного сигнала в
пределах нескольких десятков герц.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="181" />
        <source>band</source>
        <translation>диапазон</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="190" />
        <source>How much band to show. Narrow around the tones
shows the individual bits; wide shows who is calling.</source>
        <translation>Сколько диапазона показывать. Узко вокруг тонов
видны отдельные биты; широко видно, кто зовёт.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="194" />
        <source>DECO</source>
        <translation>DECO</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="194" />
        <source>GREY</source>
        <translation>СЕРЫЙ</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="194" />
        <source>FIRE</source>
        <translation>ОГОНЬ</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="203" />
        <source>speed %1x</source>
        <translation>скор. %1x</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="210" />
        <source>How fast it scrolls. Slower keeps a longer
stretch of band in view.</source>
        <translation>Как быстро он бежит. Медленнее — на экране
остаётся более длинный кусок диапазона.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="215" />
        <source>light</source>
        <translation>яркость</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="230" />
        <source>contrast</source>
        <translation>контраст</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="245" />
        <source>floor %1 dB</source>
        <translation>шумы %1 дБ</translation>
    </message>
</context>
<context>
    <name>decortty::app::GatewaySupervisor</name>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="24" />
        <source>not started</source>
        <translation>не запущен</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="121" />
        <source>disabled</source>
        <translation>отключён</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="131" />
        <source>already listening (started elsewhere)</source>
        <translation>уже слушает (запущен в другом месте)</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="132" />
        <source>A gateway is already on the network: not starting another</source>
        <translation>Шлюз уже есть в сети: второй не запускаю</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="138" />
        <source>executable not found</source>
        <translation>программа не найдена</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="139" />
        <source>Cannot find %1 beside the application</source>
        <translation>Не нахожу %1 рядом с программой</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="164" />
        <source>start failed</source>
        <translation>запуск не удался</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="165" />
        <source>The gateway will not start: %1</source>
        <translation>Шлюз не запускается: %1</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="172" />
        <source>exited</source>
        <translation>завершён</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="172" />
        <source>exited (code %1)</source>
        <translation>завершён (код %1)</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="174" />
        <source>Gateway exited, code %1</source>
        <translation>Шлюз завершён, код %1</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="187" />
        <source>starting on %1</source>
        <translation>запускается на %1</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="188" />
        <source>Starting the gateway: %1 on port %2</source>
        <translation>Запускаю шлюз: %1 на порту %2</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="194" />
        <source>started</source>
        <translation>запущен</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="216" />
        <source>Closing the gateway</source>
        <translation>Закрываю шлюз</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="235" />
        <source>The gateway is staying up: leaving it to the other clients</source>
        <translation>Шлюз остаётся работать: оставляю его другим клиентам</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="239" />
        <source>left running</source>
        <translation>оставлен работать</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="244" />
        <source>closed</source>
        <translation>закрыт</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="271" />
        <source>running on %1</source>
        <translation>работает на %1</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="273" />
        <source>%1 is busy — receive only</source>
        <translation>%1 занят — только приём</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="275" />
        <source>running, no CAT</source>
        <translation>работает, без CAT</translation>
    </message>
</context>
<context>
    <name>decortty::app::QsoLog</name>
    <message>
        <location filename="../src/app/QsoLog.cpp" line="75" />
        <source>A callsign is the least a contact needs to be logged</source>
        <translation>Без позывного связь в журнал не записать</translation>
    </message>
    <message>
        <location filename="../src/app/QsoLog.cpp" line="272" />
        <source>Cannot write the log in %1</source>
        <translation>Не могу записать журнал в %1</translation>
    </message>
</context>
<context>
    <name>decortty::app::RttyEngine</name>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="58" />
        <source>Transmit ran for three minutes — stopped</source>
        <translation>Передача шла три минуты — остановлена</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="97" />
        <source>Trying the opposite polarity (%1)</source>
        <translation>Пробую обратную полярность (%1)</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="98" />
        <source>reversed</source>
        <translation>обратная</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="98" />
        <source>direct</source>
        <translation>прямая</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="99" />
        <source>Signal at %1 Hz: moving there</source>
        <translation>Сигнал на %1 Гц: перехожу туда</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="230" />
        <source>No recognisable RTTY signal in the band</source>
        <translation>В диапазоне нет узнаваемого сигнала RTTY</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="236" />
        <source>Centred on %1 Hz (%2 dB above the floor)</source>
        <translation>Настроено на %1 Гц (%2 дБ над шумами)</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="592" />
        <source>The radio is in %1: on voice modes the USB audio does not modulate. Press 'Set radio' in the DECODER panel.</source>
        <translation>Радио в режиме %1: в речевых режимах звук с USB не модулирует. Нажмите «Настроить радио» на панели ДЕКОДЕР.</translation>
    </message>
</context>
<context>
    <name>decortty::flex::FlexApiClient</name>
    <message>
        <location filename="../src/flex/FlexApiClient.cpp" line="255" />
        <source>The radio refused the client registration (code 0x%1)</source>
        <translation>Радио отказало в регистрации клиента (код 0x%1)</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexApiClient.cpp" line="337" />
        <source>another station</source>
        <translation>другая станция</translation>
    </message>
</context>
<context>
    <name>decortty::flex::FlexDiscovery</name>
    <message>
        <location filename="../src/flex/FlexDiscovery.cpp" line="35" />
        <source>Cannot listen on UDP port %1: %2</source>
        <translation>Не могу слушать порт UDP %1: %2</translation>
    </message>
</context>
<context>
    <name>decortty::flex::FlexRadioLink</name>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="20" />
        <source>Sharing %1 with %2</source>
        <translation>%1 совместно с %2</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="36" />
        <location filename="../src/flex/FlexRadioLink.cpp" line="109" />
        <source>Disconnected</source>
        <translation>Отключено</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="61" />
        <location filename="../src/flex/FlexRadioLink.cpp" line="73" />
        <source>Connecting to %1…</source>
        <translation>Подключаюсь к %1…</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="87" />
        <source>Connected to %1</source>
        <translation>Подключено к %1</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="103" />
        <source>Reconnecting to %1…</source>
        <translation>Переподключаюсь к %1…</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="117" />
        <source>Could not open the audio transport</source>
        <translation>Не удалось открыть звуковой канал</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="127" />
        <source>The radio rejected the UDP port registration</source>
        <translation>Радио отклонило регистрацию порта UDP</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="146" />
        <source>The radio will not give audio to a bound client — reconnecting as a GUI station</source>
        <translation>Радио не даёт звук привязанному клиенту — переподключаюсь как станция GUI</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="153" />
        <source>Could not create the receive audio stream</source>
        <translation>Не удалось создать поток приёма звука</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="158" />
        <source>Receiving from %1</source>
        <translation>Приём от %1</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="166" />
        <source>Could not create the transmit audio stream</source>
        <translation>Не удалось создать поток передачи звука</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="343" />
        <source>Transmit is unavailable: no Opus transmit stream</source>
        <translation>Передача невозможна: нет потока Opus для передачи</translation>
    </message>
</context>
<context>
    <name>decortty::flex::FlexVitaStream</name>
    <message>
        <location filename="../src/flex/FlexVitaStream.cpp" line="21" />
        <source>Cannot open the VITA-49 UDP socket: %1</source>
        <translation>Не могу открыть UDP-сокет VITA-49: %1</translation>
    </message>
</context>
<context>
    <name>decortty::gateway::CodecAudio</name>
    <message>
        <location filename="../src/gateway/CodecAudio.cpp" line="72" />
        <source>No capture device matching '%1'. Available: %2</source>
        <translation>Нет устройства записи по имени '%1'. Доступны: %2</translation>
    </message>
    <message>
        <location filename="../src/gateway/CodecAudio.cpp" line="83" />
        <source>%1 cannot run at %2 Hz</source>
        <translation>%1 не работает на %2 Гц</translation>
    </message>
    <message>
        <location filename="../src/gateway/CodecAudio.cpp" line="116" />
        <source>No playback device matching '%1' — transmit is unavailable</source>
        <translation>Нет устройства воспроизведения по имени '%1' — передача невозможна</translation>
    </message>
    <message>
        <location filename="../src/gateway/CodecAudio.cpp" line="215" />
        <source>Transmit audio overrun — dropped %1 ms</source>
        <translation>Переполнение звука передачи — потеряно %1 мс</translation>
    </message>
</context>
<context>
    <name>decortty::gateway::Ft991Cat</name>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="120" />
        <source>Cannot open %1: %2</source>
        <translation>Не могу открыть %1: %2</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="232" />
        <source>Radio still shows %1 — repeating the PTT command (%2)</source>
        <translation>Радио всё ещё показывает %1 — повторяю команду PTT (%2)</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="233" />
        <source>transmit</source>
        <translation>transmit</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="233" />
        <source>receive</source>
        <translation>приём</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="336" />
        <source>The FT-991A has no mode called '%1'</source>
        <translation>У FT-991A нет режима '%1'</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="358" />
        <source>CAT: wrote TX0; (%1 bytes) on %2</source>
        <translation>CAT: записан TX0; (%1 байт) на %2</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="363" />
        <source>CAT: queued TX1; on %1</source>
        <translation>CAT: TX1; поставлен в очередь на %1</translation>
    </message>
</context>
<context>
    <name>decortty::gateway::Ft991Gateway</name>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="102" />
        <source>Cannot bind UDP port %1: %2</source>
        <translation>Не могу занять порт UDP %1: %2</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="110" />
        <source>Cannot open the discovery socket: %1</source>
        <translation>Не могу открыть сокет поиска: %1</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="120" />
        <source>Audio in: %1</source>
        <translation>Звук вход: %1</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="122" />
        <source>Audio out: %1</source>
        <translation>Звук выход: %1</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="156" />
        <source>CAT on %1 at %2 baud</source>
        <translation>CAT на %1, %2 бод</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="132" />
        <source>CAT disabled — receive only, no tuning or PTT</source>
        <translation>CAT отключён — только приём, без настройки и PTT</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="140" />
        <source>Gateway listening on UDP %1</source>
        <translation>Шлюз слушает на UDP %1</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="253" />
        <source>Client %1:%2 connected</source>
        <translation>Клиент %1:%2 подключился</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="264" />
        <source>Client %1:%2 timed out</source>
        <translation>Клиент %1:%2 не отвечает</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="273" />
        <source>No clients left — dropping PTT</source>
        <translation>Клиентов не осталось — снимаю PTT</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="284" />
        <source>No transmit audio for %1 ms — dropping PTT</source>
        <translation>Нет звука передачи %1 мс — снимаю PTT</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="298" />
        <source>No client for thirty seconds: closing</source>
        <translation>Тридцать секунд без клиентов: закрываюсь</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="394" />
        <source>Shutdown requested by whoever started me</source>
        <translation>Остановку запросил тот, кто меня запустил</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="410" />
        <source>Client %1 is leaving</source>
        <translation>Клиент %1 уходит</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="437" />
        <source>PTT requested by the client: %1  (CAT %2)</source>
        <translation>Клиент запросил PTT: %1  (CAT %2)</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="438" />
        <source>TRANSMIT</source>
        <translation>ПЕРЕДАЧА</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="438" />
        <source>receive</source>
        <translation>приём</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="439" />
        <source>open</source>
        <translation>открыт</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="439" />
        <source>CLOSED</source>
        <translation>ЗАКРЫТ</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="517" />
        <source>Shutdown deferred: %1 client(s) are still using the radio</source>
        <translation>Остановка отложена: %1 клиент(ов) ещё пользуются радио</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="443" />
        <source>Transmit requested but CAT is not open — ignored</source>
        <translation>Запрошена передача, но CAT не открыт — пропущено</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="463" />
        <source>TX: %1</source>
        <translation>TX: %1</translation>
    </message>
</context>
<context>
    <name>decortty::link::GatewayLink</name>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="40" />
        <source>The gateway is not answering — retrying</source>
        <translation>Шлюз не отвечает — пробую снова</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="57" />
        <location filename="../src/link/GatewayLink.cpp" line="150" />
        <source>Disconnected</source>
        <translation>Отключено</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="47" />
        <source>Waiting for the gateway…</source>
        <translation>Жду шлюз…</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="64" />
        <source>Reconnecting to %1…</source>
        <translation>Переподключаюсь к %1…</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="93" />
        <source>Cannot open a local UDP port: %1</source>
        <translation>Не могу открыть локальный порт UDP: %1</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="114" />
        <location filename="../src/link/GatewayLink.cpp" line="267" />
        <source>Connected to %1</source>
        <translation>Подключено к %1</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="268" />
        <source>%1 — audio only, no CAT</source>
        <translation>%1 — только звук, без CAT</translation>
    </message>
</context>
<context>
    <name>decortty::link::RadioHub</name>
    <message>
        <location filename="../src/link/RadioHub.cpp" line="11" />
        <location filename="../src/link/RadioHub.cpp" line="205" />
        <source>Disconnected</source>
        <translation>Отключено</translation>
    </message>
    <message>
        <location filename="../src/link/RadioHub.cpp" line="88" />
        <location filename="../src/link/RadioHub.cpp" line="205" />
        <source>Looking for radios…</source>
        <translation>Ищу станции…</translation>
    </message>
    <message>
        <location filename="../src/link/RadioHub.cpp" line="151" />
        <source>Radio %1 is no longer on the network</source>
        <translation>Станции %1 больше нет в сети</translation>
    </message>
    <message>
        <location filename="../src/link/RadioHub.cpp" line="158" />
        <source>'%1' is not a valid address</source>
        <translation>'%1' — недопустимый адрес</translation>
    </message>
    <message>
        <location filename="../src/link/RadioHub.cpp" line="248" />
        <source>Transmit is unavailable on this connection</source>
        <translation>По этому соединению передача невозможна</translation>
    </message>
</context>
<context>
    <name>decortty::link::SoundCardLink</name>
    <message>
        <location filename="../src/link/SoundCardLink.cpp" line="40" />
        <source>Cannot open the sound card</source>
        <translation>Не могу открыть звуковую карту</translation>
    </message>
    <message>
        <location filename="../src/link/SoundCardLink.cpp" line="46" />
        <source>Listening to %1</source>
        <translation>Слушаю %1</translation>
    </message>
    <message>
        <location filename="../src/link/SoundCardLink.cpp" line="47" />
        <source>Listening to %1 — receive only</source>
        <translation>Слушаю %1 — только приём</translation>
    </message>
    <message>
        <location filename="../src/link/SoundCardLink.cpp" line="58" />
        <source>Disconnected</source>
        <translation>Отключено</translation>
    </message>
</context>
</TS>