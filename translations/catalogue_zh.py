# -*- coding: utf-8 -*-
"""简体中文.

业余无线电的缩写不译：AFC、REV、USOS、BPF、NOTCH、LMS、RST、QTH 是国际通用的，
操作者就是这样找它们的。mark、shift、squelch、waterfall 同样保留原文——译过来
就成了电台里没人用的词。
"""

TRANSLATIONS = {
    "FROM A SOUND CARD":
        "来自声卡",
    "no frequency, no PTT — transmit on VOX":
        "没有频率，没有 PTT — 用 VOX 发射",
    "— no transmit —":
        "— 不发射 —",
    "Listen":
        "收听",
    "Cannot open the sound card":
        "打不开声卡",
    "Listening to %1":
        "正在收听 %1",
    "Listening to %1 — receive only":
        "正在收听 %1 — 只接收",
    "shared with %1":
        "与 %1 共用",
    "Sharing %1 with %2":
        "%1 与 %2 共用",
    "another station":
        "另一个电台",
    "The radio will not give audio to a bound client — reconnecting as a GUI station":
        "电台不给绑定的客户端音频 —— 改为以 GUI 身份重新连接",
    "TRANSMITTING":
        "发射中",
    "Type here — Enter sends the line":
        "在此输入 —— 回车发送该行",
    "Connect a radio to transmit":
        "连接电台后才能发射",
    "MY CALL":             "MY CALL",
    "QTH":                 "QTH",
    "LANGUAGE":            "语言",
    "changes immediately": "立即生效",

    "SPECTRUM":            "频谱",
    "RECEIVE":             "接收",
    "TRANSMIT":            "发射",
    "TUNING":              "调谐",
    "DECODER":             "解码器",
    "FILTERS":             "滤波器",
    "FRAMING":             "帧格式",
    "VIEW":                "视图",
    "CENTRE":              "居中",
    "STATION":             "电台",
    "MACROS":              "宏",
    "LOG":                 "日志",
    "RADIOS ON THE NETWORK": "网络上的电台",
    "FT-991A GATEWAY":     "FT-991A 网关",

    "Close":               "关闭",
    "Connect":             "连接",
    "Copy":                "复制",
    "Clear":               "清除",
    "Abort":               "中止",
    "Follow":              "跟随",
    "Call":                "呼号",
    "Log it":              "记入日志",
    "Export ADIF":         "导出 ADIF",
    "Restore defaults":    "恢复默认",
    "Restart":             "重启",
    "Set radio":           "设置电台",
    "Setup":               "设置",
    "settings":            "调整",
    "close":               "收起",
    "on":                  "开",
    "off":                 "关",
    "band":                "全带",
    "light":               "亮度",
    "contrast":            "对比度",
    "speed %1x":           "速度 %1x",
    "floor %1 dB":         "本底 %1 dB",
    "jump to end ↓":       "跳到末尾 ↓",
    "DECO":                "DECO",
    "TX: %1":              "TX: %1",
    "transmit":            "transmit",
    "GREY":                "灰阶",
    "FIRE":                "火焰",

    "NAME":                "姓名",
    "RST SENT":            "发出 RST",
    "RST RCVD":            "收到 RST",
    "Correction":          "纠错",
    "Normal":              "常规",
    "Deep":                "深度",
    "Off":                 "关",
    "Bits":                "数据位",
    "Stop":                "停止位",
    "Par.":                "校验",
    "none":                "无",
    "even":                "偶",
    "odd":                 "奇",
    "Fill":                "填充",
    "BPF width":           "BPF 带宽",
    "Character wait":      "字符间等待",
    "Audio in":            "音频输入",
    "Audio out":           "音频输出",

    "Bandpass around the two tones: throws away\neverything outside before the detector.":
        "在两个音调周围带通：在检波之前，把外面的\n一切都丢掉。",
    "Removes one frequency. Ctrl+click the waterfall\nto drop it on the carrier that is in the way.":
        "抹掉一个频率。在瀑布图上按住 Ctrl 单击，\n即可把它放到碍事的载波上。",
    "Adaptive canceller: removes steady carriers by\nitself. On weak signals it can eat the RTTY as\nwell — try it and listen.":
        "自适应对消器：自己去掉固定的载波。信号弱时\n连 RTTY 也会一起吃掉——试一试，用耳朵听。",
    "Finds the tone pair in the band and moves the\ntuning onto it. Once, now.":
        "在频带里找到那一对音调，把调谐移过去。\n只做一次，就现在。",
    "Searches by itself whenever nothing is being\ncopied, and tries the polarity too. While the\ndecoder is locked it touches nothing.":
        "在什么都收不到的时候自己搜索，也会试极性。\n解码器锁定期间，它什么都不动。",
    "Follows the drift of the signal already locked,\nwithin a few tens of hertz.":
        "跟随已锁定信号的漂移，范围是几十赫兹。",
    "How much band to show. Narrow around the tones\nshows the individual bits; wide shows who is calling.":
        "显示多宽的频带。围着音调收窄能看见一个个比特；\n放宽则能看见谁在呼叫。",
    "How fast it scrolls. Slower keeps a longer\nstretch of band in view.":
        "滚动有多快。慢一些，屏幕上能留住更长一段\n频带。",
    "Zoom, palette, brightness and speed of the\nwaterfall.":
        "瀑布图的缩放、色板、亮度和速度。",
    "What to send between characters while you\ntype live.":
        "现场打字时，字符与字符之间发送什么。",
    "Figures set: US has BELL and apostrophe where\nITA2 swaps the two.":
        "数字集：US 的 BELL 和撇号所在之处，ITA2 把\n两者对调。",
    "Prints characters whose stop bit read wrong too:\na few more characters on distorted signals, some\nlines of rubbish in exchange.":
        "连停止位读错的字符也打印：在失真信号上多出\n几个字符，代价是几行垃圾。",
    "Unshift on space — recovers a lost FIGS/LTRS, but\nbreaks long figure groups such as serial numbers.":
        "Unshift on space——救回丢失的 FIGS/LTRS，但会\n拆散像流水号那样的长数字串。",
    "Puts the radio into DIGU and narrows its filter\naround the tones.":
        "把电台切到 DIGU，并把滤波器收窄到音调附近。",
    "Use after changing the port or a device.":
        "更换端口或设备之后使用。",
    "When on, the gateway opens at start-up and\ncloses with the program. Turn it off if the radio\nis on another PC.":
        "打开后，网关随程序启动而开、随程序关闭而关。\n如果电台在另一台电脑上，请关掉它。",
    "Highlights callsigns. Click one to put it\nin the HIS CALL field.":
        "高亮显示呼号。点一下就放进 HIS CALL 栏。",
    "High enough to drive the ALC — check the meter.":
        "足以推动 ALC——看一眼表头。",

    "%n contact(s)":       ["%n 次通联"],
    "Worked before: %1 — last on %2":
        "已通联过：%1 —— 上次是 %2",
    "A callsign is the least a contact needs to be logged":
        "至少要有呼号才能把通联记入日志",

    "No radio has answered yet": "还没有电台回应",
    "Radios announce themselves on UDP 4992.\nCheck the radio is on the same subnet, or enter its address below.":
        "电台在 UDP 4992 上自报家门。\n请确认电台在同一子网内，或在下面填写它的地址。",
    "Looking for radios…":  "正在寻找电台…",
    "Waiting for the gateway…": "正在等待网关…",
    "Connecting to %1…":    "正在连接 %1…",
    "Reconnecting to %1…":  "正在重新连接 %1…",
    "Connected to %1":      "已连接到 %1",
    "Disconnected":         "已断开",
    "Receiving from %1":    "正在接收 %1",
    "'%1' is not a valid address": "'%1' 不是有效的地址",
    "Radio %1 is no longer on the network": "电台 %1 已不在网络上",
    "%1 — audio only, no CAT": "%1 —— 只有音频，没有 CAT",

    "No recognisable RTTY signal in the band":
        "频带内没有可辨认的 RTTY 信号",
    "Centred on %1 Hz (%2 dB above the floor)":
        "已对准 %1 Hz（高出本底 %2 dB）",
    "Trying the opposite polarity (%1)": "试一下相反的极性（%1）",
    "Signal at %1 Hz: moving there":     "信号在 %1 Hz：移过去",
    "reversed":             "反相",
    "direct":               "正相",

    "not started":          "未启动",
    "disabled":             "已停用",
    "already listening (started elsewhere)": "已在监听（在别处启动）",
    "A gateway is already on the network: not starting another":
        "网络上已经有一个网关：不再启动第二个",
    "executable not found": "找不到可执行文件",
    "Cannot find %1 beside the application": "在程序旁边找不到 %1",
    "starting on %1":       "正在 %1 上启动",
    "started":              "已启动",
    "start failed":         "启动失败",
    "Starting the gateway: %1 on port %2": "正在启动网关：%1，端口 %2",
    "The gateway will not start: %1": "网关无法启动：%1",
    "exited":               "已退出",
    "exited (code %1)":     "已退出（代码 %1）",
    "Gateway exited, code %1": "网关已退出，代码 %1",
    "Closing the gateway":  "正在关闭网关",
    "The gateway is staying up: leaving it to the other clients":
        "网关继续运行：留给其他客户端",
    "left running":         "保持运行",
    "closed":               "已关闭",
    "running on %1":        "在 %1 上运行",
    "%1 is busy — receive only": "%1 被占用 —— 只能接收",
    "running, no CAT":      "运行中，没有 CAT",
    "The gateway is not answering — retrying": "网关没有回应 —— 重试",
    "Gateway listening on UDP %1": "网关在 UDP %1 上监听",
    "Client %1:%2 connected": "客户端 %1:%2 已连接",
    "Client %1:%2 timed out": "客户端 %1:%2 已超时",
    "Client %1 is leaving":  "客户端 %1 正在离开",
    "Shutdown requested by whoever started me": "启动我的一方要求关闭",
    "Shutdown deferred: %1 client(s) are still using the radio":
        "关闭已推迟：还有 %1 个客户端在用这台电台",
    "No client for thirty seconds: closing": "三十秒没有客户端：关闭",
    "No clients left — dropping PTT": "没有客户端了 —— 松开 PTT",

    "CAT on %1 at %2 baud": "CAT 在 %1，%2 波特",
    "CAT disabled — receive only, no tuning or PTT":
        "CAT 已停用 —— 只能接收，不能调谐也不能 PTT",
    "Cannot open %1: %2":   "打不开 %1：%2",
    "CAT: queued TX1; on %1": "CAT：已在 %1 上排入 TX1;",
    "CAT: wrote TX0; (%1 bytes) on %2": "CAT：已在 %2 上写入 TX0;（%1 字节）",
    "Radio still shows %1 — repeating the PTT command (%2)":
        "电台仍显示 %1 —— 重发 PTT 命令（%2）",
    "The FT-991A has no mode called '%1'": "FT-991A 没有名为 '%1' 的模式",
    "PTT requested by the client: %1  (CAT %2)": "客户端请求 PTT：%1  (CAT %2)",
    "TRANSMIT":             "发射",
    "receive":              "接收",
    "open":                 "已打开",
    "CLOSED":               "已关闭",
    "Audio in: %1":         "音频输入：%1",
    "Audio out: %1":        "音频输出：%1",
    "No capture device matching '%1'. Available: %2":
        "没有与 '%1' 相符的录音设备。可用：%2",
    "No playback device matching '%1' — transmit is unavailable":
        "没有与 '%1' 相符的放音设备 —— 无法发射",
    "%1 cannot run at %2 Hz": "%1 无法以 %2 Hz 运行",
    "Could not open the audio transport": "打不开音频通道",
    "Transmit audio overrun — dropped %1 ms": "发射音频溢出 —— 丢弃了 %1 毫秒",
    "No transmit audio for %1 ms — dropping PTT":
        "已有 %1 毫秒没有发射音频 —— 松开 PTT",
    "Cannot write the log in %1": "无法把日志写入 %1",

    "Transmit is unavailable on this connection":
        "这条连接上无法发射",
    "Transmit is unavailable: no Opus transmit stream":
        "无法发射：没有 Opus 发射流",
    "Transmit requested but CAT is not open — ignored":
        "请求发射，但 CAT 未打开 —— 已忽略",
    "Transmit ran for three minutes — stopped":
        "发射持续了三分钟 —— 已停止",
    "The radio is in %1: on voice modes the USB audio does not modulate. Press 'Set radio' in the DECODER panel.":
        "电台处于 %1：在话音模式下 USB 音频不会调制。请在解码器面板上按“设置电台”。",

    "Cannot bind UDP port %1: %2": "无法占用 UDP 端口 %1：%2",
    "Cannot listen on UDP port %1: %2": "无法在 UDP 端口 %1 上监听：%2",
    "Cannot open a local UDP port: %1": "无法打开本地 UDP 端口：%1",
    "Cannot open the VITA-49 UDP socket: %1": "无法打开 VITA-49 的 UDP 套接字：%1",
    "Cannot open the discovery socket: %1": "无法打开搜索套接字：%1",
    "Could not create the receive audio stream": "无法建立接收音频流",
    "Could not create the transmit audio stream": "无法建立发射音频流",
    "The radio refused the client registration (code 0x%1)":
        "电台拒绝了客户端注册（代码 0x%1）",
    "The radio rejected the UDP port registration":
        "电台拒绝了 UDP 端口的注册",

    "No radio connected.":
        "未连接电台。",
    "The audio comes from a sound card: the radio is not\nunder our control. Change band with the dial.":
        "音频来自声卡：电台不受本程序控制。\n请用旋钮更换波段。",
    "The serial port is held by another program, so the\nradio takes no commands. Close it and reconnect.":
        "串口被另一个程序占用，电台不接受指令。\n关闭它再重新连接。",
    "%1 — RTTY at %2 MHz":
        "%1 — RTTY 在 %2 MHz",
    "Data on the upper sideband: the mode this\ndecoder is written for.":
        "上边带数据：本解码器就是为这个模式写的。",
    "Data on the lower sideband. The tones come out\nreversed — REV puts them back.":
        "下边带数据。音调会反过来——用 REV 转回去。",
    "Voice sideband. RTTY is copied just the same,\nbut the radio's filter is wider than it needs.":
        "话音边带。RTTY 一样能抄收，只是电台的\n滤波器比需要的宽。",
}
