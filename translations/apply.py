# -*- coding: utf-8 -*-
"""Riversa un catalogo di traduzioni nei file .ts di Qt.

I .ts li genera lupdate dalle sorgenti, ma riempirli a mano in sedici lingue
significa aprire sedici file XML e cercare la stessa stringa in ognuno. Qui le
traduzioni stanno in un dizionario per lingua — un file Python leggibile, in cui
una frase si trova e si corregge in un secondo — e questo strumento le porta nel
formato che lrelease vuole.

    python translations/apply.py            tutte le lingue
    python translations/apply.py de fr      solo queste

Una traduzione mancante non viene inventata: la voce resta marcata "unfinished",
lrelease la lascia fuori dal catalogo compilato e a schermo compare la stringa
inglese. Meglio una parola in inglese in mezzo a una frase tradotta che una
parola sbagliata che sembra giusta.
"""
import io
import os
import sys
import xml.etree.ElementTree as ET

HERE = os.path.dirname(os.path.abspath(__file__))


def load_catalogue(code):
    """Il dizionario di una lingua, da catalogue_<code>.py."""
    path = os.path.join(HERE, 'catalogue_%s.py' % code)
    if not os.path.exists(path):
        return None
    namespace = {}
    source = io.open(path, encoding='utf-8').read()
    exec(compile(source, path, 'exec'), namespace)
    return namespace.get('TRANSLATIONS', {})


def apply_to(code):
    catalogue = load_catalogue(code)
    if catalogue is None:
        print('  %-6s nessun catalogo' % code)
        return

    ts_path = os.path.join(HERE, 'decortty_%s.ts' % code)
    if not os.path.exists(ts_path):
        print('  %-6s manca il file .ts (lanciare prima update_translations)' % code)
        return

    tree = ET.parse(ts_path)
    root = tree.getroot()
    done = missing = 0
    unknown = []

    for message in root.iter('message'):
        source = message.find('source')
        target = message.find('translation')
        if source is None or target is None or not source.text:
            continue

        text = catalogue.get(source.text)
        if text:
            # Il plurale ha piu' forme: si passa una lista, una per forma, e Qt
            # sceglie in base al numero. Il russo ne vuole tre, il giapponese una.
            if isinstance(text, (list, tuple)):
                for child in list(target):
                    target.remove(child)
                target.text = None
                for form in text:
                    numerus = ET.SubElement(target, 'numerusform')
                    numerus.text = form
            else:
                target.text = text
            if 'type' in target.attrib:
                del target.attrib['type']
            done += 1
        else:
            missing += 1

    for source_text in catalogue:
        found = any(m.find('source') is not None and m.find('source').text == source_text
                    for m in root.iter('message'))
        if not found:
            unknown.append(source_text)

    tree.write(ts_path, encoding='utf-8', xml_declaration=True)
    note = ''
    if missing:
        note += '  %d da fare' % missing
    if unknown:
        note += '  %d non piu\' nella sorgente' % len(unknown)
    print('  %-6s %3d tradotte%s' % (code, done, note))


def main():
    codes = sys.argv[1:]
    if not codes:
        codes = sorted(name[len('catalogue_'):-3]
                       for name in os.listdir(HERE)
                       if name.startswith('catalogue_') and name.endswith('.py'))
    print('Riverso le traduzioni:')
    for code in codes:
        apply_to(code)


if __name__ == '__main__':
    main()
