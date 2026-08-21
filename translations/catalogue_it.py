# -*- coding: utf-8 -*-
"""Italiano.

Nota sui termini: le sigle radioamatoriali non si traducono. AFC, REV, USOS,
BPF, NOTCH, LMS, RST, QTH sono internazionali e un operatore le cerca così.
Restano in inglese anche "mark", "shift", "squelch" e "waterfall": tradurli
darebbe parole che nessuno usa in stazione.
"""

TRANSLATIONS = {
    "FROM A SOUND CARD":
        "DA UNA SCHEDA AUDIO",
    "no frequency, no PTT — transmit on VOX":
        "niente frequenza, niente PTT — si trasmette in VOX",
    "— no transmit —":
        "— niente trasmissione —",
    "Listen":
        "Ascolta",
    "Cannot open the sound card":
        "Non riesco ad aprire la scheda audio",
    "Listening to %1":
        "In ascolto su %1",
    "Listening to %1 — receive only":
        "In ascolto su %1 — solo ricezione",
    "shared with %1":
        "condivisa con %1",
    "Sharing %1 with %2":
        "%1 condivisa con %2",
    "another station":
        "un'altra stazione",
    "The radio will not give audio to a bound client — reconnecting as a GUI station":
        "La radio non concede audio a un client legato — mi ricollego come stazione GUI",
    "TRANSMITTING":
        "IN TRASMISSIONE",
    "Type here — Enter sends the line":
        "Scrivi qui — Invio manda la riga",
    "Connect a radio to transmit":
        "Collega una radio per trasmettere",
    # sigle di stazione: restano tali e quali
    "MY CALL":             "MY CALL",
    "QTH":                 "QTH",
    "LANGUAGE":              "LINGUA",
    "changes immediately":   "cambia subito",
    # ── interfaccia principale ──────────────────────────────────────────
    "SPECTRUM":            "SPETTRO",
    "RECEIVE":             "RICEZIONE",
    "TRANSMIT":            "TRASMISSIONE",
    "TUNING":              "SINTONIA",
    "DECODER":             "DECODER",
    "FILTERS":             "FILTRI",
    "FRAMING":             "TRAMA",
    "VIEW":                "VISTA",
    "CENTRE":              "CENTRA",
    "STATION":             "STAZIONE",
    "MACROS":              "MACRO",
    "LOG":                 "REGISTRO",
    "RADIOS ON THE NETWORK": "RADIO SULLA RETE",
    "FT-991A GATEWAY":     "GATEWAY FT-991A",

    # ── pulsanti ────────────────────────────────────────────────────────
    "Close":               "Chiudi",
    "Connect":             "Collega",
    "Copy":                "Copia",
    "Clear":               "Pulisci",
    "Abort":               "Interrompi",
    "Follow":              "Segui",
    "Call":                "Nominativi",
    "Log it":              "Registra",
    "Export ADIF":         "Esporta ADIF",
    "Restore defaults":    "Ripristina",
    "Restart":             "Riavvia",
    "Set radio":           "Imposta radio",
    "Setup":               "Impostazioni",
    "settings":            "regola",
    "close":               "chiudi",
    "on":                  "attivo",
    "off":                 "spento",
    "band":                "banda",
    "light":               "luce",
    "contrast":            "contrasto",
    "speed %1x":           "vel. %1x",
    "floor %1 dB":         "fondo %1 dB",
    "jump to end ↓":       "vai in fondo ↓",
    # Restano tali e quali: DECO e' il nome della tavolozza di casa, "TX" e
    # "transmit" sono etichette tecniche che si leggono uguali ovunque.
    "DECO":                "DECO",
    "TX: %1":              "TX: %1",
    "transmit":            "transmit",
    "GREY":                "GRIGI",
    "FIRE":                "FUOCO",

    # ── campi e parametri ───────────────────────────────────────────────
    "NAME":                "NOME",
    "RST SENT":            "RST INV",
    "RST RCVD":            "RST RIC",
    "Correction":          "Correzione",
    "Normal":              "Normale",
    "Deep":                "Profonda",
    "Off":                 "Off",
    "Bits":                "Bit",
    "Stop":                "Stop",
    "Par.":                "Par.",
    "none":                "no",
    "even":                "pari",
    "odd":                 "disp",
    "Fill":                "Riemp.",
    "BPF width":           "Larghezza BPF",
    "Character wait":      "Attesa fra caratteri",
    "Audio in":            "Audio in",
    "Audio out":           "Audio out",

    # ── suggerimenti ────────────────────────────────────────────────────
    "Bandpass around the two tones: throws away\neverything outside before the detector.":
        "Passa-banda attorno ai due toni: scarta tutto\nquello che sta fuori prima del rivelatore.",
    "Removes one frequency. Ctrl+click the waterfall\nto drop it on the carrier that is in the way.":
        "Cancella una frequenza. Ctrl+clic sul waterfall\nper piazzarla sulla portante che disturba.",
    "Adaptive canceller: removes steady carriers by\nitself. On weak signals it can eat the RTTY as\nwell — try it and listen.":
        "Cancellatore adattivo: toglie da sé le portanti\nferme. Su segnali deboli può mangiarsi anche\nil RTTY — provalo e ascolta.",
    "Finds the tone pair in the band and moves the\ntuning onto it. Once, now.":
        "Cerca la coppia di toni in banda e ci porta\nsopra la sintonia. Una volta sola.",
    "Searches by itself whenever nothing is being\ncopied, and tries the polarity too. While the\ndecoder is locked it touches nothing.":
        "Cerca da sola quando non si sta copiando nulla,\ne prova anche il verso. Mentre il decoder è\nagganciato non tocca niente.",
    "Follows the drift of the signal already locked,\nwithin a few tens of hertz.":
        "Insegue la deriva del segnale già agganciato,\nentro qualche decina di hertz.",
    "How much band to show. Narrow around the tones\nshows the individual bits; wide shows who is calling.":
        "Quanta banda mostrare. Stretto attorno ai toni si\nvedono i singoli bit; larga si vede chi chiama.",
    "How fast it scrolls. Slower keeps a longer\nstretch of band in view.":
        "Quanto in fretta scorre. Più lento tiene in vista\nun tratto di banda più lungo.",
    "Zoom, palette, brightness and speed of the\nwaterfall.":
        "Zoom, tavolozza, luminosità e velocità\ndella cascata.",
    "What to send between characters while you\ntype live.":
        "Cosa mandare fra un carattere e l'altro\nmentre scrivi dal vivo.",
    "Figures set: US has BELL and apostrophe where\nITA2 swaps the two.":
        "Set figure: US ha BELL e apostrofo dove\nITA2 li scambia.",
    "Prints characters whose stop bit read wrong too:\na few more characters on distorted signals, some\nlines of rubbish in exchange.":
        "Stampa anche i caratteri col bit di stop sbagliato:\nqualche carattere in più su segnali distorti,\nqualche riga di spazzatura in cambio.",
    "Unshift on space — recovers a lost FIGS/LTRS, but\nbreaks long figure groups such as serial numbers.":
        "Unshift on space — recupera un FIGS/LTRS perduto,\nma spezza i gruppi lunghi di cifre come i numeri\nprogressivi.",
    "Puts the radio into DIGU and narrows its filter\naround the tones.":
        "Mette la radio in DIGU e stringe il filtro\nsui toni.",
    "Use after changing the port or a device.":
        "Da usare dopo aver cambiato porta o dispositivo.",
    "When on, the gateway opens at start-up and\ncloses with the program. Turn it off if the radio\nis on another PC.":
        "Se attivo, il gateway si apre all'avvio e si\nchiude con il programma. Spegnilo se la radio\nè su un altro PC.",
    "Highlights callsigns. Click one to put it\nin the HIS CALL field.":
        "Evidenzia i nominativi. Cliccane uno per\nmetterlo nel campo HIS CALL.",
    "High enough to drive the ALC — check the meter.":
        "Abbastanza alto da pilotare l'ALC — guarda lo strumento.",

    # ── registro ────────────────────────────────────────────────────────
    "%n contact(s)":       ["%n collegamento", "%n collegamenti"],
    "Worked before: %1 — last on %2":
        "Già collegato: %1 — l'ultima volta il %2",
    "A callsign is the least a contact needs to be logged":
        "Serve almeno il nominativo per registrare il collegamento",

    # ── ricerca delle radio ─────────────────────────────────────────────
    "No radio has answered yet": "Nessuna radio ha ancora risposto",
    "Radios announce themselves on UDP 4992.\nCheck the radio is on the same subnet, or enter its address below.":
        "Le radio si annunciano su UDP 4992.\nControlla che la radio sia nella stessa sottorete, o scrivi qui sotto il suo indirizzo.",
    "Looking for radios…":  "Cerco le radio…",
    "Waiting for the gateway…": "Aspetto il gateway…",
    "Connecting to %1…":    "Mi collego a %1…",
    "Reconnecting to %1…":  "Mi ricollego a %1…",
    "Connected to %1":      "Collegato a %1",
    "Disconnected":         "Scollegato",
    "Receiving from %1":    "Ricevo da %1",
    "'%1' is not a valid address": "'%1' non è un indirizzo valido",
    "Radio %1 is no longer on the network": "La radio %1 non è più sulla rete",
    "%1 — audio only, no CAT": "%1 — solo audio, niente CAT",

    # ── ricerca del segnale ─────────────────────────────────────────────
    "No recognisable RTTY signal in the band":
        "Nessun segnale RTTY riconoscibile in banda",
    "Centred on %1 Hz (%2 dB above the floor)":
        "Centrato su %1 Hz (%2 dB sopra il fondo)",
    "Trying the opposite polarity (%1)": "Provo il verso opposto (%1)",
    "Signal at %1 Hz: moving there":     "Segnale a %1 Hz: mi sposto",
    "reversed":             "invertito",
    "direct":               "diretto",

    # ── gateway ─────────────────────────────────────────────────────────
    "not started":          "non avviato",
    "disabled":             "disattivato",
    "already listening (started elsewhere)": "già in ascolto (avviato altrove)",
    "A gateway is already on the network: not starting another":
        "Un gateway è già sulla rete: non ne avvio un altro",
    "executable not found": "eseguibile non trovato",
    "Cannot find %1 beside the application": "Non trovo %1 accanto all'applicazione",
    "starting on %1":       "in avvio su %1",
    "started":              "avviato",
    "start failed":         "avvio fallito",
    "Starting the gateway: %1 on port %2": "Avvio il gateway: %1 sulla porta %2",
    "The gateway will not start: %1": "Il gateway non parte: %1",
    "exited":               "terminato",
    "exited (code %1)":     "terminato (codice %1)",
    "Gateway exited, code %1": "Gateway terminato, codice %1",
    "Closing the gateway":  "Chiudo il gateway",
    "The gateway is staying up: leaving it to the other clients":
        "Il gateway resta in piedi: lo lascio agli altri client",
    "left running":         "lasciato attivo",
    "closed":               "chiuso",
    "running on %1":        "attivo su %1",
    "%1 is busy — receive only": "%1 occupata — solo ascolto",
    "running, no CAT":      "attivo, senza CAT",
    "The gateway is not answering — retrying": "Il gateway non risponde — riprovo",
    "Gateway listening on UDP %1": "Gateway in ascolto su UDP %1",
    "Client %1:%2 connected": "Client %1:%2 collegato",
    "Client %1:%2 timed out": "Client %1:%2 scaduto",
    "Client %1 is leaving":  "Il client %1 se ne va",
    "Shutdown requested by whoever started me": "Spegnimento richiesto da chi mi ha avviato",
    "Shutdown deferred: %1 client(s) are still using the radio":
        "Chiusura rimandata: %1 client stanno ancora usando la radio",
    "No client for thirty seconds: closing": "Nessun client da trenta secondi: chiudo",
    "No clients left — dropping PTT": "Nessun client rimasto — sgancio il PTT",

    # ── CAT e audio ─────────────────────────────────────────────────────
    "CAT on %1 at %2 baud": "CAT su %1 a %2 baud",
    "CAT disabled — receive only, no tuning or PTT":
        "CAT disattivato — solo ricezione, niente sintonia né PTT",
    "Cannot open %1: %2":   "Non riesco ad aprire %1: %2",
    "CAT: queued TX1; on %1": "CAT: accodato TX1; su %1",
    "CAT: wrote TX0; (%1 bytes) on %2": "CAT: scritto TX0; (%1 byte) su %2",
    "Radio still shows %1 — repeating the PTT command (%2)":
        "La radio mostra ancora %1 — ripeto il comando PTT (%2)",
    "The FT-991A has no mode called '%1'": "L'FT-991A non ha un modo chiamato '%1'",
    "PTT requested by the client: %1  (CAT %2)": "PTT richiesto dal client: %1  (CAT %2)",
    "TRANSMIT":             "TRASMETTI",
    "receive":              "ricevi",
    "open":                 "aperto",
    "CLOSED":               "CHIUSO",
    "Audio in: %1":         "Audio in: %1",
    "Audio out: %1":        "Audio out: %1",
    "No capture device matching '%1'. Available: %2":
        "Nessun dispositivo di ingresso corrisponde a '%1'. Disponibili: %2",
    "No playback device matching '%1' — transmit is unavailable":
        "Nessun dispositivo di uscita corrisponde a '%1' — la trasmissione non è disponibile",
    "%1 cannot run at %2 Hz": "%1 non può funzionare a %2 Hz",
    "Could not open the audio transport": "Non riesco ad aprire il trasporto audio",
    "Transmit audio overrun — dropped %1 ms": "Audio di trasmissione in eccesso — persi %1 ms",
    "No transmit audio for %1 ms — dropping PTT":
        "Nessun audio di trasmissione da %1 ms — sgancio il PTT",
    "Cannot write the log in %1": "Non riesco a scrivere il log in %1",

    # ── trasmissione ────────────────────────────────────────────────────
    "Transmit is unavailable on this connection":
        "La trasmissione non è disponibile su questo collegamento",
    "Transmit is unavailable: no Opus transmit stream":
        "Trasmissione non disponibile: manca il flusso Opus di trasmissione",
    "Transmit requested but CAT is not open — ignored":
        "Trasmissione richiesta ma il CAT non è aperto — ignorata",
    "Transmit ran for three minutes — stopped":
        "La trasmissione è durata tre minuti — fermata",
    "The radio is in %1: on voice modes the USB audio does not modulate. Press 'Set radio' in the DECODER panel.":
        "La radio è in %1: nei modi fonia l'audio della USB non modula. Premi 'Imposta radio' nel pannello DECODER.",

    # ── rete ────────────────────────────────────────────────────────────
    "Cannot bind UDP port %1: %2": "Non riesco a occupare la porta UDP %1: %2",
    "Cannot listen on UDP port %1: %2": "Non riesco ad ascoltare sulla porta UDP %1: %2",
    "Cannot open a local UDP port: %1": "Non riesco ad aprire una porta UDP locale: %1",
    "Cannot open the VITA-49 UDP socket: %1": "Non riesco ad aprire il socket UDP VITA-49: %1",
    "Cannot open the discovery socket: %1": "Non riesco ad aprire il socket di ricerca: %1",
    "Could not create the receive audio stream": "Non riesco a creare il flusso audio di ricezione",
    "Could not create the transmit audio stream": "Non riesco a creare il flusso audio di trasmissione",
    "The radio refused the client registration (code 0x%1)":
        "La radio ha rifiutato la registrazione del client (codice 0x%1)",
    "The radio rejected the UDP port registration":
        "La radio ha rifiutato la registrazione della porta UDP",

    "No radio connected.":
        "Nessuna radio collegata.",
    "The audio comes from a sound card: the radio is not\nunder our control. Change band with the dial.":
        "L'audio viene da una scheda audio: la radio non è\nsotto il nostro controllo. Cambia banda con la manopola.",
    "The serial port is held by another program, so the\nradio takes no commands. Close it and reconnect.":
        "La porta seriale è tenuta da un altro programma, e la\nradio non prende comandi. Chiudilo e ricollega.",
    "%1 — RTTY at %2 MHz":
        "%1 — RTTY a %2 MHz",
    "Data on the upper sideband: the mode this\ndecoder is written for.":
        "Dati sulla banda laterale superiore: il modo per cui\nquesto decodificatore è scritto.",
    "Data on the lower sideband. The tones come out\nreversed — REV puts them back.":
        "Dati sulla banda laterale inferiore. I toni escono\nrovesciati — REV li rimette a posto.",
    "Voice sideband. RTTY is copied just the same,\nbut the radio's filter is wider than it needs.":
        "Banda laterale della fonia. Il RTTY si copia lo stesso,\nma il filtro della radio è più largo del necessario.",
}
