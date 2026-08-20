# -*- coding: utf-8 -*-
"""Deutsch.

Funkbetriebliche Kürzel bleiben unübersetzt: AFC, REV, USOS, BPF, NOTCH, LMS,
RST, QTH sind international, und danach sucht ein Operator. Ebenso "Mark",
"Shift", "Squelch" und "Wasserfall" — für die ersten drei gibt es keine
gebräuchliche deutsche Entsprechung im Funkbetrieb.
"""

TRANSLATIONS = {
    "shared with %1":
        "geteilt mit %1",
    "Sharing %1 with %2":
        "%1 geteilt mit %2",
    "another station":
        "eine andere Station",
    "The radio will not give audio to a bound client — reconnecting as a GUI station":
        "Das Gerät gibt einem gebundenen Client kein Audio — ich verbinde mich als GUI-Station neu",
    "TRANSMITTING":
        "SENDET",
    "Type here — Enter sends the line":
        "Hier tippen — Eingabe sendet die Zeile",
    "Connect a radio to transmit":
        "Ein Gerät verbinden, um zu senden",
    # sigle di stazione: restano tali e quali
    "MY CALL":             "MY CALL",
    "QTH":                 "QTH",
    "LANGUAGE":              "SPRACHE",
    "changes immediately":   "wirkt sofort",
    "SPECTRUM":            "SPEKTRUM",
    "RECEIVE":             "EMPFANG",
    "TRANSMIT":            "SENDEN",
    "TUNING":              "ABSTIMMUNG",
    "DECODER":             "DECODER",
    "FILTERS":             "FILTER",
    "FRAMING":             "RAHMEN",
    "VIEW":                "ANSICHT",
    "CENTRE":              "ZENTRIEREN",
    "STATION":             "STATION",
    "MACROS":              "MAKROS",
    "LOG":                 "LOGBUCH",
    "RADIOS ON THE NETWORK": "GERÄTE IM NETZ",
    "FT-991A GATEWAY":     "FT-991A-GATEWAY",

    "Close":               "Schließen",
    "Connect":             "Verbinden",
    "Copy":                "Kopieren",
    "Clear":               "Leeren",
    "Abort":               "Abbrechen",
    "Follow":              "Folgen",
    "Call":                "Rufzeichen",
    "Log it":              "Eintragen",
    "Export ADIF":         "ADIF exportieren",
    "Restore defaults":    "Zurücksetzen",
    "Restart":             "Neu starten",
    "Set radio":           "Gerät einstellen",
    "Setup":               "Einstellungen",
    "settings":            "einstellen",
    "close":               "zu",
    "on":                  "ein",
    "off":                 "aus",
    "band":                "Band",
    "light":               "Helligkeit",
    "contrast":            "Kontrast",
    "speed %1x":           "Tempo %1x",
    "floor %1 dB":         "Grundrauschen %1 dB",
    "jump to end ↓":       "ans Ende ↓",
    "DECO":                "DECO",
    "TX: %1":              "TX: %1",
    "transmit":            "transmit",
    "GREY":                "GRAU",
    "FIRE":                "FEUER",

    "NAME":                "NAME",
    "RST SENT":            "RST GEG",
    "RST RCVD":            "RST ERH",
    "Correction":          "Korrektur",
    "Normal":              "Normal",
    "Deep":                "Tief",
    "Off":                 "Aus",
    "Bits":                "Bits",
    "Stop":                "Stopp",
    "Par.":                "Par.",
    "none":                "keine",
    "even":                "gerade",
    "odd":                 "ungerade",
    "Fill":                "Füller",
    "BPF width":           "BPF-Breite",
    "Character wait":      "Zeichenpause",
    "Audio in":            "Audio ein",
    "Audio out":           "Audio aus",

    "Bandpass around the two tones: throws away\neverything outside before the detector.":
        "Bandpass um die beiden Töne: verwirft alles\naußerhalb, noch vor dem Detektor.",
    "Removes one frequency. Ctrl+click the waterfall\nto drop it on the carrier that is in the way.":
        "Löscht eine Frequenz. Strg+Klick auf den\nWasserfall setzt sie auf den störenden Träger.",
    "Adaptive canceller: removes steady carriers by\nitself. On weak signals it can eat the RTTY as\nwell — try it and listen.":
        "Adaptiver Auslöscher: entfernt stehende Träger\nvon allein. Bei schwachen Signalen frisst er auch\ndas RTTY — ausprobieren und hinhören.",
    "Finds the tone pair in the band and moves the\ntuning onto it. Once, now.":
        "Sucht das Tonpaar im Band und legt die\nAbstimmung darauf. Einmal, jetzt.",
    "Searches by itself whenever nothing is being\ncopied, and tries the polarity too. While the\ndecoder is locked it touches nothing.":
        "Sucht von allein, solange nichts mitgeschrieben\nwird, und probiert auch die Lage. Solange der\nDecoder eingerastet ist, rührt sie nichts an.",
    "Follows the drift of the signal already locked,\nwithin a few tens of hertz.":
        "Folgt der Drift des bereits eingerasteten\nSignals, im Bereich einiger zehn Hertz.",
    "How much band to show. Narrow around the tones\nshows the individual bits; wide shows who is calling.":
        "Wie viel Band gezeigt wird. Eng um die Töne zeigt\ndie einzelnen Bits, weit zeigt, wer ruft.",
    "How fast it scrolls. Slower keeps a longer\nstretch of band in view.":
        "Wie schnell er läuft. Langsamer hält einen\nlängeren Abschnitt im Blick.",
    "Zoom, palette, brightness and speed of the\nwaterfall.":
        "Zoom, Palette, Helligkeit und Tempo des\nWasserfalls.",
    "What to send between characters while you\ntype live.":
        "Was zwischen den Zeichen gesendet wird,\nwährend man live tippt.",
    "Figures set: US has BELL and apostrophe where\nITA2 swaps the two.":
        "Zifferngruppe: US hat BELL und Apostroph dort,\nwo ITA2 beide vertauscht.",
    "Prints characters whose stop bit read wrong too:\na few more characters on distorted signals, some\nlines of rubbish in exchange.":
        "Druckt auch Zeichen mit falschem Stoppbit: ein\npaar Zeichen mehr bei verzerrten Signalen, dafür\nein paar Zeilen Unsinn.",
    "Unshift on space — recovers a lost FIGS/LTRS, but\nbreaks long figure groups such as serial numbers.":
        "Unshift on space — rettet ein verlorenes\nFIGS/LTRS, zerlegt aber lange Zifferngruppen wie\nlaufende Nummern.",
    "Puts the radio into DIGU and narrows its filter\naround the tones.":
        "Schaltet das Gerät auf DIGU und engt sein Filter\num die Töne ein.",
    "Use after changing the port or a device.":
        "Nach dem Wechsel von Port oder Gerät benutzen.",
    "When on, the gateway opens at start-up and\ncloses with the program. Turn it off if the radio\nis on another PC.":
        "Wenn ein, öffnet sich das Gateway beim Start und\nschließt mit dem Programm. Aus, wenn das Gerät an\neinem anderen PC hängt.",
    "Highlights callsigns. Click one to put it\nin the HIS CALL field.":
        "Hebt Rufzeichen hervor. Ein Klick setzt es\nins Feld HIS CALL.",
    "High enough to drive the ALC — check the meter.":
        "Hoch genug für die ALC — das Instrument beobachten.",

    "%n contact(s)":       ["%n Verbindung", "%n Verbindungen"],
    "Worked before: %1 — last on %2":
        "Schon gearbeitet: %1 — zuletzt am %2",
    "A callsign is the least a contact needs to be logged":
        "Ohne Rufzeichen lässt sich eine Verbindung nicht eintragen",

    "No radio has answered yet": "Noch hat kein Gerät geantwortet",
    "Radios announce themselves on UDP 4992.\nCheck the radio is on the same subnet, or enter its address below.":
        "Geräte melden sich über UDP 4992.\nPrüfen, ob das Gerät im selben Subnetz liegt, oder unten seine Adresse eintragen.",
    "Looking for radios…":  "Suche nach Geräten…",
    "Waiting for the gateway…": "Warte auf das Gateway…",
    "Connecting to %1…":    "Verbinde mit %1…",
    "Reconnecting to %1…":  "Verbinde erneut mit %1…",
    "Connected to %1":      "Verbunden mit %1",
    "Disconnected":         "Getrennt",
    "Receiving from %1":    "Empfang von %1",
    "'%1' is not a valid address": "'%1' ist keine gültige Adresse",
    "Radio %1 is no longer on the network": "Gerät %1 ist nicht mehr im Netz",
    "%1 — audio only, no CAT": "%1 — nur Audio, kein CAT",

    "No recognisable RTTY signal in the band":
        "Kein erkennbares RTTY-Signal im Band",
    "Centred on %1 Hz (%2 dB above the floor)":
        "Zentriert auf %1 Hz (%2 dB über dem Rauschen)",
    "Trying the opposite polarity (%1)": "Probiere die andere Lage (%1)",
    "Signal at %1 Hz: moving there":     "Signal auf %1 Hz: gehe dorthin",
    "reversed":             "invers",
    "direct":               "normal",

    "not started":          "nicht gestartet",
    "disabled":             "abgeschaltet",
    "already listening (started elsewhere)": "hört bereits (anderswo gestartet)",
    "A gateway is already on the network: not starting another":
        "Ein Gateway ist bereits im Netz: es wird kein zweites gestartet",
    "executable not found": "Programmdatei nicht gefunden",
    "Cannot find %1 beside the application": "Finde %1 nicht neben der Anwendung",
    "starting on %1":       "startet auf %1",
    "started":              "gestartet",
    "start failed":         "Start fehlgeschlagen",
    "Starting the gateway: %1 on port %2": "Starte das Gateway: %1 auf Port %2",
    "The gateway will not start: %1": "Das Gateway startet nicht: %1",
    "exited":               "beendet",
    "exited (code %1)":     "beendet (Code %1)",
    "Gateway exited, code %1": "Gateway beendet, Code %1",
    "Closing the gateway":  "Schließe das Gateway",
    "The gateway is staying up: leaving it to the other clients":
        "Das Gateway bleibt in Betrieb: es gehört jetzt den anderen Clients",
    "left running":         "weiterlaufend",
    "closed":               "geschlossen",
    "running on %1":        "läuft auf %1",
    "%1 is busy — receive only": "%1 ist belegt — nur Empfang",
    "running, no CAT":      "läuft, ohne CAT",
    "The gateway is not answering — retrying": "Das Gateway antwortet nicht — neuer Versuch",
    "Gateway listening on UDP %1": "Gateway hört auf UDP %1",
    "Client %1:%2 connected": "Client %1:%2 verbunden",
    "Client %1:%2 timed out": "Client %1:%2 abgelaufen",
    "Client %1 is leaving":  "Client %1 verabschiedet sich",
    "Shutdown requested by whoever started me": "Abschaltung verlangt von dem, der mich gestartet hat",
    "Shutdown deferred: %1 client(s) are still using the radio":
        "Abschaltung verschoben: %1 Client(s) benutzen das Gerät noch",
    "No client for thirty seconds: closing": "Seit dreißig Sekunden kein Client: schließe",
    "No clients left — dropping PTT": "Kein Client mehr — PTT fällt ab",

    "CAT on %1 at %2 baud": "CAT auf %1 mit %2 Baud",
    "CAT disabled — receive only, no tuning or PTT":
        "CAT abgeschaltet — nur Empfang, keine Abstimmung, kein PTT",
    "Cannot open %1: %2":   "Kann %1 nicht öffnen: %2",
    "CAT: queued TX1; on %1": "CAT: TX1; eingereiht auf %1",
    "CAT: wrote TX0; (%1 bytes) on %2": "CAT: TX0; geschrieben (%1 Bytes) auf %2",
    "Radio still shows %1 — repeating the PTT command (%2)":
        "Gerät zeigt weiter %1 — wiederhole den PTT-Befehl (%2)",
    "The FT-991A has no mode called '%1'": "Der FT-991A kennt keine Betriebsart '%1'",
    "PTT requested by the client: %1  (CAT %2)": "PTT vom Client verlangt: %1  (CAT %2)",
    "TRANSMIT":             "SENDEN",
    "receive":              "empfangen",
    "open":                 "offen",
    "CLOSED":               "GESCHLOSSEN",
    "Audio in: %1":         "Audio ein: %1",
    "Audio out: %1":        "Audio aus: %1",
    "No capture device matching '%1'. Available: %2":
        "Kein Aufnahmegerät passt zu '%1'. Verfügbar: %2",
    "No playback device matching '%1' — transmit is unavailable":
        "Kein Wiedergabegerät passt zu '%1' — Senden ist nicht möglich",
    "%1 cannot run at %2 Hz": "%1 kann nicht mit %2 Hz laufen",
    "Could not open the audio transport": "Konnte den Audiotransport nicht öffnen",
    "Transmit audio overrun — dropped %1 ms": "Sendeaudio übergelaufen — %1 ms verworfen",
    "No transmit audio for %1 ms — dropping PTT":
        "Seit %1 ms kein Sendeaudio — PTT fällt ab",
    "Cannot write the log in %1": "Kann das Protokoll in %1 nicht schreiben",

    "Transmit is unavailable on this connection":
        "Über diese Verbindung ist Senden nicht möglich",
    "Transmit is unavailable: no Opus transmit stream":
        "Senden nicht möglich: kein Opus-Sendestrom",
    "Transmit requested but CAT is not open — ignored":
        "Senden verlangt, aber CAT ist nicht offen — übergangen",
    "Transmit ran for three minutes — stopped":
        "Die Aussendung lief drei Minuten — angehalten",
    "The radio is in %1: on voice modes the USB audio does not modulate. Press 'Set radio' in the DECODER panel.":
        "Das Gerät steht auf %1: in Sprechbetriebsarten moduliert das USB-Audio nicht. 'Gerät einstellen' im DECODER-Feld drücken.",

    "Cannot bind UDP port %1: %2": "Kann UDP-Port %1 nicht belegen: %2",
    "Cannot listen on UDP port %1: %2": "Kann auf UDP-Port %1 nicht hören: %2",
    "Cannot open a local UDP port: %1": "Kann keinen lokalen UDP-Port öffnen: %1",
    "Cannot open the VITA-49 UDP socket: %1": "Kann den VITA-49-UDP-Socket nicht öffnen: %1",
    "Cannot open the discovery socket: %1": "Kann den Such-Socket nicht öffnen: %1",
    "Could not create the receive audio stream": "Konnte den Empfangs-Audiostrom nicht anlegen",
    "Could not create the transmit audio stream": "Konnte den Sende-Audiostrom nicht anlegen",
    "The radio refused the client registration (code 0x%1)":
        "Das Gerät hat die Client-Anmeldung abgelehnt (Code 0x%1)",
    "The radio rejected the UDP port registration":
        "Das Gerät hat die Anmeldung des UDP-Ports abgelehnt",
}
