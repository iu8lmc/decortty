# -*- coding: utf-8 -*-
"""Nederlands.

Afkortingen uit de amateurdienst blijven onvertaald: AFC, REV, USOS, BPF, NOTCH,
LMS, RST, QTH zijn internationaal en zo zoekt een operator ze op. Hetzelfde
geldt voor "mark", "shift", "squelch" en "waterfall" — vertalen levert woorden
op die niemand in de shack gebruikt.
"""

TRANSLATIONS = {
    "FROM A SOUND CARD":
        "VAN EEN GELUIDSKAART",
    "no frequency, no PTT — transmit on VOX":
        "geen frequentie, geen PTT — zenden op VOX",
    "— no transmit —":
        "— niet zenden —",
    "Listen":
        "Luisteren",
    "Cannot open the sound card":
        "Kan de geluidskaart niet openen",
    "Listening to %1":
        "Luistert naar %1",
    "Listening to %1 — receive only":
        "Luistert naar %1 — alleen ontvangst",
    "shared with %1":
        "gedeeld met %1",
    "Sharing %1 with %2":
        "%1 gedeeld met %2",
    "another station":
        "een ander station",
    "The radio will not give audio to a bound client — reconnecting as a GUI station":
        "De set geeft een gebonden client geen audio — ik verbind opnieuw als GUI-station",
    "TRANSMITTING":
        "ZENDT",
    "Type here — Enter sends the line":
        "Typ hier — Enter stuurt de regel",
    "Connect a radio to transmit":
        "Verbind een set om te zenden",
    # sigle di stazione: restano tali e quali
    "MY CALL":             "MY CALL",
    "QTH":                 "QTH",
    "LANGUAGE":              "TAAL",
    "changes immediately":   "verandert meteen",
    "SPECTRUM":            "SPECTRUM",
    "RECEIVE":             "ONTVANGST",
    "TRANSMIT":            "ZENDEN",
    "TUNING":              "AFSTEMMING",
    "DECODER":             "DECODER",
    "FILTERS":             "FILTERS",
    "FRAMING":             "FRAME",
    "VIEW":                "WEERGAVE",
    "CENTRE":              "CENTREREN",
    "STATION":             "STATION",
    "MACROS":              "MACRO'S",
    "LOG":                 "LOGBOEK",
    "RADIOS ON THE NETWORK": "SETS OP HET NETWERK",
    "FT-991A GATEWAY":     "FT-991A-GATEWAY",

    "Close":               "Sluiten",
    "Connect":             "Verbinden",
    "Copy":                "Kopiëren",
    "Clear":               "Wissen",
    "Abort":               "Afbreken",
    "Follow":              "Volgen",
    "Call":                "Roepletters",
    "Log it":              "Loggen",
    "Export ADIF":         "ADIF exporteren",
    "Restore defaults":    "Herstellen",
    "Restart":             "Herstarten",
    "Set radio":           "Set instellen",
    "Setup":               "Instellingen",
    "settings":            "instellen",
    "close":               "dicht",
    "on":                  "aan",
    "off":                 "uit",
    "band":                "band",
    "light":               "licht",
    "contrast":            "contrast",
    "speed %1x":           "snelh. %1x",
    "floor %1 dB":         "ruisvloer %1 dB",
    "jump to end ↓":       "naar het eind ↓",
    "DECO":                "DECO",
    "TX: %1":              "TX: %1",
    "transmit":            "transmit",
    "GREY":                "GRIJS",
    "FIRE":                "VUUR",

    "NAME":                "NAAM",
    "RST SENT":            "RST GEZ",
    "RST RCVD":            "RST ONTV",
    "Correction":          "Correctie",
    "Normal":              "Normaal",
    "Deep":                "Diep",
    "Off":                 "Uit",
    "Bits":                "Bits",
    "Stop":                "Stop",
    "Par.":                "Par.",
    "none":                "geen",
    "even":                "even",
    "odd":                 "oneven",
    "Fill":                "Vulling",
    "BPF width":           "BPF-breedte",
    "Character wait":      "Wachttijd per teken",
    "Audio in":            "Audio in",
    "Audio out":           "Audio uit",

    "Bandpass around the two tones: throws away\neverything outside before the detector.":
        "Banddoorlaat rond de twee tonen: gooit alles\ndaarbuiten weg, nog voor de detector.",
    "Removes one frequency. Ctrl+click the waterfall\nto drop it on the carrier that is in the way.":
        "Verwijdert één frequentie. Ctrl+klik op de\nwaterval om hem op de storende draaggolf te zetten.",
    "Adaptive canceller: removes steady carriers by\nitself. On weak signals it can eat the RTTY as\nwell — try it and listen.":
        "Adaptieve onderdrukker: haalt vaste draaggolven\nvanzelf weg. Bij zwakke signalen vreet hij ook de\nRTTY op — probeer het en luister.",
    "Finds the tone pair in the band and moves the\ntuning onto it. Once, now.":
        "Zoekt het tonenpaar in de band en zet de\nafstemming erop. Eén keer, nu.",
    "Searches by itself whenever nothing is being\ncopied, and tries the polarity too. While the\ndecoder is locked it touches nothing.":
        "Zoekt vanzelf zolang er niets wordt meegelezen,\nen probeert ook de polariteit. Zolang de decoder\nvast zit, raakt hij niets aan.",
    "Follows the drift of the signal already locked,\nwithin a few tens of hertz.":
        "Volgt de drift van het al vastgelegde signaal,\nbinnen enkele tientallen hertz.",
    "How much band to show. Narrow around the tones\nshows the individual bits; wide shows who is calling.":
        "Hoeveel band te tonen. Smal rond de tonen laat de\nlosse bits zien; breed laat zien wie er roept.",
    "How fast it scrolls. Slower keeps a longer\nstretch of band in view.":
        "Hoe snel hij loopt. Langzamer houdt een langer\nstuk band in beeld.",
    "Zoom, palette, brightness and speed of the\nwaterfall.":
        "Zoom, palet, helderheid en snelheid van de\nwaterval.",
    "What to send between characters while you\ntype live.":
        "Wat er tussen twee tekens uitgaat terwijl je\nlive typt.",
    "Figures set: US has BELL and apostrophe where\nITA2 swaps the two.":
        "Cijferset: US heeft BELL en apostrof waar ITA2\nde twee omwisselt.",
    "Prints characters whose stop bit read wrong too:\na few more characters on distorted signals, some\nlines of rubbish in exchange.":
        "Drukt ook tekens af met een fout stopbit: een\npaar tekens meer bij vervormde signalen, in ruil\nvoor een paar regels rommel.",
    "Unshift on space — recovers a lost FIGS/LTRS, but\nbreaks long figure groups such as serial numbers.":
        "Unshift on space — redt een verloren FIGS/LTRS,\nmaar breekt lange cijfergroepen zoals\nvolgnummers.",
    "Puts the radio into DIGU and narrows its filter\naround the tones.":
        "Zet de set op DIGU en versmalt zijn filter rond\nde tonen.",
    "Use after changing the port or a device.":
        "Gebruiken na het wisselen van poort of apparaat.",
    "When on, the gateway opens at start-up and\ncloses with the program. Turn it off if the radio\nis on another PC.":
        "Staat dit aan, dan opent de gateway bij het\nstarten en sluit met het programma. Zet het uit\nals de set aan een andere pc hangt.",
    "Highlights callsigns. Click one to put it\nin the HIS CALL field.":
        "Markeert roepletters. Klik er een aan om hem in\nhet veld HIS CALL te zetten.",
    "High enough to drive the ALC — check the meter.":
        "Hoog genoeg om de ALC te sturen — kijk naar de meter.",

    "%n contact(s)":       ["%n verbinding", "%n verbindingen"],
    "Worked before: %1 — last on %2":
        "Eerder gewerkt: %1 — voor het laatst op %2",
    "A callsign is the least a contact needs to be logged":
        "Zonder roepletters valt een verbinding niet te loggen",

    "No radio has answered yet": "Nog geen enkele set heeft geantwoord",
    "Radios announce themselves on UDP 4992.\nCheck the radio is on the same subnet, or enter its address below.":
        "Sets melden zich op UDP 4992.\nControleer of de set in hetzelfde subnet zit, of vul hieronder zijn adres in.",
    "Looking for radios…":  "Zoeken naar sets…",
    "Waiting for the gateway…": "Wachten op de gateway…",
    "Connecting to %1…":    "Verbinden met %1…",
    "Reconnecting to %1…":  "Opnieuw verbinden met %1…",
    "Connected to %1":      "Verbonden met %1",
    "Disconnected":         "Verbinding verbroken",
    "Receiving from %1":    "Ontvangst van %1",
    "'%1' is not a valid address": "'%1' is geen geldig adres",
    "Radio %1 is no longer on the network": "Set %1 zit niet meer op het netwerk",
    "%1 — audio only, no CAT": "%1 — alleen audio, geen CAT",

    "No recognisable RTTY signal in the band":
        "Geen herkenbaar RTTY-signaal in de band",
    "Centred on %1 Hz (%2 dB above the floor)":
        "Gecentreerd op %1 Hz (%2 dB boven de ruisvloer)",
    "Trying the opposite polarity (%1)": "Ik probeer de andere polariteit (%1)",
    "Signal at %1 Hz: moving there":     "Signaal op %1 Hz: ik ga erheen",
    "reversed":             "omgekeerd",
    "direct":               "normaal",

    "not started":          "niet gestart",
    "disabled":             "uitgeschakeld",
    "already listening (started elsewhere)": "luistert al (elders gestart)",
    "A gateway is already on the network: not starting another":
        "Er zit al een gateway op het netwerk: ik start er geen tweede",
    "executable not found": "programma niet gevonden",
    "Cannot find %1 beside the application": "Ik vind %1 niet naast de toepassing",
    "starting on %1":       "start op %1",
    "started":              "gestart",
    "start failed":         "starten mislukt",
    "Starting the gateway: %1 on port %2": "Ik start de gateway: %1 op poort %2",
    "The gateway will not start: %1": "De gateway start niet: %1",
    "exited":               "gestopt",
    "exited (code %1)":     "gestopt (code %1)",
    "Gateway exited, code %1": "Gateway gestopt, code %1",
    "Closing the gateway":  "Ik sluit de gateway",
    "The gateway is staying up: leaving it to the other clients":
        "De gateway blijft draaien: ik laat hem aan de andere clients",
    "left running":         "blijft draaien",
    "closed":               "gesloten",
    "running on %1":        "draait op %1",
    "%1 is busy — receive only": "%1 is bezet — alleen luisteren",
    "running, no CAT":      "draait, zonder CAT",
    "The gateway is not answering — retrying": "De gateway antwoordt niet — nieuwe poging",
    "Gateway listening on UDP %1": "Gateway luistert op UDP %1",
    "Client %1:%2 connected": "Client %1:%2 verbonden",
    "Client %1:%2 timed out": "Client %1:%2 verlopen",
    "Client %1 is leaving":  "Client %1 vertrekt",
    "Shutdown requested by whoever started me": "Afsluiten gevraagd door wie mij startte",
    "Shutdown deferred: %1 client(s) are still using the radio":
        "Afsluiten uitgesteld: %1 client(s) gebruiken de set nog",
    "No client for thirty seconds: closing": "Al dertig seconden geen client: ik sluit",
    "No clients left — dropping PTT": "Geen client meer — ik laat de PTT los",

    "CAT on %1 at %2 baud": "CAT op %1 met %2 baud",
    "CAT disabled — receive only, no tuning or PTT":
        "CAT uitgeschakeld — alleen ontvangst, geen afstemming of PTT",
    "Cannot open %1: %2":   "Kan %1 niet openen: %2",
    "CAT: queued TX1; on %1": "CAT: TX1; in de wachtrij op %1",
    "CAT: wrote TX0; (%1 bytes) on %2": "CAT: TX0; geschreven (%1 bytes) op %2",
    "Radio still shows %1 — repeating the PTT command (%2)":
        "De set toont nog steeds %1 — ik herhaal het PTT-commando (%2)",
    "The FT-991A has no mode called '%1'": "De FT-991A kent geen mode '%1'",
    "PTT requested by the client: %1  (CAT %2)": "PTT gevraagd door de client: %1  (CAT %2)",
    "TRANSMIT":             "ZENDEN",
    "receive":              "ontvangen",
    "open":                 "open",
    "CLOSED":               "DICHT",
    "Audio in: %1":         "Audio in: %1",
    "Audio out: %1":        "Audio uit: %1",
    "No capture device matching '%1'. Available: %2":
        "Geen opnameapparaat komt overeen met '%1'. Beschikbaar: %2",
    "No playback device matching '%1' — transmit is unavailable":
        "Geen weergaveapparaat komt overeen met '%1' — zenden kan niet",
    "%1 cannot run at %2 Hz": "%1 kan niet op %2 Hz draaien",
    "Could not open the audio transport": "Kon het audiotransport niet openen",
    "Transmit audio overrun — dropped %1 ms": "Zendaudio liep over — %1 ms weggegooid",
    "No transmit audio for %1 ms — dropping PTT":
        "Al %1 ms geen zendaudio — ik laat de PTT los",
    "Cannot write the log in %1": "Kan het logbestand niet schrijven in %1",

    "Transmit is unavailable on this connection":
        "Over deze verbinding kan niet gezonden worden",
    "Transmit is unavailable: no Opus transmit stream":
        "Zenden kan niet: geen Opus-zendstroom",
    "Transmit requested but CAT is not open — ignored":
        "Zenden gevraagd maar CAT staat niet open — genegeerd",
    "Transmit ran for three minutes — stopped":
        "De uitzending liep drie minuten — gestopt",
    "The radio is in %1: on voice modes the USB audio does not modulate. Press 'Set radio' in the DECODER panel.":
        "De set staat op %1: in spraakmodes moduleert de USB-audio niet. Druk op 'Set instellen' in het DECODER-paneel.",

    "Cannot bind UDP port %1: %2": "Kan UDP-poort %1 niet claimen: %2",
    "Cannot listen on UDP port %1: %2": "Kan niet luisteren op UDP-poort %1: %2",
    "Cannot open a local UDP port: %1": "Kan geen lokale UDP-poort openen: %1",
    "Cannot open the VITA-49 UDP socket: %1": "Kan de VITA-49-UDP-socket niet openen: %1",
    "Cannot open the discovery socket: %1": "Kan de zoeksocket niet openen: %1",
    "Could not create the receive audio stream": "Kon de ontvangstaudiostroom niet aanmaken",
    "Could not create the transmit audio stream": "Kon de zendaudiostroom niet aanmaken",
    "The radio refused the client registration (code 0x%1)":
        "De set weigerde de clientregistratie (code 0x%1)",
    "The radio rejected the UDP port registration":
        "De set wees de registratie van de UDP-poort af",

    "No radio connected.":
        "Geen radio verbonden.",
    "The audio comes from a sound card: the radio is not\nunder our control. Change band with the dial.":
        "De audio komt van een geluidskaart: de radio staat niet\nonder onze controle. Wissel van band met de afstemknop.",
    "The serial port is held by another program, so the\nradio takes no commands. Close it and reconnect.":
        "De seriële poort is bezet door een ander programma, de radio\nneemt geen commando's aan. Sluit het en verbind opnieuw.",
    "%1 — RTTY at %2 MHz":
        "%1 — RTTY op %2 MHz",
    "Data on the upper sideband: the mode this\ndecoder is written for.":
        "Data op de bovenste zijband: de mode waarvoor deze\ndecoder geschreven is.",
    "Data on the lower sideband. The tones come out\nreversed — REV puts them back.":
        "Data op de onderste zijband. De tonen komen omgekeerd\nnaar buiten — REV zet ze terug.",
    "Voice sideband. RTTY is copied just the same,\nbut the radio's filter is wider than it needs.":
        "Spraakzijband. RTTY wordt net zo goed gekopieerd, maar het\nfilter van de radio is breder dan nodig.",
}
