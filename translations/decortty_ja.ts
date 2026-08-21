<?xml version='1.0' encoding='utf-8'?>
<TS version="2.1" language="ja" sourcelanguage="en">
<context>
    <name>BandBar</name>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="34" />
        <source>No radio connected.</source>
        <translation>無線機が接続されていません。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="36" />
        <source>The audio comes from a sound card: the radio is not
under our control. Change band with the dial.</source>
        <translation>音声はサウンドカードから来ています。無線機はこちらの制御下に
ありません。バンドはダイヤルで変えてください。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="37" />
        <source>The serial port is held by another program, so the
radio takes no commands. Close it and reconnect.</source>
        <translation>シリアルポートを別のプログラムが握っているため、無線機は命令を
受け付けません。そちらを閉じてから接続し直してください。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="70" />
        <source>%1 — RTTY at %2 MHz</source>
        <translation>%1 — RTTY は %2 MHz</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="117" />
        <source>Data on the upper sideband: the mode this
decoder is written for.</source>
        <translation>上側波帯のデータ。このデコーダーが想定しているモードです。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="119" />
        <source>Data on the lower sideband. The tones come out
reversed — REV puts them back.</source>
        <translation>下側波帯のデータ。トーンが反転して出るので、REV で戻します。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/BandBar.qml" line="120" />
        <source>Voice sideband. RTTY is copied just the same,
but the radio's filter is wider than it needs.</source>
        <translation>音声用の側波帯。RTTY はそのまま復号できますが、無線機の
フィルターは必要より広くなります。</translation>
    </message>
</context>
<context>
    <name>DecoderPanel</name>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="116" />
        <source>Correction</source>
        <translation>訂正</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="138" />
        <source>Off</source>
        <translation>切</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="146" />
        <source>Normal</source>
        <translation>標準</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="154" />
        <source>Deep</source>
        <translation>深い</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="178" />
        <source>Unshift on space — recovers a lost FIGS/LTRS, but
breaks long figure groups such as serial numbers.</source>
        <translation>Unshift on space — 失われた FIGS/LTRS を取り戻し
ますが、連番のような長い数字の並びを壊します。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="182" />
        <source>Set radio</source>
        <translation>無線機を設定</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/DecoderPanel.qml" line="191" />
        <source>Puts the radio into DIGU and narrows its filter
around the tones.</source>
        <translation>無線機を DIGU にして、フィルターをトーンのまわりに
狭めます。</translation>
    </message>
</context>
<context>
    <name>FilterPanel</name>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="48" />
        <source>FILTERS</source>
        <translation>フィルター</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="64" />
        <source>Bandpass around the two tones: throws away
everything outside before the detector.</source>
        <translation>二つのトーンのまわりの帯域通過。検波の前に、
外側をすべて捨てます。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="76" />
        <source>Removes one frequency. Ctrl+click the waterfall
to drop it on the carrier that is in the way.</source>
        <translation>一つの周波数を消します。ウォーターフォールを
Ctrl+クリックすると、邪魔な搬送波に置けます。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="88" />
        <source>Adaptive canceller: removes steady carriers by
itself. On weak signals it can eat the RTTY as
well — try it and listen.</source>
        <translation>適応型キャンセラー。定常的な搬送波をひとりでに
取り除きます。弱い信号では RTTY まで食べてしまう
ことがあります — 試して耳で確かめてください。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="95" />
        <source>BPF width</source>
        <translation>BPF 幅</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="115" />
        <source>FRAMING</source>
        <translation>フレーム</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="123" />
        <source>Stop</source>
        <translation>ストップ</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="150" />
        <source>Bits</source>
        <translation>ビット</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="179" />
        <source>Par.</source>
        <translation>パリティ</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="185" />
        <source>none</source>
        <translation>なし</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="186" />
        <source>even</source>
        <translation>偶数</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="187" />
        <source>odd</source>
        <translation>奇数</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="214" />
        <source>Figures set: US has BELL and apostrophe where
