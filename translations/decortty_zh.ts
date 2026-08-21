<?xml version='1.0' encoding='utf-8'?>
<TS version="2.1" language="zh" sourcelanguage="en">
<context>
    <name>BandBar</name>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="34" />
        <source>No radio connected.</source>
        <translation>未连接电台。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="36" />
        <source>The audio comes from a sound card: the radio is not
under our control. Change band with the dial.</source>
        <translation>音频来自声卡：电台不受本程序控制。
请用旋钮更换波段。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="37" />
        <source>The serial port is held by another program, so the
radio takes no commands. Close it and reconnect.</source>
        <translation>串口被另一个程序占用，电台不接受指令。
关闭它再重新连接。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="70" />
        <source>%1 — RTTY at %2 MHz</source>
        <translation>%1 — RTTY 在 %2 MHz</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="117" />
        <source>Data on the upper sideband: the mode this
decoder is written for.</source>
        <translation>上边带数据：本解码器就是为这个模式写的。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="119" />
        <source>Data on the lower sideband. The tones come out
reversed — REV puts them back.</source>
        <translation>下边带数据。音调会反过来——用 REV 转回去。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="120" />
        <source>Voice sideband. RTTY is copied just the same,
but the radio's filter is wider than it needs.</source>
        <translation>话音边带。RTTY 一样能抄收，只是电台的
滤波器比需要的宽。</translation>
    </message>
</context>
<context>
    <name>BandScale</name>
    <message>
        <location filename="../qml/DecoRTTY/components/BandScale.qml" line="230" />
        <source>Drag to move the radio; the wheel tunes by 1 kHz —
100 Hz with Shift, 10 kHz with Ctrl.</source>
        <translation>拖动可移动电台；滚轮以 1 kHz 步进调谐 —
按 Shift 为 100 Hz，按 Ctrl 为 10 kHz。</translation>
    </message>
</context>
<context>
    <name>DecoderPanel</name>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="116" />
        <source>Correction</source>
        <translation>纠错</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="138" />
        <source>Off</source>
        <translation>关</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="146" />
        <source>Normal</source>
        <translation>常规</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="154" />
        <source>Deep</source>
        <translation>深度</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="178" />
        <source>Unshift on space — recovers a lost FIGS/LTRS, but
breaks long figure groups such as serial numbers.</source>
        <translation>Unshift on space——救回丢失的 FIGS/LTRS，但会
拆散像流水号那样的长数字串。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="182" />
        <source>Set radio</source>
        <translation>设置电台</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="191" />
        <source>Puts the radio into DIGU and narrows its filter
around the tones.</source>
        <translation>把电台切到 DIGU，并把滤波器收窄到音调附近。</translation>
    </message>
</context>
<context>
    <name>FilterPanel</name>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="48" />
        <source>FILTERS</source>
        <translation>滤波器</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="64" />
        <source>Bandpass around the two tones: throws away
everything outside before the detector.</source>
        <translation>在两个音调周围带通：在检波之前，把外面的
一切都丢掉。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="76" />
        <source>Removes one frequency. Ctrl+click the waterfall
to drop it on the carrier that is in the way.</source>
        <translation>抹掉一个频率。在瀑布图上按住 Ctrl 单击，
即可把它放到碍事的载波上。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="88" />
        <source>Adaptive canceller: removes steady carriers by
itself. On weak signals it can eat the RTTY as
well — try it and listen.</source>
        <translation>自适应对消器：自己去掉固定的载波。信号弱时
连 RTTY 也会一起吃掉——试一试，用耳朵听。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="95" />
        <source>BPF width</source>
        <translation>BPF 带宽</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="115" />
        <source>FRAMING</source>
        <translation>帧格式</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="123" />
        <source>Stop</source>
        <translation>停止位</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="150" />
        <source>Bits</source>
        <translation>数据位</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="179" />
        <source>Par.</source>
        <translation>校验</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="185" />
        <source>none</source>
        <translation>无</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="186" />
        <source>even</source>
        <translation>偶</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="187" />
        <source>odd</source>
        <translation>奇</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="214" />
        <source>Figures set: US has BELL and apostrophe where
