# -*- coding: utf-8 -*-
"""Latviešu.

Radioamatieru saīsinājumus netulko: AFC, REV, USOS, BPF, NOTCH, LMS, RST, QTH ir
starptautiski, un operators tos tā arī meklē. Tāpat paliek «mark», «shift»,
«squelch» un «waterfall» — tulkojot iznāktu vārdi, kurus stacijā neviens
nelieto.
"""

TRANSLATIONS = {
    "shared with %1":
        "koplietots ar %1",
    "Sharing %1 with %2":
        "%1 koplietots ar %2",
    "another station":
        "cita stacija",
    "The radio will not give audio to a bound client — reconnecting as a GUI station":
        "Stacija nedod skaņu piesaistītam klientam — pieslēdzos no jauna kā GUI stacija",
    "TRANSMITTING":
        "RAIDA",
    "Type here — Enter sends the line":
        "Raksti šeit — Enter nosūta rindu",
    "Connect a radio to transmit":
        "Pieslēdz staciju, lai raidītu",
    "MY CALL":             "MY CALL",
    "QTH":                 "QTH",
    "LANGUAGE":            "VALODA",
    "changes immediately": "mainās uzreiz",

    "SPECTRUM":            "SPEKTRS",
    "RECEIVE":             "UZTVERŠANA",
    "TRANSMIT":            "RAIDĪŠANA",
    "TUNING":              "NOSKAŅOŠANA",
    "DECODER":             "DEKODERS",
    "FILTERS":             "FILTRI",
    "FRAMING":             "IETVARS",
    "VIEW":                "SKATS",
    "CENTRE":              "CENTRĒT",
    "STATION":             "STACIJA",
    "MACROS":              "MAKRO",
    "LOG":                 "ŽURNĀLS",
    "RADIOS ON THE NETWORK": "STACIJAS TĪKLĀ",
    "FT-991A GATEWAY":     "FT-991A VĀRTEJA",

    "Close":               "Aizvērt",
    "Connect":             "Pieslēgt",
    "Copy":                "Kopēt",
    "Clear":               "Notīrīt",
    "Abort":               "Pārtraukt",
    "Follow":              "Sekot",
    "Call":                "Izsaukumi",
    "Log it":              "Ierakstīt",
    "Export ADIF":         "Eksportēt ADIF",
    "Restore defaults":    "Atjaunot",
    "Restart":             "Pārstartēt",
    "Set radio":           "Iestatīt staciju",
    "Setup":               "Iestatījumi",
    "settings":            "iestatīt",
    "close":               "aizvērt",
    "on":                  "ieslēgts",
    "off":                 "izslēgts",
    "band":                "josla",
    "light":               "gaišums",
    "contrast":            "kontrasts",
    "speed %1x":           "ātrums %1x",
    "floor %1 dB":         "trokšņu līmenis %1 dB",
    "jump to end ↓":       "uz beigām ↓",
    "DECO":                "DECO",
    "TX: %1":              "TX: %1",
    "transmit":            "transmit",
    "GREY":                "PELĒKS",
    "FIRE":                "UGUNS",

    "NAME":                "VĀRDS",
    "RST SENT":            "RST NOS",
    "RST RCVD":            "RST SAŅ",
    "Correction":          "Labošana",
    "Normal":              "Parasta",
    "Deep":                "Dziļa",
    "Off":                 "Izslēgt",
    "Bits":                "Biti",
    "Stop":                "Stop",
    "Par.":                "Par.",
    "none":                "nav",
    "even":                "pāra",
    "odd":                 "nepāra",
    "Fill":                "Aizpilde",
    "BPF width":           "BPF platums",
    "Character wait":      "Pauze starp zīmēm",
    "Audio in":            "Skaņa iekšā",
    "Audio out":           "Skaņa ārā",

    "Bandpass around the two tones: throws away\neverything outside before the detector.":
        "Joslas filtrs ap abiem toņiem: atmet visu, kas\nir ārpusē, vēl pirms detektora.",
    "Removes one frequency. Ctrl+click the waterfall\nto drop it on the carrier that is in the way.":
        "Noņem vienu frekvenci. Ctrl+klikšķis uz ūdenskrituma\nto uzliek uz traucējošā nesēja.",
    "Adaptive canceller: removes steady carriers by\nitself. On weak signals it can eat the RTTY as\nwell — try it and listen.":
        "Adaptīvais dzēsējs: pats noņem stāvošos nesējus.\nVājos signālos tas var apēst arī pašu RTTY —\npamēģini un klausies.",
    "Finds the tone pair in the band and moves the\ntuning onto it. Once, now.":
        "Atrod toņu pāri joslā un pārvieto noskaņojumu\nuz to. Vienu reizi, tagad.",
    "Searches by itself whenever nothing is being\ncopied, and tries the polarity too. While the\ndecoder is locked it touches nothing.":
        "Meklē pats, kamēr nekas netiek uztverts, un\nizmēģina arī polaritāti. Kamēr dekoders ir\npieķēries, tas neko neaiztiek.",
    "Follows the drift of the signal already locked,\nwithin a few tens of hertz.":
        "Seko jau noķertā signāla novirzei dažu desmitu\nhercu robežās.",
    "How much band to show. Narrow around the tones\nshows the individual bits; wide shows who is calling.":
        "Cik daudz joslas rādīt. Šauri ap toņiem redzami\natsevišķi biti; plati redzams, kas sauc.",
    "How fast it scrolls. Slower keeps a longer\nstretch of band in view.":
        "Cik ātri tas ritinās. Lēnāk redzams garāks\njoslas gabals.",
    "Zoom, palette, brightness and speed of the\nwaterfall.":
        "Ūdenskrituma tuvinājums, palete, gaišums un\nātrums.",
    "What to send between characters while you\ntype live.":
        "Ko sūtīt starp zīmēm, kamēr raksti tiešraidē.",
    "Figures set: US has BELL and apostrophe where\nITA2 swaps the two.":
        "Ciparu kopa: US ir BELL un apostrofs tur, kur\nITA2 tos samaina vietām.",
    "Prints characters whose stop bit read wrong too:\na few more characters on distorted signals, some\nlines of rubbish in exchange.":
        "Izdrukā arī zīmes ar nepareizu stopa bitu: dažas\nzīmes vairāk kropļotos signālos, pretī dažas\nrindas atkritumu.",
    "Unshift on space — recovers a lost FIGS/LTRS, but\nbreaks long figure groups such as serial numbers.":
        "Unshift on space — atgūst pazudušu FIGS/LTRS, bet\nsalauž garas ciparu grupas, piemēram, kārtas\nnumurus.",
    "Puts the radio into DIGU and narrows its filter\naround the tones.":
        "Pārslēdz staciju uz DIGU un sašaurina tās filtru\nap toņiem.",
    "Use after changing the port or a device.":
        "Lietot pēc porta vai ierīces nomaiņas.",
    "When on, the gateway opens at start-up and\ncloses with the program. Turn it off if the radio\nis on another PC.":
        "Ja ieslēgts, vārteja atveras startējot un\naizveras kopā ar programmu. Izslēdz to, ja stacija\nir pie cita datora.",
    "Highlights callsigns. Click one to put it\nin the HIS CALL field.":
        "Izceļ izsaukuma signālus. Uzklikšķini uz viena,\nlai ieliktu to laukā HIS CALL.",
    "High enough to drive the ALC — check the meter.":
        "Pietiekami augsts, lai vadītu ALC — skaties uz mērītāju.",

    "%n contact(s)":       ["%n sakars", "%n sakari", "%n sakaru"],
    "Worked before: %1 — last on %2":
        "Jau strādāts: %1 — pēdējo reizi %2",
    "A callsign is the least a contact needs to be logged":
        "Bez izsaukuma signāla sakaru nevar ierakstīt",

    "No radio has answered yet": "Neviena stacija vēl nav atbildējusi",
    "Radios announce themselves on UDP 4992.\nCheck the radio is on the same subnet, or enter its address below.":
        "Stacijas piesakās uz UDP 4992.\nPārbaudi, vai stacija ir tajā pašā apakštīklā, vai ieraksti zemāk tās adresi.",
    "Looking for radios…":  "Meklēju stacijas…",
    "Waiting for the gateway…": "Gaidu vārteju…",
    "Connecting to %1…":    "Pieslēdzos pie %1…",
    "Reconnecting to %1…":  "Pieslēdzos no jauna pie %1…",
    "Connected to %1":      "Pieslēgts pie %1",
    "Disconnected":         "Atslēgts",
    "Receiving from %1":    "Uztveru no %1",
    "'%1' is not a valid address": "'%1' nav derīga adrese",
    "Radio %1 is no longer on the network": "Stacijas %1 tīklā vairs nav",
    "%1 — audio only, no CAT": "%1 — tikai skaņa, bez CAT",

    "No recognisable RTTY signal in the band":
        "Joslā nav atpazīstama RTTY signāla",
    "Centred on %1 Hz (%2 dB above the floor)":
        "Centrēts uz %1 Hz (%2 dB virs trokšņiem)",
    "Trying the opposite polarity (%1)": "Mēģinu pretējo polaritāti (%1)",
    "Signal at %1 Hz: moving there":     "Signāls uz %1 Hz: pārvietojos turp",
    "reversed":             "apgriezta",
    "direct":               "tieša",

    "not started":          "nav palaista",
    "disabled":             "izslēgta",
    "already listening (started elsewhere)": "jau klausās (palaista citur)",
    "A gateway is already on the network: not starting another":
        "Tīklā jau ir vārteja: otru nepalaižu",
    "executable not found": "programma nav atrasta",
    "Cannot find %1 beside the application": "Neatrodu %1 blakus lietotnei",
    "starting on %1":       "startē uz %1",
    "started":              "palaista",
    "start failed":         "palaišana neizdevās",
    "Starting the gateway: %1 on port %2": "Palaižu vārteju: %1 uz porta %2",
    "The gateway will not start: %1": "Vārteja nestartē: %1",
    "exited":               "beigusi darbu",
    "exited (code %1)":     "beigusi darbu (kods %1)",
    "Gateway exited, code %1": "Vārteja beidza darbu, kods %1",
    "Closing the gateway":  "Aizveru vārteju",
    "The gateway is staying up: leaving it to the other clients":
        "Vārteja paliek darbā: atstāju to pārējiem klientiem",
    "left running":         "atstāta darbā",
    "closed":               "aizvērta",
    "running on %1":        "darbojas uz %1",
    "%1 is busy — receive only": "%1 ir aizņemts — tikai uztveršana",
    "running, no CAT":      "darbojas, bez CAT",
    "The gateway is not answering — retrying": "Vārteja neatbild — mēģinu vēlreiz",
    "Gateway listening on UDP %1": "Vārteja klausās uz UDP %1",
    "Client %1:%2 connected": "Klients %1:%2 pieslēdzies",
    "Client %1:%2 timed out": "Klientam %1:%2 iztecējis laiks",
    "Client %1 is leaving":  "Klients %1 aiziet",
    "Shutdown requested by whoever started me": "Izslēgšanu pieprasīja tas, kas mani palaida",
    "Shutdown deferred: %1 client(s) are still using the radio":
        "Izslēgšana atlikta: %1 klients(-i) vēl lieto staciju",
    "No client for thirty seconds: closing": "Trīsdesmit sekundes bez klienta: aizveros",
    "No clients left — dropping PTT": "Klientu vairs nav — atlaižu PTT",

    "CAT on %1 at %2 baud": "CAT uz %1 ar %2 bodiem",
    "CAT disabled — receive only, no tuning or PTT":
        "CAT izslēgts — tikai uztveršana, bez noskaņošanas un PTT",
    "Cannot open %1: %2":   "Nevaru atvērt %1: %2",
    "CAT: queued TX1; on %1": "CAT: TX1; rindā uz %1",
    "CAT: wrote TX0; (%1 bytes) on %2": "CAT: ierakstīts TX0; (%1 baiti) uz %2",
    "Radio still shows %1 — repeating the PTT command (%2)":
        "Stacija joprojām rāda %1 — atkārtoju PTT komandu (%2)",
    "The FT-991A has no mode called '%1'": "FT-991A nav režīma ar nosaukumu '%1'",
    "PTT requested by the client: %1  (CAT %2)": "Klients pieprasīja PTT: %1  (CAT %2)",
    "TRANSMIT":             "RAIDĪT",
    "receive":              "uztvert",
    "open":                 "atvērts",
    "CLOSED":               "AIZVĒRTS",
    "Audio in: %1":         "Skaņa iekšā: %1",
    "Audio out: %1":        "Skaņa ārā: %1",
    "No capture device matching '%1'. Available: %2":
        "Neviena ieejas ierīce neatbilst '%1'. Pieejamās: %2",
    "No playback device matching '%1' — transmit is unavailable":
        "Neviena izejas ierīce neatbilst '%1' — raidīt nav iespējams",
    "%1 cannot run at %2 Hz": "%1 nevar darboties ar %2 Hz",
    "Could not open the audio transport": "Neizdevās atvērt skaņas kanālu",
    "Transmit audio overrun — dropped %1 ms": "Raidīšanas skaņas pārpilde — zaudēti %1 ms",
    "No transmit audio for %1 ms — dropping PTT":
        "Nav raidīšanas skaņas %1 ms — atlaižu PTT",
    "Cannot write the log in %1": "Nevaru ierakstīt žurnālu mapē %1",

    "Transmit is unavailable on this connection":
        "Pa šo savienojumu raidīt nav iespējams",
    "Transmit is unavailable: no Opus transmit stream":
        "Raidīt nav iespējams: trūkst Opus raidīšanas plūsmas",
    "Transmit requested but CAT is not open — ignored":
        "Pieprasīta raidīšana, bet CAT nav atvērts — ignorēts",
    "Transmit ran for three minutes — stopped":
        "Raidīšana ilga trīs minūtes — apturēta",
    "The radio is in %1: on voice modes the USB audio does not modulate. Press 'Set radio' in the DECODER panel.":
        "Stacija ir režīmā %1: balss režīmos USB skaņa nemodulē. Nospied «Iestatīt staciju» DEKODERA panelī.",

    "Cannot bind UDP port %1: %2": "Nevaru aizņemt UDP portu %1: %2",
    "Cannot listen on UDP port %1: %2": "Nevaru klausīties UDP portā %1: %2",
    "Cannot open a local UDP port: %1": "Nevaru atvērt vietējo UDP portu: %1",
    "Cannot open the VITA-49 UDP socket: %1": "Nevaru atvērt VITA-49 UDP ligzdu: %1",
    "Cannot open the discovery socket: %1": "Nevaru atvērt meklēšanas ligzdu: %1",
    "Could not create the receive audio stream": "Neizdevās izveidot uztveršanas skaņas plūsmu",
    "Could not create the transmit audio stream": "Neizdevās izveidot raidīšanas skaņas plūsmu",
    "The radio refused the client registration (code 0x%1)":
        "Stacija atteica klienta reģistrāciju (kods 0x%1)",
    "The radio rejected the UDP port registration":
        "Stacija noraidīja UDP porta reģistrāciju",
}
