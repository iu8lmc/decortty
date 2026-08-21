<?xml version='1.0' encoding='utf-8'?>
<TS version="2.1" language="zh_TW" sourcelanguage="en">
<context>
    <name>BandBar</name>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="34" />
        <source>No radio connected.</source>
        <translation>未連接電台。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="36" />
        <source>The audio comes from a sound card: the radio is not
under our control. Change band with the dial.</source>
        <translation>音訊來自音效卡：電台不受本程式控制。
請用旋鈕更換波段。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="37" />
        <source>The serial port is held by another program, so the
radio takes no commands. Close it and reconnect.</source>
        <translation>序列埠被另一個程式佔用，電台不接受指令。
關閉它再重新連線。</translation>
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
        <translation>上旁波帶資料：本解碼器就是為這個模式寫的。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="119" />
        <source>Data on the lower sideband. The tones come out
reversed — REV puts them back.</source>
        <translation>下旁波帶資料。音調會反過來——用 REV 轉回去。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="120" />
        <source>Voice sideband. RTTY is copied just the same,
but the radio's filter is wider than it needs.</source>
        <translation>話音旁波帶。RTTY 一樣能抄收，只是電台的
濾波器比需要的寬。</translation>
    </message>
</context>
<context>
    <name>BandScale</name>
    <message>
        <location filename="../qml/DecoRTTY/components/BandScale.qml" line="230" />
        <source>Drag to move the radio; the wheel tunes by 1 kHz —
100 Hz with Shift, 10 kHz with Ctrl.</source>
        <translation>拖曳可移動電台；滾輪以 1 kHz 步進調諧 —
按 Shift 為 100 Hz，按 Ctrl 為 10 kHz。</translation>
    </message>
</context>
<context>
    <name>DecoderPanel</name>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="116" />
        <source>Correction</source>
        <translation>糾錯</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="138" />
        <source>Off</source>
        <translation>關</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="146" />
        <source>Normal</source>
        <translation>常規</translation>
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
        <translation>Unshift on space——救回丟失的 FIGS/LTRS，但會
拆散像流水號那样的長數字串。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="182" />
        <source>Set radio</source>
        <translation>設定電臺</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="191" />
        <source>Puts the radio into DIGU and narrows its filter
around the tones.</source>
        <translation>把電臺切到 DIGU，并把濾波器收窄到音調附近。</translation>
    </message>
</context>
<context>
    <name>FilterPanel</name>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="48" />
        <source>FILTERS</source>
        <translation>濾波器</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="64" />
        <source>Bandpass around the two tones: throws away
everything outside before the detector.</source>
        <translation>在兩個音調周圍帶通：在檢波之前，把外面的
一切都丟掉。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="76" />
        <source>Removes one frequency. Ctrl+click the waterfall
to drop it on the carrier that is in the way.</source>
        <translation>抹掉一個頻率。在瀑布圖上按住 Ctrl 單擊，
即可把它放到礙事的載波上。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="88" />
        <source>Adaptive canceller: removes steady carriers by
itself. On weak signals it can eat the RTTY as
well — try it and listen.</source>
        <translation>自適應對消器：自己去掉固定的載波。信號弱時
連 RTTY 也會一起吃掉——試一試，用耳朵聽。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="95" />
        <source>BPF width</source>
        <translation>BPF 帶寬</translation>
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
        <translation>資料位元</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="179" />
        <source>Par.</source>
        <translation>校驗</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="185" />
        <source>none</source>
        <translation>無</translation>
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
        <translation>數字集：US 的 BELL 和撇號所在之處，ITA2 把
兩者對調。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="226" />
        <source>Prints characters whose stop bit read wrong too:
a few more characters on distorted signals, some
lines of rubbish in exchange.</source>
        <translation>連停止位读錯的字符也打印：在失真信號上多出
幾個字符，代价是幾行垃圾。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="233" />
        <source>TRANSMIT</source>
        <translation>發射</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="241" />
        <source>Fill</source>
        <translation>填充</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="247" />
        <source>off</source>
        <translation>關</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="260" />
        <source>What to send between characters while you
