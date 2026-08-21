<?xml version='1.0' encoding='utf-8'?>
<TS version="2.1" language="hu" sourcelanguage="en">
<context>
    <name>BandBar</name>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="34" />
        <source>No radio connected.</source>
        <translation>Nincs csatlakoztatott rádió.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="36" />
        <source>The audio comes from a sound card: the radio is not
under our control. Change band with the dial.</source>
        <translation>A hang egy hangkártyáról jön: a rádió nincs a kezünkben.
A sávot a gombbal kell váltani.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="37" />
        <source>The serial port is held by another program, so the
radio takes no commands. Close it and reconnect.</source>
        <translation>A soros portot egy másik program tartja, a rádió nem fogad
parancsot. Zárd be, és csatlakozz újra.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="70" />
        <source>%1 — RTTY at %2 MHz</source>
        <translation>%1 — RTTY %2 MHz-en</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="117" />
        <source>Data on the upper sideband: the mode this
decoder is written for.</source>
        <translation>Adat a felső oldalsávon: ez az az üzemmód, amire ez a
dekóder készült.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="119" />
        <source>Data on the lower sideband. The tones come out
reversed — REV puts them back.</source>
        <translation>Adat az alsó oldalsávon. A hangok fordítva jönnek ki
— a REV visszafordítja őket.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="120" />
        <source>Voice sideband. RTTY is copied just the same,
but the radio's filter is wider than it needs.</source>
        <translation>A fónia oldalsávja. Az RTTY ugyanúgy másolható, de a rádió
szűrője szélesebb a kelleténél.</translation>
    </message>
</context>
<context>
    <name>BandScale</name>
    <message>
        <location filename="../qml/DecoRTTY/components/BandScale.qml" line="230" />
        <source>Drag to move the radio; the wheel tunes by 1 kHz —
100 Hz with Shift, 10 kHz with Ctrl.</source>
        <translation>Húzással mozgatod a rádiót; a görgő 1 kHz-enként hangol —
100 Hz Shifttel, 10 kHz Ctrllel.</translation>
    </message>
</context>
<context>
    <name>DecoderPanel</name>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="116" />
        <source>Correction</source>
        <translation>Javítás</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="138" />
        <source>Off</source>
        <translation>Ki</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="146" />
        <source>Normal</source>
        <translation>Normál</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="154" />
        <source>Deep</source>
        <translation>Mély</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="178" />
        <source>Unshift on space — recovers a lost FIGS/LTRS, but
breaks long figure groups such as serial numbers.</source>
        <translation>Unshift on space — megmenti az elveszett
FIGS/LTRS-t, de széttöri a hosszú számcsoportokat,
például a sorszámokat.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="182" />
        <source>Set radio</source>
        <translation>Rádió beállítása</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="191" />
        <source>Puts the radio into DIGU and narrows its filter
around the tones.</source>
        <translation>DIGU-ra állítja a rádiót, és a hangok köré
szűkíti a szűrőjét.</translation>
    </message>
</context>
<context>
    <name>FilterPanel</name>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="48" />
        <source>FILTERS</source>
        <translation>SZŰRŐK</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="64" />
        <source>Bandpass around the two tones: throws away
everything outside before the detector.</source>
        <translation>Sáváteresztő a két hang körül: mindent eldob,
ami kívül esik, még a detektor előtt.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="76" />
        <source>Removes one frequency. Ctrl+click the waterfall
to drop it on the carrier that is in the way.</source>
        <translation>Kitöröl egy frekvenciát. Ctrl+kattintás a
vízesésen ráteszi a zavaró vivőre.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="88" />
        <source>Adaptive canceller: removes steady carriers by
itself. On weak signals it can eat the RTTY as
well — try it and listen.</source>
        <translation>Adaptív kioltó: magától eltünteti az álló
