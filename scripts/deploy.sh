#!/usr/bin/env bash
# DecoRTTY — crea una cartella autonoma, avviabile con doppio clic.
#
# Tre cose che windeployqt da solo non fa, e senza le quali il programma parte
# solo da una shell MSYS2 col PATH giusto:
#   * le librerie del compilatore MinGW e le dipendenze di terze parti
#     (Opus, ICU, HarfBuzz, glib…), risolte qui in modo ricorsivo perché anche
#     le DLL copiate ne hanno di proprie — plugin QML annidati compresi;
#   * l'albero completo dei moduli QML, perché l'analisi statica degli import
#     salta regolarmente qualche sottomodulo (QtQuick.Controls.impl fra tutti);
#   * un qt.conf, senza il quale Qt cerca plugin e moduli dove era installato
#     al momento della compilazione.
set -e

MINGW=${MINGW:-/c/msys64/mingw64}
ROOT=$(cd "$(dirname "$0")/.." && pwd)
BUILD=${BUILD:-$ROOT/build}
DIST=${DIST:-$ROOT/dist}

export PATH="$MINGW/bin:$PATH"

echo "== build =="
cmake --build "$BUILD"

echo "== cartella $DIST =="
# Si svuota la cartella invece di rimuoverla. Su Windows basta una shell aperta
# li' dentro perche' la rimozione fallisca, e quel che resta e' una cartella
# vuota e uno script che ha detto di aver finito: la volta dopo si distribuisce
# il nulla senza accorgersene.
mkdir -p "$DIST"
find "$DIST" -mindepth 1 -maxdepth 1 -exec rm -rf {} + 2>/dev/null || true
cp "$BUILD"/decortty.exe "$BUILD"/decortty-ft991.exe \
   "$BUILD"/decortty_wavtool.exe "$BUILD"/decortty_selftest.exe "$DIST"/

echo "== librerie Qt =="
( cd "$DIST" && windeployqt --qmldir "$ROOT/qml" --release \
    --no-translations --no-system-d3d-compiler --no-opengl-sw \
    decortty.exe >/dev/null )

echo "== moduli QML completi =="
# 18 MB in tutto: copiarli tutti costa meno che inseguire un sottomodulo alla
# volta ogni volta che l'interfaccia usa un controllo nuovo.
# I cataloghi tradotti. windeployqt viene lanciato con --no-translations perche'
# copierebbe l'intero corredo di Qt in tutte le lingue esistenti — decine di
# megabyte di stringhe di dialoghi che a noi non servono. Qui si prendono i
# nostri, piu' i qtbase delle sole lingue che il programma parla: sono quelli che
# traducono i menu contestuali dei campi di testo.
echo "== traduzioni =="
mkdir -p "$DIST/translations"
cp "$BUILD"/*.qm "$DIST/translations/" 2>/dev/null || true
for lang in it de fr es pt nl ca da hu ro lv ru ja zh zh_TW; do
    for cat in qtbase qt; do
        src="$MINGW/share/qt6/translations/${cat}_${lang}.qm"
        [ -f "$src" ] && cp "$src" "$DIST/translations/"
    done
done
echo "  $(ls "$DIST/translations" | wc -l) cataloghi"

rm -rf "$DIST/qml"
cp -r "$MINGW/share/qt6/qml" "$DIST/qml"
# Il modulo dell'applicazione è compilato dentro l'eseguibile; gli strumenti per
# Qt Designer non servono a chi usa il programma.
rm -rf "$DIST/qml/DecoRTTY" "$DIST/qml/QtQuick/Controls/designer"

cat > "$DIST/qt.conf" <<'EOF'
[Paths]
Prefix = .
Plugins = .
Imports = qml
Qml2Imports = qml
EOF

echo "== dipendenze, ricorsivamente =="
added=1
round=0
while [ "$added" -gt 0 ] && [ "$round" -lt 10 ]; do
    added=0
    round=$((round + 1))
    # Ogni binario sotto dist, a qualunque profondità: i plugin QML stanno in
    # qml/QtQuick/Controls/Basic/impl/ e hanno le loro dipendenze come gli altri.
    while read -r f; do
        while read -r dep; do
            [ -n "$dep" ] || continue
            base=$(basename "$dep")
            if [ ! -f "$DIST/$base" ]; then
                cp "$dep" "$DIST/"
                echo "  + $base"
                added=$((added + 1))
            fi
        done < <(ldd "$f" 2>/dev/null | grep -oiE "$MINGW/bin/[^ ]+\.dll")
    done < <(find "$DIST" -type f \( -name "*.dll" -o -name "*.exe" \))
done

echo "== segnali di prova =="
mkdir -p "$DIST/testsignals"
cp "$ROOT"/testsignals/rtty_*.wav "$DIST/testsignals/" 2>/dev/null || true

echo
echo "pronto: $DIST"
echo "  decortty.exe        — l'applicazione"
echo "  decortty-ft991.exe  — il gateway per l'FT-991A"
du -sh "$DIST"