type live.</source>
        <translation>現場打字時，字符與字符之間發送什麼。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="267" />
        <source>Character wait</source>
        <translation>字符間等待</translation>
    </message>
</context>
<context>
    <name>HeaderBar</name>
    <message>
        <location filename="../qml/DecoRTTY/components/HeaderBar.qml" line="162" />
        <source>Setup</source>
        <translation>設定</translation>
    </message>
</context>
<context>
    <name>LogDialog</name>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="36" />
        <source>LOG</source>
        <translation>日誌</translation>
    </message>
    <message numerus="yes">
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="40" />
        <source>%n contact(s)</source>
        <translation><numerusform>%n 次通聯</numerusform></translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="78" />
        <source>RST SENT</source>
        <translation>發出 RST</translation>
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
        <translation>記入日誌</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="126" />
        <source>Worked before: %1 — last on %2</source>
        <translation>已通聯過：%1 —— 上次是 %2</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="207" />
        <source>Export ADIF</source>
        <translation>匯出 ADIF</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="213" />
        <source>Close</source>
        <translation>關閉</translation>
    </message>
</context>
<context>
    <name>Main</name>
    <message>
        <location filename="../qml/DecoRTTY/Main.qml" line="106" />
        <source>DECODER</source>
        <translation>解碼器</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/Main.qml" line="106" />
        <source>FILTERS</source>
        <translation>濾波器</translation>
    </message>
</context>
<context>
    <name>RadioDialog</name>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="69" />
        <source>FT-991A GATEWAY</source>
        <translation>FT-991A 閘道</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="85" />
        <source>on</source>
        <translation>開</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="85" />
        <source>off</source>
        <translation>關</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="94" />
        <source>When on, the gateway opens at start-up and
closes with the program. Turn it off if the radio
is on another PC.</source>
        <translation>打開後，閘道隨程式啟動而開、隨程式關閉而關。
如果電臺在另一臺電腦上，請關掉它。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="98" />
        <source>close</source>
        <translation>收起</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="98" />
        <source>settings</source>
        <translation>調整</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="142" />
        <source>Audio in</source>
        <translation>音訊輸入</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="160" />
        <source>Restart</source>
        <translation>重新啟動</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="169" />
        <source>Use after changing the port or a device.</source>
        <translation>更換連接埠或設備之後使用。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="174" />
        <source>Audio out</source>
        <translation>音訊輸出</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="199" />
        <source>RADIOS ON THE NETWORK</source>
        <translation>網路上的電臺</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="309" />
        <source>No radio has answered yet</source>
        <translation>還沒有電臺回應</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="315" />
        <source>Radios announce themselves on UDP 4992.
Check the radio is on the same subnet, or enter its address below.</source>
        <translation>電臺在 UDP 4992 上自報家門。
請確設電臺在同一子網内，或在下面填寫它的地址。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="351" />
        <source>FROM A SOUND CARD</source>
        <translation>來自音效卡</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="359" />
        <source>no frequency, no PTT — transmit on VOX</source>
        <translation>沒有頻率，沒有 PTT — 用 VOX 發射</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="393" />
        <source>— no transmit —</source>
        <translation>— 不發射 —</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="397" />
        <source>Listen</source>
        <translation>收聽</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="462" />
        <source>Connect</source>
        <translation>連線</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="474" />
        <source>Close</source>
        <translation>關閉</translation>
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
        <translation>呼號</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="99" />
        <source>Highlights callsigns. Click one to put it
in the HIS CALL field.</source>
        <translation>高亮顯示呼號。點一下就放进 HIS CALL 欄。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="104" />
        <source>Follow</source>
        <translation>跟隨</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="118" />
        <source>Copy</source>
        <translation>複製</translation>
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
        <translation>語言</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="59" />
        <source>changes immediately</source>
        <translation>立即生效</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="74" />
        <source>STATION</source>
        <translation>電臺</translation>
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
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="115" />
        <source>MACROS</source>
        <translation>宏</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="196" />
        <source>Restore defaults</source>
        <translation>恢復預設</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="202" />
        <source>Close</source>
        <translation>關閉</translation>
    </message>
