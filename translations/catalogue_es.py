# -*- coding: utf-8 -*-
"""Español.

Las siglas del radioaficionado no se traducen: AFC, REV, USOS, BPF, NOTCH, LMS,
RST, QTH son internacionales y así las busca un operador. Tampoco "mark",
"shift", "squelch" ni "waterfall" — traducirlos daría palabras que nadie usa en
la estación.
"""

TRANSLATIONS = {
    "FROM A SOUND CARD":
        "DESDE UNA TARJETA DE SONIDO",
    "no frequency, no PTT — transmit on VOX":
        "sin frecuencia, sin PTT — se transmite en VOX",
    "— no transmit —":
        "— sin transmisión —",
    "Listen":
        "Escuchar",
    "Cannot open the sound card":
        "No puedo abrir la tarjeta de sonido",
    "Listening to %1":
        "Escuchando %1",
    "Listening to %1 — receive only":
        "Escuchando %1 — solo recepción",
    "shared with %1":
        "compartido con %1",
    "Sharing %1 with %2":
        "%1 compartido con %2",
    "another station":
        "otra estación",
    "The radio will not give audio to a bound client — reconnecting as a GUI station":
        "El equipo no da audio a un cliente vinculado — me reconecto como estación GUI",
    "TRANSMITTING":
        "TRANSMITIENDO",
    "Type here — Enter sends the line":
        "Escribe aquí — Intro envía la línea",
    "Connect a radio to transmit":
        "Conecta un equipo para transmitir",
    # sigle di stazione: restano tali e quali
    "MY CALL":             "MY CALL",
    "QTH":                 "QTH",
    "LANGUAGE":              "IDIOMA",
    "changes immediately":   "cambia al momento",
    "SPECTRUM":            "ESPECTRO",
    "RECEIVE":             "RECEPCIÓN",
    "TRANSMIT":            "TRANSMISIÓN",
    "TUNING":              "SINTONÍA",
    "DECODER":             "DECODIFICADOR",
    "FILTERS":             "FILTROS",
    "FRAMING":             "TRAMA",
    "VIEW":                "VISTA",
    "CENTRE":              "CENTRAR",
    "STATION":             "ESTACIÓN",
    "MACROS":              "MACROS",
    "LOG":                 "REGISTRO",
    "RADIOS ON THE NETWORK": "EQUIPOS EN LA RED",
    "FT-991A GATEWAY":     "PASARELA FT-991A",

    "Close":               "Cerrar",
    "Connect":             "Conectar",
    "Copy":                "Copiar",
    "Clear":               "Limpiar",
    "Abort":               "Abortar",
    "Follow":              "Seguir",
    "Call":                "Indicativos",
    "Log it":              "Anotar",
    "Export ADIF":         "Exportar ADIF",
    "Restore defaults":    "Restaurar",
    "Restart":             "Reiniciar",
    "Set radio":           "Ajustar equipo",
    "Setup":               "Ajustes",
    "settings":            "ajustar",
    "close":               "cerrar",
    "on":                  "activo",
    "off":                 "apagado",
    "band":                "banda",
    "light":               "luz",
    "contrast":            "contraste",
    "speed %1x":           "vel. %1x",
    "floor %1 dB":         "fondo %1 dB",
    "jump to end ↓":       "ir al final ↓",
    "DECO":                "DECO",
    "TX: %1":              "TX: %1",
    "transmit":            "transmit",
    "GREY":                "GRISES",
    "FIRE":                "FUEGO",

    "NAME":                "NOMBRE",
    "RST SENT":            "RST ENV",
    "RST RCVD":            "RST REC",
    "Correction":          "Corrección",
    "Normal":              "Normal",
    "Deep":                "Profunda",
    "Off":                 "No",
    "Bits":                "Bits",
    "Stop":                "Stop",
    "Par.":                "Par.",
    "none":                "no",
    "even":                "par",
    "odd":                 "impar",
    "Fill":                "Relleno",
    "BPF width":           "Ancho BPF",
    "Character wait":      "Espera entre caracteres",
    "Audio in":            "Audio ent.",
    "Audio out":           "Audio sal.",

    "Bandpass around the two tones: throws away\neverything outside before the detector.":
        "Paso banda alrededor de los dos tonos: descarta\ntodo lo de fuera antes del detector.",
    "Removes one frequency. Ctrl+click the waterfall\nto drop it on the carrier that is in the way.":
        "Elimina una frecuencia. Ctrl+clic en la cascada\npara ponerla sobre la portadora que molesta.",
    "Adaptive canceller: removes steady carriers by\nitself. On weak signals it can eat the RTTY as\nwell — try it and listen.":
        "Cancelador adaptativo: quita solo las portadoras\nfijas. Con señales débiles puede comerse también\nel RTTY — pruébalo y escucha.",
    "Finds the tone pair in the band and moves the\ntuning onto it. Once, now.":
        "Busca la pareja de tonos en la banda y lleva\nla sintonía encima. Una sola vez.",
    "Searches by itself whenever nothing is being\ncopied, and tries the polarity too. While the\ndecoder is locked it touches nothing.":
        "Busca sola cuando no se está copiando nada, y\nprueba también la polaridad. Mientras el\ndecodificador está enganchado no toca nada.",
    "Follows the drift of the signal already locked,\nwithin a few tens of hertz.":
        "Sigue la deriva de la señal ya enganchada,\ndentro de unas decenas de hercios.",
    "How much band to show. Narrow around the tones\nshows the individual bits; wide shows who is calling.":
        "Cuánta banda mostrar. Estrecho sobre los tonos se\nven los bits; ancho se ve quién llama.",
    "How fast it scrolls. Slower keeps a longer\nstretch of band in view.":
        "Con qué rapidez corre. Más lento mantiene a la\nvista un tramo de banda más largo.",
    "Zoom, palette, brightness and speed of the\nwaterfall.":
        "Zoom, paleta, brillo y velocidad de la\ncascada.",
    "What to send between characters while you\ntype live.":
        "Qué enviar entre un carácter y otro mientras\nescribes en directo.",
    "Figures set: US has BELL and apostrophe where\nITA2 swaps the two.":
        "Juego de cifras: US tiene BELL y apóstrofo donde\nITA2 los intercambia.",
    "Prints characters whose stop bit read wrong too:\na few more characters on distorted signals, some\nlines of rubbish in exchange.":
        "Imprime también los caracteres con el bit de stop\nmal leído: algún carácter más en señales\ndistorsionadas, alguna línea de basura a cambio.",
    "Unshift on space — recovers a lost FIGS/LTRS, but\nbreaks long figure groups such as serial numbers.":
        "Unshift on space — recupera un FIGS/LTRS perdido,\npero rompe los grupos largos de cifras como los\nnúmeros de serie.",
    "Puts the radio into DIGU and narrows its filter\naround the tones.":
        "Pone el equipo en DIGU y estrecha su filtro\nalrededor de los tonos.",
    "Use after changing the port or a device.":
        "Úsalo tras cambiar el puerto o un dispositivo.",
    "When on, the gateway opens at start-up and\ncloses with the program. Turn it off if the radio\nis on another PC.":
        "Si está activa, la pasarela se abre al arrancar y\nse cierra con el programa. Apágala si el equipo\nestá en otro PC.",
    "Highlights callsigns. Click one to put it\nin the HIS CALL field.":
        "Resalta los indicativos. Haz clic en uno para\nponerlo en el campo HIS CALL.",
    "High enough to drive the ALC — check the meter.":
        "Bastante alto para excitar el ALC — mira el medidor.",

    "%n contact(s)":       ["%n contacto", "%n contactos"],
    "Worked before: %1 — last on %2":
        "Ya trabajado: %1 — la última vez el %2",
    "A callsign is the least a contact needs to be logged":
        "Hace falta al menos el indicativo para anotar el contacto",

    "No radio has answered yet": "Todavía no ha respondido ningún equipo",
    "Radios announce themselves on UDP 4992.\nCheck the radio is on the same subnet, or enter its address below.":
        "Los equipos se anuncian por UDP 4992.\nComprueba que el equipo esté en la misma subred, o escribe abajo su dirección.",
    "Looking for radios…":  "Buscando equipos…",
    "Waiting for the gateway…": "Esperando a la pasarela…",
    "Connecting to %1…":    "Conectando con %1…",
    "Reconnecting to %1…":  "Reconectando con %1…",
    "Connected to %1":      "Conectado a %1",
    "Disconnected":         "Desconectado",
    "Receiving from %1":    "Recibiendo de %1",
    "'%1' is not a valid address": "'%1' no es una dirección válida",
    "Radio %1 is no longer on the network": "El equipo %1 ya no está en la red",
    "%1 — audio only, no CAT": "%1 — solo audio, sin CAT",

    "No recognisable RTTY signal in the band":
        "Ninguna señal RTTY reconocible en la banda",
    "Centred on %1 Hz (%2 dB above the floor)":
        "Centrado en %1 Hz (%2 dB sobre el fondo)",
    "Trying the opposite polarity (%1)": "Pruebo la polaridad contraria (%1)",
    "Signal at %1 Hz: moving there":     "Señal en %1 Hz: me muevo allí",
    "reversed":             "invertida",
    "direct":               "directa",

    "not started":          "sin arrancar",
    "disabled":             "desactivada",
    "already listening (started elsewhere)": "ya a la escucha (arrancada en otro sitio)",
    "A gateway is already on the network: not starting another":
        "Ya hay una pasarela en la red: no arranco otra",
    "executable not found": "ejecutable no encontrado",
    "Cannot find %1 beside the application": "No encuentro %1 junto a la aplicación",
    "starting on %1":       "arrancando en %1",
    "started":              "arrancada",
    "start failed":         "fallo al arrancar",
    "Starting the gateway: %1 on port %2": "Arranco la pasarela: %1 en el puerto %2",
    "The gateway will not start: %1": "La pasarela no arranca: %1",
    "exited":               "terminada",
    "exited (code %1)":     "terminada (código %1)",
    "Gateway exited, code %1": "Pasarela terminada, código %1",
    "Closing the gateway":  "Cierro la pasarela",
    "The gateway is staying up: leaving it to the other clients":
        "La pasarela sigue en pie: la dejo a los demás clientes",
    "left running":         "dejada en marcha",
    "closed":               "cerrada",
    "running on %1":        "activa en %1",
    "%1 is busy — receive only": "%1 está ocupado — solo escucha",
    "running, no CAT":      "activa, sin CAT",
    "The gateway is not answering — retrying": "La pasarela no responde — reintento",
    "Gateway listening on UDP %1": "Pasarela a la escucha en UDP %1",
    "Client %1:%2 connected": "Cliente %1:%2 conectado",
    "Client %1:%2 timed out": "Cliente %1:%2 caducado",
    "Client %1 is leaving":  "El cliente %1 se marcha",
    "Shutdown requested by whoever started me": "Apagado pedido por quien me arrancó",
    "Shutdown deferred: %1 client(s) are still using the radio":
        "Cierre aplazado: %1 cliente(s) siguen usando el equipo",
    "No client for thirty seconds: closing": "Ningún cliente desde hace treinta segundos: cierro",
    "No clients left — dropping PTT": "No queda ningún cliente — suelto el PTT",

    "CAT on %1 at %2 baud": "CAT en %1 a %2 baudios",
    "CAT disabled — receive only, no tuning or PTT":
        "CAT desactivado — solo recepción, sin sintonía ni PTT",
    "Cannot open %1: %2":   "No puedo abrir %1: %2",
    "CAT: queued TX1; on %1": "CAT: TX1; en cola en %1",
    "CAT: wrote TX0; (%1 bytes) on %2": "CAT: escrito TX0; (%1 bytes) en %2",
    "Radio still shows %1 — repeating the PTT command (%2)":
        "El equipo sigue mostrando %1 — repito la orden de PTT (%2)",
    "The FT-991A has no mode called '%1'": "El FT-991A no tiene un modo llamado '%1'",
    "PTT requested by the client: %1  (CAT %2)": "PTT pedido por el cliente: %1  (CAT %2)",
    "TRANSMIT":             "TRANSMITIR",
    "receive":              "recibir",
    "open":                 "abierto",
    "CLOSED":               "CERRADO",
    "Audio in: %1":         "Audio ent.: %1",
    "Audio out: %1":        "Audio sal.: %1",
    "No capture device matching '%1'. Available: %2":
        "Ningún dispositivo de entrada coincide con '%1'. Disponibles: %2",
    "No playback device matching '%1' — transmit is unavailable":
        "Ningún dispositivo de salida coincide con '%1' — no se puede transmitir",
    "%1 cannot run at %2 Hz": "%1 no puede funcionar a %2 Hz",
    "Could not open the audio transport": "No pude abrir el transporte de audio",
    "Transmit audio overrun — dropped %1 ms": "Desbordamiento del audio de transmisión — perdidos %1 ms",
    "No transmit audio for %1 ms — dropping PTT":
        "Sin audio de transmisión desde hace %1 ms — suelto el PTT",
    "Cannot write the log in %1": "No puedo escribir el registro en %1",

    "Transmit is unavailable on this connection":
        "En esta conexión no se puede transmitir",
    "Transmit is unavailable: no Opus transmit stream":
        "No se puede transmitir: falta el flujo Opus de transmisión",
    "Transmit requested but CAT is not open — ignored":
        "Transmisión pedida pero el CAT no está abierto — ignorada",
    "Transmit ran for three minutes — stopped":
        "La transmisión duró tres minutos — detenida",
    "The radio is in %1: on voice modes the USB audio does not modulate. Press 'Set radio' in the DECODER panel.":
        "El equipo está en %1: en modos de fonía el audio del USB no modula. Pulsa 'Ajustar equipo' en el panel DECODIFICADOR.",

    "Cannot bind UDP port %1: %2": "No puedo ocupar el puerto UDP %1: %2",
    "Cannot listen on UDP port %1: %2": "No puedo escuchar en el puerto UDP %1: %2",
    "Cannot open a local UDP port: %1": "No puedo abrir un puerto UDP local: %1",
    "Cannot open the VITA-49 UDP socket: %1": "No puedo abrir el socket UDP de VITA-49: %1",
    "Cannot open the discovery socket: %1": "No puedo abrir el socket de búsqueda: %1",
    "Could not create the receive audio stream": "No pude crear el flujo de audio de recepción",
    "Could not create the transmit audio stream": "No pude crear el flujo de audio de transmisión",
    "The radio refused the client registration (code 0x%1)":
        "El equipo rechazó el registro del cliente (código 0x%1)",
    "The radio rejected the UDP port registration":
        "El equipo rechazó el registro del puerto UDP",

    "No radio connected.":
        "Ninguna radio conectada.",
    "The audio comes from a sound card: the radio is not\nunder our control. Change band with the dial.":
        "El audio viene de una tarjeta de sonido: la radio no está\nbajo nuestro control. Cambia de banda con el mando.",
    "The serial port is held by another program, so the\nradio takes no commands. Close it and reconnect.":
        "El puerto serie lo tiene otro programa, y la radio no acepta\nórdenes. Ciérralo y vuelve a conectar.",
    "%1 — RTTY at %2 MHz":
        "%1 — RTTY en %2 MHz",
    "Data on the upper sideband: the mode this\ndecoder is written for.":
        "Datos en banda lateral superior: el modo para el que está\nescrito este decodificador.",
    "Data on the lower sideband. The tones come out\nreversed — REV puts them back.":
        "Datos en banda lateral inferior. Los tonos salen invertidos\n— REV los devuelve a su sitio.",
    "Voice sideband. RTTY is copied just the same,\nbut the radio's filter is wider than it needs.":
        "Banda lateral de fonía. El RTTY se copia igual, pero el\nfiltro de la radio es más ancho de lo necesario.",

    "Drag to move the radio; the wheel tunes by 1 kHz —\n100 Hz with Shift, 10 kHz with Ctrl.":
        "Arrastra para mover la radio; la rueda sintoniza de 1 kHz en 1 kHz —\n100 Hz con Mayús, 10 kHz con Ctrl.",

    "FLEXRADIO":
        "FLEXRADIO",
    "BY ITSELF":
        "POR SÍ SOLO",
    "Binds to the station already on the radio when there\nis one, and takes the GUI role when the radio is free.":
        "Se enlaza a la estación ya conectada si la hay, y toma\nel rol GUI cuando la radio está libre.",
    "GUI STATION":
        "ESTACIÓN GUI",
    "Owns its own slices, so frequency and tuning always\nwork — at the cost of one of the two MultiFlex seats.":
        "Posee sus propias slices, así frecuencia y sintonía siempre\nfuncionan — a costa de una de las dos plazas MultiFlex.",
    "SECOND CLIENT":
        "CLIENTE SECUNDARIO",
    "Reads the slices of the station that already has the\nradio, without taking a seat. If the radio shows none,\nDecoRTTY goes back to being a GUI station by itself.":
        "Lee las slices de la estación que ya tiene la radio, sin\nocupar plaza. Si la radio no muestra ninguna, DecoRTTY\nvuelve por sí solo a ser estación GUI.",
    "Takes effect at the next connection.":
        "Surte efecto en la próxima conexión.",
    "Bound to %1 but the radio shows no slice — reconnecting as a GUI station":
        "Enlazado a %1 pero la radio no muestra ninguna slice — reconectando como estación GUI",
}
