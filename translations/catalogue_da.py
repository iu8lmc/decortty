# -*- coding: utf-8 -*-
"""Dansk.

Amatørradioens forkortelser oversættes ikke: AFC, REV, USOS, BPF, NOTCH, LMS,
RST, QTH er internationale, og sådan leder en operatør efter dem. Det samme
gælder "mark", "shift", "squelch" og "waterfall" — at oversætte dem ville give
ord, ingen bruger i stationen.
"""

TRANSLATIONS = {
    "TRANSMITTING":
        "SENDER",
    "Type here — Enter sends the line":
        "Skriv her — Enter sender linjen",
    "Connect a radio to transmit":
        "Forbind en radio for at sende",
    "MY CALL":             "MY CALL",
    "QTH":                 "QTH",
    "LANGUAGE":            "SPROG",
    "changes immediately": "virker med det samme",

    "SPECTRUM":            "SPEKTRUM",
    "RECEIVE":             "MODTAGELSE",
    "TRANSMIT":            "SENDING",
    "TUNING":              "AFSTEMNING",
    "DECODER":             "DEKODER",
    "FILTERS":             "FILTRE",
    "FRAMING":             "RAMME",
    "VIEW":                "VISNING",
    "CENTRE":              "CENTRÉR",
    "STATION":             "STATION",
    "MACROS":              "MAKROER",
    "LOG":                 "LOGBOG",
    "RADIOS ON THE NETWORK": "RADIOER PÅ NETTET",
    "FT-991A GATEWAY":     "FT-991A-GATEWAY",

    "Close":               "Luk",
    "Connect":             "Forbind",
    "Copy":                "Kopiér",
    "Clear":               "Ryd",
    "Abort":               "Afbryd",
    "Follow":              "Følg",
    "Call":                "Kaldesignaler",
    "Log it":              "Log den",
    "Export ADIF":         "Eksportér ADIF",
    "Restore defaults":    "Nulstil",
    "Restart":             "Genstart",
    "Set radio":           "Indstil radio",
    "Setup":               "Indstillinger",
    "settings":            "indstil",
    "close":               "luk",
    "on":                  "til",
    "off":                 "fra",
    "band":                "bånd",
    "light":               "lys",
    "contrast":            "kontrast",
    "speed %1x":           "fart %1x",
    "floor %1 dB":         "støjgulv %1 dB",
    "jump to end ↓":       "til slutningen ↓",
    "DECO":                "DECO",
    "TX: %1":              "TX: %1",
    "transmit":            "transmit",
    "GREY":                "GRÅ",
    "FIRE":                "ILD",

    "NAME":                "NAVN",
    "RST SENT":            "RST SENDT",
    "RST RCVD":            "RST MODT",
    "Correction":          "Rettelse",
    "Normal":              "Normal",
    "Deep":                "Dyb",
    "Off":                 "Fra",
    "Bits":                "Bit",
    "Stop":                "Stop",
    "Par.":                "Par.",
    "none":                "ingen",
    "even":                "lige",
    "odd":                 "ulige",
    "Fill":                "Fyld",
    "BPF width":           "BPF-bredde",
    "Character wait":      "Tegnpause",
    "Audio in":            "Lyd ind",
    "Audio out":           "Lyd ud",

    "Bandpass around the two tones: throws away\neverything outside before the detector.":
        "Båndpas om de to toner: kasserer alt udenfor,\nallerede før detektoren.",
    "Removes one frequency. Ctrl+click the waterfall\nto drop it on the carrier that is in the way.":
        "Fjerner én frekvens. Ctrl+klik på vandfaldet for\nat lægge den på den bærebølge, der er i vejen.",
    "Adaptive canceller: removes steady carriers by\nitself. On weak signals it can eat the RTTY as\nwell — try it and listen.":
        "Adaptiv undertrykker: fjerner faste bærebølger\naf sig selv. Ved svage signaler kan den også æde\nRTTY'en — prøv den og lyt.",
    "Finds the tone pair in the band and moves the\ntuning onto it. Once, now.":
        "Finder tonepargeti båndet og flytter afstemningen\nderhen. Én gang, nu.",
    "Searches by itself whenever nothing is being\ncopied, and tries the polarity too. While the\ndecoder is locked it touches nothing.":
        "Søger af sig selv, når intet bliver kopieret, og\nprøver også polariteten. Så længe dekoderen er\nlåst, rører den ikke ved noget.",
    "Follows the drift of the signal already locked,\nwithin a few tens of hertz.":
        "Følger driften af det signal, der allerede er\nlåst, inden for nogle få tiere af hertz.",
    "How much band to show. Narrow around the tones\nshows the individual bits; wide shows who is calling.":
        "Hvor meget bånd der vises. Smalt om tonerne ses\nde enkelte bit; bredt ses, hvem der kalder.",
    "How fast it scrolls. Slower keeps a longer\nstretch of band in view.":
        "Hvor hurtigt det ruller. Langsommere holder et\nlængere stykke bånd i syne.",
    "Zoom, palette, brightness and speed of the\nwaterfall.":
        "Zoom, palet, lysstyrke og fart på vandfaldet.",
    "What to send between characters while you\ntype live.":
        "Hvad der sendes mellem tegnene, mens du\nskriver direkte.",
    "Figures set: US has BELL and apostrophe where\nITA2 swaps the two.":
        "Ciffersæt: US har BELL og apostrof der, hvor\nITA2 bytter om på de to.",
    "Prints characters whose stop bit read wrong too:\na few more characters on distorted signals, some\nlines of rubbish in exchange.":
        "Skriver også tegn med forkert stopbit: nogle få\ntegn mere på forvrængede signaler, til gengæld\nnogle linjer skrald.",
    "Unshift on space — recovers a lost FIGS/LTRS, but\nbreaks long figure groups such as serial numbers.":
        "Unshift on space — redder et tabt FIGS/LTRS, men\nbryder lange ciffergrupper som løbenumre.",
    "Puts the radio into DIGU and narrows its filter\naround the tones.":
        "Sætter radioen i DIGU og snævrer dens filter\nind om tonerne.",
    "Use after changing the port or a device.":
        "Bruges efter skift af port eller enhed.",
    "When on, the gateway opens at start-up and\ncloses with the program. Turn it off if the radio\nis on another PC.":
        "Er den til, åbner gatewayen ved opstart og\nlukker med programmet. Slå den fra, hvis radioen\nsidder på en anden pc.",
    "Highlights callsigns. Click one to put it\nin the HIS CALL field.":
        "Fremhæver kaldesignaler. Klik på et for at\nlægge det i feltet HIS CALL.",
    "High enough to drive the ALC — check the meter.":
        "Højt nok til at drive ALC'en — hold øje med måleren.",

    "%n contact(s)":       ["%n forbindelse", "%n forbindelser"],
    "Worked before: %1 — last on %2":
        "Kørt før: %1 — sidst den %2",
    "A callsign is the least a contact needs to be logged":
        "Der skal mindst et kaldesignal til for at logge en forbindelse",

    "No radio has answered yet": "Ingen radio har svaret endnu",
    "Radios announce themselves on UDP 4992.\nCheck the radio is on the same subnet, or enter its address below.":
        "Radioer melder sig på UDP 4992.\nTjek at radioen er på samme undernet, eller skriv dens adresse nedenfor.",
    "Looking for radios…":  "Søger efter radioer…",
    "Waiting for the gateway…": "Venter på gatewayen…",
    "Connecting to %1…":    "Forbinder til %1…",
    "Reconnecting to %1…":  "Forbinder igen til %1…",
    "Connected to %1":      "Forbundet til %1",
    "Disconnected":         "Afbrudt",
    "Receiving from %1":    "Modtager fra %1",
    "'%1' is not a valid address": "'%1' er ikke en gyldig adresse",
    "Radio %1 is no longer on the network": "Radio %1 er ikke længere på nettet",
    "%1 — audio only, no CAT": "%1 — kun lyd, ingen CAT",

    "No recognisable RTTY signal in the band":
        "Intet genkendeligt RTTY-signal i båndet",
    "Centred on %1 Hz (%2 dB above the floor)":
        "Centreret på %1 Hz (%2 dB over støjgulvet)",
    "Trying the opposite polarity (%1)": "Prøver den modsatte polaritet (%1)",
    "Signal at %1 Hz: moving there":     "Signal på %1 Hz: flytter derhen",
    "reversed":             "omvendt",
    "direct":               "normal",

    "not started":          "ikke startet",
    "disabled":             "slået fra",
    "already listening (started elsewhere)": "lytter allerede (startet et andet sted)",
    "A gateway is already on the network: not starting another":
        "Der er allerede en gateway på nettet: starter ikke en til",
    "executable not found": "programfil ikke fundet",
    "Cannot find %1 beside the application": "Kan ikke finde %1 ved siden af programmet",
    "starting on %1":       "starter på %1",
    "started":              "startet",
    "start failed":         "start mislykkedes",
    "Starting the gateway: %1 on port %2": "Starter gatewayen: %1 på port %2",
    "The gateway will not start: %1": "Gatewayen starter ikke: %1",
    "exited":               "afsluttet",
    "exited (code %1)":     "afsluttet (kode %1)",
    "Gateway exited, code %1": "Gateway afsluttet, kode %1",
    "Closing the gateway":  "Lukker gatewayen",
    "The gateway is staying up: leaving it to the other clients":
        "Gatewayen bliver stående: jeg overlader den til de andre klienter",
    "left running":         "efterladt kørende",
    "closed":               "lukket",
    "running on %1":        "kører på %1",
    "%1 is busy — receive only": "%1 er optaget — kun modtagelse",
    "running, no CAT":      "kører, uden CAT",
    "The gateway is not answering — retrying": "Gatewayen svarer ikke — prøver igen",
    "Gateway listening on UDP %1": "Gateway lytter på UDP %1",
    "Client %1:%2 connected": "Klient %1:%2 forbundet",
    "Client %1:%2 timed out": "Klient %1:%2 udløbet",
    "Client %1 is leaving":  "Klient %1 går",
    "Shutdown requested by whoever started me": "Nedlukning bedt om af den, der startede mig",
    "Shutdown deferred: %1 client(s) are still using the radio":
        "Nedlukning udsat: %1 klient(er) bruger stadig radioen",
    "No client for thirty seconds: closing": "Ingen klient i tredive sekunder: lukker",
    "No clients left — dropping PTT": "Ingen klienter tilbage — slipper PTT",

    "CAT on %1 at %2 baud": "CAT på %1 med %2 baud",
    "CAT disabled — receive only, no tuning or PTT":
        "CAT slået fra — kun modtagelse, ingen afstemning eller PTT",
    "Cannot open %1: %2":   "Kan ikke åbne %1: %2",
    "CAT: queued TX1; on %1": "CAT: TX1; i kø på %1",
    "CAT: wrote TX0; (%1 bytes) on %2": "CAT: skrev TX0; (%1 byte) på %2",
    "Radio still shows %1 — repeating the PTT command (%2)":
        "Radioen viser stadig %1 — gentager PTT-kommandoen (%2)",
    "The FT-991A has no mode called '%1'": "FT-991A har ingen modus, der hedder '%1'",
    "PTT requested by the client: %1  (CAT %2)": "PTT bedt om af klienten: %1  (CAT %2)",
    "TRANSMIT":             "SEND",
    "receive":              "modtag",
    "open":                 "åben",
    "CLOSED":               "LUKKET",
    "Audio in: %1":         "Lyd ind: %1",
    "Audio out: %1":        "Lyd ud: %1",
    "No capture device matching '%1'. Available: %2":
        "Ingen optageenhed passer til '%1'. Tilgængelige: %2",
    "No playback device matching '%1' — transmit is unavailable":
        "Ingen afspilningsenhed passer til '%1' — der kan ikke sendes",
    "%1 cannot run at %2 Hz": "%1 kan ikke køre med %2 Hz",
    "Could not open the audio transport": "Kunne ikke åbne lydtransporten",
    "Transmit audio overrun — dropped %1 ms": "Sendelyden løb over — smed %1 ms væk",
    "No transmit audio for %1 ms — dropping PTT":
        "Ingen sendelyd i %1 ms — slipper PTT",
    "Cannot write the log in %1": "Kan ikke skrive loggen i %1",

    "Transmit is unavailable on this connection":
        "Der kan ikke sendes over denne forbindelse",
    "Transmit is unavailable: no Opus transmit stream":
        "Der kan ikke sendes: ingen Opus-sendestrøm",
    "Transmit requested but CAT is not open — ignored":
        "Sending bedt om, men CAT er ikke åben — ignoreret",
    "Transmit ran for three minutes — stopped":
        "Udsendelsen kørte i tre minutter — standset",
    "The radio is in %1: on voice modes the USB audio does not modulate. Press 'Set radio' in the DECODER panel.":
        "Radioen står på %1: i taletilstande modulerer USB-lyden ikke. Tryk 'Indstil radio' i DEKODER-panelet.",

    "Cannot bind UDP port %1: %2": "Kan ikke tage UDP-port %1: %2",
    "Cannot listen on UDP port %1: %2": "Kan ikke lytte på UDP-port %1: %2",
    "Cannot open a local UDP port: %1": "Kan ikke åbne en lokal UDP-port: %1",
    "Cannot open the VITA-49 UDP socket: %1": "Kan ikke åbne VITA-49-UDP-soklen: %1",
    "Cannot open the discovery socket: %1": "Kan ikke åbne søgesoklen: %1",
    "Could not create the receive audio stream": "Kunne ikke oprette modtagelydstrømmen",
    "Could not create the transmit audio stream": "Kunne ikke oprette sendelydstrømmen",
    "The radio refused the client registration (code 0x%1)":
        "Radioen afviste klientregistreringen (kode 0x%1)",
    "The radio rejected the UDP port registration":
        "Radioen afviste registreringen af UDP-porten",
}