</context>
<context>
    <name>StatusBar</name>
    <message>
        <location filename="../qml/DecoRTTY/components/StatusBar.qml" line="79" />
        <source>shared with %1</source>
        <translation>與 %1 共用</translation>
    </message>
</context>
<context>
    <name>TransmitPanel</name>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="72" />
        <source>Type here — Enter sends the line</source>
        <translation>在此輸入 —— Enter 發送該行</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="73" />
        <source>Connect a radio to transmit</source>
        <translation>連線電臺後才能發射</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="102" />
        <source>TRANSMITTING</source>
        <translation>發射中</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="102" />
        <source>TRANSMIT</source>
        <translation>發射</translation>
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
        <translation>足以推動 ALC——看一眼表頭。</translation>
    </message>
</context>
<context>
    <name>TuningScope</name>
    <message>
        <location filename="../qml/DecoRTTY/components/TuningScope.qml" line="26" />
        <source>TUNING</source>
        <translation>調諧</translation>
    </message>
</context>
<context>
    <name>WaterfallPanel</name>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="52" />
        <source>SPECTRUM</source>
        <translation>頻譜</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="72" />
        <source>VIEW</source>
        <translation>視圖</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="81" />
        <source>Zoom, palette, brightness and speed of the
waterfall.</source>
        <translation>瀑布圖的縮放、色板、亮度和速度。</translation>
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
        <translation>在頻帶裡找到那一對音調，把調諧移過去。
只做一次，就現在。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="108" />
        <source>Searches by itself whenever nothing is being
copied, and tries the polarity too. While the
decoder is locked it touches nothing.</source>
        <translation>在什麼都收不到的時候自己搜索，也會試極性。
解碼器鎖定期間，它什麼都不動。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="121" />
        <source>Follows the drift of the signal already locked,
within a few tens of hertz.</source>
        <translation>跟隨已鎖定信號的漂移，範圍是幾十赫茲。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="181" />
        <source>band</source>
        <translation>全帶</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="190" />
        <source>How much band to show. Narrow around the tones
shows the individual bits; wide shows who is calling.</source>
        <translation>顯示多寬的頻帶。圍著音調收窄能看見一個個位元；
放寬则能看見谁在呼叫。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="194" />
        <source>DECO</source>
        <translation>DECO</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="194" />
        <source>GREY</source>
        <translation>灰階</translation>
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
        <translation>滾動有多快。慢一些，屏幕上能留住更長一段
頻帶。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="215" />
        <source>light</source>
        <translation>亮度</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="230" />
        <source>contrast</source>
        <translation>對比度</translation>
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
        <translation>未啟動</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="121" />
        <source>disabled</source>
        <translation>已停用</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="131" />
        <source>already listening (started elsewhere)</source>
        <translation>已在監聽（在別處啟動）</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="132" />
        <source>A gateway is already on the network: not starting another</source>
        <translation>網路上已经有一個閘道：不再啟動第二個</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="138" />
        <source>executable not found</source>
        <translation>找不到可執行檔案</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="139" />
        <source>Cannot find %1 beside the application</source>
        <translation>在程式旁邊找不到 %1</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="164" />
        <source>start failed</source>
        <translation>啟動失敗</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="165" />
        <source>The gateway will not start: %1</source>
        <translation>閘道無法啟動：%1</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="172" />
        <source>exited</source>
        <translation>已退出</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="172" />
        <source>exited (code %1)</source>
        <translation>已退出（代碼 %1）</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="174" />
        <source>Gateway exited, code %1</source>
        <translation>閘道已退出，代碼 %1</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="187" />
        <source>starting on %1</source>
        <translation>正在 %1 上啟動</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="188" />
        <source>Starting the gateway: %1 on port %2</source>
        <translation>正在啟動閘道：%1，連接埠 %2</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="194" />
        <source>started</source>
        <translation>已啟動</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="216" />
        <source>Closing the gateway</source>
        <translation>正在關閉閘道</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="235" />
        <source>The gateway is staying up: leaving it to the other clients</source>
        <translation>閘道繼續運行：留給其他用戶端</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="239" />
        <source>left running</source>
        <translation>保持運行</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="244" />
        <source>closed</source>
        <translation>已關閉</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="271" />
        <source>running on %1</source>
        <translation>在 %1 上運行</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="273" />
        <source>%1 is busy — receive only</source>
        <translation>%1 被佔用 —— 只能接收</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="275" />
        <source>running, no CAT</source>
        <translation>運行中，沒有 CAT</translation>
    </message>