ITA2 swaps the two.</source>
        <translation>数字集：US 的 BELL 和撇号所在之处，ITA2 把
两者对调。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="226" />
        <source>Prints characters whose stop bit read wrong too:
a few more characters on distorted signals, some
lines of rubbish in exchange.</source>
        <translation>连停止位读错的字符也打印：在失真信号上多出
几个字符，代价是几行垃圾。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="233" />
        <source>TRANSMIT</source>
        <translation>发射</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="241" />
        <source>Fill</source>
        <translation>填充</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="247" />
        <source>off</source>
        <translation>关</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="260" />
        <source>What to send between characters while you
type live.</source>
        <translation>现场打字时，字符与字符之间发送什么。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="267" />
        <source>Character wait</source>
        <translation>字符间等待</translation>
    </message>
</context>
<context>
    <name>HeaderBar</name>
    <message>
        <location filename="../qml/DecoRTTY/components/HeaderBar.qml" line="162" />
        <source>Setup</source>
        <translation>设置</translation>
    </message>
</context>
<context>
    <name>LogDialog</name>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="36" />
        <source>LOG</source>
        <translation>日志</translation>
    </message>
    <message numerus="yes">
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="40" />
        <source>%n contact(s)</source>
        <translation><numerusform>%n 次通联</numerusform></translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="78" />
        <source>RST SENT</source>
        <translation>发出 RST</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="85" />
        <source>RST RCVD</source>
        <translation>收到 RST</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="89" />
        <source>NAME</source>
        <translation>姓名</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="94" />
        <source>Log it</source>
        <translation>记入日志</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="126" />
        <source>Worked before: %1 — last on %2</source>
        <translation>已通联过：%1 —— 上次是 %2</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="207" />
        <source>Export ADIF</source>
        <translation>导出 ADIF</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="213" />
        <source>Close</source>
        <translation>关闭</translation>
    </message>
</context>
<context>
    <name>Main</name>
    <message>
        <location filename="../qml/DecoRTTY/Main.qml" line="106" />
        <source>DECODER</source>
        <translation>解码器</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/Main.qml" line="106" />
        <source>FILTERS</source>
        <translation>滤波器</translation>
    </message>
</context>
<context>
    <name>RadioDialog</name>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="69" />
        <source>FT-991A GATEWAY</source>
        <translation>FT-991A 网关</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="85" />
        <source>on</source>
        <translation>开</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="85" />
        <source>off</source>
        <translation>关</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="94" />
        <source>When on, the gateway opens at start-up and
closes with the program. Turn it off if the radio
is on another PC.</source>
        <translation>打开后，网关随程序启动而开、随程序关闭而关。
如果电台在另一台电脑上，请关掉它。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="98" />
        <source>close</source>
        <translation>收起</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="98" />
        <source>settings</source>
        <translation>调整</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="142" />
        <source>Audio in</source>
        <translation>音频输入</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="160" />
        <source>Restart</source>
        <translation>重启</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="169" />
        <source>Use after changing the port or a device.</source>
        <translation>更换端口或设备之后使用。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="174" />
        <source>Audio out</source>
        <translation>音频输出</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="199" />
        <source>RADIOS ON THE NETWORK</source>
        <translation>网络上的电台</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="309" />
        <source>No radio has answered yet</source>
        <translation>还没有电台回应</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="315" />
        <source>Radios announce themselves on UDP 4992.
Check the radio is on the same subnet, or enter its address below.</source>
        <translation>电台在 UDP 4992 上自报家门。
