# -*- coding: utf-8 -*-
"""日本語.

アマチュア無線の略号は訳しません。AFC、REV、USOS、BPF、NOTCH、LMS、RST、QTH は
国際的なもので、運用者はこの形で探します。mark、shift、squelch、waterfall も
同様に原語のままです。訳すと、無線室で誰も使わない言葉になります。
"""

TRANSLATIONS = {
    "FROM A SOUND CARD":
        "サウンドカードから",
    "no frequency, no PTT — transmit on VOX":
        "周波数も PTT もなし — 送信は VOX で",
    "— no transmit —":
        "— 送信しない —",
    "Listen":
        "聞く",
    "Cannot open the sound card":
        "サウンドカードを開けません",
    "Listening to %1":
        "%1 を聞いています",
    "Listening to %1 — receive only":
        "%1 を聞いています — 受信のみ",
    "shared with %1":
        "%1 と共用",
    "Sharing %1 with %2":
        "%1 を %2 と共用",
    "another station":
        "別の局",
    "The radio will not give audio to a bound client — reconnecting as a GUI station":
        "無線機は従属クライアントに音声を渡しません — GUI 局として接続し直します",
    "TRANSMITTING":
        "送信中",
    "Type here — Enter sends the line":
        "ここに入力 — Enter で行を送信",
    "Connect a radio to transmit":
        "送信するには無線機を接続してください",
    "MY CALL":             "MY CALL",
    "QTH":                 "QTH",
    "LANGUAGE":            "言語",
    "changes immediately": "すぐに切り替わります",

    "SPECTRUM":            "スペクトラム",
    "RECEIVE":             "受信",
    "TRANSMIT":            "送信",
    "TUNING":              "同調",
    "DECODER":             "デコーダー",
    "FILTERS":             "フィルター",
    "FRAMING":             "フレーム",
    "VIEW":                "表示",
    "CENTRE":              "中央へ",
    "STATION":             "局",
    "MACROS":              "マクロ",
    "LOG":                 "ログ",
    "RADIOS ON THE NETWORK": "ネットワーク上の無線機",
    "FT-991A GATEWAY":     "FT-991A ゲートウェイ",

    "Close":               "閉じる",
    "Connect":             "接続",
    "Copy":                "コピー",
    "Clear":               "消去",
    "Abort":               "中止",
    "Follow":              "追従",
    "Call":                "コールサイン",
    "Log it":              "ログに記入",
    "Export ADIF":         "ADIF 書き出し",
    "Restore defaults":    "既定に戻す",
    "Restart":             "再起動",
    "Set radio":           "無線機を設定",
    "Setup":               "設定",
    "settings":            "調整",
    "close":               "閉じる",
    "on":                  "入",
    "off":                 "切",
    "band":                "バンド",
    "light":               "明るさ",
    "contrast":            "コントラスト",
    "speed %1x":           "速度 %1x",
    "floor %1 dB":         "ノイズ %1 dB",
    "jump to end ↓":       "末尾へ ↓",
    "DECO":                "DECO",
    "TX: %1":              "TX: %1",
    "transmit":            "transmit",
    "GREY":                "グレー",
    "FIRE":                "ファイア",

    "NAME":                "名前",
    "RST SENT":            "RST 送",
    "RST RCVD":            "RST 受",
    "Correction":          "訂正",
    "Normal":              "標準",
    "Deep":                "深い",
    "Off":                 "切",
    "Bits":                "ビット",
    "Stop":                "ストップ",
    "Par.":                "パリティ",
    "none":                "なし",
    "even":                "偶数",
    "odd":                 "奇数",
    "Fill":                "埋め",
    "BPF width":           "BPF 幅",
    "Character wait":      "文字間の待ち",
    "Audio in":            "音声入力",
    "Audio out":           "音声出力",

    "Bandpass around the two tones: throws away\neverything outside before the detector.":
        "二つのトーンのまわりの帯域通過。検波の前に、\n外側をすべて捨てます。",
    "Removes one frequency. Ctrl+click the waterfall\nto drop it on the carrier that is in the way.":
        "一つの周波数を消します。ウォーターフォールを\nCtrl+クリックすると、邪魔な搬送波に置けます。",
    "Adaptive canceller: removes steady carriers by\nitself. On weak signals it can eat the RTTY as\nwell — try it and listen.":
        "適応型キャンセラー。定常的な搬送波をひとりでに\n取り除きます。弱い信号では RTTY まで食べてしまう\nことがあります — 試して耳で確かめてください。",
    "Finds the tone pair in the band and moves the\ntuning onto it. Once, now.":
        "バンド内のトーン対を見つけ、同調をそこへ移します。\n一度だけ、いま。",
    "Searches by itself whenever nothing is being\ncopied, and tries the polarity too. While the\ndecoder is locked it touches nothing.":
        "何も受信できていないあいだ、ひとりでに探し、\n極性も試します。デコーダーが同期している間は\n何にも触れません。",
    "Follows the drift of the signal already locked,\nwithin a few tens of hertz.":
        "すでに捕えた信号のずれを、数十ヘルツの範囲で\n追いかけます。",
    "How much band to show. Narrow around the tones\nshows the individual bits; wide shows who is calling.":
        "どれだけの帯域を映すか。トーンのまわりを狭くすると\n一つ一つのビットが見え、広くすると誰が呼んでいるか\nが見えます。",
    "How fast it scrolls. Slower keeps a longer\nstretch of band in view.":
        "どれだけ速く流れるか。遅くすると、より長い\n帯域の一続きが画面に残ります。",
    "Zoom, palette, brightness and speed of the\nwaterfall.":
        "ウォーターフォールの拡大、パレット、明るさ、速度。",
    "What to send between characters while you\ntype live.":
        "その場で打っているあいだ、文字と文字のあいだに\n何を送るか。",
    "Figures set: US has BELL and apostrophe where\nITA2 swaps the two.":
        "数字セット。US では BELL とアポストロフィが、\nITA2 では入れ替わっています。",
    "Prints characters whose stop bit read wrong too:\na few more characters on distorted signals, some\nlines of rubbish in exchange.":
        "ストップビットが違って読めた文字も印字します。\n歪んだ信号では文字が少し増えますが、代わりに\nごみの行も出ます。",
    "Unshift on space — recovers a lost FIGS/LTRS, but\nbreaks long figure groups such as serial numbers.":
        "Unshift on space — 失われた FIGS/LTRS を取り戻し\nますが、連番のような長い数字の並びを壊します。",
    "Puts the radio into DIGU and narrows its filter\naround the tones.":
        "無線機を DIGU にして、フィルターをトーンのまわりに\n狭めます。",
    "Use after changing the port or a device.":
        "ポートや装置を変えたあとに使います。",
    "When on, the gateway opens at start-up and\ncloses with the program. Turn it off if the radio\nis on another PC.":
        "入にすると、ゲートウェイは起動時に開き、プログラム\nと一緒に閉じます。無線機が別の PC にある場合は切に\nしてください。",
    "Highlights callsigns. Click one to put it\nin the HIS CALL field.":
        "コールサインを強調します。クリックすると\nHIS CALL 欄に入ります。",
    "High enough to drive the ALC — check the meter.":
        "ALC を振らせるのに十分な高さ — メーターを見てください。",

    "%n contact(s)":       ["%n 交信"],
    "Worked before: %1 — last on %2":
        "交信済み: %1 — 前回は %2",
    "A callsign is the least a contact needs to be logged":
        "交信を記録するには、少なくともコールサインが要ります",

    "No radio has answered yet": "まだどの無線機も応答していません",
    "Radios announce themselves on UDP 4992.\nCheck the radio is on the same subnet, or enter its address below.":
        "無線機は UDP 4992 で自分を知らせます。\n無線機が同じサブネットにあるか確かめるか、下にアドレスを入れてください。",
    "Looking for radios…":  "無線機を探しています…",
    "Waiting for the gateway…": "ゲートウェイを待っています…",
    "Connecting to %1…":    "%1 に接続しています…",
    "Reconnecting to %1…":  "%1 に接続し直しています…",
    "Connected to %1":      "%1 に接続しました",
    "Disconnected":         "切断しました",
    "Receiving from %1":    "%1 から受信中",
    "'%1' is not a valid address": "'%1' は正しいアドレスではありません",
    "Radio %1 is no longer on the network": "無線機 %1 はもうネットワークにいません",
    "%1 — audio only, no CAT": "%1 — 音声のみ、CAT なし",

    "No recognisable RTTY signal in the band":
        "バンドに識別できる RTTY 信号がありません",
    "Centred on %1 Hz (%2 dB above the floor)":
        "%1 Hz に合わせました（ノイズより %2 dB 上）",
    "Trying the opposite polarity (%1)": "逆の極性を試します（%1）",
    "Signal at %1 Hz: moving there":     "%1 Hz に信号: そこへ移ります",
    "reversed":             "逆",
    "direct":               "正",

    "not started":          "未起動",
    "disabled":             "無効",
    "already listening (started elsewhere)": "すでに待ち受け中（別の場所で起動）",
    "A gateway is already on the network: not starting another":
        "ネットワークにすでにゲートウェイがあります。もう一つは起動しません",
    "executable not found": "実行ファイルが見つかりません",
    "Cannot find %1 beside the application": "アプリケーションの隣に %1 が見つかりません",
    "starting on %1":       "%1 で起動中",
    "started":              "起動しました",
    "start failed":         "起動に失敗しました",
    "Starting the gateway: %1 on port %2": "ゲートウェイを起動します: %1、ポート %2",
    "The gateway will not start: %1": "ゲートウェイが起動しません: %1",
    "exited":               "終了しました",
    "exited (code %1)":     "終了しました（コード %1）",
    "Gateway exited, code %1": "ゲートウェイ終了、コード %1",
    "Closing the gateway":  "ゲートウェイを閉じます",
    "The gateway is staying up: leaving it to the other clients":
        "ゲートウェイはそのまま動かします。他のクライアントに任せます",
    "left running":         "動かしたまま",
    "closed":               "閉じました",
    "running on %1":        "%1 で動作中",
    "%1 is busy — receive only": "%1 は使用中 — 受信のみ",
    "running, no CAT":      "動作中、CAT なし",
    "The gateway is not answering — retrying": "ゲートウェイが応答しません — やり直します",
    "Gateway listening on UDP %1": "ゲートウェイは UDP %1 で待ち受けています",
    "Client %1:%2 connected": "クライアント %1:%2 が接続しました",
    "Client %1:%2 timed out": "クライアント %1:%2 が時間切れです",
    "Client %1 is leaving":  "クライアント %1 が去ります",
    "Shutdown requested by whoever started me": "起動元から終了を求められました",
    "Shutdown deferred: %1 client(s) are still using the radio":
        "終了を保留: %1 台のクライアントがまだ無線機を使っています",
    "No client for thirty seconds: closing": "三十秒間クライアントなし: 閉じます",
    "No clients left — dropping PTT": "クライアントがいなくなりました — PTT を離します",

    "CAT on %1 at %2 baud": "CAT は %1、%2 ボー",
    "CAT disabled — receive only, no tuning or PTT":
        "CAT 無効 — 受信のみ、同調も PTT もできません",
    "Cannot open %1: %2":   "%1 を開けません: %2",
    "CAT: queued TX1; on %1": "CAT: %1 に TX1; を待ち行列へ",
    "CAT: wrote TX0; (%1 bytes) on %2": "CAT: %2 に TX0; を書き込み（%1 バイト）",
    "Radio still shows %1 — repeating the PTT command (%2)":
        "無線機はまだ %1 を示しています — PTT 命令を繰り返します（%2）",
    "The FT-991A has no mode called '%1'": "FT-991A に '%1' というモードはありません",
    "PTT requested by the client: %1  (CAT %2)": "クライアントが PTT を要求: %1  (CAT %2)",
    "TRANSMIT":             "送信",
    "receive":              "受信",
    "open":                 "開",
    "CLOSED":               "閉",
    "Audio in: %1":         "音声入力: %1",
    "Audio out: %1":        "音声出力: %1",
    "No capture device matching '%1'. Available: %2":
        "'%1' に合う録音装置がありません。使えるもの: %2",
    "No playback device matching '%1' — transmit is unavailable":
        "'%1' に合う再生装置がありません — 送信できません",
    "%1 cannot run at %2 Hz": "%1 は %2 Hz では動きません",
    "Could not open the audio transport": "音声の経路を開けませんでした",
    "Transmit audio overrun — dropped %1 ms": "送信音声があふれました — %1 ms を捨てました",
    "No transmit audio for %1 ms — dropping PTT":
        "%1 ms のあいだ送信音声がありません — PTT を離します",
    "Cannot write the log in %1": "%1 にログを書けません",

    "Transmit is unavailable on this connection":
        "この接続では送信できません",
    "Transmit is unavailable: no Opus transmit stream":
        "送信できません: Opus の送信ストリームがありません",
    "Transmit requested but CAT is not open — ignored":
        "送信を求められましたが CAT が開いていません — 無視しました",
    "Transmit ran for three minutes — stopped":
        "送信が三分続きました — 止めました",
    "The radio is in %1: on voice modes the USB audio does not modulate. Press 'Set radio' in the DECODER panel.":
        "無線機は %1 です。音声モードでは USB の音声は変調しません。デコーダー画面の「無線機を設定」を押してください。",

    "Cannot bind UDP port %1: %2": "UDP ポート %1 を確保できません: %2",
    "Cannot listen on UDP port %1: %2": "UDP ポート %1 で待ち受けできません: %2",
    "Cannot open a local UDP port: %1": "ローカルの UDP ポートを開けません: %1",
    "Cannot open the VITA-49 UDP socket: %1": "VITA-49 の UDP ソケットを開けません: %1",
    "Cannot open the discovery socket: %1": "探索用ソケットを開けません: %1",
    "Could not create the receive audio stream": "受信音声ストリームを作れませんでした",
    "Could not create the transmit audio stream": "送信音声ストリームを作れませんでした",
    "The radio refused the client registration (code 0x%1)":
        "無線機がクライアント登録を拒みました（コード 0x%1）",
    "The radio rejected the UDP port registration":
        "無線機が UDP ポートの登録を拒みました",

    "No radio connected.":
        "無線機が接続されていません。",
    "The audio comes from a sound card: the radio is not\nunder our control. Change band with the dial.":
        "音声はサウンドカードから来ています。無線機はこちらの制御下に\nありません。バンドはダイヤルで変えてください。",
    "The serial port is held by another program, so the\nradio takes no commands. Close it and reconnect.":
        "シリアルポートを別のプログラムが握っているため、無線機は命令を\n受け付けません。そちらを閉じてから接続し直してください。",
    "%1 — RTTY at %2 MHz":
        "%1 — RTTY は %2 MHz",
    "Data on the upper sideband: the mode this\ndecoder is written for.":
        "上側波帯のデータ。このデコーダーが想定しているモードです。",
    "Data on the lower sideband. The tones come out\nreversed — REV puts them back.":
        "下側波帯のデータ。トーンが反転して出るので、REV で戻します。",
    "Voice sideband. RTTY is copied just the same,\nbut the radio's filter is wider than it needs.":
        "音声用の側波帯。RTTY はそのまま復号できますが、無線機の\nフィルターは必要より広くなります。",
}