vivőket. Gyenge jelnél az RTTY-t is megeheti —
próbáld ki és hallgasd.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="95" />
        <source>BPF width</source>
        <translation>BPF szélesség</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="115" />
        <source>FRAMING</source>
        <translation>KERET</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="123" />
        <source>Stop</source>
        <translation>Stop</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="150" />
        <source>Bits</source>
        <translation>Bit</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="179" />
        <source>Par.</source>
        <translation>Par.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="185" />
        <source>none</source>
        <translation>nincs</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="186" />
        <source>even</source>
        <translation>páros</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="187" />
        <source>odd</source>
        <translation>páratlan</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="214" />
        <source>Figures set: US has BELL and apostrophe where
ITA2 swaps the two.</source>
        <translation>Számkészlet: az US-ben a BELL és az aposztróf
ott van, ahol az ITA2 felcseréli a kettőt.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="226" />
        <source>Prints characters whose stop bit read wrong too:
a few more characters on distorted signals, some
lines of rubbish in exchange.</source>
        <translation>Kiírja a rossz stopbites karaktereket is:
néhány karakterrel több a torz jeleknél, cserébe
néhány sor szemét.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="233" />
        <source>TRANSMIT</source>
        <translation>ADÁS</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="241" />
        <source>Fill</source>
        <translation>Kitöltés</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="247" />
        <source>off</source>
        <translation>ki</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="260" />
        <source>What to send between characters while you
type live.</source>
        <translation>Mit küldjön a karakterek között, amíg élőben
gépelsz.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="267" />
        <source>Character wait</source>
        <translation>Karakterszünet</translation>
    </message>
</context>
<context>
    <name>HeaderBar</name>
    <message>
        <location filename="../qml/DecoRTTY/components/HeaderBar.qml" line="162" />
        <source>Setup</source>
        <translation>Beállítások</translation>
    </message>
</context>
<context>
    <name>LogDialog</name>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="36" />
        <source>LOG</source>
        <translation>NAPLÓ</translation>
    </message>
    <message numerus="yes">
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="40" />
        <source>%n contact(s)</source>
        <translation><numerusform>%n összeköttetés</numerusform></translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="78" />
        <source>RST SENT</source>
        <translation>ADOTT RST</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="85" />
        <source>RST RCVD</source>
        <translation>KAPOTT RST</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="89" />
        <source>NAME</source>
        <translation>NÉV</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="94" />
        <source>Log it</source>
        <translation>Naplózás</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="126" />
        <source>Worked before: %1 — last on %2</source>
        <translation>Már megvolt: %1 — utoljára %2</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="207" />
        <source>Export ADIF</source>
        <translation>ADIF mentése</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="213" />
        <source>Close</source>
        <translation>Bezár</translation>
    </message>
</context>
<context>
    <name>Main</name>
    <message>
        <location filename="../qml/DecoRTTY/Main.qml" line="106" />
        <source>DECODER</source>
        <translation>DEKÓDER</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/Main.qml" line="106" />
        <source>FILTERS</source>
        <translation>SZŰRŐK</translation>
    </message>
</context>
<context>
    <name>RadioDialog</name>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="69" />
        <source>FT-991A GATEWAY</source>
        <translation>FT-991A ÁTJÁRÓ</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="85" />
        <source>on</source>
        <translation>be</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="85" />
        <source>off</source>
        <translation>ki</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="94" />
        <source>When on, the gateway opens at start-up and
closes with the program. Turn it off if the radio
is on another PC.</source>
        <translation>Ha be van kapcsolva, az átjáró indításkor
megnyílik és a programmal együtt zár. Kapcsold ki,
ha a rádió másik gépen van.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="98" />
        <source>close</source>
        <translation>bezár</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="98" />
        <source>settings</source>
        <translation>beállít</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="142" />
        <source>Audio in</source>
        <translation>Hang be</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="160" />
        <source>Restart</source>
        <translation>Újraindítás</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="169" />
        <source>Use after changing the port or a device.</source>
        <translation>Port vagy eszköz cseréje után használd.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="174" />
        <source>Audio out</source>
        <translation>Hang ki</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="199" />
        <source>RADIOS ON THE NETWORK</source>
        <translation>RÁDIÓK A HÁLÓZATON</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="309" />
        <source>No radio has answered yet</source>
        <translation>Még egyetlen rádió sem válaszolt</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="315" />
        <source>Radios announce themselves on UDP 4992.
