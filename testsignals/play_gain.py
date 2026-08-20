# Come play_loop, ma con guadagno regolabile: un ingresso saturo fa decodificare
# male qualunque programma, quindi il livello e' parte del test.
import sys, wave, numpy as np, sounddevice as sd
path = sys.argv[1]; want = sys.argv[2]; gain = float(sys.argv[3])
dev = next(i for i,d in enumerate(sd.query_devices())
           if want.lower() in d["name"].lower() and d["max_output_channels"] > 0)
w = wave.open(path,"rb"); rate=w.getframerate()
x = (np.frombuffer(w.readframes(w.getnframes()),dtype=np.int16).astype(np.float32)/32768.0)*gain
w.close()
print("%s  gain %.2f  picco %.3f  ->  [%d] %s" % (path, gain, np.abs(x).max(), dev, sd.query_devices()[dev]["name"]))
sys.stdout.flush()
with sd.OutputStream(device=dev, samplerate=rate, channels=1, dtype="float32") as out:
    while True:
        out.write(x)
