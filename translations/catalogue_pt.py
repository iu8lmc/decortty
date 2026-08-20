# -*- coding: utf-8 -*-
"""Português.

As siglas do radioamador não se traduzem: AFC, REV, USOS, BPF, NOTCH, LMS, RST,
QTH são internacionais e é assim que um operador as procura. O mesmo vale para
«mark», «shift», «squelch» e «waterfall» — traduzi-los daria palavras que
ninguém usa na estação.
"""

TRANSLATIONS = {
    "TRANSMITTING":
        "A TRANSMITIR",
    "Type here — Enter sends the line":
        "Escreva aqui — Enter envia a linha",
    "Connect a radio to transmit":
        "Ligue um rádio para transmitir",
    # sigle di stazione: restano tali e quali
    "MY CALL":             "MY CALL",
    "QTH":                 "QTH",
    "LANGUAGE":              "IDIOMA",
    "changes immediately":   "muda de imediato",
    "SPECTRUM":            "ESPECTRO",
    "RECEIVE":             "RECEÇÃO",
    "TRANSMIT":            "TRANSMISSÃO",
    "TUNING":              "SINTONIA",
    "DECODER":             "DESCODIFICADOR",
    "FILTERS":             "FILTROS",
    "FRAMING":             "TRAMA",
    "VIEW":                "VISTA",
    "CENTRE":              "CENTRAR",
    "STATION":             "ESTAÇÃO",
    "MACROS":              "MACROS",
    "LOG":                 "REGISTO",
    "RADIOS ON THE NETWORK": "EQUIPAMENTOS NA REDE",
    "FT-991A GATEWAY":     "GATEWAY FT-991A",

    "Close":               "Fechar",
    "Connect":             "Ligar",
    "Copy":                "Copiar",
    "Clear":               "Limpar",
    "Abort":               "Abortar",
    "Follow":              "Seguir",
    "Call":                "Indicativos",
    "Log it":              "Registar",
    "Export ADIF":         "Exportar ADIF",
    "Restore defaults":    "Repor",
    "Restart":             "Reiniciar",
    "Set radio":           "Ajustar rádio",
    "Setup":               "Definições",
    "settings":            "ajustar",
    "close":               "fechar",
    "on":                  "ativo",
    "off":                 "desligado",
    "band":                "banda",
    "light":               "luz",
    "contrast":            "contraste",
    "speed %1x":           "vel. %1x",
    "floor %1 dB":         "fundo %1 dB",
    "jump to end ↓":       "ir para o fim ↓",
    "DECO":                "DECO",
    "TX: %1":              "TX: %1",
    "transmit":            "transmit",
    "GREY":                "CINZA",
    "FIRE":                "FOGO",

    "NAME":                "NOME",
    "RST SENT":            "RST ENV",
    "RST RCVD":            "RST REC",
    "Correction":          "Correção",
    "Normal":              "Normal",
    "Deep":                "Profunda",
    "Off":                 "Off",
    "Bits":                "Bits",
    "Stop":                "Stop",
    "Par.":                "Par.",
    "none":                "não",
    "even":                "par",
    "odd":                 "ímpar",
    "Fill":                "Enchim.",
    "BPF width":           "Largura BPF",
    "Character wait":      "Espera entre caracteres",
    "Audio in":            "Áudio ent.",
    "Audio out":           "Áudio saída",

    "Bandpass around the two tones: throws away\neverything outside before the detector.":
        "Passa-banda em torno dos dois tons: descarta\ntudo o que fica fora antes do detetor.",
    "Removes one frequency. Ctrl+click the waterfall\nto drop it on the carrier that is in the way.":
        "Elimina uma frequência. Ctrl+clique na cascata\npara a pôr sobre a portadora que incomoda.",
    "Adaptive canceller: removes steady carriers by\nitself. On weak signals it can eat the RTTY as\nwell — try it and listen.":
        "Cancelador adaptativo: retira sozinho as\nportadoras fixas. Em sinais fracos pode comer\ntambém o RTTY — experimente e ouça.",
    "Finds the tone pair in the band and moves the\ntuning onto it. Once, now.":
        "Procura o par de tons na banda e leva a\nsintonia para cima dele. Uma só vez.",
    "Searches by itself whenever nothing is being\ncopied, and tries the polarity too. While the\ndecoder is locked it touches nothing.":
        "Procura sozinha quando nada está a ser copiado,\ne experimenta também a polaridade. Enquanto o\ndescodificador está preso não mexe em nada.",
    "Follows the drift of the signal already locked,\nwithin a few tens of hertz.":
        "Segue a deriva do sinal já preso, dentro de\nalgumas dezenas de hertz.",
    "How much band to show. Narrow around the tones\nshows the individual bits; wide shows who is calling.":
        "Quanta banda mostrar. Estreito à volta dos tons\nvêem-se os bits; largo vê-se quem chama.",
    "How fast it scrolls. Slower keeps a longer\nstretch of band in view.":
        "Com que rapidez corre. Mais devagar mantém à\nvista um troço de banda mais longo.",
    "Zoom, palette, brightness and speed of the\nwaterfall.":
        "Zoom, paleta, brilho e velocidade da\ncascata.",
    "What to send between characters while you\ntype live.":
        "O que enviar entre um caráter e outro\nenquanto escreve ao vivo.",
    "Figures set: US has BELL and apostrophe where\nITA2 swaps the two.":
        "Conjunto de algarismos: US tem BELL e apóstrofo\nonde ITA2 os troca.",
    "Prints characters whose stop bit read wrong too:\na few more characters on distorted signals, some\nlines of rubbish in exchange.":
        "Imprime também os caracteres com o bit de stop\nerrado: mais alguns caracteres em sinais\ndistorcidos, algumas linhas de lixo em troca.",
    "Unshift on space — recovers a lost FIGS/LTRS, but\nbreaks long figure groups such as serial numbers.":
        "Unshift on space — recupera um FIGS/LTRS perdido,\nmas parte os grupos longos de algarismos como os\nnúmeros de série.",
    "Puts the radio into DIGU and narrows its filter\naround the tones.":
        "Põe o rádio em DIGU e aperta o filtro à volta\ndos tons.",
    "Use after changing the port or a device.":
        "Usar depois de mudar a porta ou um dispositivo.",
    "When on, the gateway opens at start-up and\ncloses with the program. Turn it off if the radio\nis on another PC.":
        "Se ativo, o gateway abre ao arrancar e fecha\ncom o programa. Desligue-o se o rádio estiver\nnoutro PC.",
    "Highlights callsigns. Click one to put it\nin the HIS CALL field.":
        "Realça os indicativos. Clique num deles para\no pôr no campo HIS CALL.",
    "High enough to drive the ALC — check the meter.":
        "Alto o suficiente para excitar o ALC — veja o medidor.",

    "%n contact(s)":       ["%n contacto", "%n contactos"],
    "Worked before: %1 — last on %2":
        "Já trabalhado: %1 — a última vez em %2",
    "A callsign is the least a contact needs to be logged":
        "É preciso pelo menos o indicativo para registar o contacto",

    "No radio has answered yet": "Ainda nenhum equipamento respondeu",
    "Radios announce themselves on UDP 4992.\nCheck the radio is on the same subnet, or enter its address below.":
        "Os equipamentos anunciam-se em UDP 4992.\nVerifique se o rádio está na mesma sub-rede, ou escreva abaixo o seu endereço.",
    "Looking for radios…":  "À procura de equipamentos…",
    "Waiting for the gateway…": "À espera do gateway…",
    "Connecting to %1…":    "A ligar a %1…",
    "Reconnecting to %1…":  "A religar a %1…",
    "Connected to %1":      "Ligado a %1",
    "Disconnected":         "Desligado",
    "Receiving from %1":    "A receber de %1",
    "'%1' is not a valid address": "'%1' não é um endereço válido",
    "Radio %1 is no longer on the network": "O equipamento %1 já não está na rede",
    "%1 — audio only, no CAT": "%1 — só áudio, sem CAT",

    "No recognisable RTTY signal in the band":
        "Nenhum sinal RTTY reconhecível na banda",
    "Centred on %1 Hz (%2 dB above the floor)":
        "Centrado em %1 Hz (%2 dB acima do fundo)",
    "Trying the opposite polarity (%1)": "A experimentar a polaridade oposta (%1)",
    "Signal at %1 Hz: moving there":     "Sinal em %1 Hz: vou para lá",
    "reversed":             "invertida",
    "direct":               "direta",

    "not started":          "não iniciado",
    "disabled":             "desativado",
    "already listening (started elsewhere)": "já à escuta (iniciado noutro lado)",
    "A gateway is already on the network: not starting another":
        "Já há um gateway na rede: não inicio outro",
    "executable not found": "executável não encontrado",
    "Cannot find %1 beside the application": "Não encontro %1 ao lado da aplicação",
    "starting on %1":       "a iniciar em %1",
    "started":              "iniciado",
    "start failed":         "falha no arranque",
    "Starting the gateway: %1 on port %2": "A iniciar o gateway: %1 na porta %2",
    "The gateway will not start: %1": "O gateway não arranca: %1",
    "exited":               "terminado",
    "exited (code %1)":     "terminado (código %1)",
    "Gateway exited, code %1": "Gateway terminado, código %1",
    "Closing the gateway":  "A fechar o gateway",
    "The gateway is staying up: leaving it to the other clients":
        "O gateway fica de pé: deixo-o aos outros clientes",
    "left running":         "deixado a funcionar",
    "closed":               "fechado",
    "running on %1":        "ativo em %1",
    "%1 is busy — receive only": "%1 está ocupada — só escuta",
    "running, no CAT":      "ativo, sem CAT",
    "The gateway is not answering — retrying": "O gateway não responde — nova tentativa",
    "Gateway listening on UDP %1": "Gateway à escuta em UDP %1",
    "Client %1:%2 connected": "Cliente %1:%2 ligado",
    "Client %1:%2 timed out": "Cliente %1:%2 expirou",
    "Client %1 is leaving":  "O cliente %1 vai-se embora",
    "Shutdown requested by whoever started me": "Encerramento pedido por quem me iniciou",
    "Shutdown deferred: %1 client(s) are still using the radio":
        "Encerramento adiado: %1 cliente(s) ainda estão a usar o rádio",
    "No client for thirty seconds: closing": "Nenhum cliente há trinta segundos: fecho",
    "No clients left — dropping PTT": "Não resta nenhum cliente — largo o PTT",

    "CAT on %1 at %2 baud": "CAT em %1 a %2 baud",
    "CAT disabled — receive only, no tuning or PTT":
        "CAT desativado — só receção, sem sintonia nem PTT",
    "Cannot open %1: %2":   "Não consigo abrir %1: %2",
    "CAT: queued TX1; on %1": "CAT: TX1; em fila em %1",
    "CAT: wrote TX0; (%1 bytes) on %2": "CAT: escrito TX0; (%1 bytes) em %2",
    "Radio still shows %1 — repeating the PTT command (%2)":
        "O rádio continua a mostrar %1 — repito o comando de PTT (%2)",
    "The FT-991A has no mode called '%1'": "O FT-991A não tem um modo chamado '%1'",
    "PTT requested by the client: %1  (CAT %2)": "PTT pedido pelo cliente: %1  (CAT %2)",
    "TRANSMIT":             "TRANSMITIR",
    "receive":              "receber",
    "open":                 "aberto",
    "CLOSED":               "FECHADO",
    "Audio in: %1":         "Áudio ent.: %1",
    "Audio out: %1":        "Áudio saída: %1",
    "No capture device matching '%1'. Available: %2":
        "Nenhum dispositivo de entrada corresponde a '%1'. Disponíveis: %2",
    "No playback device matching '%1' — transmit is unavailable":
        "Nenhum dispositivo de saída corresponde a '%1' — não é possível transmitir",
    "%1 cannot run at %2 Hz": "%1 não pode funcionar a %2 Hz",
    "Could not open the audio transport": "Não consegui abrir o transporte de áudio",
    "Transmit audio overrun — dropped %1 ms": "Excesso de áudio de transmissão — perdidos %1 ms",
    "No transmit audio for %1 ms — dropping PTT":
        "Sem áudio de transmissão há %1 ms — largo o PTT",
    "Cannot write the log in %1": "Não consigo escrever o registo em %1",

    "Transmit is unavailable on this connection":
        "Nesta ligação não é possível transmitir",
    "Transmit is unavailable: no Opus transmit stream":
        "Não é possível transmitir: falta o fluxo Opus de transmissão",
    "Transmit requested but CAT is not open — ignored":
        "Transmissão pedida mas o CAT não está aberto — ignorada",
    "Transmit ran for three minutes — stopped":
        "A transmissão durou três minutos — parada",
    "The radio is in %1: on voice modes the USB audio does not modulate. Press 'Set radio' in the DECODER panel.":
        "O rádio está em %1: nos modos de fonia o áudio do USB não modula. Carregue em 'Ajustar rádio' no painel DESCODIFICADOR.",

    "Cannot bind UDP port %1: %2": "Não consigo reservar a porta UDP %1: %2",
    "Cannot listen on UDP port %1: %2": "Não consigo escutar na porta UDP %1: %2",
    "Cannot open a local UDP port: %1": "Não consigo abrir uma porta UDP local: %1",
    "Cannot open the VITA-49 UDP socket: %1": "Não consigo abrir o socket UDP VITA-49: %1",
    "Cannot open the discovery socket: %1": "Não consigo abrir o socket de descoberta: %1",
    "Could not create the receive audio stream": "Não consegui criar o fluxo de áudio de receção",
    "Could not create the transmit audio stream": "Não consegui criar o fluxo de áudio de transmissão",
    "The radio refused the client registration (code 0x%1)":
        "O rádio recusou o registo do cliente (código 0x%1)",
    "The radio rejected the UDP port registration":
        "O rádio rejeitou o registo da porta UDP",
}