ITA2 swaps the two.</source>
        <translation>数字セット。US では BELL とアポストロフィが、
ITA2 では入れ替わっています。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="226" />
        <source>Prints characters whose stop bit read wrong too:
a few more characters on distorted signals, some
lines of rubbish in exchange.</source>
        <translation>ストップビットが違って読めた文字も印字します。
歪んだ信号では文字が少し増えますが、代わりに
ごみの行も出ます。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="233" />
        <source>TRANSMIT</source>
        <translation>送信</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="241" />
        <source>Fill</source>
        <translation>埋め</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="247" />
        <source>off</source>
        <translation>切</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="260" />
        <source>What to send between characters while you
type live.</source>
        <translation>その場で打っているあいだ、文字と文字のあいだに
何を送るか。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/FilterPanel.qml" line="267" />
        <source>Character wait</source>
        <translation>文字間の待ち</translation>
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
        <translation>ログ</translation>
    </message>
    <message numerus="yes">
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="40" />
        <source>%n contact(s)</source>
        <translation><numerusform>%n 交信</numerusform></translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="78" />
        <source>RST SENT</source>
        <translation>RST 送</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="85" />
        <source>RST RCVD</source>
        <translation>RST 受</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="89" />
        <source>NAME</source>
        <translation>名前</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="94" />
        <source>Log it</source>
        <translation>ログに記入</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="126" />
        <source>Worked before: %1 — last on %2</source>
        <translation>交信済み: %1 — 前回は %2</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="207" />
        <source>Export ADIF</source>
        <translation>ADIF 書き出し</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/LogDialog.qml" line="213" />
        <source>Close</source>
        <translation>閉じる</translation>
    </message>
</context>
<context>
    <name>Main</name>
    <message>
        <location filename="../qml/DecoRTTY/Main.qml" line="106" />
        <source>DECODER</source>
        <translation>デコーダー</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/Main.qml" line="106" />
        <source>FILTERS</source>
        <translation>フィルター</translation>
    </message>
</context>
<context>
    <name>RadioDialog</name>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="69" />
        <source>FT-991A GATEWAY</source>
        <translation>FT-991A ゲートウェイ</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="85" />
        <source>on</source>
        <translation>入</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="85" />
        <source>off</source>
        <translation>切</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="94" />
        <source>When on, the gateway opens at start-up and
closes with the program. Turn it off if the radio
is on another PC.</source>
        <translation>入にすると、ゲートウェイは起動時に開き、プログラム
と一緒に閉じます。無線機が別の PC にある場合は切に
してください。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="98" />
        <source>close</source>
        <translation>閉じる</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="98" />
        <source>settings</source>
        <translation>調整</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="142" />
        <source>Audio in</source>
        <translation>音声入力</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="160" />
        <source>Restart</source>
        <translation>再起動</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="169" />
        <source>Use after changing the port or a device.</source>
        <translation>ポートや装置を変えたあとに使います。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="174" />
        <source>Audio out</source>
        <translation>音声出力</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="199" />
        <source>RADIOS ON THE NETWORK</source>
        <translation>ネットワーク上の無線機</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="309" />
        <source>No radio has answered yet</source>
        <translation>まだどの無線機も応答していません</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="315" />
        <source>Radios announce themselves on UDP 4992.
Check the radio is on the same subnet, or enter its address below.</source>
        <translation>無線機は UDP 4992 で自分を知らせます。
無線機が同じサブネットにあるか確かめるか、下にアドレスを入れてください。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="351" />
        <source>FROM A SOUND CARD</source>
        <translation>サウンドカードから</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="359" />
        <source>no frequency, no PTT — transmit on VOX</source>
        <translation>周波数も PTT もなし — 送信は VOX で</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="393" />
        <source>— no transmit —</source>
        <translation>— 送信しない —</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="397" />
        <source>Listen</source>
        <translation>聞く</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="462" />
        <source>Connect</source>
        <translation>接続</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/RadioDialog.qml" line="474" />
        <source>Close</source>
        <translation>閉じる</translation>
    </message>