</context>
<context>
    <name>decortty::app::QsoLog</name>
    <message>
        <location filename="../src/app/QsoLog.cpp" line="75" />
        <source>A callsign is the least a contact needs to be logged</source>
        <translation>至少要有呼號才能把通聯記入日誌</translation>
    </message>
    <message>
        <location filename="../src/app/QsoLog.cpp" line="272" />
        <source>Cannot write the log in %1</source>
        <translation>無法把日誌寫入 %1</translation>
    </message>
</context>
<context>
    <name>decortty::app::RttyEngine</name>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="58" />
        <source>Transmit ran for three minutes — stopped</source>
        <translation>發射持續了三分鐘 —— 已停止</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="97" />
        <source>Trying the opposite polarity (%1)</source>
        <translation>試一下相反的極性（%1）</translation>
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
        <translation>信號在 %1 Hz：移過去</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="230" />
        <source>No recognisable RTTY signal in the band</source>
        <translation>頻帶内沒有可辨設的 RTTY 信號</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="236" />
        <source>Centred on %1 Hz (%2 dB above the floor)</source>
        <translation>已對準 %1 Hz（高出本底 %2 dB）</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="592" />
        <source>The radio is in %1: on voice modes the USB audio does not modulate. Press 'Set radio' in the DECODER panel.</source>
        <translation>電臺處于 %1：在話音模式下 USB 音訊不會調製。請在解碼器面板上按“設定電臺”。</translation>
    </message>
</context>
<context>
    <name>decortty::flex::FlexApiClient</name>
    <message>
        <location filename="../src/flex/FlexApiClient.cpp" line="255" />
        <source>The radio refused the client registration (code 0x%1)</source>
        <translation>電臺拒絕了用戶端註冊（代碼 0x%1）</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexApiClient.cpp" line="337" />
        <source>another station</source>
        <translation>另一個電臺</translation>
    </message>
</context>
<context>
    <name>decortty::flex::FlexDiscovery</name>
    <message>
        <location filename="../src/flex/FlexDiscovery.cpp" line="35" />
        <source>Cannot listen on UDP port %1: %2</source>
        <translation>無法在 UDP 連接埠 %1 上監聽：%2</translation>
    </message>
</context>
<context>
    <name>decortty::flex::FlexRadioLink</name>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="20" />
        <source>Sharing %1 with %2</source>
        <translation>%1 與 %2 共用</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="36" />
        <location filename="../src/flex/FlexRadioLink.cpp" line="109" />
        <source>Disconnected</source>
        <translation>已斷開</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="61" />
        <location filename="../src/flex/FlexRadioLink.cpp" line="73" />
        <source>Connecting to %1…</source>
        <translation>正在連線 %1…</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="87" />
        <source>Connected to %1</source>
        <translation>已連線到 %1</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="103" />
        <source>Reconnecting to %1…</source>
        <translation>正在重新連線 %1…</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="117" />
        <source>Could not open the audio transport</source>
        <translation>打不開音訊通道</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="127" />
        <source>The radio rejected the UDP port registration</source>
        <translation>電臺拒絕了 UDP 連接埠的註冊</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="146" />
        <source>The radio will not give audio to a bound client — reconnecting as a GUI station</source>
        <translation>電臺不給繫結的用戶端音訊 —— 改以 GUI 身分重新連線</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="153" />
        <source>Could not create the receive audio stream</source>
        <translation>無法建立接收音訊流</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="158" />
        <source>Receiving from %1</source>
        <translation>正在接收 %1</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="166" />
        <source>Could not create the transmit audio stream</source>
        <translation>無法建立發射音訊流</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="343" />
        <source>Transmit is unavailable: no Opus transmit stream</source>
        <translation>無法發射：沒有 Opus 發射流</translation>
    </message>
