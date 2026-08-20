#!/usr/bin/env python3
"""Toglie dalla cartella distribuita le librerie che nessuno usa.

windeployqt è generoso: copia le dipendenze di ogni plugin che potrebbe servire,
e per Qt Multimedia questo vuol dire il back end ffmpeg con i suoi codec video —
avcodec, libx265, libaom. Centotrenta megabyte per decodificare filmati, in un
programma che tratta soltanto campioni PCM. QAudioSource e QAudioSink non passano
di lì: sono scritti sulle API native e funzionano anche senza alcun back end.

Cancellarle per nome sarebbe un elenco da aggiornare a ogni versione di Qt, con
il rischio di portare via per sbaglio qualcosa che serve — libopus, per dire, che
alla trasmissione FlexRadio serve eccome. Qui invece si parte dagli eseguibili e
dai plugin, si risale il grafo delle dipendenze, e si toglie ciò che non è
raggiungibile da nessuno.

    python scripts/prune_dlls.py dist
"""
import os
import re
import subprocess
import sys


def dependencies(path):
    """Le DLL che questo binario nomina, per nome semplice."""
    try:
        out = subprocess.run(['ldd', path], capture_output=True, text=True,
                             timeout=30).stdout
    except (OSError, subprocess.SubprocessError):
        return []
    names = []
    for match in re.finditer(r'=>\s*(\S+\.dll)', out, re.IGNORECASE):
        names.append(os.path.basename(match.group(1)).lower())
    return names


def main():
    dist = sys.argv[1] if len(sys.argv) > 1 else 'dist'
    if not os.path.isdir(dist):
        print('non trovo %s' % dist)
        return 1

    # I punti di partenza: gli eseguibili, e i plugin — che nessuno nomina,
    # perché li carica Qt a runtime leggendo le cartelle.
    roots = []
    for base, dirs, files in os.walk(dist):
        for name in files:
            path = os.path.join(base, name)
            if name.lower().endswith('.exe'):
                roots.append(path)
            elif name.lower().endswith('.dll') and os.path.dirname(path) != dist:
                roots.append(path)

    # Dove sta ogni libreria della cartella principale.
    top = {}
    for name in os.listdir(dist):
        if name.lower().endswith('.dll'):
            top[name.lower()] = os.path.join(dist, name)

    needed = set()
    frontier = list(roots)
    while frontier:
        path = frontier.pop()
        key = os.path.basename(path).lower()
        if key in needed:
            continue
        needed.add(key)
        for dep in dependencies(path):
            if dep not in needed and dep in top:
                frontier.append(top[dep])

    removed = 0
    freed = 0
    for key, path in sorted(top.items()):
        if key in needed:
            continue
        freed += os.path.getsize(path)
        os.remove(path)
        removed += 1

    print('  %d librerie tolte, %d MB liberati' % (removed, freed // (1024 * 1024)))
    return 0


if __name__ == '__main__':
    sys.exit(main())