Check the radio is on the same subnet, or enter its address below.</source>
        <translation>A rádiók az UDP 4992 porton jelentkeznek.
Ellenőrizd, hogy a rádió ugyanazon az alhálózaton van-e, vagy írd be alább a címét.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="351" />
        <source>FROM A SOUND CARD</source>
        <translation>HANGKÁRTYÁRÓL</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="359" />
        <source>no frequency, no PTT — transmit on VOX</source>
        <translation>nincs frekvencia, nincs PTT — VOX-szal adunk</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="393" />
        <source>— no transmit —</source>
        <translation>— nincs adás —</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="397" />
        <source>Listen</source>
        <translation>Hallgatás</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="462" />
        <source>Connect</source>
        <translation>Kapcsolódás</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="474" />
        <source>Close</source>
        <translation>Bezár</translation>
    </message>
</context>
<context>
    <name>ReceivePanel</name>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="61" />
        <source>RECEIVE</source>
        <translation>VÉTEL</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="90" />
        <source>Call</source>
        <translation>Hívójelek</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="99" />
        <source>Highlights callsigns. Click one to put it
in the HIS CALL field.</source>
        <translation>Kiemeli a hívójeleket. Kattints egyre, hogy a
HIS CALL mezőbe kerüljön.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="104" />
        <source>Follow</source>
        <translation>Követés</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="118" />
        <source>Copy</source>
        <translation>Másol</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="130" />
        <source>Clear</source>
        <translation>Törlés</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="291" />
        <source>jump to end ↓</source>
        <translation>a végére ↓</translation>
    </message>
</context>
<context>
    <name>SetupDialog</name>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="37" />
        <source>LANGUAGE</source>
        <translation>NYELV</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="59" />
        <source>changes immediately</source>
        <translation>azonnal érvényes</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="74" />
        <source>STATION</source>
        <translation>ÁLLOMÁS</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="82" />
        <source>MY CALL</source>
        <translation>MY CALL</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="89" />
        <source>NAME</source>
        <translation>NÉV</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="95" />
        <source>QTH</source>
        <translation>QTH</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="115" />
        <source>MACROS</source>
        <translation>MAKRÓK</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="196" />
        <source>Restore defaults</source>
        <translation>Alaphelyzet</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="202" />
        <source>Close</source>
        <translation>Bezár</translation>
    </message>
</context>
<context>
    <name>StatusBar</name>
    <message>
        <location filename="../qml/DecoRTTY/components/StatusBar.qml" line="79" />
        <source>shared with %1</source>
        <translation>megosztva vele: %1</translation>
    </message>
</context>
<context>
    <name>TransmitPanel</name>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="72" />
        <source>Type here — Enter sends the line</source>
        <translation>Ide írj — az Enter elküldi a sort</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="73" />
        <source>Connect a radio to transmit</source>
        <translation>Csatlakoztass rádiót az adáshoz</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="102" />
        <source>TRANSMITTING</source>
        <translation>ADÁS ALATT</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="102" />
        <source>TRANSMIT</source>
        <translation>ADÁS</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="117" />
        <source>Abort</source>
        <translation>Megszakít</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="127" />
        <source>Clear</source>
        <translation>Törlés</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="199" />
        <source>High enough to drive the ALC — check the meter.</source>
        <translation>Elég magas az ALC vezérléséhez — nézd a műszert.</translation>
    </message>
</context>
<context>
    <name>TuningScope</name>
    <message>
        <location filename="../qml/DecoRTTY/components/TuningScope.qml" line="26" />
        <source>TUNING</source>
        <translation>HANGOLÁS</translation>
    </message>
</context>
<context>
    <name>WaterfallPanel</name>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="52" />
        <source>SPECTRUM</source>
        <translation>SPEKTRUM</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="72" />
        <source>VIEW</source>
        <translation>NÉZET</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="81" />
        <source>Zoom, palette, brightness and speed of the
waterfall.</source>
        <translation>A vízesés nagyítása, palettája, fényereje és
