# DecoRTTY

Modern RTTY over VITA-49 — for FlexRadio directly, and for a Yaesu FT-991A
through a gateway that puts it on the network.

No DAX. No CAT port. No virtual audio cable. Audio arrives as VITA-49 packets
over UDP and control goes over the SmartSDR API on TCP 4992 — the same
transport the vendor's own client uses. Install it, start it, click the radio.

Visually and behaviourally it is part of the Decodium family: same palette, same
glass panels, same instrument-panel approach to putting the information where
the operator is already looking.

---

## What it does

**Receive**
- Matched-filter FSK demodulator with per-bit log-likelihood output
- Automatic frequency control that tracks tone drift within ±75 Hz
- Timing recovery that follows the far end's clock, not the nominal baud rate
- Soft-decision Baudot decoder: a Viterbi search over shift state and a
  character-bigram model of real RTTY traffic
- Tone-separation squelch, so band noise does not fill the window with garbage
- Waterfall, live spectrum trace and the classic crossed-ellipse tuning scope
- Confidence shading — a marginal copy looks marginal

**Transmit**
- Phase-continuous AFSK, so the transmitted signal stays narrow
- Macros with QSO substitution (`%MYCALL%`, `%HISCALL%`, `%RST%`, `%SERIAL%`, …)
  on F1–F8
- Type-ahead buffer with a visible queue depth
- PTT over the radio's API — no serial port, no RTS/DTR line
- LTRS diddle between characters, and a drain-before-unkey stop

**Anti-QRM**
- Notch piazzabile con Ctrl+clic sul waterfall — sulla portante che disturba,
  senza cercarne la frequenza. Misurato: errore di carattere da 0.92 a **0.000**
  con una portante fra i due toni.
- Cancellatore adattivo LMS, che la portante se la trova da solo: da 0.92 a
  **0.032**. Il ritardo di decorrelazione è tarato su misura — a mezzo bit il
  filtro cancellava anche il RTTY.
- Passa-banda regolabile. Nei test **non ha mostrato vantaggi**: i filtri
  adattati sono già così selettivi che un disturbo fuori banda non li tocca.
  Resta disponibile, ma non è la ragione per cui questo decoder funziona.

**Parametri di trama**
- Stop 1 / 1.5 / 2, dati a 5 / 7 / 8 bit, parità pari o dispari, set figure
  US o ITA2 — per le stazioni che non seguono lo standard amatoriale
- Stampa anche i caratteri con framing errato, quando si preferisce qualche
  carattere in più a qualche riga pulita in meno

**Log**
- Registro dei collegamenti con export ADIF, riscritto a ogni riga
- Avviso di duplicato con data dell'ultimo collegamento
- Nominativi evidenziati nel testo ricevuto: un clic li porta nel campo del
  corrispondente
- Ctrl+L apre il log senza lasciare la tastiera

**Radio**
- Discovery by listening to the radio's UDP broadcast
- Manual address entry for a routed or VPN connection
- Follows slice frequency, mode and filter, and can set the slice up for RTTY
  in one click (DIGU plus a filter around the tones)
- MultiFlex-aware: it will share a radio another client already has open

---

## Using an FT-991A

An FT-991A has no network interface: over USB it presents a sound card and two
CP2105 serial ports, and it has never heard of VITA-49. `decortty-ft991` bridges
that. It reads the codec and the CAT port, and publishes the radio on the network
as a VITA-49 device — discovery beacon, signal-data packets for the audio,
context packets for the dial state, command packets for control. DecoRTTY then
treats it exactly like a FlexRadio, and so could any other client that speaks the
same packets.

The practical gain over talking to the sound card directly is that the radio
stops being tied to the PC it is plugged into: run the gateway on the shack
machine, run DecoRTTY anywhere on the network.

On the usual setup — radio and operator on the same PC — there is nothing to
start. DecoRTTY opens the gateway when it opens and closes it when it closes,
and connects to it by itself; **Radio… → regola** is where the CAT port and the
two audio devices are chosen, and **attivo** turns the whole arrangement off for
anyone whose radio lives on another machine.

Three rules keep that convenience from becoming a hazard:

- **If a gateway is already announcing itself, no second one is started.** Two
  gateways on one radio fight over the CAT port and the sound card, and the
  client connects to whichever answered first without saying so.
- **Only the gateway DecoRTTY started gets closed** — and only if nobody else is
  using it. A second DecoRTTY may have connected to it in the meantime; closing
  then would take the radio away from an operator mid-QSO. So on the way out the
  client says goodbye, the gateway waits to see who is still calling in, and if
  anyone is it stays up, unhooks itself from whoever started it, and exits when
  the last client leaves. A gateway launched by hand is left alone throughout.
