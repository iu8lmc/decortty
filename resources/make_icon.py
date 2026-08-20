# DecoRTTY — generatore dell'icona.
#
# Il simbolo e' il segnale stesso: due linee di tono, mark in alto e space in
# basso, e la traccia che salta fra loro come in un waterfall. E' cio' che
# l'operatore guarda per sintonizzare, quindi e' anche cio' che identifica il
# programma. Palette identica al resto della famiglia Decodium.
#
# Le taglie grandi sono disegnate in alta risoluzione e ridotte; 16 e 32 pixel
# hanno un disegno proprio, piu' semplice, perche' a quelle dimensioni una
# riduzione trasforma qualunque dettaglio in poltiglia grigia.

from PIL import Image, ImageDraw

BG_DEEP    = (10, 15, 26)
BG_MEDIUM  = (17, 24, 39)
PRIMARY    = (74, 144, 226)
SECONDARY  = (0, 212, 255)
ACCENT     = (0, 255, 136)

# Sequenza di bit disegnata: 1 = mark (linea alta), 0 = space (linea bassa).
# Quattro elementi soltanto: l'icona deve dire "due toni che si alternano", e a
# 32 pixel qualunque cosa piu' fitta diventa un pettine illeggibile.
BITS = [1, 0, 1, 0]


def rounded_panel(size, radius_frac=0.22):
    """Il pannello di vetro su cui poggia tutto, con il bordo della famiglia."""
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    r = int(size * radius_frac)

    # Gradiente verticale discreto, come lo sfondo dell'applicazione.
    for y in range(size):
        t = y / max(1, size - 1)
        c = tuple(int(BG_DEEP[i] + (BG_MEDIUM[i] - BG_DEEP[i]) * t) for i in range(3))
        d.line([(0, y), (size, y)], fill=c + (255,))

    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, size - 1, size - 1], radius=r, fill=255)
    img.putalpha(mask)

    d = ImageDraw.Draw(img)
    d.rounded_rectangle([0, 0, size - 1, size - 1], radius=r,
                        outline=PRIMARY + (150,), width=max(1, size // 48))
    return img


def draw_signal(img, simple=False):
    """Le due linee di tono e la traccia che le collega."""
    size = img.size[0]
    d = ImageDraw.Draw(img, "RGBA")

    margin = size * 0.20
    mark_y  = size * 0.36
    space_y = size * 0.64
    x0, x1  = margin, size - margin

    # Linee guida dei due toni: tenui, sono il riferimento non il soggetto.
    # Sotto i 32 pixel spariscono: a quella scala non si leggono come linee, si
    # leggono come sporcizia intorno al simbolo.
    if not simple:
        guide = max(1, int(size / 90))
        d.line([(x0, mark_y),  (x1, mark_y)],  fill=ACCENT + (70,),    width=guide)
        d.line([(x0, space_y), (x1, space_y)], fill=SECONDARY + (70,), width=guide)

    bits = BITS[:3] if simple else BITS
    n = len(bits)
    step = (x1 - x0) / n
    w = max(2, int(size / (11 if simple else 20)))

    # La traccia: tratti orizzontali sul tono, salti verticali alle transizioni.
    pts = []
    for i, b in enumerate(bits):
        y = mark_y if b else space_y
        pts.append((x0 + i * step, y))
        pts.append((x0 + (i + 1) * step, y))

    # Alone, per staccare la traccia dallo sfondo alle taglie piccole.
    if not simple:
        d.line(pts, fill=ACCENT + (55,), width=int(w * 2.6), joint="curve")
    d.line(pts, fill=ACCENT + (255,), width=w, joint="curve")

    # Pallini agli estremi dei due toni: leggono come "due frequenze" anche
    # quando la traccia diventa un tratto solo. Anche questi solo dove c'e'
    # spazio per distinguerli dal tratto.
    if not simple:
        r = max(1, int(size / 26))
        d.ellipse([x0 - r, mark_y - r, x0 + r, mark_y + r], fill=ACCENT + (255,))
        d.ellipse([x1 - r, space_y - r, x1 + r, space_y + r], fill=SECONDARY + (255,))
    return img


def build(size, simple=False):
    return draw_signal(rounded_panel(size), simple=simple)


def main():
    # 16 e 32 disegnati direttamente; il resto renderizzato in grande e ridotto.
    small = {16: build(16, simple=True), 32: build(32, simple=True)}
    big = build(1024)
    frames = []
    for s in (16, 24, 32, 48, 64, 128, 256):
        if s in small:
            frames.append(small[s])
        elif s == 24:
            frames.append(build(96, simple=True).resize((24, 24), Image.LANCZOS))
        else:
            frames.append(big.resize((s, s), Image.LANCZOS))

    frames[-1].save("decortty.ico", format="ICO",
                    sizes=[(f.size[0], f.size[1]) for f in frames],
                    append_images=frames[:-1])
    big.resize((256, 256), Image.LANCZOS).save("decortty.png")
    print("scritti decortty.ico (%s) e decortty.png"
          % ", ".join(str(f.size[0]) for f in frames))


if __name__ == "__main__":
    main()
