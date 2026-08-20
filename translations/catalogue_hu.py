# -*- coding: utf-8 -*-
"""Magyar.

A rádióamatőr rövidítéseket nem fordítjuk: az AFC, REV, USOS, BPF, NOTCH, LMS,
RST, QTH nemzetközi, és az operátor így keresi őket. Ugyanígy marad a „mark”,
„shift”, „squelch” és „waterfall” — lefordítva olyan szavak jönnének ki, amiket
az állomáson senki sem használ.
"""

TRANSLATIONS = {
    "TRANSMITTING":
        "ADÁS ALATT",
    "Type here — Enter sends the line":
        "Ide írj — az Enter elküldi a sort",
    "Connect a radio to transmit":
        "Csatlakoztass rádiót az adáshoz",
    "MY CALL":             "MY CALL",
    "QTH":                 "QTH",
    "LANGUAGE":            "NYELV",
    "changes immediately": "azonnal érvényes",

    "SPECTRUM":            "SPEKTRUM",
    "RECEIVE":             "VÉTEL",
    "TRANSMIT":            "ADÁS",
    "TUNING":              "HANGOLÁS",
    "DECODER":             "DEKÓDER",
    "FILTERS":             "SZŰRŐK",
    "FRAMING":             "KERET",
    "VIEW":                "NÉZET",
    "CENTRE":              "KÖZÉPRE",
    "STATION":             "ÁLLOMÁS",
    "MACROS":              "MAKRÓK",
    "LOG":                 "NAPLÓ",
    "RADIOS ON THE NETWORK": "RÁDIÓK A HÁLÓZATON",
    "FT-991A GATEWAY":     "FT-991A ÁTJÁRÓ",

    "Close":               "Bezár",
    "Connect":             "Kapcsolódás",
    "Copy":                "Másol",
    "Clear":               "Törlés",
    "Abort":               "Megszakít",
    "Follow":              "Követés",
    "Call":                "Hívójelek",
    "Log it":              "Naplózás",
    "Export ADIF":         "ADIF mentése",
    "Restore defaults":    "Alaphelyzet",
    "Restart":             "Újraindítás",
    "Set radio":           "Rádió beállítása",
    "Setup":               "Beállítások",
    "settings":            "beállít",
    "close":               "bezár",
    "on":                  "be",
    "off":                 "ki",
    "band":                "sáv",
    "light":               "fény",
    "contrast":            "kontraszt",
    "speed %1x":           "seb. %1x",
    "floor %1 dB":         "zajszint %1 dB",
    "jump to end ↓":       "a végére ↓",
    "DECO":                "DECO",
    "TX: %1":              "TX: %1",
    "transmit":            "transmit",
    "GREY":                "SZÜRKE",
    "FIRE":                "TŰZ",

    "NAME":                "NÉV",
    "RST SENT":            "ADOTT RST",
    "RST RCVD":            "KAPOTT RST",
    "Correction":          "Javítás",
    "Normal":              "Normál",
    "Deep":                "Mély",
    "Off":                 "Ki",
    "Bits":                "Bit",
    "Stop":                "Stop",
    "Par.":                "Par.",
    "none":                "nincs",
    "even":                "páros",
    "odd":                 "páratlan",
    "Fill":                "Kitöltés",
    "BPF width":           "BPF szélesség",
    "Character wait":      "Karakterszünet",
    "Audio in":            "Hang be",
    "Audio out":           "Hang ki",

    "Bandpass around the two tones: throws away\neverything outside before the detector.":
        "Sáváteresztő a két hang körül: mindent eldob,\nami kívül esik, még a detektor előtt.",
    "Removes one frequency. Ctrl+click the waterfall\nto drop it on the carrier that is in the way.":
        "Kitöröl egy frekvenciát. Ctrl+kattintás a\nvízesésen ráteszi a zavaró vivőre.",
    "Adaptive canceller: removes steady carriers by\nitself. On weak signals it can eat the RTTY as\nwell — try it and listen.":
        "Adaptív kioltó: magától eltünteti az álló\nvivőket. Gyenge jelnél az RTTY-t is megeheti —\npróbáld ki és hallgasd.",
    "Finds the tone pair in the band and moves the\ntuning onto it. Once, now.":
        "Megkeresi a hangpárt a sávban, és ráviszi a\nhangolást. Egyszer, most.",
    "Searches by itself whenever nothing is being\ncopied, and tries the polarity too. While the\ndecoder is locked it touches nothing.":
        "Magától keres, amíg semmit sem másolunk, és a\npolaritást is kipróbálja. Amíg a dekóder\nrákapaszkodott, semmihez sem nyúl.",
    "Follows the drift of the signal already locked,\nwithin a few tens of hertz.":
        "Követi a már befogott jel elcsúszását, néhány\ntíz hertzen belül.",
    "How much band to show. Narrow around the tones\nshows the individual bits; wide shows who is calling.":
        "Mennyi sávot mutat. Szűken a hangok körül az\negyes bitek látszanak; szélesen az, ki hív.",
    "How fast it scrolls. Slower keeps a longer\nstretch of band in view.":
        "Milyen gyorsan gördül. Lassabban hosszabb\nsávszakasz marad szem előtt.",
    "Zoom, palette, brightness and speed of the\nwaterfall.":
        "A vízesés nagyítása, palettája, fényereje és\nsebessége.",
    "What to send between characters while you\ntype live.":
        "Mit küldjön a karakterek között, amíg élőben\ngépelsz.",
    "Figures set: US has BELL and apostrophe where\nITA2 swaps the two.":
        "Számkészlet: az US-ben a BELL és az aposztróf\nott van, ahol az ITA2 felcseréli a kettőt.",
    "Prints characters whose stop bit read wrong too:\na few more characters on distorted signals, some\nlines of rubbish in exchange.":
        "Kiírja a rossz stopbites karaktereket is:\nnéhány karakterrel több a torz jeleknél, cserébe\nnéhány sor szemét.",
    "Unshift on space — recovers a lost FIGS/LTRS, but\nbreaks long figure groups such as serial numbers.":
        "Unshift on space — megmenti az elveszett\nFIGS/LTRS-t, de széttöri a hosszú számcsoportokat,\npéldául a sorszámokat.",
    "Puts the radio into DIGU and narrows its filter\naround the tones.":
        "DIGU-ra állítja a rádiót, és a hangok köré\nszűkíti a szűrőjét.",
    "Use after changing the port or a device.":
        "Port vagy eszköz cseréje után használd.",
    "When on, the gateway opens at start-up and\ncloses with the program. Turn it off if the radio\nis on another PC.":
        "Ha be van kapcsolva, az átjáró indításkor\nmegnyílik és a programmal együtt zár. Kapcsold ki,\nha a rádió másik gépen van.",
    "Highlights callsigns. Click one to put it\nin the HIS CALL field.":
        "Kiemeli a hívójeleket. Kattints egyre, hogy a\nHIS CALL mezőbe kerüljön.",
    "High enough to drive the ALC — check the meter.":
        "Elég magas az ALC vezérléséhez — nézd a műszert.",

    "%n contact(s)":       ["%n összeköttetés"],
    "Worked before: %1 — last on %2":
        "Már megvolt: %1 — utoljára %2",
    "A callsign is the least a contact needs to be logged":
        "Hívójel nélkül nem lehet összeköttetést naplózni",

    "No radio has answered yet": "Még egyetlen rádió sem válaszolt",
    "Radios announce themselves on UDP 4992.\nCheck the radio is on the same subnet, or enter its address below.":
        "A rádiók az UDP 4992 porton jelentkeznek.\nEllenőrizd, hogy a rádió ugyanazon az alhálózaton van-e, vagy írd be alább a címét.",
    "Looking for radios…":  "Rádiókat keresek…",
    "Waiting for the gateway…": "Várok az átjáróra…",
    "Connecting to %1…":    "Kapcsolódás ehhez: %1…",
    "Reconnecting to %1…":  "Újrakapcsolódás ehhez: %1…",
    "Connected to %1":      "Kapcsolódva ehhez: %1",
    "Disconnected":         "Szétkapcsolva",
    "Receiving from %1":    "Vétel innen: %1",
    "'%1' is not a valid address": "A(z) '%1' nem érvényes cím",
    "Radio %1 is no longer on the network": "A(z) %1 rádió már nincs a hálózaton",
    "%1 — audio only, no CAT": "%1 — csak hang, CAT nélkül",

    "No recognisable RTTY signal in the band":
        "Nincs felismerhető RTTY-jel a sávban",
    "Centred on %1 Hz (%2 dB above the floor)":
        "Középre állítva %1 Hz-en (%2 dB-lel a zajszint felett)",
    "Trying the opposite polarity (%1)": "Kipróbálom az ellenkező polaritást (%1)",
    "Signal at %1 Hz: moving there":     "Jel %1 Hz-en: odamegyek",
    "reversed":             "fordított",
    "direct":               "egyenes",

    "not started":          "nincs elindítva",
    "disabled":             "kikapcsolva",
    "already listening (started elsewhere)": "már figyel (máshol indult)",
    "A gateway is already on the network: not starting another":
        "Már van átjáró a hálózaton: nem indítok másikat",
    "executable not found": "a program nem található",
    "Cannot find %1 beside the application": "Nem találom a(z) %1 fájlt az alkalmazás mellett",
    "starting on %1":       "indul ezen: %1",
    "started":              "elindult",
    "start failed":         "az indítás nem sikerült",
    "Starting the gateway: %1 on port %2": "Indítom az átjárót: %1 a(z) %2 porton",
    "The gateway will not start: %1": "Az átjáró nem indul: %1",
    "exited":               "leállt",
    "exited (code %1)":     "leállt (%1 kód)",
    "Gateway exited, code %1": "Az átjáró leállt, kód: %1",
    "Closing the gateway":  "Bezárom az átjárót",
    "The gateway is staying up: leaving it to the other clients":
        "Az átjáró tovább működik: a többi kliensre hagyom",
    "left running":         "működni hagyva",
    "closed":               "bezárva",
    "running on %1":        "működik ezen: %1",
    "%1 is busy — receive only": "A(z) %1 foglalt — csak vétel",
    "running, no CAT":      "működik, CAT nélkül",
    "The gateway is not answering — retrying": "Az átjáró nem válaszol — újrapróbálom",
    "Gateway listening on UDP %1": "Az átjáró figyel az UDP %1 porton",
    "Client %1:%2 connected": "%1:%2 kliens kapcsolódott",
    "Client %1:%2 timed out": "%1:%2 kliens lejárt",
    "Client %1 is leaving":  "A(z) %1 kliens távozik",
    "Shutdown requested by whoever started me": "Leállítást kért az, aki elindított",
    "Shutdown deferred: %1 client(s) are still using the radio":
        "Leállítás elhalasztva: %1 kliens még használja a rádiót",
    "No client for thirty seconds: closing": "Harminc másodperce nincs kliens: bezárok",
    "No clients left — dropping PTT": "Nem maradt kliens — elengedem a PTT-t",

    "CAT on %1 at %2 baud": "CAT a(z) %1 porton, %2 baud",
    "CAT disabled — receive only, no tuning or PTT":
        "CAT kikapcsolva — csak vétel, se hangolás, se PTT",
    "Cannot open %1: %2":   "Nem tudom megnyitni: %1: %2",
    "CAT: queued TX1; on %1": "CAT: TX1; sorba állítva ezen: %1",
    "CAT: wrote TX0; (%1 bytes) on %2": "CAT: TX0; kiírva (%1 bájt) ezen: %2",
    "Radio still shows %1 — repeating the PTT command (%2)":
        "A rádió még mindig %1 állapotot mutat — megismétlem a PTT parancsot (%2)",
    "The FT-991A has no mode called '%1'": "Az FT-991A nem ismer '%1' nevű üzemmódot",
    "PTT requested by the client: %1  (CAT %2)": "A kliens PTT-t kért: %1  (CAT %2)",
    "TRANSMIT":             "ADÁS",
    "receive":              "vétel",
    "open":                 "nyitva",
    "CLOSED":               "ZÁRVA",
    "Audio in: %1":         "Hang be: %1",
    "Audio out: %1":        "Hang ki: %1",
    "No capture device matching '%1'. Available: %2":
        "Nincs '%1' nevű felvevőeszköz. Elérhetők: %2",
    "No playback device matching '%1' — transmit is unavailable":
        "Nincs '%1' nevű lejátszóeszköz — nem lehet adni",
    "%1 cannot run at %2 Hz": "A(z) %1 nem tud %2 Hz-en működni",
    "Could not open the audio transport": "Nem sikerült megnyitni a hangátvitelt",
    "Transmit audio overrun — dropped %1 ms": "Az adáshang túlcsordult — %1 ms elveszett",
    "No transmit audio for %1 ms — dropping PTT":
        "%1 ms óta nincs adáshang — elengedem a PTT-t",
    "Cannot write the log in %1": "Nem tudom írni a naplót ide: %1",

    "Transmit is unavailable on this connection":
        "Ezen a kapcsolaton nem lehet adni",
    "Transmit is unavailable: no Opus transmit stream":
        "Nem lehet adni: nincs Opus adásfolyam",
    "Transmit requested but CAT is not open — ignored":
        "Adást kértek, de a CAT nincs nyitva — figyelmen kívül hagyva",
    "Transmit ran for three minutes — stopped":
        "Az adás három percig tartott — leállítva",
    "The radio is in %1: on voice modes the USB audio does not modulate. Press 'Set radio' in the DECODER panel.":
        "A rádió %1 állásban van: beszédüzemmódokban az USB hangja nem modulál. Nyomd meg a 'Rádió beállítása' gombot a DEKÓDER panelen.",

    "Cannot bind UDP port %1: %2": "Nem tudom lefoglalni a(z) %1 UDP portot: %2",
    "Cannot listen on UDP port %1: %2": "Nem tudok figyelni a(z) %1 UDP porton: %2",
    "Cannot open a local UDP port: %1": "Nem tudok helyi UDP portot nyitni: %1",
    "Cannot open the VITA-49 UDP socket: %1": "Nem tudom megnyitni a VITA-49 UDP foglalatot: %1",
    "Cannot open the discovery socket: %1": "Nem tudom megnyitni a kereső foglalatot: %1",
    "Could not create the receive audio stream": "Nem sikerült létrehozni a vételi hangfolyamot",
    "Could not create the transmit audio stream": "Nem sikerült létrehozni az adási hangfolyamot",
    "The radio refused the client registration (code 0x%1)":
        "A rádió elutasította a kliens bejelentkezését (kód: 0x%1)",
    "The radio rejected the UDP port registration":
        "A rádió elutasította az UDP port bejelentését",
}