- **The gateway is told the PID that started it and exits if that process
  disappears.** This is the case that matters: a gateway orphaned by a crash
  would otherwise sit there with PTT still asserted.

Run it by hand when the radio is on a different machine:

```sh
# on the PC the radio is plugged into
./build/decortty-ft991 --cat-port COM5 --name "IU8LMC FT-991A" --callsign IU8LMC

# see what the audio devices and serial ports are actually called
./build/decortty-ft991 --list-devices
```

Defaults are the FT-991A's own: CAT at 38400 baud 8N2 on the **Enhanced** CP2105
port (the Standard one is the PTT line and is not used — PTT goes over CAT), and
`USB Audio CODEC` for capture and playback.

Then start DecoRTTY, open **Radio…**, and pick the entry badged *gateway*.

Notes that matter in practice:

- **The CAT port takes one program at a time.** If Decodium, WSJT-X or a logger
  already has COM5 open, the gateway reports `Access denied` and carries on in
  receive only — audio works, tuning and PTT do not. Close the other program
  first, or run with `--no-cat`.
- **AFSK, not FSK.** Over USB the transmit path is audio into DATA-USB, which is
  what `applyRttyProfile` selects. True FSK needs the radio's hardware keying
  line, which USB does not drive.
- The gateway sends audio only to clients it has heard from in the last twelve
  seconds, and drops PTT if the last client disappears — a client that crashes
  mid-transmission cannot leave the transmitter keyed.

### What the gateway speaks

| Direction | VITA 49.2 packet | Carries |
|---|---|---|
| beacon → | ExtData, class `0x0001` | discovery, ASCII key=value |
| gateway → client | ExtData, class `0x03E3` | audio, float32 stereo BE 24 kHz |
| gateway → client | IF Context (type 4) | CIF0: RF frequency, bandwidth, sample rate, reference level, state |
| client → gateway | Command (type 6) | CIF0 tune/bandwidth + vendor mode and PTT |
| client → gateway | ExtData, class `0x03E3` | transmit audio |

The CIF0 fields are the standard ones, in standard bit order. Transmit state
rides in the user-defined region of the State and Event Indicator, which is what
that region is for. An amateur transceiver's operating mode has no field in the
standard, so it travels as a vendor extension under DecoRTTY's own class ID
(`0x00DEC0`, locally administered — not an IEEE assignment) rather than being
smuggled into a standard field with a private meaning. The command format is a
deliberate subset of VITA 49.2's, not the whole thing.

---

## Requirements

- Qt 6.5 or newer (Quick, Network, QuickControls2, Multimedia, SerialPort)
- A C++20 compiler
- libopus — **required for transmit**. Without it DecoRTTY still receives, and
  says so at configure time. The radio enforces Opus on client transmit audio.

Built and tested here with MSYS2 MinGW64: Qt 6.11.0, GCC 15.2, CMake 4.3, Ninja.

## Building

```sh
cmake -S . -B build -G Ninja -DCMAKE_BUILD_TYPE=Release
cmake --build build
./build/decortty
```

The first run needs Windows Firewall to allow inbound UDP, or no radio will ever
appear: discovery works by *listening* to broadcasts on port 4992.


## Installing