</context>
<context>
    <name>decortty::flex::FlexVitaStream</name>
    <message>
        <location filename="../src/flex/FlexVitaStream.cpp" line="21" />
        <source>Cannot open the VITA-49 UDP socket: %1</source>
        <translation>無法打開 VITA-49 的 UDP 通訊端：%1</translation>
    </message>
</context>
<context>
    <name>decortty::gateway::CodecAudio</name>
    <message>
        <location filename="../src/gateway/CodecAudio.cpp" line="72" />
        <source>No capture device matching '%1'. Available: %2</source>
        <translation>沒有與 '%1' 相符的錄音設備。可用：%2</translation>
    </message>
    <message>
        <location filename="../src/gateway/CodecAudio.cpp" line="83" />
        <source>%1 cannot run at %2 Hz</source>
        <translation>%1 無法以 %2 Hz 運行</translation>
    </message>
    <message>
        <location filename="../src/gateway/CodecAudio.cpp" line="116" />
        <source>No playback device matching '%1' — transmit is unavailable</source>
        <translation>沒有與 '%1' 相符的放音設備 —— 無法發射</translation>
    </message>
    <message>
        <location filename="../src/gateway/CodecAudio.cpp" line="215" />
        <source>Transmit audio overrun — dropped %1 ms</source>
        <translation>發射音訊溢出 —— 丟棄了 %1 毫秒</translation>
    </message>