请确认电台在同一子网内，或在下面填写它的地址。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="351" />
        <source>FROM A SOUND CARD</source>
        <translation>来自声卡</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="359" />
        <source>no frequency, no PTT — transmit on VOX</source>
        <translation>没有频率，没有 PTT — 用 VOX 发射</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="393" />
        <source>— no transmit —</source>
        <translation>— 不发射 —</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="397" />
        <source>Listen</source>
        <translation>收听</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="462" />
        <source>Connect</source>
        <translation>连接</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="474" />
        <source>Close</source>
        <translation>关闭</translation>
    </message>
</context>
<context>
    <name>ReceivePanel</name>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="61" />
        <source>RECEIVE</source>
        <translation>接收</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="90" />
        <source>Call</source>
        <translation>呼号</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="99" />
        <source>Highlights callsigns. Click one to put it
in the HIS CALL field.</source>
        <translation>高亮显示呼号。点一下就放进 HIS CALL 栏。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="104" />
        <source>Follow</source>
        <translation>跟随</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="118" />
        <source>Copy</source>
        <translation>复制</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="130" />
        <source>Clear</source>
        <translation>清除</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="291" />
        <source>jump to end ↓</source>
        <translation>跳到末尾 ↓</translation>
    </message>
</context>
<context>
    <name>SetupDialog</name>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="37" />
        <source>LANGUAGE</source>
        <translation>语言</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="59" />
        <source>changes immediately</source>
        <translation>立即生效</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="74" />
        <source>STATION</source>
        <translation>电台</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="82" />
        <source>MY CALL</source>
        <translation>MY CALL</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="89" />
        <source>NAME</source>
        <translation>姓名</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="95" />
        <source>QTH</source>
        <translation>QTH</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="118" />
        <source>FLEXRADIO</source>
        <translation>FLEXRADIO</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="126" />
        <source>BY ITSELF</source>
        <translation>自动决定</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="134" />
        <source>Binds to the station already on the radio when there
is one, and takes the GUI role when the radio is free.</source>
        <translation>若已有台站连接就绑定它；电台空闲时则自己担任 GUI。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="138" />
        <source>GUI STATION</source>
        <translation>GUI 台站</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="147" />
        <source>Owns its own slices, so frequency and tuning always
work — at the cost of one of the two MultiFlex seats.</source>
        <translation>拥有自己的 slice，频率和调谐始终可用 —
代价是占用两个 MultiFlex 席位之一。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="151" />
        <source>SECOND CLIENT</source>
        <translation>次要客户端</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="160" />
        <source>Reads the slices of the station that already has the
radio, without taking a seat. If the radio shows none,
DecoRTTY goes back to being a GUI station by itself.</source>
        <translation>读取已占用电台的台站的 slice，不占席位。
若电台不显示任何 slice，DecoRTTY 会自行
变回 GUI 台站。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="170" />
        <source>Takes effect at the next connection.</source>
        <translation>下次连接时生效。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="188" />
        <source>MACROS</source>
        <translation>宏</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="269" />
        <source>Restore defaults</source>
        <translation>恢复默认</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="275" />
        <source>Close</source>
        <translation>关闭</translation>
    </message>
</context>
<context>
    <name>StatusBar</name>
    <message>
        <location filename="../qml/DecoRTTY/components/StatusBar.qml" line="79" />
        <source>shared with %1</source>
        <translation>与 %1 共用</translation>
    </message>
</context>
<context>
    <name>TransmitPanel</name>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="72" />
        <source>Type here — Enter sends the line</source>
        <translation>在此输入 —— 回车发送该行</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="73" />
        <source>Connect a radio to transmit</source>
        <translation>连接电台后才能发射</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="102" />
        <source>TRANSMITTING</source>
        <translation>发射中</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="102" />
        <source>TRANSMIT</source>
        <translation>发射</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="117" />
        <source>Abort</source>
        <translation>中止</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="127" />
        <source>Clear</source>
        <translation>清除</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="199" />
        <source>High enough to drive the ALC — check the meter.</source>
        <translation>足以推动 ALC——看一眼表头。</translation>
    </message>
