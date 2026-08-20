# -*- coding: utf-8 -*-
"""Русский.

Радиолюбительские сокращения не переводятся: AFC, REV, USOS, BPF, NOTCH, LMS,
RST, QTH международные, и оператор ищет именно их. То же с «mark», «shift»,
«squelch» и «waterfall» — перевод дал бы слова, которых на станции никто не
употребляет.
"""

TRANSLATIONS = {
    "TRANSMITTING":
        "ПЕРЕДАЮ",
    "Type here — Enter sends the line":
        "Пишите здесь — Enter отправляет строку",
    "Connect a radio to transmit":
        "Подключите радио, чтобы передавать",
    "MY CALL":             "MY CALL",
    "QTH":                 "QTH",
    "LANGUAGE":            "ЯЗЫК",
    "changes immediately": "меняется сразу",

    "SPECTRUM":            "СПЕКТР",
    "RECEIVE":             "ПРИЁМ",
    "TRANSMIT":            "ПЕРЕДАЧА",
    "TUNING":              "НАСТРОЙКА",
    "DECODER":             "ДЕКОДЕР",
    "FILTERS":             "ФИЛЬТРЫ",
    "FRAMING":             "КАДР",
    "VIEW":                "ВИД",
    "CENTRE":              "ЦЕНТР",
    "STATION":             "СТАНЦИЯ",
    "MACROS":              "МАКРОСЫ",
    "LOG":                 "ЖУРНАЛ",
    "RADIOS ON THE NETWORK": "СТАНЦИИ В СЕТИ",
    "FT-991A GATEWAY":     "ШЛЮЗ FT-991A",

    "Close":               "Закрыть",
    "Connect":             "Подключить",
    "Copy":                "Копировать",
    "Clear":               "Очистить",
    "Abort":               "Прервать",
    "Follow":              "Следить",
    "Call":                "Позывные",
    "Log it":              "В журнал",
    "Export ADIF":         "Экспорт ADIF",
    "Restore defaults":    "Сбросить",
    "Restart":             "Перезапуск",
    "Set radio":           "Настроить радио",
    "Setup":               "Настройки",
    "settings":            "настроить",
    "close":               "закрыть",
    "on":                  "вкл",
    "off":                 "выкл",
    "band":                "диапазон",
    "light":               "яркость",
    "contrast":            "контраст",
    "speed %1x":           "скор. %1x",
    "floor %1 dB":         "шумы %1 дБ",
    "jump to end ↓":       "в конец ↓",
    "DECO":                "DECO",
    "TX: %1":              "TX: %1",
    "transmit":            "transmit",
    "GREY":                "СЕРЫЙ",
    "FIRE":                "ОГОНЬ",

    "NAME":                "ИМЯ",
    "RST SENT":            "RST ПЕР",
    "RST RCVD":            "RST ПРИН",
    "Correction":          "Коррекция",
    "Normal":              "Обычная",
    "Deep":                "Глубокая",
    "Off":                 "Выкл",
    "Bits":                "Биты",
    "Stop":                "Стоп",
    "Par.":                "Чёт.",
    "none":                "нет",
    "even":                "чёт",
    "odd":                 "нечёт",
    "Fill":                "Заполн.",
    "BPF width":           "Ширина BPF",
    "Character wait":      "Пауза между знаками",
    "Audio in":            "Звук вход",
    "Audio out":           "Звук выход",

    "Bandpass around the two tones: throws away\neverything outside before the detector.":
        "Полосовой фильтр вокруг двух тонов: отбрасывает\nвсё, что снаружи, ещё до детектора.",
    "Removes one frequency. Ctrl+click the waterfall\nto drop it on the carrier that is in the way.":
        "Убирает одну частоту. Ctrl+щелчок по водопаду\nставит её на мешающую несущую.",
    "Adaptive canceller: removes steady carriers by\nitself. On weak signals it can eat the RTTY as\nwell — try it and listen.":
        "Адаптивный подавитель: сам убирает стоячие\nнесущие. На слабых сигналах может съесть и сам\nRTTY — попробуйте и послушайте.",
    "Finds the tone pair in the band and moves the\ntuning onto it. Once, now.":
        "Находит пару тонов в диапазоне и переводит на\nних настройку. Один раз, сейчас.",
    "Searches by itself whenever nothing is being\ncopied, and tries the polarity too. While the\ndecoder is locked it touches nothing.":
        "Ищет сам, пока ничего не принимается, и пробует\nтакже полярность. Пока декодер держит сигнал, он\nничего не трогает.",
    "Follows the drift of the signal already locked,\nwithin a few tens of hertz.":
        "Следит за уходом уже пойманного сигнала в\nпределах нескольких десятков герц.",
    "How much band to show. Narrow around the tones\nshows the individual bits; wide shows who is calling.":
        "Сколько диапазона показывать. Узко вокруг тонов\nвидны отдельные биты; широко видно, кто зовёт.",
    "How fast it scrolls. Slower keeps a longer\nstretch of band in view.":
        "Как быстро он бежит. Медленнее — на экране\nостаётся более длинный кусок диапазона.",
    "Zoom, palette, brightness and speed of the\nwaterfall.":
        "Масштаб, палитра, яркость и скорость\nводопада.",
    "What to send between characters while you\ntype live.":
        "Что передавать между знаками, пока вы печатаете\nвживую.",
    "Figures set: US has BELL and apostrophe where\nITA2 swaps the two.":
        "Набор цифр: в US звонок и апостроф стоят там,\nгде ITA2 меняет их местами.",
    "Prints characters whose stop bit read wrong too:\na few more characters on distorted signals, some\nlines of rubbish in exchange.":
        "Печатает и знаки с неверным стоповым битом:\nнесколько знаков больше на искажённых сигналах, в\nобмен на несколько строк мусора.",
    "Unshift on space — recovers a lost FIGS/LTRS, but\nbreaks long figure groups such as serial numbers.":
        "Unshift on space — спасает потерянный FIGS/LTRS,\nно ломает длинные группы цифр, например\nпорядковые номера.",
    "Puts the radio into DIGU and narrows its filter\naround the tones.":
        "Переводит радио в DIGU и сужает его фильтр\nвокруг тонов.",
    "Use after changing the port or a device.":
        "Применять после смены порта или устройства.",
    "When on, the gateway opens at start-up and\ncloses with the program. Turn it off if the radio\nis on another PC.":
        "Если включено, шлюз открывается при запуске и\nзакрывается вместе с программой. Выключите, если\nрадио на другом компьютере.",
    "Highlights callsigns. Click one to put it\nin the HIS CALL field.":
        "Подсвечивает позывные. Щёлкните по одному,\nчтобы поставить его в поле HIS CALL.",
    "High enough to drive the ALC — check the meter.":
        "Достаточно, чтобы раскачать ALC — смотрите на прибор.",

    "%n contact(s)":       ["%n связь", "%n связи", "%n связей"],
    "Worked before: %1 — last on %2":
        "Уже работали: %1 — последний раз %2",
    "A callsign is the least a contact needs to be logged":
        "Без позывного связь в журнал не записать",

    "No radio has answered yet": "Ни одна станция ещё не ответила",
    "Radios announce themselves on UDP 4992.\nCheck the radio is on the same subnet, or enter its address below.":
        "Станции объявляют себя по UDP 4992.\nПроверьте, что радио в той же подсети, или впишите его адрес ниже.",
    "Looking for radios…":  "Ищу станции…",
    "Waiting for the gateway…": "Жду шлюз…",
    "Connecting to %1…":    "Подключаюсь к %1…",
    "Reconnecting to %1…":  "Переподключаюсь к %1…",
    "Connected to %1":      "Подключено к %1",
    "Disconnected":         "Отключено",
    "Receiving from %1":    "Приём от %1",
    "'%1' is not a valid address": "'%1' — недопустимый адрес",
    "Radio %1 is no longer on the network": "Станции %1 больше нет в сети",
    "%1 — audio only, no CAT": "%1 — только звук, без CAT",

    "No recognisable RTTY signal in the band":
        "В диапазоне нет узнаваемого сигнала RTTY",
    "Centred on %1 Hz (%2 dB above the floor)":
        "Настроено на %1 Гц (%2 дБ над шумами)",
    "Trying the opposite polarity (%1)": "Пробую обратную полярность (%1)",
    "Signal at %1 Hz: moving there":     "Сигнал на %1 Гц: перехожу туда",
    "reversed":             "обратная",
    "direct":               "прямая",

    "not started":          "не запущен",
    "disabled":             "отключён",
    "already listening (started elsewhere)": "уже слушает (запущен в другом месте)",
    "A gateway is already on the network: not starting another":
        "Шлюз уже есть в сети: второй не запускаю",
    "executable not found": "программа не найдена",
    "Cannot find %1 beside the application": "Не нахожу %1 рядом с программой",
    "starting on %1":       "запускается на %1",
    "started":              "запущен",
    "start failed":         "запуск не удался",
    "Starting the gateway: %1 on port %2": "Запускаю шлюз: %1 на порту %2",
    "The gateway will not start: %1": "Шлюз не запускается: %1",
    "exited":               "завершён",
    "exited (code %1)":     "завершён (код %1)",
    "Gateway exited, code %1": "Шлюз завершён, код %1",
    "Closing the gateway":  "Закрываю шлюз",
    "The gateway is staying up: leaving it to the other clients":
        "Шлюз остаётся работать: оставляю его другим клиентам",
    "left running":         "оставлен работать",
    "closed":               "закрыт",
    "running on %1":        "работает на %1",
    "%1 is busy — receive only": "%1 занят — только приём",
    "running, no CAT":      "работает, без CAT",
    "The gateway is not answering — retrying": "Шлюз не отвечает — пробую снова",
    "Gateway listening on UDP %1": "Шлюз слушает на UDP %1",
    "Client %1:%2 connected": "Клиент %1:%2 подключился",
    "Client %1:%2 timed out": "Клиент %1:%2 не отвечает",
    "Client %1 is leaving":  "Клиент %1 уходит",
    "Shutdown requested by whoever started me": "Остановку запросил тот, кто меня запустил",
    "Shutdown deferred: %1 client(s) are still using the radio":
        "Остановка отложена: %1 клиент(ов) ещё пользуются радио",
    "No client for thirty seconds: closing": "Тридцать секунд без клиентов: закрываюсь",
    "No clients left — dropping PTT": "Клиентов не осталось — снимаю PTT",

    "CAT on %1 at %2 baud": "CAT на %1, %2 бод",
    "CAT disabled — receive only, no tuning or PTT":
        "CAT отключён — только приём, без настройки и PTT",
    "Cannot open %1: %2":   "Не могу открыть %1: %2",
    "CAT: queued TX1; on %1": "CAT: TX1; поставлен в очередь на %1",
    "CAT: wrote TX0; (%1 bytes) on %2": "CAT: записан TX0; (%1 байт) на %2",
    "Radio still shows %1 — repeating the PTT command (%2)":
        "Радио всё ещё показывает %1 — повторяю команду PTT (%2)",
    "The FT-991A has no mode called '%1'": "У FT-991A нет режима '%1'",
    "PTT requested by the client: %1  (CAT %2)": "Клиент запросил PTT: %1  (CAT %2)",
    "TRANSMIT":             "ПЕРЕДАЧА",
    "receive":              "приём",
    "open":                 "открыт",
    "CLOSED":               "ЗАКРЫТ",
    "Audio in: %1":         "Звук вход: %1",
    "Audio out: %1":        "Звук выход: %1",
    "No capture device matching '%1'. Available: %2":
        "Нет устройства записи по имени '%1'. Доступны: %2",
    "No playback device matching '%1' — transmit is unavailable":
        "Нет устройства воспроизведения по имени '%1' — передача невозможна",
    "%1 cannot run at %2 Hz": "%1 не работает на %2 Гц",
    "Could not open the audio transport": "Не удалось открыть звуковой канал",
    "Transmit audio overrun — dropped %1 ms": "Переполнение звука передачи — потеряно %1 мс",
    "No transmit audio for %1 ms — dropping PTT":
        "Нет звука передачи %1 мс — снимаю PTT",
    "Cannot write the log in %1": "Не могу записать журнал в %1",

    "Transmit is unavailable on this connection":
        "По этому соединению передача невозможна",
    "Transmit is unavailable: no Opus transmit stream":
        "Передача невозможна: нет потока Opus для передачи",
    "Transmit requested but CAT is not open — ignored":
        "Запрошена передача, но CAT не открыт — пропущено",
    "Transmit ran for three minutes — stopped":
        "Передача шла три минуты — остановлена",
    "The radio is in %1: on voice modes the USB audio does not modulate. Press 'Set radio' in the DECODER panel.":
        "Радио в режиме %1: в речевых режимах звук с USB не модулирует. Нажмите «Настроить радио» на панели ДЕКОДЕР.",

    "Cannot bind UDP port %1: %2": "Не могу занять порт UDP %1: %2",
    "Cannot listen on UDP port %1: %2": "Не могу слушать порт UDP %1: %2",
    "Cannot open a local UDP port: %1": "Не могу открыть локальный порт UDP: %1",
    "Cannot open the VITA-49 UDP socket: %1": "Не могу открыть UDP-сокет VITA-49: %1",
    "Cannot open the discovery socket: %1": "Не могу открыть сокет поиска: %1",
    "Could not create the receive audio stream": "Не удалось создать поток приёма звука",
    "Could not create the transmit audio stream": "Не удалось создать поток передачи звука",
    "The radio refused the client registration (code 0x%1)":
        "Радио отказало в регистрации клиента (код 0x%1)",
    "The radio rejected the UDP port registration":
        "Радио отклонило регистрацию порта UDP",
}