Download `DecoRTTY-x.y.z-setup.exe` from the
[releases page](https://github.com/iu8lmc/decortty/releases) and run it. Nothing
else is needed — no Qt to obtain, no PATH to set up.

It does not ask for administrator rights. By default it installs into the user's
own folder; anyone who wants it in Program Files for every account can say so on
the first page. A program that reads a sound card and a serial port has no
business being handed the keys to the machine.

Uninstalling leaves the **contact log and the settings alone**. An ADIF log is
years of evenings, and an uninstaller that carries it off because it is "tidying
up" does damage no convenience repays.

Windows will show a SmartScreen warning: the installer is not signed with a
commercial certificate. **More info → Run anyway.**

Building the installer, from a checkout with Inno Setup 6 present:

```sh
bash scripts/deploy.sh
"C:/Program Files (x86)/Inno Setup 6/ISCC.exe" packaging/decortty.iss
```

The script builds from `dist/`, so a stale `dist/` ships a stale program without
saying anything — run the deploy first, every time.


## Deploying

`scripts/deploy.sh` builds a folder that runs anywhere, with no MSYS2 shell and
no PATH set up:

```sh
bash scripts/deploy.sh      # writes dist/
```

Double-click `dist/decortty.exe`: it starts `dist/decortty-ft991.exe` beside it
and shuts it down again on the way out. Run the gateway by hand only when the
radio is plugged into a different PC.

Three things the script does that `windeployqt` alone does not, each of which
otherwise produces a program that starts only on the machine it was built on:
it resolves the MinGW and third-party DLLs recursively (including the ones
nested plugins need), copies the whole QML module tree rather than trusting the
import scan, and writes a `qt.conf` so Qt looks for its plugins beside the
executable instead of where it was installed.

## Finding the signal

AFC answers one question — *how far has the signal I am already copying
drifted?* — and answers it within a few tens of hertz. Auto-centring answers a
different one: *where is the signal?* Widening the AFC window until the whole
voice band fits inside it looks like the obvious shortcut, and is a trap: a
carrier drifting past would then steal the tuning away from a transmission in
progress.

So the search runs only while nothing is being copied, and stops the moment the
decoder locks. An operator reading a QSO is never moved.

Two controls sit above the spectrum:

- **CENTRA** — search once, now. What a knob would do, in one press.
- **AUTO** — search whenever nothing is being copied, and try the other polarity
  as well. Mark and space are just two tones: no amount of spectrum analysis can
  say which is which, because the difference is in the meaning, not in the
  signal. The only way to find out is to decode one way and, if nothing comes
  out, decode the other.

The scoring is what keeps it honest. A pair is scored by its **weaker** tone, not
by the sum of both: with the sum, a lone carrier wins every time simply by being
twice the noise, whereas here there must be energy in both places at once —
which is what an FSK signal looks like and a carrier does not. On top of that the
weaker tone must clear the band's median by 6 dB, and the two tones must be
within 10 dB of each other.

Measured, with a signal at 14 dB SNR and the receiver deliberately mistuned:

| situation | lands on | polarity | result |
|---|---|---|---|
| already centred | 2125 Hz | direct | 6 copies, **0 interventions** |
| signal 680 Hz lower | 1447 Hz | direct | 5 copies, locked at 4.2 s |
| signal one shift away | 2297 Hz | direct | 5 copies, locked at 4.2 s |
| signal low in the band | 1277 Hz | direct | 5 copies, locked at 4.2 s |
| polarity reversed | 2125 Hz | **reversed** | 5 copies, locked at 4.5 s |
| mistuned *and* reversed | 1442 Hz | **reversed** | 4 copies, locked at 6.5 s |
| the same, auto off | 2125 Hz | direct | **silent** |

The last row is the one that says whether any of this is worth having.

And the other half of the problem — how readily it moves when there is nothing to
find. Over 90 seconds of band with no RTTY in it:

| band contains | unwarranted moves |
|---|---|
| noise alone | 0 |
| a strong carrier | 0 |
| a weak carrier | 0 |

Verified on the running program as well, not only in the self-test: with the
receiver on 2125 Hz and a signal injected at 1445 Hz, the display walked to
**mark 1453 Hz** and printed the text without an error; with a reversed signal at
1955 Hz it moved to **1958 Hz** and lit **REV** by itself.

`decortty_inject` is what puts a known signal on a virtual audio cable for tests
like these — ordinary players only reach the system's default device, and
changing that to run a test interferes with everything else the operator is doing:

```sh
./build/decortty_inject --device "CABLE Input" --loop testsignals/offtune.wav
./build/decortty_wavtool gen testsignals/offtune.wav 14 "CQ DE DL0TST K" mark=1445
```

## Where the decoder actually stands

Everything above is measured in white noise, and white noise is not the band.
What kills RTTY on HF is not noise but multipath: two paths arriving a couple of
milliseconds apart add with different phase at every frequency, and with the
tones 170 Hz apart it happens constantly that one is in phase and the other in
opposition. A decoder can be excellent in AWGN and fall apart there.

`tools/hfchannel.h` puts a Watterson channel in the test bench — two independent
paths with slowly varying complex gain, at the three conditions CCIR report 520
standardised. The numbers, as character error rate:

| condition | 18 dB | 12 dB | 6 dB |
|---|---|---|---|
| one path (flat fading) | 0.038 | 0.091 | 0.392 |
| CCIR good (0.5 ms, 0.1 Hz) | 0.048 | 0.151 | 0.360 |
| CCIR moderate (1 ms, 0.5 Hz) | 0.070 | 0.124 | 0.344 |
| CCIR poor (2 ms, 1 Hz) | 0.167 | 0.231 | 0.398 |

Compare that with the AWGN row: **zero errors at 6 dB**. Flat fading at 18 dB
already costs 4% of the characters. That gap, not the noise figure, is where the
remaining work is.

Asking which stage loses them (CCIR moderate, 12 dB):

| | CER |
|---|---|
| as it stands | 0.124 |
| squelch off | 0.210 |
| quality gate off | 0.134 |
| deep search, 10 characters | 0.124 |

Two things fall out of that. The squelch **helps** — without it the decoder
prints noise through the fades rather than staying quiet. And a deeper Viterbi
search buys nothing at all, which says the errors arrive in bursts: a character
bigram model cannot bridge a ten-character hole, however deep you let it look.

### Where the margin is not

With the channel simulator in place, every parameter of the decoder was swept
against it. `decortty_selftest hf` runs the channel table alone and prints one
summed figure, so a change can be judged in ten seconds. The baseline is
**2.265**.

| parameter | values tried | best | current |
|---|---|---|---|
| timing flywheel | 16 / 64 / 200 slots | all identical | 64 |
| noise-reference time constant | 0.0002 / 0.0008 / 0.003 / 0.010 | 0.0008 | 0.0008 |
| language model weight | 0.30 / 0.55 / 1.00 / 1.80 | 0.55 | 0.55 |
| character quality threshold | 0.00 … 0.60 | 0.45 | 0.45 |

Every one of them already sits at its optimum, and the flywheel never comes into
play at all. **The remaining margin is not in the tuning.** That is worth knowing
before anyone spends an evening turning knobs.

### What was tried and did not work

Automatic threshold correction, which every historical RTTY decoder has and this
one does not. Implemented twice and measured on the channel above: levelling the
two tones to the stronger scored 0.145 against a baseline of 0.124; subtracting
the long-term imbalance scored 0.161. Both worse.

The reason is worth keeping. ATC exists for detectors that decide against a hard
threshold — this one has none. It divides by the noise floor, which tracks the
weaker tone, so when a tone fades the ratio drops on its own and the detector
becomes uncertain rather than confidently wrong. Uncertainty is the correct
information to hand the Viterbi search, and ATC was throwing it away.

**Recombining the operator's own repetitions.** Nobody sends `CQ DE IU8LMC K` —
they send `CQ CQ CQ DE IU8LMC IU8LMC IU8LMC K`. Eighty years of practice have
built a repetition code into the human protocol, and every decoder treats it as
plain text: three mangled copies printed side by side, and the eye left to merge
them. So they were merged instead — aligned, and at each position the copy the
detector had received with more confidence wins.

It gains nothing: 0.086 against 0.087 on a realistic call, 4 to 6 repairs across
twelve runs. The reason is physical and should have been obvious first. A fade at
0.5 Hz Doppler spread stays correlated for a second or two; `CQ CQ CQ` takes less
than that. **The three copies fall inside the same fade**, so there is no time
diversity to harvest. Adjacent repetition cannot help; only repetition separated
by more than the channel's coherence time could, and by then the operator has
read the line anyway.

The idea is not wrong — it is right for a channel with faster fading, or for
copies minutes apart. It is wrong here, and the measurement said so before it
shipped.

**Character confidence as a product rather than a mean.** A character is right
only if all five bits are, so the confidence should be the product of the bit
probabilities, not their average. As a *measurement* this is plainly better: it
separates correct characters from wrong ones by 0.50 where the mean manages 0.14.
As a *decision* it is worse — the threshold for printing a character is calibrated
on that scale, and on the product scale no value works: at zero the spurious
end-of-transmission frames get through, above zero good characters are discarded
long before bad ones. At 20 dB the mean gives no errors at all; the product gives
0.011.

So both are kept, for the two different questions. `quality()` decides whether a
character is printed. `certainty()` decides how confident it should *look*: it is
what drives the fading of uncertain text in the receive window, where a shade
that means something beats a shade that means nothing.

## Self-test

The DSP chain can be exercised without a radio. `decortty_selftest` modulates a
known text, adds calibrated noise, and runs the full receive chain, reporting
the character error rate:

```sh
./build/decortty_selftest
./build/decortty_selftest "CQ TEST DE IU8LMC K"
```

Current figures (SNR measured in the 260 Hz receiver bandwidth, so subtract
about 10 dB to compare against a 2.5 kHz SSB channel):

| SNR | character error rate |
|-----|----------------------|
| 20 dB | 0.000 |
| 12 dB | 0.005 |
| 6 dB | 0.005 |
| 3 dB | 0.13 |

Run it after any change to the demodulator. It is the honest measure; a decode
that "looks fine" on a strong signal proves very little.

---

## Measured against MMTTY

MMTTY is the reference RTTY decoder, and the comparison was run properly: the
same audio, through the same sound card, into both programs. The test signal is
generated by DecoRTTY's own modulator, played out of a virtual cable, and picked
up from the other end — so the recording our decoder reads is byte-identical to
what MMTTY heard.

**MMTTY reads our transmitter cleanly**, which is the more important half: it
means the signal DecoRTTY puts on the air is standard-conforming, not merely
self-consistent.

Same audio, same moment, receive comparison:

| SNR | DecoRTTY | MMTTY 1.70 (IIR, BW 60) |
|-----|----------|-------------------------|
| clean | `CQ CQ CQ DE IU8LMC … 1234567890 DE IU8LMC` | identical |
| 6 dB | **no errors** | `QUIIK`, `C BE`, `KHTHE`, and `DE IU8LMC` printed as `$3 878LMC` |
| 3 dB | `CQ CQ CQ DE U8LMC IU8LMC U8LMC PE K THE QUNCK ROWN FOX 123456790` — readable | largely unreadable |

The recurring `$3 878LMC` is `DE IU8LMC` printed in the figures case: MMTTY loses
the LTRS/FIGS shift and does not recover it. That failure is exactly what the
soft-decision stage here is for — the shift is part of the trellis state, so a
corrupted shift character is reconsidered rather than propagated.

Fair-comparison caveats, because a benchmark without them is worth little:

- MMTTY was run in the operator's existing configuration (IIR discriminator,
  BW 60, ATC and LMS off). Its other demodulators and filters were not tried,
  and a tuned setup would do better than this.