</context>
<context>
    <name>TuningScope</name>
    <message>
        <location filename="../qml/DecoRTTY/components/TuningScope.qml" line="26" />
        <source>TUNING</source>
        <translation>调谐</translation>
    </message>
</context>
<context>
    <name>WaterfallPanel</name>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="52" />
        <source>SPECTRUM</source>
        <translation>频谱</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="72" />
        <source>VIEW</source>
        <translation>视图</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="81" />
        <source>Zoom, palette, brightness and speed of the
waterfall.</source>
        <translation>瀑布图的缩放、色板、亮度和速度。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="87" />
        <source>CENTRE</source>
        <translation>居中</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="95" />
        <source>Finds the tone pair in the band and moves the
tuning onto it. Once, now.</source>
        <translation>在频带里找到那一对音调，把调谐移过去。
只做一次，就现在。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="108" />
        <source>Searches by itself whenever nothing is being
copied, and tries the polarity too. While the
decoder is locked it touches nothing.</source>
        <translation>在什么都收不到的时候自己搜索，也会试极性。
解码器锁定期间，它什么都不动。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="121" />
        <source>Follows the drift of the signal already locked,
within a few tens of hertz.</source>
        <translation>跟随已锁定信号的漂移，范围是几十赫兹。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="181" />
        <source>band</source>
        <translation>全带</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="190" />
        <source>How much band to show. Narrow around the tones
shows the individual bits; wide shows who is calling.</source>
        <translation>显示多宽的频带。围着音调收窄能看见一个个比特；
放宽则能看见谁在呼叫。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="194" />
        <source>DECO</source>
        <translation>DECO</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="194" />
        <source>GREY</source>
        <translation>灰阶</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="194" />
        <source>FIRE</source>
        <translation>火焰</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="203" />
        <source>speed %1x</source>
        <translation>速度 %1x</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="210" />
        <source>How fast it scrolls. Slower keeps a longer
stretch of band in view.</source>
        <translation>滚动有多快。慢一些，屏幕上能留住更长一段
频带。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="215" />
        <source>light</source>
        <translation>亮度</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="230" />
        <source>contrast</source>
        <translation>对比度</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="245" />
        <source>floor %1 dB</source>
        <translation>本底 %1 dB</translation>
    </message>
</context>
<context>
    <name>decortty::app::GatewaySupervisor</name>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="24" />
        <source>not started</source>
        <translation>未启动</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="121" />
        <source>disabled</source>
        <translation>已停用</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="131" />
        <source>already listening (started elsewhere)</source>
        <translation>已在监听（在别处启动）</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="132" />
        <source>A gateway is already on the network: not starting another</source>
        <translation>网络上已经有一个网关：不再启动第二个</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="138" />
        <source>executable not found</source>
        <translation>找不到可执行文件</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="139" />
        <source>Cannot find %1 beside the application</source>
        <translation>在程序旁边找不到 %1</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="164" />
        <source>start failed</source>
        <translation>启动失败</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="165" />
        <source>The gateway will not start: %1</source>
        <translation>网关无法启动：%1</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="172" />
        <source>exited</source>
        <translation>已退出</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="172" />
        <source>exited (code %1)</source>
        <translation>已退出（代码 %1）</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="174" />
        <source>Gateway exited, code %1</source>
        <translation>网关已退出，代码 %1</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="187" />
        <source>starting on %1</source>
        <translation>正在 %1 上启动</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="188" />
        <source>Starting the gateway: %1 on port %2</source>
        <translation>正在启动网关：%1，端口 %2</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="194" />
        <source>started</source>
        <translation>已启动</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="216" />
        <source>Closing the gateway</source>
        <translation>正在关闭网关</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="235" />
        <source>The gateway is staying up: leaving it to the other clients</source>
        <translation>网关继续运行：留给其他客户端</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="239" />
        <source>left running</source>
        <translation>保持运行</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="244" />
        <source>closed</source>
        <translation>已关闭</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="271" />
        <source>running on %1</source>
        <translation>在 %1 上运行</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="273" />
        <source>%1 is busy — receive only</source>
        <translation>%1 被占用 —— 只能接收</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="275" />
        <source>running, no CAT</source>
        <translation>运行中，没有 CAT</translation>
    </message>