</context>
<context>
    <name>ReceivePanel</name>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="61" />
        <source>RECEIVE</source>
        <translation>受信</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="90" />
        <source>Call</source>
        <translation>コールサイン</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="99" />
        <source>Highlights callsigns. Click one to put it
in the HIS CALL field.</source>
        <translation>コールサインを強調します。クリックすると
HIS CALL 欄に入ります。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="104" />
        <source>Follow</source>
        <translation>追従</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="118" />
        <source>Copy</source>
        <translation>コピー</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="130" />
        <source>Clear</source>
        <translation>消去</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/ReceivePanel.qml" line="291" />
        <source>jump to end ↓</source>
        <translation>末尾へ ↓</translation>
    </message>
</context>
<context>
    <name>SetupDialog</name>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="37" />
        <source>LANGUAGE</source>
        <translation>言語</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="59" />
        <source>changes immediately</source>
        <translation>すぐに切り替わります</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="74" />
        <source>STATION</source>
        <translation>局</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="82" />
        <source>MY CALL</source>
        <translation>MY CALL</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="89" />
        <source>NAME</source>
        <translation>名前</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="95" />
        <source>QTH</source>
        <translation>QTH</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="115" />
        <source>MACROS</source>
        <translation>マクロ</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="196" />
        <source>Restore defaults</source>
        <translation>既定に戻す</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/SetupDialog.qml" line="202" />
        <source>Close</source>
        <translation>閉じる</translation>
    </message>
</context>
<context>
    <name>StatusBar</name>
    <message>
        <location filename="../qml/DecoRTTY/components/StatusBar.qml" line="79" />
        <source>shared with %1</source>
        <translation>%1 と共用</translation>
    </message>
</context>
<context>
    <name>TransmitPanel</name>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="72" />
        <source>Type here — Enter sends the line</source>
        <translation>ここに入力 — Enter で行を送信</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="73" />
        <source>Connect a radio to transmit</source>
        <translation>送信するには無線機を接続してください</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="102" />
        <source>TRANSMITTING</source>
        <translation>送信中</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="102" />
        <source>TRANSMIT</source>
        <translation>送信</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="117" />
        <source>Abort</source>
        <translation>中止</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="127" />
        <source>Clear</source>
        <translation>消去</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/TransmitPanel.qml" line="199" />
        <source>High enough to drive the ALC — check the meter.</source>
        <translation>ALC を振らせるのに十分な高さ — メーターを見てください。</translation>
    </message>
</context>
<context>
    <name>TuningScope</name>
    <message>
        <location filename="../qml/DecoRTTY/components/TuningScope.qml" line="26" />
        <source>TUNING</source>
        <translation>同調</translation>
    </message>
</context>
<context>
    <name>WaterfallPanel</name>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="52" />
        <source>SPECTRUM</source>
        <translation>スペクトラム</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="72" />
        <source>VIEW</source>
        <translation>表示</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="81" />
        <source>Zoom, palette, brightness and speed of the
waterfall.</source>
        <translation>ウォーターフォールの拡大、パレット、明るさ、速度。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="87" />
        <source>CENTRE</source>
        <translation>中央へ</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="95" />
        <source>Finds the tone pair in the band and moves the
tuning onto it. Once, now.</source>
        <translation>バンド内のトーン対を見つけ、同調をそこへ移します。
一度だけ、いま。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="108" />
        <source>Searches by itself whenever nothing is being
copied, and tries the polarity too. While the
decoder is locked it touches nothing.</source>
        <translation>何も受信できていないあいだ、ひとりでに探し、
極性も試します。デコーダーが同期している間は
何にも触れません。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="121" />
        <source>Follows the drift of the signal already locked,