- The channel is additive white noise. Real bands bring fading, QRM and
  carriers, where the ranking can change.
- Both were given the same recording, but MMTTY's input level was whatever the
  cable delivered rather than optimised.

Reproduce it with `tools/wavtool` — `gen` writes the files, `decode` reads them,
and `rev` swaps the tone polarity when the other program has locked the opposite
sense.

---

## How the radio connection works

```
                    ┌──────────────── TCP 4992 ────────────────┐
                    │  client gui / sub slice / xmit / stream  │
   FlexRadio        │  create …                                │      DecoRTTY
   6000 series ─────┤                                          ├───── FlexApiClient
                    │                                          │
                    └──────────────── UDP (VITA-49) ───────────┘
                       remote_audio_rx  → float32 stereo 24 kHz → decoder
                       remote_audio_tx  ← Opus 10 ms frames     ← modulator
                       meter            → S-meter
```

On connect DecoRTTY registers a UDP port with `client udpport`, then asks for a
`remote_audio_rx` stream and (if Opus is available) a `remote_audio_tx` stream.
Everything after that is VITA-49 packets on that one socket.

The packet parser follows ANSI/VITA 49.2 properly — header word, then the
optional fields it advertises, in order — rather than assuming a fixed 28-byte
prefix. FlexRadio's own streams are identified by the packet class code inside
the class ID: `0x03E3` uncompressed audio, `0x8005` Opus, `0x8002` meters.

