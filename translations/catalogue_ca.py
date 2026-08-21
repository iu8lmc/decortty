# -*- coding: utf-8 -*-
"""Català.

Les sigles del radioaficionat no es tradueixen: AFC, REV, USOS, BPF, NOTCH, LMS,
RST, QTH són internacionals i així les cerca un operador. Tampoc «mark»,
«shift», «squelch» ni «waterfall» — traduir-los donaria paraules que ningú no fa
servir a l'estació.
"""

TRANSLATIONS = {
    "FROM A SOUND CARD":
        "D'UNA TARGETA DE SO",
    "no frequency, no PTT — transmit on VOX":
        "sense freqüència, sense PTT — es transmet en VOX",
    "— no transmit —":
        "— sense transmissió —",
    "Listen":
        "Escolta",
    "Cannot open the sound card":
        "No puc obrir la targeta de so",
    "Listening to %1":
        "Escoltant %1",
    "Listening to %1 — receive only":
        "Escoltant %1 — només recepció",
    "shared with %1":
        "compartit amb %1",
    "Sharing %1 with %2":
        "%1 compartit amb %2",
    "another station":
        "una altra estació",
    "The radio will not give audio to a bound client — reconnecting as a GUI station":
        "L'equip no dóna àudio a un client lligat — em reconnecto com a estació GUI",
    "TRANSMITTING":
        "TRANSMETENT",
    "Type here — Enter sends the line":
        "Escriu aquí — Retorn envia la línia",
    "Connect a radio to transmit":
        "Connecta un equip per transmetre",
    "MY CALL":             "MY CALL",
    "QTH":                 "QTH",
    "LANGUAGE":            "IDIOMA",
    "changes immediately": "canvia a l'instant",

    "SPECTRUM":            "ESPECTRE",
    "RECEIVE":             "RECEPCIÓ",
    "TRANSMIT":            "TRANSMISSIÓ",
    "TUNING":              "SINTONIA",
    "DECODER":             "DESCODIFICADOR",
    "FILTERS":             "FILTRES",
    "FRAMING":             "TRAMA",
    "VIEW":                "VISTA",
    "CENTRE":              "CENTRA",
    "STATION":             "ESTACIÓ",
    "MACROS":              "MACROS",
    "LOG":                 "REGISTRE",
    "RADIOS ON THE NETWORK": "EQUIPS A LA XARXA",
    "FT-991A GATEWAY":     "PASSAREL·LA FT-991A",

    "Close":               "Tanca",
    "Connect":             "Connecta",
    "Copy":                "Copia",
    "Clear":               "Neteja",
    "Abort":               "Avorta",
    "Follow":              "Segueix",
    "Call":                "Indicatius",
    "Log it":              "Anota",
    "Export ADIF":         "Exporta ADIF",
    "Restore defaults":    "Restaura",
    "Restart":             "Reinicia",
    "Set radio":           "Ajusta l'equip",
    "Setup":               "Configuració",
    "settings":            "ajusta",
    "close":               "tanca",
    "on":                  "actiu",
    "off":                 "apagat",
    "band":                "banda",
    "light":               "llum",
    "contrast":            "contrast",
    "speed %1x":           "vel. %1x",
    "floor %1 dB":         "fons %1 dB",
    "jump to end ↓":       "vés al final ↓",
    "DECO":                "DECO",
    "TX: %1":              "TX: %1",
    "transmit":            "transmit",
    "GREY":                "GRISOS",
    "FIRE":                "FOC",

    "NAME":                "NOM",
    "RST SENT":            "RST ENV",
    "RST RCVD":            "RST REB",
    "Correction":          "Correcció",
    "Normal":              "Normal",
    "Deep":                "Profunda",
    "Off":                 "No",
    "Bits":                "Bits",
    "Stop":                "Stop",
    "Par.":                "Par.",
    "none":                "cap",
    "even":                "parell",
    "odd":                 "senar",
    "Fill":                "Ompliment",
    "BPF width":           "Amplada BPF",
    "Character wait":      "Espera entre caràcters",
    "Audio in":            "Àudio ent.",
    "Audio out":           "Àudio sort.",

    "Bandpass around the two tones: throws away\neverything outside before the detector.":
        "Passabanda al voltant dels dos tons: descarta\ntot el que queda fora abans del detector.",
    "Removes one frequency. Ctrl+click the waterfall\nto drop it on the carrier that is in the way.":
        "Elimina una freqüència. Ctrl+clic a la cascada\nper posar-la sobre la portadora que molesta.",
    "Adaptive canceller: removes steady carriers by\nitself. On weak signals it can eat the RTTY as\nwell — try it and listen.":
        "Cancel·lador adaptatiu: treu sol les portadores\nfixes. Amb senyals febles es pot menjar també\nel RTTY — prova-ho i escolta.",
    "Finds the tone pair in the band and moves the\ntuning onto it. Once, now.":
        "Cerca la parella de tons a la banda i hi porta\nla sintonia. Una sola vegada.",
    "Searches by itself whenever nothing is being\ncopied, and tries the polarity too. While the\ndecoder is locked it touches nothing.":
        "Cerca sola quan no es copia res, i prova també\nla polaritat. Mentre el descodificador està\nenganxat no toca res.",
    "Follows the drift of the signal already locked,\nwithin a few tens of hertz.":
        "Segueix la deriva del senyal ja enganxat, dins\nd'unes desenes d'hertz.",
    "How much band to show. Narrow around the tones\nshows the individual bits; wide shows who is calling.":
        "Quanta banda mostrar. Estret sobre els tons es\nveuen els bits; ample es veu qui crida.",
    "How fast it scrolls. Slower keeps a longer\nstretch of band in view.":
        "Amb quina rapidesa corre. Més lent manté a la\nvista un tram de banda més llarg.",
    "Zoom, palette, brightness and speed of the\nwaterfall.":
        "Zoom, paleta, brillantor i velocitat de la\ncascada.",
    "What to send between characters while you\ntype live.":
        "Què enviar entre un caràcter i un altre mentre\nescrius en directe.",
    "Figures set: US has BELL and apostrophe where\nITA2 swaps the two.":
        "Joc de xifres: US té BELL i apòstrof on ITA2\nels intercanvia.",
    "Prints characters whose stop bit read wrong too:\na few more characters on distorted signals, some\nlines of rubbish in exchange.":
        "Imprimeix també els caràcters amb el bit de stop\nmal llegit: algun caràcter més en senyals\ndistorsionats, alguna línia d'escombraries a canvi.",
    "Unshift on space — recovers a lost FIGS/LTRS, but\nbreaks long figure groups such as serial numbers.":
        "Unshift on space — recupera un FIGS/LTRS perdut,\nperò trenca els grups llargs de xifres com els\nnúmeros de sèrie.",
    "Puts the radio into DIGU and narrows its filter\naround the tones.":
        "Posa l'equip en DIGU i estreny el seu filtre\nal voltant dels tons.",
    "Use after changing the port or a device.":
        "Fes-ho servir després de canviar el port o un dispositiu.",
    "When on, the gateway opens at start-up and\ncloses with the program. Turn it off if the radio\nis on another PC.":
        "Si és actiu, la passarel·la s'obre en engegar i\nes tanca amb el programa. Apaga'l si l'equip és\nen un altre PC.",
    "Highlights callsigns. Click one to put it\nin the HIS CALL field.":
        "Ressalta els indicatius. Fes clic en un per\nposar-lo al camp HIS CALL.",
    "High enough to drive the ALC — check the meter.":
        "Prou alt per excitar l'ALC — mira el mesurador.",

    "%n contact(s)":       ["%n contacte", "%n contactes"],
    "Worked before: %1 — last on %2":
        "Ja treballat: %1 — l'última vegada el %2",
    "A callsign is the least a contact needs to be logged":
        "Cal com a mínim l'indicatiu per anotar el contacte",

    "No radio has answered yet": "Encara no ha respost cap equip",
    "Radios announce themselves on UDP 4992.\nCheck the radio is on the same subnet, or enter its address below.":
        "Els equips s'anuncien per UDP 4992.\nComprova que l'equip sigui a la mateixa subxarxa, o escriu a sota la seva adreça.",
    "Looking for radios…":  "Cercant equips…",
    "Waiting for the gateway…": "Esperant la passarel·la…",
    "Connecting to %1…":    "Connectant amb %1…",
    "Reconnecting to %1…":  "Reconnectant amb %1…",
    "Connected to %1":      "Connectat a %1",
    "Disconnected":         "Desconnectat",
    "Receiving from %1":    "Rebent de %1",
    "'%1' is not a valid address": "'%1' no és una adreça vàlida",
    "Radio %1 is no longer on the network": "L'equip %1 ja no és a la xarxa",
    "%1 — audio only, no CAT": "%1 — només àudio, sense CAT",

    "No recognisable RTTY signal in the band":
        "Cap senyal RTTY recognoscible a la banda",
    "Centred on %1 Hz (%2 dB above the floor)":
        "Centrat en %1 Hz (%2 dB sobre el fons)",
    "Trying the opposite polarity (%1)": "Provo la polaritat contrària (%1)",
    "Signal at %1 Hz: moving there":     "Senyal a %1 Hz: m'hi moc",
    "reversed":             "invertida",
    "direct":               "directa",

    "not started":          "sense engegar",
    "disabled":             "desactivada",
    "already listening (started elsewhere)": "ja a l'escolta (engegada en un altre lloc)",
    "A gateway is already on the network: not starting another":
        "Ja hi ha una passarel·la a la xarxa: no n'engego una altra",
    "executable not found": "executable no trobat",
    "Cannot find %1 beside the application": "No trobo %1 al costat de l'aplicació",
    "starting on %1":       "engegant en %1",
    "started":              "engegada",
    "start failed":         "ha fallat en engegar",
    "Starting the gateway: %1 on port %2": "Engego la passarel·la: %1 al port %2",
    "The gateway will not start: %1": "La passarel·la no engega: %1",
    "exited":               "acabada",
    "exited (code %1)":     "acabada (codi %1)",
    "Gateway exited, code %1": "Passarel·la acabada, codi %1",
    "Closing the gateway":  "Tanco la passarel·la",
    "The gateway is staying up: leaving it to the other clients":
        "La passarel·la es queda dempeus: la deixo als altres clients",
    "left running":         "deixada activa",
    "closed":               "tancada",
    "running on %1":        "activa en %1",
    "%1 is busy — receive only": "%1 està ocupat — només escolta",
    "running, no CAT":      "activa, sense CAT",
    "The gateway is not answering — retrying": "La passarel·la no respon — ho torno a provar",
    "Gateway listening on UDP %1": "Passarel·la a l'escolta en UDP %1",
    "Client %1:%2 connected": "Client %1:%2 connectat",
    "Client %1:%2 timed out": "Client %1:%2 caducat",
    "Client %1 is leaving":  "El client %1 se'n va",
    "Shutdown requested by whoever started me": "Aturada demanada per qui m'ha engegat",
    "Shutdown deferred: %1 client(s) are still using the radio":
        "Tancament ajornat: %1 client(s) encara fan servir l'equip",
    "No client for thirty seconds: closing": "Cap client des de fa trenta segons: tanco",
    "No clients left — dropping PTT": "No queda cap client — deixo anar el PTT",

    "CAT on %1 at %2 baud": "CAT en %1 a %2 bauds",
    "CAT disabled — receive only, no tuning or PTT":
        "CAT desactivat — només recepció, sense sintonia ni PTT",
    "Cannot open %1: %2":   "No puc obrir %1: %2",
    "CAT: queued TX1; on %1": "CAT: TX1; a la cua en %1",
    "CAT: wrote TX0; (%1 bytes) on %2": "CAT: escrit TX0; (%1 bytes) en %2",
    "Radio still shows %1 — repeating the PTT command (%2)":
        "L'equip encara mostra %1 — repeteixo l'ordre de PTT (%2)",
    "The FT-991A has no mode called '%1'": "L'FT-991A no té cap mode anomenat '%1'",
    "PTT requested by the client: %1  (CAT %2)": "PTT demanat pel client: %1  (CAT %2)",
    "TRANSMIT":             "TRANSMET",
    "receive":              "rep",
    "open":                 "obert",
    "CLOSED":               "TANCAT",
    "Audio in: %1":         "Àudio ent.: %1",
    "Audio out: %1":        "Àudio sort.: %1",
    "No capture device matching '%1'. Available: %2":
        "Cap dispositiu d'entrada coincideix amb '%1'. Disponibles: %2",
    "No playback device matching '%1' — transmit is unavailable":
        "Cap dispositiu de sortida coincideix amb '%1' — no es pot transmetre",
    "%1 cannot run at %2 Hz": "%1 no pot funcionar a %2 Hz",
    "Could not open the audio transport": "No he pogut obrir el transport d'àudio",
    "Transmit audio overrun — dropped %1 ms": "Desbordament de l'àudio de transmissió — perduts %1 ms",
    "No transmit audio for %1 ms — dropping PTT":
        "Sense àudio de transmissió des de fa %1 ms — deixo anar el PTT",
    "Cannot write the log in %1": "No puc escriure el registre a %1",

    "Transmit is unavailable on this connection":
        "En aquesta connexió no es pot transmetre",
    "Transmit is unavailable: no Opus transmit stream":
        "No es pot transmetre: falta el flux Opus de transmissió",
    "Transmit requested but CAT is not open — ignored":
        "Transmissió demanada però el CAT no és obert — ignorada",
    "Transmit ran for three minutes — stopped":
        "La transmissió ha durat tres minuts — aturada",
    "The radio is in %1: on voice modes the USB audio does not modulate. Press 'Set radio' in the DECODER panel.":
        "L'equip és en %1: en modes de fonia l'àudio de l'USB no modula. Prem «Ajusta l'equip» al plafó DESCODIFICADOR.",

    "Cannot bind UDP port %1: %2": "No puc ocupar el port UDP %1: %2",
    "Cannot listen on UDP port %1: %2": "No puc escoltar al port UDP %1: %2",
    "Cannot open a local UDP port: %1": "No puc obrir un port UDP local: %1",
    "Cannot open the VITA-49 UDP socket: %1": "No puc obrir el sòcol UDP de VITA-49: %1",
    "Cannot open the discovery socket: %1": "No puc obrir el sòcol de descoberta: %1",
    "Could not create the receive audio stream": "No he pogut crear el flux d'àudio de recepció",
    "Could not create the transmit audio stream": "No he pogut crear el flux d'àudio de transmissió",
    "The radio refused the client registration (code 0x%1)":
        "L'equip ha refusat el registre del client (codi 0x%1)",
    "The radio rejected the UDP port registration":
        "L'equip ha rebutjat el registre del port UDP",

    "No radio connected.":
        "Cap ràdio connectada.",
    "The audio comes from a sound card: the radio is not\nunder our control. Change band with the dial.":
        "L'àudio ve d'una targeta de so: la ràdio no està sota el\nnostre control. Canvia de banda amb el comandament.",
    "The serial port is held by another program, so the\nradio takes no commands. Close it and reconnect.":
        "El port sèrie el té un altre programa i la ràdio no accepta\nordres. Tanca'l i torna a connectar.",
    "%1 — RTTY at %2 MHz":
        "%1 — RTTY a %2 MHz",
    "Data on the upper sideband: the mode this\ndecoder is written for.":
        "Dades a la banda lateral superior: el mode per al qual està\nescrit aquest descodificador.",
    "Data on the lower sideband. The tones come out\nreversed — REV puts them back.":
        "Dades a la banda lateral inferior. Els tons surten invertits\n— REV els torna al lloc.",
    "Voice sideband. RTTY is copied just the same,\nbut the radio's filter is wider than it needs.":
        "Banda lateral de la fonia. L'RTTY es copia igual, però el\nfiltre de la ràdio és més ample del necessari.",

    "Drag to move the radio; the wheel tunes by 1 kHz —\n100 Hz with Shift, 10 kHz with Ctrl.":
        "Arrossega per moure la ràdio; la roda sintonitza d'1 kHz —\n100 Hz amb Maj, 10 kHz amb Ctrl.",
}