sebessége.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="87" />
        <source>CENTRE</source>
        <translation>KÖZÉPRE</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="95" />
        <source>Finds the tone pair in the band and moves the
tuning onto it. Once, now.</source>
        <translation>Megkeresi a hangpárt a sávban, és ráviszi a
hangolást. Egyszer, most.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="108" />
        <source>Searches by itself whenever nothing is being
copied, and tries the polarity too. While the
decoder is locked it touches nothing.</source>
        <translation>Magától keres, amíg semmit sem másolunk, és a
polaritást is kipróbálja. Amíg a dekóder
rákapaszkodott, semmihez sem nyúl.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="121" />
        <source>Follows the drift of the signal already locked,
within a few tens of hertz.</source>
        <translation>Követi a már befogott jel elcsúszását, néhány
tíz hertzen belül.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="181" />
        <source>band</source>
        <translation>sáv</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="190" />
        <source>How much band to show. Narrow around the tones
shows the individual bits; wide shows who is calling.</source>
        <translation>Mennyi sávot mutat. Szűken a hangok körül az
egyes bitek látszanak; szélesen az, ki hív.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="194" />
        <source>DECO</source>
        <translation>DECO</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="194" />
        <source>GREY</source>
        <translation>SZÜRKE</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="194" />
        <source>FIRE</source>
        <translation>TŰZ</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="203" />
        <source>speed %1x</source>
        <translation>seb. %1x</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="210" />
        <source>How fast it scrolls. Slower keeps a longer
stretch of band in view.</source>
        <translation>Milyen gyorsan gördül. Lassabban hosszabb
sávszakasz marad szem előtt.</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="215" />
        <source>light</source>
        <translation>fény</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="230" />
        <source>contrast</source>
        <translation>kontraszt</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="245" />
        <source>floor %1 dB</source>
        <translation>zajszint %1 dB</translation>
    </message>
</context>
<context>
    <name>decortty::app::GatewaySupervisor</name>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="24" />
        <source>not started</source>
        <translation>nincs elindítva</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="121" />
        <source>disabled</source>
        <translation>kikapcsolva</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="131" />
        <source>already listening (started elsewhere)</source>
        <translation>már figyel (máshol indult)</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="132" />
        <source>A gateway is already on the network: not starting another</source>
        <translation>Már van átjáró a hálózaton: nem indítok másikat</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="138" />
        <source>executable not found</source>
        <translation>a program nem található</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="139" />
        <source>Cannot find %1 beside the application</source>
        <translation>Nem találom a(z) %1 fájlt az alkalmazás mellett</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="164" />
        <source>start failed</source>
        <translation>az indítás nem sikerült</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="165" />
        <source>The gateway will not start: %1</source>
        <translation>Az átjáró nem indul: %1</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="172" />
        <source>exited</source>
        <translation>leállt</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="172" />
        <source>exited (code %1)</source>
        <translation>leállt (%1 kód)</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="174" />
        <source>Gateway exited, code %1</source>
        <translation>Az átjáró leállt, kód: %1</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="187" />
        <source>starting on %1</source>
        <translation>indul ezen: %1</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="188" />
        <source>Starting the gateway: %1 on port %2</source>
        <translation>Indítom az átjárót: %1 a(z) %2 porton</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="194" />
        <source>started</source>
        <translation>elindult</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="216" />
        <source>Closing the gateway</source>
        <translation>Bezárom az átjárót</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="235" />
        <source>The gateway is staying up: leaving it to the other clients</source>
        <translation>Az átjáró tovább működik: a többi kliensre hagyom</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="239" />
        <source>left running</source>
        <translation>működni hagyva</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="244" />
        <source>closed</source>
        <translation>bezárva</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="271" />
        <source>running on %1</source>
        <translation>működik ezen: %1</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="273" />
        <source>%1 is busy — receive only</source>
        <translation>A(z) %1 foglalt — csak vétel</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="275" />
        <source>running, no CAT</source>
        <translation>működik, CAT nélkül</translation>
    </message>
