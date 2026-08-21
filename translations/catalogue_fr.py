# -*- coding: utf-8 -*-
"""Français.

Les sigles du radioamateur ne se traduisent pas : AFC, REV, USOS, BPF, NOTCH,
LMS, RST, QTH sont internationaux, et c'est ainsi qu'un opérateur les cherche.
De même « mark », « shift », « squelch » et « waterfall » : les traduire
donnerait des mots que personne n'emploie en station.
"""

TRANSLATIONS = {
    "FROM A SOUND CARD":
        "DEPUIS UNE CARTE SON",
    "no frequency, no PTT — transmit on VOX":
        "pas de fréquence, pas de PTT — émission en VOX",
    "— no transmit —":
        "— pas d'émission —",
    "Listen":
        "Écouter",
    "Cannot open the sound card":
        "Impossible d'ouvrir la carte son",
    "Listening to %1":
        "À l'écoute de %1",
    "Listening to %1 — receive only":
        "À l'écoute de %1 — réception seule",
    "shared with %1":
        "partagée avec %1",
    "Sharing %1 with %2":
        "%1 partagée avec %2",
    "another station":
        "une autre station",
    "The radio will not give audio to a bound client — reconnecting as a GUI station":
        "Le poste ne donne pas d'audio à un client lié — je me reconnecte comme station GUI",
    "TRANSMITTING":
        "EN ÉMISSION",
    "Type here — Enter sends the line":
        "Tapez ici — Entrée envoie la ligne",
    "Connect a radio to transmit":
        "Connectez un poste pour émettre",
    # sigle di stazione: restano tali e quali
    "MY CALL":             "MY CALL",
    "QTH":                 "QTH",
    "LANGUAGE":              "LANGUE",
    "changes immediately":   "prend effet aussitôt",
    "SPECTRUM":            "SPECTRE",
    "RECEIVE":             "RÉCEPTION",
    "TRANSMIT":            "ÉMISSION",
    "TUNING":              "ACCORD",
    "DECODER":             "DÉCODEUR",
    "FILTERS":             "FILTRES",
    "FRAMING":             "TRAME",
    "VIEW":                "VUE",
    "CENTRE":              "CENTRER",
    "STATION":             "STATION",
    "MACROS":              "MACROS",
    "LOG":                 "JOURNAL",
    "RADIOS ON THE NETWORK": "POSTES SUR LE RÉSEAU",
    "FT-991A GATEWAY":     "PASSERELLE FT-991A",

    "Close":               "Fermer",
    "Connect":             "Connecter",
    "Copy":                "Copier",
    "Clear":               "Effacer",
    "Abort":               "Interrompre",
    "Follow":              "Suivre",
    "Call":                "Indicatifs",
    "Log it":              "Journaliser",
    "Export ADIF":         "Exporter ADIF",
    "Restore defaults":    "Réinitialiser",
    "Restart":             "Redémarrer",
    "Set radio":           "Régler le poste",
    "Setup":               "Réglages",
    "settings":            "régler",
    "close":               "fermer",
    "on":                  "actif",
    "off":                 "éteint",
    "band":                "bande",
    "light":               "lumière",
    "contrast":            "contraste",
    "speed %1x":           "vit. %1x",
    "floor %1 dB":         "plancher %1 dB",
    "jump to end ↓":       "aller à la fin ↓",
    "DECO":                "DECO",
    "TX: %1":              "TX: %1",
    "transmit":            "transmit",
    "GREY":                "GRIS",
    "FIRE":                "FEU",

    "NAME":                "NOM",
    "RST SENT":            "RST ÉMIS",
    "RST RCVD":            "RST REÇU",
    "Correction":          "Correction",
    "Normal":              "Normale",
    "Deep":                "Profonde",
    "Off":                 "Off",
    "Bits":                "Bits",
    "Stop":                "Stop",
    "Par.":                "Par.",
    "none":                "aucune",
    "even":                "paire",
    "odd":                 "impaire",
    "Fill":                "Bourrage",
    "BPF width":           "Largeur BPF",
    "Character wait":      "Attente entre caractères",
    "Audio in":            "Audio ent.",
    "Audio out":           "Audio sort.",

    "Bandpass around the two tones: throws away\neverything outside before the detector.":
        "Passe-bande autour des deux tons : rejette tout\nce qui est dehors avant le détecteur.",
    "Removes one frequency. Ctrl+click the waterfall\nto drop it on the carrier that is in the way.":
        "Supprime une fréquence. Ctrl+clic sur la cascade\npour la poser sur la porteuse qui gêne.",
    "Adaptive canceller: removes steady carriers by\nitself. On weak signals it can eat the RTTY as\nwell — try it and listen.":
        "Annuleur adaptatif : retire seul les porteuses\nfixes. Sur signaux faibles il peut manger aussi\nle RTTY — essayez et écoutez.",
    "Finds the tone pair in the band and moves the\ntuning onto it. Once, now.":
        "Cherche la paire de tons dans la bande et y\namène l'accord. Une seule fois.",
    "Searches by itself whenever nothing is being\ncopied, and tries the polarity too. While the\ndecoder is locked it touches nothing.":
        "Cherche seule quand rien n'est copié, et essaie\naussi la polarité. Tant que le décodeur est\naccroché, elle ne touche à rien.",
    "Follows the drift of the signal already locked,\nwithin a few tens of hertz.":
        "Suit la dérive du signal déjà accroché, dans\nla limite de quelques dizaines de hertz.",
    "How much band to show. Narrow around the tones\nshows the individual bits; wide shows who is calling.":
        "Quelle largeur de bande montrer. Serré sur les\ntons on voit les bits ; large on voit qui appelle.",
    "How fast it scrolls. Slower keeps a longer\nstretch of band in view.":
        "À quelle vitesse elle défile. Plus lent garde en\nvue une tranche de bande plus longue.",
    "Zoom, palette, brightness and speed of the\nwaterfall.":
        "Zoom, palette, luminosité et vitesse de la\ncascade.",
    "What to send between characters while you\ntype live.":
        "Ce qu'il faut envoyer entre deux caractères\npendant que vous tapez en direct.",
    "Figures set: US has BELL and apostrophe where\nITA2 swaps the two.":
        "Jeu de chiffres : US place BELL et l'apostrophe\nlà où ITA2 les échange.",
    "Prints characters whose stop bit read wrong too:\na few more characters on distorted signals, some\nlines of rubbish in exchange.":
        "Imprime aussi les caractères dont le bit de stop\nest faux : quelques caractères de plus sur les\nsignaux déformés, quelques lignes de rebut en échange.",
    "Unshift on space — recovers a lost FIGS/LTRS, but\nbreaks long figure groups such as serial numbers.":
        "Unshift on space — récupère un FIGS/LTRS perdu,\nmais casse les longs groupes de chiffres comme\nles numéros de série.",
    "Puts the radio into DIGU and narrows its filter\naround the tones.":
        "Met le poste en DIGU et resserre son filtre\nautour des tons.",
    "Use after changing the port or a device.":
        "À utiliser après avoir changé le port ou un périphérique.",
    "When on, the gateway opens at start-up and\ncloses with the program. Turn it off if the radio\nis on another PC.":
        "Si actif, la passerelle s'ouvre au démarrage et\nse ferme avec le programme. Éteignez-le si le\nposte est sur un autre PC.",
    "Highlights callsigns. Click one to put it\nin the HIS CALL field.":
        "Met en évidence les indicatifs. Cliquez-en un\npour le placer dans le champ HIS CALL.",
    "High enough to drive the ALC — check the meter.":
        "Assez haut pour attaquer l'ALC — surveillez l'appareil.",

    "%n contact(s)":       ["%n contact", "%n contacts"],
    "Worked before: %1 — last on %2":
        "Déjà contacté : %1 — la dernière fois le %2",
    "A callsign is the least a contact needs to be logged":
        "Il faut au moins l'indicatif pour journaliser le contact",

    "No radio has answered yet": "Aucun poste n'a encore répondu",
    "Radios announce themselves on UDP 4992.\nCheck the radio is on the same subnet, or enter its address below.":
        "Les postes s'annoncent sur UDP 4992.\nVérifiez que le poste est sur le même sous-réseau, ou saisissez son adresse ci-dessous.",
    "Looking for radios…":  "Recherche des postes…",
    "Waiting for the gateway…": "En attente de la passerelle…",
    "Connecting to %1…":    "Connexion à %1…",
    "Reconnecting to %1…":  "Reconnexion à %1…",
    "Connected to %1":      "Connecté à %1",
    "Disconnected":         "Déconnecté",
    "Receiving from %1":    "Réception de %1",
    "'%1' is not a valid address": "'%1' n'est pas une adresse valide",
    "Radio %1 is no longer on the network": "Le poste %1 n'est plus sur le réseau",
    "%1 — audio only, no CAT": "%1 — audio seul, sans CAT",

    "No recognisable RTTY signal in the band":
        "Aucun signal RTTY reconnaissable dans la bande",
    "Centred on %1 Hz (%2 dB above the floor)":
        "Centré sur %1 Hz (%2 dB au-dessus du plancher)",
    "Trying the opposite polarity (%1)": "J'essaie la polarité inverse (%1)",
    "Signal at %1 Hz: moving there":     "Signal sur %1 Hz : je m'y déplace",
    "reversed":             "inversée",
    "direct":               "directe",

    "not started":          "non démarrée",
    "disabled":             "désactivée",
    "already listening (started elsewhere)": "déjà à l'écoute (démarrée ailleurs)",
    "A gateway is already on the network: not starting another":
        "Une passerelle est déjà sur le réseau : je n'en démarre pas une seconde",
    "executable not found": "exécutable introuvable",
    "Cannot find %1 beside the application": "Je ne trouve pas %1 à côté de l'application",
    "starting on %1":       "démarrage sur %1",
    "started":              "démarrée",
    "start failed":         "échec du démarrage",
    "Starting the gateway: %1 on port %2": "Je démarre la passerelle : %1 sur le port %2",
    "The gateway will not start: %1": "La passerelle ne démarre pas : %1",
    "exited":               "terminée",
    "exited (code %1)":     "terminée (code %1)",
    "Gateway exited, code %1": "Passerelle terminée, code %1",
    "Closing the gateway":  "Je ferme la passerelle",
    "The gateway is staying up: leaving it to the other clients":
        "La passerelle reste en service : je la laisse aux autres clients",
    "left running":         "laissée active",
    "closed":               "fermée",
    "running on %1":        "active sur %1",
    "%1 is busy — receive only": "%1 est occupé — écoute seule",
    "running, no CAT":      "active, sans CAT",
    "The gateway is not answering — retrying": "La passerelle ne répond pas — nouvel essai",
    "Gateway listening on UDP %1": "Passerelle à l'écoute sur UDP %1",
    "Client %1:%2 connected": "Client %1:%2 connecté",
    "Client %1:%2 timed out": "Client %1:%2 expiré",
    "Client %1 is leaving":  "Le client %1 s'en va",
    "Shutdown requested by whoever started me": "Arrêt demandé par celui qui m'a démarrée",
    "Shutdown deferred: %1 client(s) are still using the radio":
        "Arrêt différé : %1 client(s) utilisent encore le poste",
    "No client for thirty seconds: closing": "Aucun client depuis trente secondes : je ferme",
    "No clients left — dropping PTT": "Plus aucun client — je relâche le PTT",

    "CAT on %1 at %2 baud": "CAT sur %1 à %2 bauds",
    "CAT disabled — receive only, no tuning or PTT":
        "CAT désactivé — réception seule, ni accord ni PTT",
    "Cannot open %1: %2":   "Impossible d'ouvrir %1 : %2",
    "CAT: queued TX1; on %1": "CAT : TX1; mis en file sur %1",
    "CAT: wrote TX0; (%1 bytes) on %2": "CAT : TX0; écrit (%1 octets) sur %2",
    "Radio still shows %1 — repeating the PTT command (%2)":
        "Le poste affiche toujours %1 — je répète la commande PTT (%2)",
    "The FT-991A has no mode called '%1'": "Le FT-991A n'a pas de mode nommé '%1'",
    "PTT requested by the client: %1  (CAT %2)": "PTT demandé par le client : %1  (CAT %2)",
    "TRANSMIT":             "ÉMETTRE",
    "receive":              "recevoir",
    "open":                 "ouvert",
    "CLOSED":               "FERMÉ",
    "Audio in: %1":         "Audio ent. : %1",
    "Audio out: %1":        "Audio sort. : %1",
    "No capture device matching '%1'. Available: %2":
        "Aucun périphérique d'entrée ne correspond à '%1'. Disponibles : %2",
    "No playback device matching '%1' — transmit is unavailable":
        "Aucun périphérique de sortie ne correspond à '%1' — l'émission est impossible",
    "%1 cannot run at %2 Hz": "%1 ne peut pas fonctionner à %2 Hz",
    "Could not open the audio transport": "Impossible d'ouvrir le transport audio",
    "Transmit audio overrun — dropped %1 ms": "Débordement de l'audio d'émission — %1 ms perdues",
    "No transmit audio for %1 ms — dropping PTT":
        "Aucun audio d'émission depuis %1 ms — je relâche le PTT",
    "Cannot write the log in %1": "Impossible d'écrire le journal dans %1",

    "Transmit is unavailable on this connection":
        "L'émission est impossible sur cette connexion",
    "Transmit is unavailable: no Opus transmit stream":
        "Émission impossible : pas de flux Opus d'émission",
    "Transmit requested but CAT is not open — ignored":
        "Émission demandée mais le CAT n'est pas ouvert — ignorée",
    "Transmit ran for three minutes — stopped":
        "L'émission a duré trois minutes — arrêtée",
    "The radio is in %1: on voice modes the USB audio does not modulate. Press 'Set radio' in the DECODER panel.":
        "Le poste est en %1 : dans les modes phonie l'audio de l'USB ne module pas. Appuyez sur « Régler le poste » dans le panneau DÉCODEUR.",

    "Cannot bind UDP port %1: %2": "Impossible de réserver le port UDP %1 : %2",
    "Cannot listen on UDP port %1: %2": "Impossible d'écouter sur le port UDP %1 : %2",
    "Cannot open a local UDP port: %1": "Impossible d'ouvrir un port UDP local : %1",
    "Cannot open the VITA-49 UDP socket: %1": "Impossible d'ouvrir la socket UDP VITA-49 : %1",
    "Cannot open the discovery socket: %1": "Impossible d'ouvrir la socket de découverte : %1",
    "Could not create the receive audio stream": "Impossible de créer le flux audio de réception",
    "Could not create the transmit audio stream": "Impossible de créer le flux audio d'émission",
    "The radio refused the client registration (code 0x%1)":
        "Le poste a refusé l'enregistrement du client (code 0x%1)",
    "The radio rejected the UDP port registration":
        "Le poste a rejeté l'enregistrement du port UDP",

    "No radio connected.":
        "Aucune radio connectée.",
    "The audio comes from a sound card: the radio is not\nunder our control. Change band with the dial.":
        "L'audio vient d'une carte son : la radio n'est pas sous\nnotre contrôle. Changez de bande avec le VFO.",
    "The serial port is held by another program, so the\nradio takes no commands. Close it and reconnect.":
        "Le port série est occupé par un autre programme, la radio\nn'accepte aucune commande. Fermez-le et reconnectez.",
    "%1 — RTTY at %2 MHz":
        "%1 — RTTY à %2 MHz",
    "Data on the upper sideband: the mode this\ndecoder is written for.":
        "Données en bande latérale supérieure : le mode pour lequel\nce décodeur est écrit.",
    "Data on the lower sideband. The tones come out\nreversed — REV puts them back.":
        "Données en bande latérale inférieure. Les tonalités sortent\ninversées — REV les remet à l'endroit.",
    "Voice sideband. RTTY is copied just the same,\nbut the radio's filter is wider than it needs.":
        "Bande latérale de la phonie. Le RTTY se copie pareil, mais\nle filtre de la radio est plus large que nécessaire.",
}