</context>
<context>
    <name>decortty::app::QsoLog</name>
    <message>
        <location filename="../src/app/QsoLog.cpp" line="75" />
        <source>A callsign is the least a contact needs to be logged</source>
        <translation>至少要有呼号才能把通联记入日志</translation>
    </message>
    <message>
        <location filename="../src/app/QsoLog.cpp" line="272" />
        <source>Cannot write the log in %1</source>
        <translation>无法把日志写入 %1</translation>
    </message>
</context>
<context>
    <name>decortty::app::RttyEngine</name>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="58" />
        <source>Transmit ran for three minutes — stopped</source>
        <translation>发射持续了三分钟 —— 已停止</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="97" />
        <source>Trying the opposite polarity (%1)</source>
        <translation>试一下相反的极性（%1）</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="98" />
        <source>reversed</source>
        <translation>反相</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="98" />
        <source>direct</source>
        <translation>正相</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="99" />
        <source>Signal at %1 Hz: moving there</source>
        <translation>信号在 %1 Hz：移过去</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="241" />
        <source>No recognisable RTTY signal in the band</source>
        <translation>频带内没有可辨认的 RTTY 信号</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="247" />
        <source>Centred on %1 Hz (%2 dB above the floor)</source>
        <translation>已对准 %1 Hz（高出本底 %2 dB）</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="605" />
        <source>The radio is in %1: on voice modes the USB audio does not modulate. Press 'Set radio' in the DECODER panel.</source>
        <translation>电台处于 %1：在话音模式下 USB 音频不会调制。请在解码器面板上按“设置电台”。</translation>
    </message>
</context>
<context>
    <name>decortty::flex::FlexApiClient</name>
    <message>
        <location filename="../src/flex/FlexApiClient.cpp" line="255" />
        <source>The radio refused the client registration (code 0x%1)</source>
        <translation>电台拒绝了客户端注册（代码 0x%1）</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexApiClient.cpp" line="337" />
        <source>another station</source>
        <translation>另一个电台</translation>
    </message>
</context>
<context>
    <name>decortty::flex::FlexDiscovery</name>
    <message>
        <location filename="../src/flex/FlexDiscovery.cpp" line="35" />
        <source>Cannot listen on UDP port %1: %2</source>
        <translation>无法在 UDP 端口 %1 上监听：%2</translation>
    </message>
</context>
<context>
    <name>decortty::flex::FlexRadioLink</name>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="20" />
        <source>Sharing %1 with %2</source>
        <translation>%1 与 %2 共用</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="36" />
        <location filename="../src/flex/FlexRadioLink.cpp" line="111" />
        <source>Disconnected</source>
        <translation>已断开</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="61" />
        <location filename="../src/flex/FlexRadioLink.cpp" line="73" />
        <source>Connecting to %1…</source>
        <translation>正在连接 %1…</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="87" />
        <source>Connected to %1</source>
        <translation>已连接到 %1</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="105" />
        <source>Reconnecting to %1…</source>
        <translation>正在重新连接 %1…</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="131" />
        <source>Bound to %1 but the radio shows no slice — reconnecting as a GUI station</source>
        <translation>已绑定 %1，但电台不显示任何 slice — 正以 GUI 台站身份重新连接</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="144" />
        <source>Could not open the audio transport</source>
        <translation>打不开音频通道</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="154" />
        <source>The radio rejected the UDP port registration</source>
        <translation>电台拒绝了 UDP 端口的注册</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="173" />
        <source>The radio will not give audio to a bound client — reconnecting as a GUI station</source>
        <translation>电台不给绑定的客户端音频 —— 改为以 GUI 身份重新连接</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="180" />
        <source>Could not create the receive audio stream</source>
        <translation>无法建立接收音频流</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="185" />
        <source>Receiving from %1</source>
        <translation>正在接收 %1</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="193" />
        <source>Could not create the transmit audio stream</source>
        <translation>无法建立发射音频流</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="372" />
        <source>Transmit is unavailable: no Opus transmit stream</source>
        <translation>无法发射：没有 Opus 发射流</translation>
    </message>