within a few tens of hertz.</source>
        <translation>すでに捕えた信号のずれを、数十ヘルツの範囲で
追いかけます。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="168" />
        <source>band</source>
        <translation>バンド</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="177" />
        <source>How much band to show. Narrow around the tones
shows the individual bits; wide shows who is calling.</source>
        <translation>どれだけの帯域を映すか。トーンのまわりを狭くすると
一つ一つのビットが見え、広くすると誰が呼んでいるか
が見えます。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="181" />
        <source>DECO</source>
        <translation>DECO</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="181" />
        <source>GREY</source>
        <translation>グレー</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="181" />
        <source>FIRE</source>
        <translation>ファイア</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="190" />
        <source>speed %1x</source>
        <translation>速度 %1x</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="197" />
        <source>How fast it scrolls. Slower keeps a longer
stretch of band in view.</source>
        <translation>どれだけ速く流れるか。遅くすると、より長い
帯域の一続きが画面に残ります。</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="202" />
        <source>light</source>
        <translation>明るさ</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="217" />
        <source>contrast</source>
        <translation>コントラスト</translation>
    </message>
    <message>
        <location filename="../qml/DecoRTTY/components/WaterfallPanel.qml" line="232" />
        <source>floor %1 dB</source>
        <translation>ノイズ %1 dB</translation>
    </message>
</context>
<context>
    <name>decortty::app::GatewaySupervisor</name>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="24" />
        <source>not started</source>
        <translation>未起動</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="121" />
        <source>disabled</source>
        <translation>無効</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="131" />
        <source>already listening (started elsewhere)</source>
        <translation>すでに待ち受け中（別の場所で起動）</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="132" />
        <source>A gateway is already on the network: not starting another</source>
        <translation>ネットワークにすでにゲートウェイがあります。もう一つは起動しません</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="138" />
        <source>executable not found</source>
        <translation>実行ファイルが見つかりません</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="139" />
        <source>Cannot find %1 beside the application</source>
        <translation>アプリケーションの隣に %1 が見つかりません</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="164" />
        <source>start failed</source>
        <translation>起動に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="165" />
        <source>The gateway will not start: %1</source>
        <translation>ゲートウェイが起動しません: %1</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="172" />
        <source>exited</source>
        <translation>終了しました</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="172" />
        <source>exited (code %1)</source>
        <translation>終了しました（コード %1）</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="174" />
        <source>Gateway exited, code %1</source>
        <translation>ゲートウェイ終了、コード %1</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="187" />
        <source>starting on %1</source>
        <translation>%1 で起動中</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="188" />
        <source>Starting the gateway: %1 on port %2</source>
        <translation>ゲートウェイを起動します: %1、ポート %2</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="194" />
        <source>started</source>
        <translation>起動しました</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="216" />
        <source>Closing the gateway</source>
        <translation>ゲートウェイを閉じます</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="235" />
        <source>The gateway is staying up: leaving it to the other clients</source>
        <translation>ゲートウェイはそのまま動かします。他のクライアントに任せます</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="239" />
        <source>left running</source>
        <translation>動かしたまま</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="244" />
        <source>closed</source>
        <translation>閉じました</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="271" />
        <source>running on %1</source>
        <translation>%1 で動作中</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="273" />
        <source>%1 is busy — receive only</source>
        <translation>%1 は使用中 — 受信のみ</translation>
    </message>
    <message>
        <location filename="../src/app/GatewaySupervisor.cpp" line="275" />
        <source>running, no CAT</source>
        <translation>動作中、CAT なし</translation>
    </message>
</context>
<context>
    <name>decortty::app::QsoLog</name>
    <message>
        <location filename="../src/app/QsoLog.cpp" line="75" />
        <source>A callsign is the least a contact needs to be logged</source>
        <translation>交信を記録するには、少なくともコールサインが要ります</translation>
    </message>
    <message>
        <location filename="../src/app/QsoLog.cpp" line="272" />
        <source>Cannot write the log in %1</source>
        <translation>%1 にログを書けません</translation>
    </message>
