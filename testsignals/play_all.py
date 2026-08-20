# Manda lo stesso segnale su tutte le schede virtuali insieme: non serve sapere
# quale ascolta MMTTY, basta che una lo raggiunga. Le uscite fisiche e quelle
# che vanno alla radio sono escluse di proposito.
import sys, wave, threading, numpy as np, sounddevice as sd

TARGETS = ["CABLE Input", "CABLE In 16ch", "Line 1 (Virtual Audio Cable)",
           "Output (VB-Audio Point)", "Line Out (Virtual Cable 1)",
           "Altoparlanti (Sonic Studio Virtual Mixer)"]

w = wave.open("rtty_99dB.wav", "rb"); rate = w.getframerate()
x = (np.frombuffer(w.readframes(w.getnframes()), dtype=np.int16).astype(np.float32)/32768.0) * 0.25
w.close()

devs = sd.query_devices()
def run(name):
    try:
        i = next(k for k,d in enumerate(devs)
                 if name.lower() in d["name"].lower() and d["max_output_channels"] > 0)
    except StopIteration:
        print("  -- non trovato:", name); return
    try:
        with sd.OutputStream(device=i, samplerate=rate, channels=1, dtype="float32") as o:
            print("  ->", devs[i]["name"][:45]); sys.stdout.flush()
            while True:
                o.write(x)
    except Exception as e:
        print("  !! %s: %s" % (name[:25], str(e)[:50]))

for t in TARGETS:
    threading.Thread(target=run, args=(t,), daemon=True).start()
import time
time.sleep(3600)