</context>
<context>
    <name>decortty::app::QsoLog</name>
    <message>
        <location filename="../src/app/QsoLog.cpp" line="75" />
        <source>A callsign is the least a contact needs to be logged</source>
        <translation>Hívójel nélkül nem lehet összeköttetést naplózni</translation>
    </message>
    <message>
        <location filename="../src/app/QsoLog.cpp" line="272" />
        <source>Cannot write the log in %1</source>
        <translation>Nem tudom írni a naplót ide: %1</translation>
    </message>
</context>
<context>
    <name>decortty::app::RttyEngine</name>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="58" />
        <source>Transmit ran for three minutes — stopped</source>
        <translation>Az adás három percig tartott — leállítva</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="97" />
        <source>Trying the opposite polarity (%1)</source>
        <translation>Kipróbálom az ellenkező polaritást (%1)</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="98" />
        <source>reversed</source>
        <translation>fordított</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="98" />
        <source>direct</source>
        <translation>egyenes</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="99" />
        <source>Signal at %1 Hz: moving there</source>
        <translation>Jel %1 Hz-en: odamegyek</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="230" />
        <source>No recognisable RTTY signal in the band</source>
        <translation>Nincs felismerhető RTTY-jel a sávban</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="236" />
        <source>Centred on %1 Hz (%2 dB above the floor)</source>
        <translation>Középre állítva %1 Hz-en (%2 dB-lel a zajszint felett)</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="592" />
        <source>The radio is in %1: on voice modes the USB audio does not modulate. Press 'Set radio' in the DECODER panel.</source>
        <translation>A rádió %1 állásban van: beszédüzemmódokban az USB hangja nem modulál. Nyomd meg a 'Rádió beállítása' gombot a DEKÓDER panelen.</translation>
    </message>
</context>
<context>
    <name>decortty::flex::FlexApiClient</name>
    <message>
        <location filename="../src/flex/FlexApiClient.cpp" line="255" />
        <source>The radio refused the client registration (code 0x%1)</source>
        <translation>A rádió elutasította a kliens bejelentkezését (kód: 0x%1)</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexApiClient.cpp" line="337" />
        <source>another station</source>
        <translation>egy másik állomás</translation>
    </message>
</context>
<context>
    <name>decortty::flex::FlexDiscovery</name>
    <message>
        <location filename="../src/flex/FlexDiscovery.cpp" line="35" />
        <source>Cannot listen on UDP port %1: %2</source>
        <translation>Nem tudok figyelni a(z) %1 UDP porton: %2</translation>
    </message>
</context>
<context>
    <name>decortty::flex::FlexRadioLink</name>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="20" />
        <source>Sharing %1 with %2</source>
        <translation>%1 megosztva vele: %2</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="36" />
        <location filename="../src/flex/FlexRadioLink.cpp" line="109" />
        <source>Disconnected</source>
        <translation>Szétkapcsolva</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="61" />
        <location filename="../src/flex/FlexRadioLink.cpp" line="73" />
        <source>Connecting to %1…</source>
        <translation>Kapcsolódás ehhez: %1…</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="87" />
        <source>Connected to %1</source>
        <translation>Kapcsolódva ehhez: %1</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="103" />
        <source>Reconnecting to %1…</source>
        <translation>Újrakapcsolódás ehhez: %1…</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="117" />
        <source>Could not open the audio transport</source>
        <translation>Nem sikerült megnyitni a hangátvitelt</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="127" />
        <source>The radio rejected the UDP port registration</source>
        <translation>A rádió elutasította az UDP port bejelentését</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="146" />
        <source>The radio will not give audio to a bound client — reconnecting as a GUI station</source>
        <translation>A rádió nem ad hangot kötött kliensnek — újracsatlakozom GUI állomásként</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="153" />
        <source>Could not create the receive audio stream</source>
        <translation>Nem sikerült létrehozni a vételi hangfolyamot</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="158" />
        <source>Receiving from %1</source>
        <translation>Vétel innen: %1</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="166" />
        <source>Could not create the transmit audio stream</source>
        <translation>Nem sikerült létrehozni az adási hangfolyamot</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="343" />
        <source>Transmit is unavailable: no Opus transmit stream</source>
        <translation>Nem lehet adni: nincs Opus adásfolyam</translation>
    </message>