---

## Layout

```
src/dsp/     demodulator, Baudot, Viterbi, modulator, FFT — no Qt, unit-testable
src/vita/    VITA 49.2 context and command packets (CIF0)
src/flex/    FlexRadio: discovery, TCP API client, VITA-49 data plane, Opus
src/link/    RadioLink abstraction, gateway client, and the hub the UI binds to
src/gateway/ FT-991A side: CAT, USB codec, VITA-49 server
src/app/     engine, receive-text and macro models, waterfall item, theme
qml/         the interface
tools/       the self-test and the gateway executable
```

`src/dsp` deliberately has no Qt dependency: it is the part worth testing on its
own, and it should stay reusable.

---

## Known limits

- **The FlexRadio path is untested against real hardware.** It is implemented
  against the documented wire format and a known-good reference implementation,
  but no FlexRadio was on the network here. The FT-991A gateway path *has* been
  run end to end against a real radio: audio arrives, and the packet timing
  measures exactly real-time (301 packets carrying 3.01 s of audio in 3.0 s).
- **The gateway's transmit path is untested on the air.** Receive is proven;
  transmit could not be verified because the CAT port was held by another
  program during testing, so PTT never keyed. Check into a quiet frequency, or a
  dummy load, the first time.
- The Viterbi stage currently earns little over hard decisions in the self-test.
  The dominant error at low SNR is lost characters, not flipped bits, and
  character-level context cannot recover those. Worth revisiting with a longer
  trellis that models the frame timing itself.
- Receive is single-channel: one signal at a time, the one under the markers.
- No logging or ADIF export yet.
