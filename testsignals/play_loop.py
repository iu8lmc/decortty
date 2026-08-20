# Riproduce un WAV in loop su un dispositivo scelto per nome.
# Serve a dare lo stesso segnale a due decodificatori diversi.
import sys, wave, numpy as np, sounddevice as sd

path = sys.argv[1] if len(sys.argv) > 1 else "rtty_12dB.wav"
want = sys.argv[2] if len(sys.argv) > 2 else "CABLE Input"

dev = next(i for i, d in enumerate(sd.query_devices())
           if want.lower() in d["name"].lower() and d["max_output_channels"] > 0)
w = wave.open(path, "rb")
rate = w.getframerate()
x = np.frombuffer(w.readframes(w.getnframes()), dtype=np.int16).astype(np.float32) / 32768.0
w.close()

print("riproduco %s (%.1f s) su [%d] %s" % (path, len(x)/rate, dev, sd.query_devices()[dev]["name"]))
print("loop attivo — Ctrl-C per fermare")
sys.stdout.flush()
with sd.OutputStream(device=dev, samplerate=rate, channels=1, dtype="float32") as out:
    while True:
        out.write(x)