</context>
<context>
    <name>decortty::app::RttyEngine</name>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="58" />
        <source>Transmit ran for three minutes — stopped</source>
        <translation>送信が三分続きました — 止めました</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="97" />
        <source>Trying the opposite polarity (%1)</source>
        <translation>逆の極性を試します（%1）</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="98" />
        <source>reversed</source>
        <translation>逆</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="98" />
        <source>direct</source>
        <translation>正</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="99" />
        <source>Signal at %1 Hz: moving there</source>
        <translation>%1 Hz に信号: そこへ移ります</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="230" />
        <source>No recognisable RTTY signal in the band</source>
        <translation>バンドに識別できる RTTY 信号がありません</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="236" />
        <source>Centred on %1 Hz (%2 dB above the floor)</source>
        <translation>%1 Hz に合わせました（ノイズより %2 dB 上）</translation>
    </message>
    <message>
        <location filename="../src/app/RttyEngine.cpp" line="592" />
        <source>The radio is in %1: on voice modes the USB audio does not modulate. Press 'Set radio' in the DECODER panel.</source>
        <translation>無線機は %1 です。音声モードでは USB の音声は変調しません。デコーダー画面の「無線機を設定」を押してください。</translation>
    </message>
</context>
<context>
    <name>decortty::flex::FlexApiClient</name>
    <message>
        <location filename="../src/flex/FlexApiClient.cpp" line="255" />
        <source>The radio refused the client registration (code 0x%1)</source>
        <translation>無線機がクライアント登録を拒みました（コード 0x%1）</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexApiClient.cpp" line="337" />
        <source>another station</source>
        <translation>別の局</translation>
    </message>
</context>
<context>
    <name>decortty::flex::FlexDiscovery</name>
    <message>
        <location filename="../src/flex/FlexDiscovery.cpp" line="35" />
        <source>Cannot listen on UDP port %1: %2</source>
        <translation>UDP ポート %1 で待ち受けできません: %2</translation>
    </message>
</context>
<context>
    <name>decortty::flex::FlexRadioLink</name>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="20" />
        <source>Sharing %1 with %2</source>
        <translation>%1 を %2 と共用</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="36" />
        <location filename="../src/flex/FlexRadioLink.cpp" line="109" />
        <source>Disconnected</source>
        <translation>切断しました</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="61" />
        <location filename="../src/flex/FlexRadioLink.cpp" line="73" />
        <source>Connecting to %1…</source>
        <translation>%1 に接続しています…</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="87" />
        <source>Connected to %1</source>
        <translation>%1 に接続しました</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="103" />
        <source>Reconnecting to %1…</source>
        <translation>%1 に接続し直しています…</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="117" />
        <source>Could not open the audio transport</source>
        <translation>音声の経路を開けませんでした</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="127" />
        <source>The radio rejected the UDP port registration</source>
        <translation>無線機が UDP ポートの登録を拒みました</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="146" />
        <source>The radio will not give audio to a bound client — reconnecting as a GUI station</source>
        <translation>無線機は従属クライアントに音声を渡しません — GUI 局として接続し直します</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="153" />
        <source>Could not create the receive audio stream</source>
        <translation>受信音声ストリームを作れませんでした</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="158" />
        <source>Receiving from %1</source>
        <translation>%1 から受信中</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="166" />
        <source>Could not create the transmit audio stream</source>
        <translation>送信音声ストリームを作れませんでした</translation>
    </message>
    <message>
        <location filename="../src/flex/FlexRadioLink.cpp" line="343" />
        <source>Transmit is unavailable: no Opus transmit stream</source>
        <translation>送信できません: Opus の送信ストリームがありません</translation>
    </message>
