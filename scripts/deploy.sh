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
rm -rf "$DIST"
mkdir -p "$DIST"
cp "$BUILD"/decortty.exe "$BUILD"/decortty-ft991.exe \
   "$BUILD"/decortty_wavtool.exe "$BUILD"/decortty_selftest.exe "$DIST"/

echo "== librerie Qt =="
( cd "$DIST" && windeployqt --qmldir "$ROOT/qml" --release \
    --no-translations --no-system-d3d-compiler --no-opengl-sw \
    decortty.exe >/dev/null )

echo "== moduli QML completi =="
# 18 MB in tutto: copiarli tutti costa meno che inseguire un sottomodulo alla
# volta ogni volta che l'interfaccia usa un controllo nuovo.
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