</context>
<context>
    <name>decortty::flex::FlexVitaStream</name>
    <message>
        <location filename="../src/flex/FlexVitaStream.cpp" line="21" />
        <source>Cannot open the VITA-49 UDP socket: %1</source>
        <translation>Nem tudom megnyitni a VITA-49 UDP foglalatot: %1</translation>
    </message>
</context>
<context>
    <name>decortty::gateway::CodecAudio</name>
    <message>
        <location filename="../src/gateway/CodecAudio.cpp" line="72" />
        <source>No capture device matching '%1'. Available: %2</source>
        <translation>Nincs '%1' nevű felvevőeszköz. Elérhetők: %2</translation>
    </message>
    <message>
        <location filename="../src/gateway/CodecAudio.cpp" line="83" />
        <source>%1 cannot run at %2 Hz</source>
        <translation>A(z) %1 nem tud %2 Hz-en működni</translation>
    </message>
    <message>
        <location filename="../src/gateway/CodecAudio.cpp" line="116" />
        <source>No playback device matching '%1' — transmit is unavailable</source>
        <translation>Nincs '%1' nevű lejátszóeszköz — nem lehet adni</translation>
    </message>
    <message>
        <location filename="../src/gateway/CodecAudio.cpp" line="215" />
        <source>Transmit audio overrun — dropped %1 ms</source>
        <translation>Az adáshang túlcsordult — %1 ms elveszett</translation>
    </message>
</context>
<context>
    <name>decortty::gateway::Ft991Cat</name>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="120" />
        <source>Cannot open %1: %2</source>
        <translation>Nem tudom megnyitni: %1: %2</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="232" />
        <source>Radio still shows %1 — repeating the PTT command (%2)</source>
        <translation>A rádió még mindig %1 állapotot mutat — megismétlem a PTT parancsot (%2)</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="233" />
        <source>transmit</source>
        <translation>transmit</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="233" />
        <source>receive</source>
        <translation>vétel</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="336" />
        <source>The FT-991A has no mode called '%1'</source>
        <translation>Az FT-991A nem ismer '%1' nevű üzemmódot</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="358" />
        <source>CAT: wrote TX0; (%1 bytes) on %2</source>
        <translation>CAT: TX0; kiírva (%1 bájt) ezen: %2</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="363" />
        <source>CAT: queued TX1; on %1</source>
        <translation>CAT: TX1; sorba állítva ezen: %1</translation>
    </message>
