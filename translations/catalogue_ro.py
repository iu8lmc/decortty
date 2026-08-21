# -*- coding: utf-8 -*-
"""Română.

Abrevierile radioamatorilor nu se traduc: AFC, REV, USOS, BPF, NOTCH, LMS, RST,
QTH sunt internaționale și așa le caută un operator. La fel rămân „mark”,
„shift”, „squelch” și „waterfall” — traduse ar da cuvinte pe care nimeni nu le
folosește în stație.
"""

TRANSLATIONS = {
    "FROM A SOUND CARD":
        "DE LA O PLACĂ DE SUNET",
    "no frequency, no PTT — transmit on VOX":
        "fără frecvență, fără PTT — se emite pe VOX",
    "— no transmit —":
        "— fără emisie —",
    "Listen":
        "Ascultă",
    "Cannot open the sound card":
        "Nu pot deschide placa de sunet",
    "Listening to %1":
        "Ascult %1",
    "Listening to %1 — receive only":
        "Ascult %1 — doar recepție",
    "shared with %1":
        "partajat cu %1",
    "Sharing %1 with %2":
        "%1 partajat cu %2",
    "another station":
        "altă stație",
    "The radio will not give audio to a bound client — reconnecting as a GUI station":
        "Stația nu dă audio unui client legat — mă reconectez ca stație GUI",
    "TRANSMITTING":
        "ÎN EMISIE",
    "Type here — Enter sends the line":
        "Scrie aici — Enter trimite rândul",
    "Connect a radio to transmit":
        "Conectează o stație ca să emiți",
    "MY CALL":             "MY CALL",
    "QTH":                 "QTH",
    "LANGUAGE":            "LIMBĂ",
    "changes immediately": "se schimbă imediat",

    "SPECTRUM":            "SPECTRU",
    "RECEIVE":             "RECEPȚIE",
    "TRANSMIT":            "EMISIE",
    "TUNING":              "ACORD",
    "DECODER":             "DECODOR",
    "FILTERS":             "FILTRE",
    "FRAMING":             "CADRU",
    "VIEW":                "VIZUALIZARE",
    "CENTRE":              "CENTREAZĂ",
    "STATION":             "STAȚIE",
    "MACROS":              "MACROURI",
    "LOG":                 "JURNAL",
    "RADIOS ON THE NETWORK": "STAȚII ÎN REȚEA",
    "FT-991A GATEWAY":     "PUNTE FT-991A",

    "Close":               "Închide",
    "Connect":             "Conectează",
    "Copy":                "Copiază",
    "Clear":               "Golește",
    "Abort":               "Întrerupe",
    "Follow":              "Urmărește",
    "Call":                "Indicative",
    "Log it":              "Înregistrează",
    "Export ADIF":         "Exportă ADIF",
    "Restore defaults":    "Restaurează",
    "Restart":             "Repornește",
    "Set radio":           "Setează stația",
    "Setup":               "Setări",
    "settings":            "reglează",
    "close":               "închide",
    "on":                  "activ",
    "off":                 "oprit",
    "band":                "bandă",
    "light":               "lumină",
    "contrast":            "contrast",
    "speed %1x":           "viteză %1x",
    "floor %1 dB":         "prag %1 dB",
    "jump to end ↓":       "la sfârșit ↓",
    "DECO":                "DECO",
    "TX: %1":              "TX: %1",
    "transmit":            "transmit",
    "GREY":                "GRI",
    "FIRE":                "FOC",

    "NAME":                "NUME",
    "RST SENT":            "RST TRIM",
    "RST RCVD":            "RST PRIM",
    "Correction":          "Corecție",
    "Normal":              "Normală",
    "Deep":                "Adâncă",
    "Off":                 "Oprit",
    "Bits":                "Biți",
    "Stop":                "Stop",
    "Par.":                "Par.",
    "none":                "fără",
    "even":                "pară",
    "odd":                 "impară",
    "Fill":                "Umplere",
    "BPF width":           "Lățime BPF",
    "Character wait":      "Pauză între caractere",
    "Audio in":            "Audio in",
    "Audio out":           "Audio out",

    "Bandpass around the two tones: throws away\neverything outside before the detector.":
        "Trece-bandă în jurul celor două tonuri: aruncă\ntot ce e în afară, înainte de detector.",
    "Removes one frequency. Ctrl+click the waterfall\nto drop it on the carrier that is in the way.":
        "Șterge o frecvență. Ctrl+clic pe cascadă ca s-o\npui pe purtătoarea care deranjează.",
    "Adaptive canceller: removes steady carriers by\nitself. On weak signals it can eat the RTTY as\nwell — try it and listen.":
        "Anulator adaptiv: înlătură singur purtătoarele\nfixe. La semnale slabe poate mânca și RTTY-ul —\nîncearcă și ascultă.",
    "Finds the tone pair in the band and moves the\ntuning onto it. Once, now.":
        "Găsește perechea de tonuri în bandă și duce\nacordul pe ea. O singură dată.",
    "Searches by itself whenever nothing is being\ncopied, and tries the polarity too. While the\ndecoder is locked it touches nothing.":
        "Caută singur când nu se copiază nimic și încearcă\nși polaritatea. Cât timp decodorul e agățat, nu\natinge nimic.",
    "Follows the drift of the signal already locked,\nwithin a few tens of hertz.":
        "Urmărește deriva semnalului deja agățat, în\nlimita câtorva zeci de hertzi.",
    "How much band to show. Narrow around the tones\nshows the individual bits; wide shows who is calling.":
        "Câtă bandă se arată. Îngust în jurul tonurilor se\nvăd biții; larg se vede cine cheamă.",
    "How fast it scrolls. Slower keeps a longer\nstretch of band in view.":
        "Cât de repede curge. Mai lent ține la vedere o\nporțiune de bandă mai lungă.",
    "Zoom, palette, brightness and speed of the\nwaterfall.":
        "Zoom, paletă, luminozitate și viteză pentru\ncascadă.",
    "What to send between characters while you\ntype live.":
        "Ce se trimite între caractere în timp ce scrii\nîn direct.",
    "Figures set: US has BELL and apostrophe where\nITA2 swaps the two.":
        "Set de cifre: US are BELL și apostrof acolo unde\nITA2 le inversează.",
    "Prints characters whose stop bit read wrong too:\na few more characters on distorted signals, some\nlines of rubbish in exchange.":
        "Tipărește și caracterele cu bitul de stop greșit:\ncâteva caractere în plus la semnale distorsionate,\ncâteva rânduri de gunoi în schimb.",
    "Unshift on space — recovers a lost FIGS/LTRS, but\nbreaks long figure groups such as serial numbers.":
        "Unshift on space — recuperează un FIGS/LTRS\npierdut, dar rupe grupurile lungi de cifre, cum\nsunt numerele de ordine.",
    "Puts the radio into DIGU and narrows its filter\naround the tones.":
        "Pune stația pe DIGU și îi strânge filtrul în\njurul tonurilor.",
    "Use after changing the port or a device.":
        "De folosit după schimbarea portului sau a unui dispozitiv.",
    "When on, the gateway opens at start-up and\ncloses with the program. Turn it off if the radio\nis on another PC.":
        "Dacă e activă, puntea se deschide la pornire și\nse închide cu programul. Oprește-o dacă stația e\npe alt calculator.",
    "Highlights callsigns. Click one to put it\nin the HIS CALL field.":
        "Evidențiază indicativele. Dă clic pe unul ca să-l\npui în câmpul HIS CALL.",
    "High enough to drive the ALC — check the meter.":
        "Destul de sus ca să atace ALC-ul — uită-te la instrument.",

    "%n contact(s)":       ["%n legătură", "%n legături", "%n de legături"],
    "Worked before: %1 — last on %2":
        "Deja lucrat: %1 — ultima dată pe %2",
    "A callsign is the least a contact needs to be logged":
        "E nevoie măcar de indicativ ca să înregistrezi legătura",

    "No radio has answered yet": "Nicio stație nu a răspuns încă",
    "Radios announce themselves on UDP 4992.\nCheck the radio is on the same subnet, or enter its address below.":
        "Stațiile se anunță pe UDP 4992.\nVerifică dacă stația e în aceeași subrețea sau scrie mai jos adresa ei.",
    "Looking for radios…":  "Caut stații…",
    "Waiting for the gateway…": "Aștept puntea…",
    "Connecting to %1…":    "Mă conectez la %1…",
    "Reconnecting to %1…":  "Mă reconectez la %1…",
    "Connected to %1":      "Conectat la %1",
    "Disconnected":         "Deconectat",
    "Receiving from %1":    "Primesc de la %1",
    "'%1' is not a valid address": "'%1' nu e o adresă validă",
    "Radio %1 is no longer on the network": "Stația %1 nu mai e în rețea",
    "%1 — audio only, no CAT": "%1 — doar audio, fără CAT",

    "No recognisable RTTY signal in the band":
        "Niciun semnal RTTY recognoscibil în bandă",
    "Centred on %1 Hz (%2 dB above the floor)":
        "Centrat pe %1 Hz (%2 dB peste prag)",
    "Trying the opposite polarity (%1)": "Încerc polaritatea opusă (%1)",
    "Signal at %1 Hz: moving there":     "Semnal pe %1 Hz: mă mut acolo",
    "reversed":             "inversată",
    "direct":               "directă",

    "not started":          "nepornită",
    "disabled":             "dezactivată",
    "already listening (started elsewhere)": "deja ascultă (pornită în altă parte)",
    "A gateway is already on the network: not starting another":
        "Există deja o punte în rețea: nu pornesc alta",
    "executable not found": "executabil negăsit",
    "Cannot find %1 beside the application": "Nu găsesc %1 lângă aplicație",
    "starting on %1":       "pornește pe %1",
    "started":              "pornită",
    "start failed":         "pornirea a eșuat",
    "Starting the gateway: %1 on port %2": "Pornesc puntea: %1 pe portul %2",
    "The gateway will not start: %1": "Puntea nu pornește: %1",
    "exited":               "oprită",
    "exited (code %1)":     "oprită (cod %1)",
    "Gateway exited, code %1": "Punte oprită, cod %1",
    "Closing the gateway":  "Închid puntea",
    "The gateway is staying up: leaving it to the other clients":
        "Puntea rămâne în picioare: o las celorlalți clienți",
    "left running":         "lăsată pornită",
    "closed":               "închisă",
    "running on %1":        "activă pe %1",
    "%1 is busy — receive only": "%1 e ocupat — doar ascultare",
    "running, no CAT":      "activă, fără CAT",
    "The gateway is not answering — retrying": "Puntea nu răspunde — încerc din nou",
    "Gateway listening on UDP %1": "Puntea ascultă pe UDP %1",
    "Client %1:%2 connected": "Client %1:%2 conectat",
    "Client %1:%2 timed out": "Client %1:%2 expirat",
    "Client %1 is leaving":  "Clientul %1 pleacă",
    "Shutdown requested by whoever started me": "Oprire cerută de cel care m-a pornit",
    "Shutdown deferred: %1 client(s) are still using the radio":
        "Oprire amânată: %1 client(i) încă folosesc stația",
    "No client for thirty seconds: closing": "Niciun client de treizeci de secunde: închid",
    "No clients left — dropping PTT": "Niciun client rămas — las PTT-ul",

    "CAT on %1 at %2 baud": "CAT pe %1 la %2 bauzi",
    "CAT disabled — receive only, no tuning or PTT":
        "CAT dezactivat — doar recepție, fără acord sau PTT",
    "Cannot open %1: %2":   "Nu pot deschide %1: %2",
    "CAT: queued TX1; on %1": "CAT: TX1; pus la rând pe %1",
    "CAT: wrote TX0; (%1 bytes) on %2": "CAT: am scris TX0; (%1 octeți) pe %2",
    "Radio still shows %1 — repeating the PTT command (%2)":
        "Stația arată în continuare %1 — repet comanda PTT (%2)",
    "The FT-991A has no mode called '%1'": "FT-991A nu are un mod numit '%1'",
    "PTT requested by the client: %1  (CAT %2)": "PTT cerut de client: %1  (CAT %2)",
    "TRANSMIT":             "EMITE",
    "receive":              "recepție",
    "open":                 "deschis",
    "CLOSED":               "ÎNCHIS",
    "Audio in: %1":         "Audio in: %1",
    "Audio out: %1":        "Audio out: %1",
    "No capture device matching '%1'. Available: %2":
        "Niciun dispozitiv de intrare nu se potrivește cu '%1'. Disponibile: %2",
    "No playback device matching '%1' — transmit is unavailable":
        "Niciun dispozitiv de ieșire nu se potrivește cu '%1' — nu se poate emite",
    "%1 cannot run at %2 Hz": "%1 nu poate funcționa la %2 Hz",
    "Could not open the audio transport": "Nu am putut deschide transportul audio",
    "Transmit audio overrun — dropped %1 ms": "Depășire la audio de emisie — pierdute %1 ms",
    "No transmit audio for %1 ms — dropping PTT":
        "Fără audio de emisie de %1 ms — las PTT-ul",
    "Cannot write the log in %1": "Nu pot scrie jurnalul în %1",

    "Transmit is unavailable on this connection":
        "Pe această conexiune nu se poate emite",
    "Transmit is unavailable: no Opus transmit stream":
        "Nu se poate emite: lipsește fluxul Opus de emisie",
    "Transmit requested but CAT is not open — ignored":
        "S-a cerut emisia, dar CAT-ul nu e deschis — ignorat",
    "Transmit ran for three minutes — stopped":
        "Emisia a durat trei minute — oprită",
    "The radio is in %1: on voice modes the USB audio does not modulate. Press 'Set radio' in the DECODER panel.":
        "Stația e pe %1: în modurile fonie audio-ul de pe USB nu modulează. Apasă „Setează stația” în panoul DECODOR.",

    "Cannot bind UDP port %1: %2": "Nu pot ocupa portul UDP %1: %2",
    "Cannot listen on UDP port %1: %2": "Nu pot asculta pe portul UDP %1: %2",
    "Cannot open a local UDP port: %1": "Nu pot deschide un port UDP local: %1",
    "Cannot open the VITA-49 UDP socket: %1": "Nu pot deschide soclul UDP VITA-49: %1",
    "Cannot open the discovery socket: %1": "Nu pot deschide soclul de căutare: %1",
    "Could not create the receive audio stream": "Nu am putut crea fluxul audio de recepție",
    "Could not create the transmit audio stream": "Nu am putut crea fluxul audio de emisie",
    "The radio refused the client registration (code 0x%1)":
        "Stația a refuzat înregistrarea clientului (cod 0x%1)",
    "The radio rejected the UDP port registration":
        "Stația a respins înregistrarea portului UDP",

    "No radio connected.":
        "Nicio stație conectată.",
    "The audio comes from a sound card: the radio is not\nunder our control. Change band with the dial.":
        "Sunetul vine de la o placă de sunet: stația nu e sub\ncontrolul nostru. Schimbă banda de la buton.",
    "The serial port is held by another program, so the\nradio takes no commands. Close it and reconnect.":
        "Portul serial e ținut de alt program, iar stația nu primește\ncomenzi. Închide-l și reconectează.",
    "%1 — RTTY at %2 MHz":
        "%1 — RTTY la %2 MHz",
    "Data on the upper sideband: the mode this\ndecoder is written for.":
        "Date pe banda laterală superioară: modul pentru care e scris\nacest decodor.",
    "Data on the lower sideband. The tones come out\nreversed — REV puts them back.":
        "Date pe banda laterală inferioară. Tonurile ies inversate\n— REV le pune la loc.",
    "Voice sideband. RTTY is copied just the same,\nbut the radio's filter is wider than it needs.":
        "Banda laterală a fonicului. RTTY se copiază la fel, dar\nfiltrul stației e mai larg decât trebuie.",

    "Drag to move the radio; the wheel tunes by 1 kHz —\n100 Hz with Shift, 10 kHz with Ctrl.":
        "Trage pentru a muta stația; rotița acordează din 1 kHz —\n100 Hz cu Shift, 10 kHz cu Ctrl.",
}