</context>
<context>
    <name>decortty::gateway::Ft991Cat</name>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="120" />
        <source>Cannot open %1: %2</source>
        <translation>打不開 %1：%2</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="232" />
        <source>Radio still shows %1 — repeating the PTT command (%2)</source>
        <translation>電臺仍顯示 %1 —— 重發 PTT 命令（%2）</translation>
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
        <translation>FT-991A 沒有名为 '%1' 的模式</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="358" />
        <source>CAT: wrote TX0; (%1 bytes) on %2</source>
        <translation>CAT：已在 %2 上寫入 TX0;（%1 字节）</translation>
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
        <translation>無法佔用 UDP 連接埠 %1：%2</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="110" />
        <source>Cannot open the discovery socket: %1</source>
        <translation>無法打開搜索通訊端：%1</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="120" />
        <source>Audio in: %1</source>
        <translation>音訊輸入：%1</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="122" />
        <source>Audio out: %1</source>
        <translation>音訊輸出：%1</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="156" />
        <source>CAT on %1 at %2 baud</source>
        <translation>CAT 在 %1，%2 鮑</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="132" />
        <source>CAT disabled — receive only, no tuning or PTT</source>
        <translation>CAT 已停用 —— 只能接收，不能調諧也不能 PTT</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="140" />
        <source>Gateway listening on UDP %1</source>
        <translation>閘道在 UDP %1 上監聽</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="253" />
        <source>Client %1:%2 connected</source>
        <translation>用戶端 %1:%2 已連線</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="264" />
        <source>Client %1:%2 timed out</source>
        <translation>用戶端 %1:%2 已超時</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="273" />
        <source>No clients left — dropping PTT</source>
        <translation>沒有用戶端了 —— 鬆開 PTT</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="284" />
        <source>No transmit audio for %1 ms — dropping PTT</source>
        <translation>已有 %1 毫秒沒有發射音訊 —— 鬆開 PTT</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="298" />
        <source>No client for thirty seconds: closing</source>
        <translation>三十秒沒有用戶端：關閉</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="394" />
        <source>Shutdown requested by whoever started me</source>
        <translation>啟動我的一方要求關閉</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="410" />
        <source>Client %1 is leaving</source>
        <translation>用戶端 %1 正在離開</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="437" />
        <source>PTT requested by the client: %1  (CAT %2)</source>
        <translation>用戶端請求 PTT：%1  (CAT %2)</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="438" />
        <source>TRANSMIT</source>
        <translation>發射</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="438" />
        <source>receive</source>
        <translation>接收</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="439" />
        <source>open</source>
        <translation>已打開</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="439" />
        <source>CLOSED</source>
        <translation>已關閉</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="517" />
        <source>Shutdown deferred: %1 client(s) are still using the radio</source>
        <translation>關閉已推遲：還有 %1 個用戶端在用这臺電臺</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="443" />
        <source>Transmit requested but CAT is not open — ignored</source>
        <translation>請求發射，但 CAT 未打開 —— 已忽略</translation>
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
        <translation>閘道沒有回應 —— 重試</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="57" />
        <location filename="../src/link/GatewayLink.cpp" line="150" />
        <source>Disconnected</source>
        <translation>已斷開</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="47" />
        <source>Waiting for the gateway…</source>
        <translation>正在等待閘道…</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="64" />
        <source>Reconnecting to %1…</source>
        <translation>正在重新連線 %1…</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="93" />
        <source>Cannot open a local UDP port: %1</source>
        <translation>無法打開本地 UDP 連接埠：%1</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="114" />
        <location filename="../src/link/GatewayLink.cpp" line="267" />
        <source>Connected to %1</source>
        <translation>已連線到 %1</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="268" />
        <source>%1 — audio only, no CAT</source>
        <translation>%1 —— 只有音訊，沒有 CAT</translation>
    </message>
</context>
<context>
    <name>decortty::link::RadioHub</name>
    <message>
        <location filename="../src/link/RadioHub.cpp" line="11" />
        <location filename="../src/link/RadioHub.cpp" line="205" />
        <source>Disconnected</source>
        <translation>已斷開</translation>
    </message>
    <message>
        <location filename="../src/link/RadioHub.cpp" line="88" />
        <location filename="../src/link/RadioHub.cpp" line="205" />
        <source>Looking for radios…</source>
        <translation>正在尋找電臺…</translation>
    </message>
    <message>
        <location filename="../src/link/RadioHub.cpp" line="151" />
        <source>Radio %1 is no longer on the network</source>
        <translation>電臺 %1 已不在網路上</translation>
    </message>
    <message>
        <location filename="../src/link/RadioHub.cpp" line="158" />
        <source>'%1' is not a valid address</source>
        <translation>'%1' 不是有效的地址</translation>
    </message>
    <message>
        <location filename="../src/link/RadioHub.cpp" line="248" />
        <source>Transmit is unavailable on this connection</source>
        <translation>这條連線上無法發射</translation>
    </message>
</context>
<context>
    <name>decortty::link::SoundCardLink</name>
    <message>
        <location filename="../src/link/SoundCardLink.cpp" line="40" />
        <source>Cannot open the sound card</source>
        <translation>打不開音效卡</translation>
    </message>
    <message>
        <location filename="../src/link/SoundCardLink.cpp" line="46" />
        <source>Listening to %1</source>
        <translation>正在收聽 %1</translation>
    </message>
    <message>
        <location filename="../src/link/SoundCardLink.cpp" line="47" />
        <source>Listening to %1 — receive only</source>
        <translation>正在收聽 %1 — 只接收</translation>
    </message>
    <message>
        <location filename="../src/link/SoundCardLink.cpp" line="58" />
        <source>Disconnected</source>
        <translation>已斷開</translation>
    </message>
</context>
</TS>