</context>
<context>
    <name>decortty::flex::FlexVitaStream</name>
    <message>
        <location filename="../src/flex/FlexVitaStream.cpp" line="21" />
        <source>Cannot open the VITA-49 UDP socket: %1</source>
        <translation>VITA-49 の UDP ソケットを開けません: %1</translation>
    </message>
</context>
<context>
    <name>decortty::gateway::CodecAudio</name>
    <message>
        <location filename="../src/gateway/CodecAudio.cpp" line="72" />
        <source>No capture device matching '%1'. Available: %2</source>
        <translation>'%1' に合う録音装置がありません。使えるもの: %2</translation>
    </message>
    <message>
        <location filename="../src/gateway/CodecAudio.cpp" line="83" />
        <source>%1 cannot run at %2 Hz</source>
        <translation>%1 は %2 Hz では動きません</translation>
    </message>
    <message>
        <location filename="../src/gateway/CodecAudio.cpp" line="116" />
        <source>No playback device matching '%1' — transmit is unavailable</source>
        <translation>'%1' に合う再生装置がありません — 送信できません</translation>
    </message>
    <message>
        <location filename="../src/gateway/CodecAudio.cpp" line="215" />
        <source>Transmit audio overrun — dropped %1 ms</source>
        <translation>送信音声があふれました — %1 ms を捨てました</translation>
    </message>
</context>
<context>
    <name>decortty::gateway::Ft991Cat</name>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="120" />
        <source>Cannot open %1: %2</source>
        <translation>%1 を開けません: %2</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="232" />
        <source>Radio still shows %1 — repeating the PTT command (%2)</source>
        <translation>無線機はまだ %1 を示しています — PTT 命令を繰り返します（%2）</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="233" />
        <source>transmit</source>
        <translation>transmit</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="233" />
        <source>receive</source>
        <translation>受信</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="336" />
        <source>The FT-991A has no mode called '%1'</source>
        <translation>FT-991A に '%1' というモードはありません</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="358" />
        <source>CAT: wrote TX0; (%1 bytes) on %2</source>
        <translation>CAT: %2 に TX0; を書き込み（%1 バイト）</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Cat.cpp" line="363" />
        <source>CAT: queued TX1; on %1</source>
        <translation>CAT: %1 に TX1; を待ち行列へ</translation>
    </message>
