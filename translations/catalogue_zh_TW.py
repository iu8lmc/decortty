# -*- coding: utf-8 -*-
"""繁體中文.

業餘無線電的縮寫不譯：AFC、REV、USOS、BPF、NOTCH、LMS、RST、QTH 是國際通用的，
操作者就是這樣找它們的。mark、shift、squelch、waterfall 同樣保留原文——譯過來
就成了電臺裡沒人用的詞。

本檔由 catalogue_zh.py 轉換而來，技術詞彙已按臺灣的習慣調整。
"""

TRANSLATIONS = {
    "TRANSMITTING":
        "發射中",
    "Type here — Enter sends the line":
        "在此輸入 —— Enter 發送該行",
    "Connect a radio to transmit":
        "連線電臺後才能發射",
    "MY CALL":             "MY CALL",
    "QTH":                 "QTH",
    "LANGUAGE":            "語言",
    "changes immediately": "立即生效",

    "SPECTRUM":            "頻譜",
    "RECEIVE":             "接收",
    "TRANSMIT":            "發射",
    "TUNING":              "調諧",
    "DECODER":             "解碼器",
    "FILTERS":             "濾波器",
    "FRAMING":             "帧格式",
    "VIEW":                "視圖",
    "CENTRE":              "居中",
    "STATION":             "電臺",
    "MACROS":              "宏",
    "LOG":                 "日誌",
    "RADIOS ON THE NETWORK": "網路上的電臺",
    "FT-991A GATEWAY":     "FT-991A 閘道",

    "Close":               "關閉",
    "Connect":             "連線",
    "Copy":                "複製",
    "Clear":               "清除",
    "Abort":               "中止",
    "Follow":              "跟隨",
    "Call":                "呼號",
    "Log it":              "記入日誌",
    "Export ADIF":         "匯出 ADIF",
    "Restore defaults":    "恢復預設",
    "Restart":             "重新啟動",
    "Set radio":           "設定電臺",
    "Setup":               "設定",
    "settings":            "調整",
    "close":               "收起",
    "on":                  "開",
    "off":                 "關",
    "band":                "全帶",
    "light":               "亮度",
    "contrast":            "對比度",
    "speed %1x":           "速度 %1x",
    "floor %1 dB":         "本底 %1 dB",
    "jump to end ↓":       "跳到末尾 ↓",
    "DECO":                "DECO",
    "TX: %1":              "TX: %1",
    "transmit":            "transmit",
    "GREY":                "灰階",
    "FIRE":                "火焰",

    "NAME":                "姓名",
    "RST SENT":            "發出 RST",
    "RST RCVD":            "收到 RST",
    "Correction":          "糾錯",
    "Normal":              "常規",
    "Deep":                "深度",
    "Off":                 "關",
    "Bits":                "資料位元",
    "Stop":                "停止位",
    "Par.":                "校驗",
    "none":                "無",
    "even":                "偶",
    "odd":                 "奇",
    "Fill":                "填充",
    "BPF width":           "BPF 帶寬",
    "Character wait":      "字符間等待",
    "Audio in":            "音訊輸入",
    "Audio out":           "音訊輸出",

    "Bandpass around the two tones: throws away\neverything outside before the detector.":
        "在兩個音調周圍帶通：在檢波之前，把外面的\n一切都丟掉。",
    "Removes one frequency. Ctrl+click the waterfall\nto drop it on the carrier that is in the way.":
        "抹掉一個頻率。在瀑布圖上按住 Ctrl 單擊，\n即可把它放到礙事的載波上。",
    "Adaptive canceller: removes steady carriers by\nitself. On weak signals it can eat the RTTY as\nwell — try it and listen.":
        "自適應對消器：自己去掉固定的載波。信號弱時\n連 RTTY 也會一起吃掉——試一試，用耳朵聽。",
    "Finds the tone pair in the band and moves the\ntuning onto it. Once, now.":
        "在頻帶裡找到那一對音調，把調諧移過去。\n只做一次，就現在。",
    "Searches by itself whenever nothing is being\ncopied, and tries the polarity too. While the\ndecoder is locked it touches nothing.":
        "在什麼都收不到的時候自己搜索，也會試極性。\n解碼器鎖定期間，它什麼都不動。",
    "Follows the drift of the signal already locked,\nwithin a few tens of hertz.":
        "跟隨已鎖定信號的漂移，範圍是幾十赫茲。",
    "How much band to show. Narrow around the tones\nshows the individual bits; wide shows who is calling.":
        "顯示多寬的頻帶。圍著音調收窄能看見一個個位元；\n放寬则能看見谁在呼叫。",
    "How fast it scrolls. Slower keeps a longer\nstretch of band in view.":
        "滾動有多快。慢一些，屏幕上能留住更長一段\n頻帶。",
    "Zoom, palette, brightness and speed of the\nwaterfall.":
        "瀑布圖的縮放、色板、亮度和速度。",
    "What to send between characters while you\ntype live.":
        "現場打字時，字符與字符之間發送什麼。",
    "Figures set: US has BELL and apostrophe where\nITA2 swaps the two.":
        "數字集：US 的 BELL 和撇號所在之處，ITA2 把\n兩者對調。",
    "Prints characters whose stop bit read wrong too:\na few more characters on distorted signals, some\nlines of rubbish in exchange.":
        "連停止位读錯的字符也打印：在失真信號上多出\n幾個字符，代价是幾行垃圾。",
    "Unshift on space — recovers a lost FIGS/LTRS, but\nbreaks long figure groups such as serial numbers.":
        "Unshift on space——救回丟失的 FIGS/LTRS，但會\n拆散像流水號那样的長數字串。",
    "Puts the radio into DIGU and narrows its filter\naround the tones.":
        "把電臺切到 DIGU，并把濾波器收窄到音調附近。",
    "Use after changing the port or a device.":
        "更換連接埠或設備之後使用。",
    "When on, the gateway opens at start-up and\ncloses with the program. Turn it off if the radio\nis on another PC.":
        "打開後，閘道隨程式啟動而開、隨程式關閉而關。\n如果電臺在另一臺電腦上，請關掉它。",
    "Highlights callsigns. Click one to put it\nin the HIS CALL field.":
        "高亮顯示呼號。點一下就放进 HIS CALL 欄。",
    "High enough to drive the ALC — check the meter.":
        "足以推動 ALC——看一眼表頭。",

    "%n contact(s)":       ["%n 次通聯"],
    "Worked before: %1 — last on %2":
        "已通聯過：%1 —— 上次是 %2",
    "A callsign is the least a contact needs to be logged":
        "至少要有呼號才能把通聯記入日誌",

    "No radio has answered yet": "還沒有電臺回應",
    "Radios announce themselves on UDP 4992.\nCheck the radio is on the same subnet, or enter its address below.":
        "電臺在 UDP 4992 上自報家門。\n請確設電臺在同一子網内，或在下面填寫它的地址。",
    "Looking for radios…":  "正在尋找電臺…",
    "Waiting for the gateway…": "正在等待閘道…",
    "Connecting to %1…":    "正在連線 %1…",
    "Reconnecting to %1…":  "正在重新連線 %1…",
    "Connected to %1":      "已連線到 %1",
    "Disconnected":         "已斷開",
    "Receiving from %1":    "正在接收 %1",
    "'%1' is not a valid address": "'%1' 不是有效的地址",
    "Radio %1 is no longer on the network": "電臺 %1 已不在網路上",
    "%1 — audio only, no CAT": "%1 —— 只有音訊，沒有 CAT",

    "No recognisable RTTY signal in the band":
        "頻帶内沒有可辨設的 RTTY 信號",
    "Centred on %1 Hz (%2 dB above the floor)":
        "已對準 %1 Hz（高出本底 %2 dB）",
    "Trying the opposite polarity (%1)": "試一下相反的極性（%1）",
    "Signal at %1 Hz: moving there":     "信號在 %1 Hz：移過去",
    "reversed":             "反相",
    "direct":               "正相",

    "not started":          "未啟動",
    "disabled":             "已停用",
    "already listening (started elsewhere)": "已在監聽（在別處啟動）",
    "A gateway is already on the network: not starting another":
        "網路上已经有一個閘道：不再啟動第二個",
    "executable not found": "找不到可執行檔案",
    "Cannot find %1 beside the application": "在程式旁邊找不到 %1",
    "starting on %1":       "正在 %1 上啟動",
    "started":              "已啟動",
    "start failed":         "啟動失敗",
    "Starting the gateway: %1 on port %2": "正在啟動閘道：%1，連接埠 %2",
    "The gateway will not start: %1": "閘道無法啟動：%1",
    "exited":               "已退出",
    "exited (code %1)":     "已退出（代碼 %1）",
    "Gateway exited, code %1": "閘道已退出，代碼 %1",
    "Closing the gateway":  "正在關閉閘道",
    "The gateway is staying up: leaving it to the other clients":
        "閘道繼續運行：留給其他用戶端",
    "left running":         "保持運行",
    "closed":               "已關閉",
    "running on %1":        "在 %1 上運行",
    "%1 is busy — receive only": "%1 被佔用 —— 只能接收",
    "running, no CAT":      "運行中，沒有 CAT",
    "The gateway is not answering — retrying": "閘道沒有回應 —— 重試",
    "Gateway listening on UDP %1": "閘道在 UDP %1 上監聽",
    "Client %1:%2 connected": "用戶端 %1:%2 已連線",
    "Client %1:%2 timed out": "用戶端 %1:%2 已超時",
    "Client %1 is leaving":  "用戶端 %1 正在離開",
    "Shutdown requested by whoever started me": "啟動我的一方要求關閉",
    "Shutdown deferred: %1 client(s) are still using the radio":
        "關閉已推遲：還有 %1 個用戶端在用这臺電臺",
    "No client for thirty seconds: closing": "三十秒沒有用戶端：關閉",
    "No clients left — dropping PTT": "沒有用戶端了 —— 鬆開 PTT",

    "CAT on %1 at %2 baud": "CAT 在 %1，%2 鮑",
    "CAT disabled — receive only, no tuning or PTT":
        "CAT 已停用 —— 只能接收，不能調諧也不能 PTT",
    "Cannot open %1: %2":   "打不開 %1：%2",
    "CAT: queued TX1; on %1": "CAT：已在 %1 上排入 TX1;",
    "CAT: wrote TX0; (%1 bytes) on %2": "CAT：已在 %2 上寫入 TX0;（%1 字节）",
    "Radio still shows %1 — repeating the PTT command (%2)":
        "電臺仍顯示 %1 —— 重發 PTT 命令（%2）",
    "The FT-991A has no mode called '%1'": "FT-991A 沒有名为 '%1' 的模式",
    "PTT requested by the client: %1  (CAT %2)": "用戶端請求 PTT：%1  (CAT %2)",
    "TRANSMIT":             "發射",
    "receive":              "接收",
    "open":                 "已打開",
    "CLOSED":               "已關閉",
    "Audio in: %1":         "音訊輸入：%1",
    "Audio out: %1":        "音訊輸出：%1",
    "No capture device matching '%1'. Available: %2":
        "沒有與 '%1' 相符的錄音設備。可用：%2",
    "No playback device matching '%1' — transmit is unavailable":
        "沒有與 '%1' 相符的放音設備 —— 無法發射",
    "%1 cannot run at %2 Hz": "%1 無法以 %2 Hz 運行",
    "Could not open the audio transport": "打不開音訊通道",
    "Transmit audio overrun — dropped %1 ms": "發射音訊溢出 —— 丟棄了 %1 毫秒",
    "No transmit audio for %1 ms — dropping PTT":
        "已有 %1 毫秒沒有發射音訊 —— 鬆開 PTT",
    "Cannot write the log in %1": "無法把日誌寫入 %1",

    "Transmit is unavailable on this connection":
        "这條連線上無法發射",
    "Transmit is unavailable: no Opus transmit stream":
        "無法發射：沒有 Opus 發射流",
    "Transmit requested but CAT is not open — ignored":
        "請求發射，但 CAT 未打開 —— 已忽略",
    "Transmit ran for three minutes — stopped":
        "發射持續了三分鐘 —— 已停止",
    "The radio is in %1: on voice modes the USB audio does not modulate. Press 'Set radio' in the DECODER panel.":
        "電臺處于 %1：在話音模式下 USB 音訊不會調製。請在解碼器面板上按“設定電臺”。",

    "Cannot bind UDP port %1: %2": "無法佔用 UDP 連接埠 %1：%2",
    "Cannot listen on UDP port %1: %2": "無法在 UDP 連接埠 %1 上監聽：%2",
    "Cannot open a local UDP port: %1": "無法打開本地 UDP 連接埠：%1",
    "Cannot open the VITA-49 UDP socket: %1": "無法打開 VITA-49 的 UDP 通訊端：%1",
    "Cannot open the discovery socket: %1": "無法打開搜索通訊端：%1",
    "Could not create the receive audio stream": "無法建立接收音訊流",
    "Could not create the transmit audio stream": "無法建立發射音訊流",
    "The radio refused the client registration (code 0x%1)":
        "電臺拒絕了用戶端註冊（代碼 0x%1）",
    "The radio rejected the UDP port registration":
        "電臺拒絕了 UDP 連接埠的註冊",
}