</context>
<context>
    <name>decortty::gateway::Ft991Gateway</name>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="102" />
        <source>Cannot bind UDP port %1: %2</source>
        <translation>Nem tudom lefoglalni a(z) %1 UDP portot: %2</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="110" />
        <source>Cannot open the discovery socket: %1</source>
        <translation>Nem tudom megnyitni a kereső foglalatot: %1</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="120" />
        <source>Audio in: %1</source>
        <translation>Hang be: %1</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="122" />
        <source>Audio out: %1</source>
        <translation>Hang ki: %1</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="156" />
        <source>CAT on %1 at %2 baud</source>
        <translation>CAT a(z) %1 porton, %2 baud</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="132" />
        <source>CAT disabled — receive only, no tuning or PTT</source>
        <translation>CAT kikapcsolva — csak vétel, se hangolás, se PTT</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="140" />
        <source>Gateway listening on UDP %1</source>
        <translation>Az átjáró figyel az UDP %1 porton</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="253" />
        <source>Client %1:%2 connected</source>
        <translation>%1:%2 kliens kapcsolódott</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="264" />
        <source>Client %1:%2 timed out</source>
        <translation>%1:%2 kliens lejárt</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="273" />
        <source>No clients left — dropping PTT</source>
        <translation>Nem maradt kliens — elengedem a PTT-t</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="284" />
        <source>No transmit audio for %1 ms — dropping PTT</source>
        <translation>%1 ms óta nincs adáshang — elengedem a PTT-t</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="298" />
        <source>No client for thirty seconds: closing</source>
        <translation>Harminc másodperce nincs kliens: bezárok</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="394" />
        <source>Shutdown requested by whoever started me</source>
        <translation>Leállítást kért az, aki elindított</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="410" />
        <source>Client %1 is leaving</source>
        <translation>A(z) %1 kliens távozik</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="437" />
        <source>PTT requested by the client: %1  (CAT %2)</source>
        <translation>A kliens PTT-t kért: %1  (CAT %2)</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="438" />
        <source>TRANSMIT</source>
        <translation>ADÁS</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="438" />
        <source>receive</source>
        <translation>vétel</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="439" />
        <source>open</source>
        <translation>nyitva</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="439" />
        <source>CLOSED</source>
        <translation>ZÁRVA</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="517" />
        <source>Shutdown deferred: %1 client(s) are still using the radio</source>
        <translation>Leállítás elhalasztva: %1 kliens még használja a rádiót</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="443" />
        <source>Transmit requested but CAT is not open — ignored</source>
        <translation>Adást kértek, de a CAT nincs nyitva — figyelmen kívül hagyva</translation>
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
        <translation>Az átjáró nem válaszol — újrapróbálom</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="57" />
        <location filename="../src/link/GatewayLink.cpp" line="150" />
        <source>Disconnected</source>
        <translation>Szétkapcsolva</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="47" />
        <source>Waiting for the gateway…</source>
        <translation>Várok az átjáróra…</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="64" />
        <source>Reconnecting to %1…</source>
        <translation>Újrakapcsolódás ehhez: %1…</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="93" />
        <source>Cannot open a local UDP port: %1</source>
        <translation>Nem tudok helyi UDP portot nyitni: %1</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="114" />
        <location filename="../src/link/GatewayLink.cpp" line="267" />
        <source>Connected to %1</source>
        <translation>Kapcsolódva ehhez: %1</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="268" />
        <source>%1 — audio only, no CAT</source>
        <translation>%1 — csak hang, CAT nélkül</translation>
    </message>
</context>
<context>
    <name>decortty::link::RadioHub</name>
    <message>
        <location filename="../src/link/RadioHub.cpp" line="11" />
        <location filename="../src/link/RadioHub.cpp" line="205" />
        <source>Disconnected</source>
        <translation>Szétkapcsolva</translation>
    </message>
    <message>
        <location filename="../src/link/RadioHub.cpp" line="88" />
        <location filename="../src/link/RadioHub.cpp" line="205" />
        <source>Looking for radios…</source>
        <translation>Rádiókat keresek…</translation>
    </message>
    <message>
        <location filename="../src/link/RadioHub.cpp" line="151" />
        <source>Radio %1 is no longer on the network</source>
        <translation>A(z) %1 rádió már nincs a hálózaton</translation>
    </message>
    <message>
        <location filename="../src/link/RadioHub.cpp" line="158" />
        <source>'%1' is not a valid address</source>
        <translation>A(z) '%1' nem érvényes cím</translation>
    </message>
    <message>
        <location filename="../src/link/RadioHub.cpp" line="248" />
        <source>Transmit is unavailable on this connection</source>
        <translation>Ezen a kapcsolaton nem lehet adni</translation>
    </message>
</context>
<context>
    <name>decortty::link::SoundCardLink</name>
    <message>
        <location filename="../src/link/SoundCardLink.cpp" line="40" />
        <source>Cannot open the sound card</source>
        <translation>Nem tudom megnyitni a hangkártyát</translation>
    </message>
    <message>
        <location filename="../src/link/SoundCardLink.cpp" line="46" />
        <source>Listening to %1</source>
        <translation>Hallgatom: %1</translation>
    </message>
    <message>
        <location filename="../src/link/SoundCardLink.cpp" line="47" />
        <source>Listening to %1 — receive only</source>
        <translation>Hallgatom: %1 — csak vétel</translation>
    </message>
    <message>
        <location filename="../src/link/SoundCardLink.cpp" line="58" />
        <source>Disconnected</source>
        <translation>Szétkapcsolva</translation>
    </message>
</context>
</TS>