</context>
<context>
    <name>decortty::gateway::Ft991Gateway</name>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="102" />
        <source>Cannot bind UDP port %1: %2</source>
        <translation>UDP ポート %1 を確保できません: %2</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="110" />
        <source>Cannot open the discovery socket: %1</source>
        <translation>探索用ソケットを開けません: %1</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="120" />
        <source>Audio in: %1</source>
        <translation>音声入力: %1</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="122" />
        <source>Audio out: %1</source>
        <translation>音声出力: %1</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="156" />
        <source>CAT on %1 at %2 baud</source>
        <translation>CAT は %1、%2 ボー</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="132" />
        <source>CAT disabled — receive only, no tuning or PTT</source>
        <translation>CAT 無効 — 受信のみ、同調も PTT もできません</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="140" />
        <source>Gateway listening on UDP %1</source>
        <translation>ゲートウェイは UDP %1 で待ち受けています</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="253" />
        <source>Client %1:%2 connected</source>
        <translation>クライアント %1:%2 が接続しました</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="264" />
        <source>Client %1:%2 timed out</source>
        <translation>クライアント %1:%2 が時間切れです</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="273" />
        <source>No clients left — dropping PTT</source>
        <translation>クライアントがいなくなりました — PTT を離します</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="284" />
        <source>No transmit audio for %1 ms — dropping PTT</source>
        <translation>%1 ms のあいだ送信音声がありません — PTT を離します</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="298" />
        <source>No client for thirty seconds: closing</source>
        <translation>三十秒間クライアントなし: 閉じます</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="394" />
        <source>Shutdown requested by whoever started me</source>
        <translation>起動元から終了を求められました</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="410" />
        <source>Client %1 is leaving</source>
        <translation>クライアント %1 が去ります</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="437" />
        <source>PTT requested by the client: %1  (CAT %2)</source>
        <translation>クライアントが PTT を要求: %1  (CAT %2)</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="438" />
        <source>TRANSMIT</source>
        <translation>送信</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="438" />
        <source>receive</source>
        <translation>受信</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="439" />
        <source>open</source>
        <translation>開</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="439" />
        <source>CLOSED</source>
        <translation>閉</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="517" />
        <source>Shutdown deferred: %1 client(s) are still using the radio</source>
        <translation>終了を保留: %1 台のクライアントがまだ無線機を使っています</translation>
    </message>
    <message>
        <location filename="../src/gateway/Ft991Gateway.cpp" line="443" />
        <source>Transmit requested but CAT is not open — ignored</source>
        <translation>送信を求められましたが CAT が開いていません — 無視しました</translation>
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
        <translation>ゲートウェイが応答しません — やり直します</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="57" />
        <location filename="../src/link/GatewayLink.cpp" line="150" />
        <source>Disconnected</source>
        <translation>切断しました</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="47" />
        <source>Waiting for the gateway…</source>
        <translation>ゲートウェイを待っています…</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="64" />
        <source>Reconnecting to %1…</source>
        <translation>%1 に接続し直しています…</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="93" />
        <source>Cannot open a local UDP port: %1</source>
        <translation>ローカルの UDP ポートを開けません: %1</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="114" />
        <location filename="../src/link/GatewayLink.cpp" line="267" />
        <source>Connected to %1</source>
        <translation>%1 に接続しました</translation>
    </message>
    <message>
        <location filename="../src/link/GatewayLink.cpp" line="268" />
        <source>%1 — audio only, no CAT</source>
        <translation>%1 — 音声のみ、CAT なし</translation>
    </message>
</context>
<context>
    <name>decortty::link::RadioHub</name>
    <message>
        <location filename="../src/link/RadioHub.cpp" line="11" />
        <location filename="../src/link/RadioHub.cpp" line="202" />
        <source>Disconnected</source>
        <translation>切断しました</translation>
    </message>
    <message>
        <location filename="../src/link/RadioHub.cpp" line="85" />
        <location filename="../src/link/RadioHub.cpp" line="202" />
        <source>Looking for radios…</source>
        <translation>無線機を探しています…</translation>
    </message>
    <message>
        <location filename="../src/link/RadioHub.cpp" line="148" />
        <source>Radio %1 is no longer on the network</source>
        <translation>無線機 %1 はもうネットワークにいません</translation>
    </message>
    <message>
        <location filename="../src/link/RadioHub.cpp" line="155" />
        <source>'%1' is not a valid address</source>
        <translation>'%1' は正しいアドレスではありません</translation>
    </message>
    <message>
        <location filename="../src/link/RadioHub.cpp" line="245" />
        <source>Transmit is unavailable on this connection</source>
        <translation>この接続では送信できません</translation>
    </message>
</context>
<context>
    <name>decortty::link::SoundCardLink</name>
    <message>
        <location filename="../src/link/SoundCardLink.cpp" line="40" />
        <source>Cannot open the sound card</source>
        <translation>サウンドカードを開けません</translation>
    </message>
    <message>
        <location filename="../src/link/SoundCardLink.cpp" line="46" />
        <source>Listening to %1</source>
        <translation>%1 を聞いています</translation>
    </message>
    <message>
        <location filename="../src/link/SoundCardLink.cpp" line="47" />
        <source>Listening to %1 — receive only</source>
        <translation>%1 を聞いています — 受信のみ</translation>
    </message>
    <message>
        <location filename="../src/link/SoundCardLink.cpp" line="58" />
        <source>Disconnected</source>
        <translation>切断しました</translation>
    </message>
</context>
</TS>