</context>
<context>
    <name>decortty::flex::FlexVitaStream</name>
    <message>
        <location filename="../src/flex/FlexVitaStream.cpp" line="21" />
        <source>Cannot open the VITA-49 UDP socket: %1</source>
        <translation>无法打开 VITA-49 的 UDP 套接字：%1</translation>
    </message>
</context>
<context>
    <name>decortty::gateway::CodecAudio</name>
    <message>
        <location filename="../src/gateway/CodecAudio.cpp" line="72" />
        <source>No capture device matching '%1'. Available: %2</source>
        <translation>没有与 '%1' 相符的录音设备。可用：%2</translation>
    </message>
    <message>
        <location filename="../src/gateway/CodecAudio.cpp" line="83" />
        <source>%1 cannot run at %2 Hz</source>
        <translation>%1 无法以 %2 Hz 运行</translation>
    </message>
    <message>
        <location filename="../src/gateway/CodecAudio.cpp" line="116" />
        <source>No playback device matching '%1' — transmit is unavailable</source>
        <translation>没有与 '%1' 相符的放音设备 —— 无法发射</translation>
    </message>
    <message>
        <location filename="../src/gateway/CodecAudio.cpp" line="215" />
        <source>Transmit audio overrun — dropped %1 ms</source>
        <translation>发射音频溢出 —— 丢弃了 %1 毫秒</translation>
    </message>
</context>
<context>
    <name>decortty::gateway::Ft991Cat</name>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="120" />
        <source>Cannot open %1: %2</source>
        <translation>打不开 %1：%2</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="232" />
        <source>Radio still shows %1 — repeating the PTT command (%2)</source>
        <translation>电台仍显示 %1 —— 重发 PTT 命令（%2）</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="233" />
        <source>transmit</source>
        <translation>transmit</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="233" />
        <source>receive</source>
        <translation>接收</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="336" />
        <source>The FT-991A has no mode called '%1'</source>
        <translation>FT-991A 没有名为 '%1' 的模式</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="358" />
        <source>CAT: wrote TX0; (%1 bytes) on %2</source>
        <translation>CAT：已在 %2 上写入 TX0;（%1 字节）</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="363" />
        <source>CAT: queued TX1; on %1</source>
        <translation>CAT：已在 %1 上排入 TX1;</translation>
    </message>
</context>
<context>
    <name>decortty::gateway::Ft991Gateway</name>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="102" />
        <source>Cannot bind UDP port %1: %2</source>
        <translation>无法占用 UDP 端口 %1：%2</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="110" />
        <source>Cannot open the discovery socket: %1</source>
        <translation>无法打开搜索套接字：%1</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="120" />
        <source>Audio in: %1</source>
        <translation>音频输入：%1</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="122" />
        <source>Audio out: %1</source>
        <translation>音频输出：%1</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="156" />
        <source>CAT on %1 at %2 baud</source>
        <translation>CAT 在 %1，%2 波特</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="132" />
        <source>CAT disabled — receive only, no tuning or PTT</source>
        <translation>CAT 已停用 —— 只能接收，不能调谐也不能 PTT</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="140" />
        <source>Gateway listening on UDP %1</source>
        <translation>网关在 UDP %1 上监听</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="253" />
        <source>Client %1:%2 connected</source>
        <translation>客户端 %1:%2 已连接</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="264" />
        <source>Client %1:%2 timed out</source>
        <translation>客户端 %1:%2 已超时</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="273" />
        <source>No clients left — dropping PTT</source>
        <translation>没有客户端了 —— 松开 PTT</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="284" />
        <source>No transmit audio for %1 ms — dropping PTT</source>
        <translation>已有 %1 毫秒没有发射音频 —— 松开 PTT</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="298" />
        <source>No client for thirty seconds: closing</source>
        <translation>三十秒没有客户端：关闭</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="394" />
        <source>Shutdown requested by whoever started me</source>
        <translation>启动我的一方要求关闭</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="410" />
        <source>Client %1 is leaving</source>
        <translation>客户端 %1 正在离开</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="437" />
        <source>PTT requested by the client: %1  (CAT %2)</source>
        <translation>客户端请求 PTT：%1  (CAT %2)</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="438" />
        <source>TRANSMIT</source>
        <translation>发射</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="438" />
        <source>receive</source>
        <translation>接收</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="439" />
        <source>open</source>
        <translation>已打开</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="439" />
        <source>CLOSED</source>
        <translation>已关闭</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="517" />
        <source>Shutdown deferred: %1 client(s) are still using the radio</source>
        <translation>关闭已推迟：还有 %1 个客户端在用这台电台</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="443" />
        <source>Transmit requested but CAT is not open — ignored</source>
        <translation>请求发射，但 CAT 未打开 —— 已忽略</translation>
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
        <translation>网关没有回应 —— 重试</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="57" />
        <location filename="../src/link/GatewayLink.cpp" line="150" />
        <source>Disconnected</source>
        <translation>已断开</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="47" />
        <source>Waiting for the gateway…</source>
        <translation>正在等待网关…</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="64" />
        <source>Reconnecting to %1…</source>
        <translation>正在重新连接 %1…</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="93" />
        <source>Cannot open a local UDP port: %1</source>
        <translation>无法打开本地 UDP 端口：%1</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="114" />
        <location filename="../src/link/GatewayLink.cpp" line="267" />
        <source>Connected to %1</source>
        <translation>已连接到 %1</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="268" />
        <source>%1 — audio only, no CAT</source>
        <translation>%1 —— 只有音频，没有 CAT</translation>
    </message>
</context>
<context>
    <name>decortty::link::RadioHub</name>
    <message>
        <location filename="../src/link/RadioHub.cpp" line="27" />
        <location filename="../src/link/RadioHub.cpp" line="223" />
        <source>Disconnected</source>
        <translation>已断开</translation>
    </message>
    <message>
        <location filename="../src/link/RadioHub.cpp" line="104" />
        <location filename="../src/link/RadioHub.cpp" line="223" />
        <source>Looking for radios…</source>
        <translation>正在寻找电台…</translation>
    </message>
    <message>
        <location filename="../src/link/RadioHub.cpp" line="168" />
        <source>Radio %1 is no longer on the network</source>
        <translation>电台 %1 已不在网络上</translation>
    </message>
    <message>
        <location filename="../src/link/RadioHub.cpp" line="175" />
        <source>'%1' is not a valid address</source>
        <translation>'%1' 不是有效的地址</translation>
    </message>
    <message>
        <location filename="../src/link/RadioHub.cpp" line="275" />
        <source>Transmit is unavailable on this connection</source>
        <translation>这条连接上无法发射</translation>
    </message>
</context>
<context>
    <name>decortty::link::SoundCardLink</name>
    <message>
        <location filename="../src/link/SoundCardLink.cpp" line="40" />
        <source>Cannot open the sound card</source>
        <translation>打不开声卡</translation>
    </message>
    <message>
        <location filename="../src/link/SoundCardLink.cpp" line="46" />
        <source>Listening to %1</source>
        <translation>正在收听 %1</translation>
    </message>
    <message>
        <location filename="../src/link/SoundCardLink.cpp" line="47" />
        <source>Listening to %1 — receive only</source>
        <translation>正在收听 %1 — 只接收</translation>
    </message>
    <message>
        <location filename="../src/link/SoundCardLink.cpp" line="58" />
        <source>Disconnected</source>
        <translation>已断开</translation>
    </message>
</context>
</TS>