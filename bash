cat <<'EOF' > Hari_Final.py
import os
import requests

def speak(text):
    os.system(f"termux-tts-speak '{text}'")

def main():
    print("\n--- HAI (Hari AI) MASTER SYSTEM ACTIVE ---")
    speak("System is online, Swami Ji. Please give me a command.")

    while True:
        # यह लाइन 'Input' का इंतज़ार करेगी और रट्टा मारना बंद करेगी
        cmd = input("\nआपकी आज्ञा, स्वामी जी: ").lower()

        if not cmd:
            continue
        
        if cmd in ['exit', 'बंद']:
            speak("System going to sleep. Jai Hari.")
            break

        # पहचान और टॉर्च कंट्रोल
        if "नाम" in cmd:
            ans = "मेरा नाम हाइ (Hari AI) है।"
        elif "light on" in cmd:
            os.system("termux-flashlight on")
            ans = "टॉर्च चालू कर दी गई है।"
        elif "light off" in cmd:
            os.system("termux-flashlight off")
            ans = "टॉर्च बंद कर दी गई है।"
        
        # ब्राउज़र सर्च इंजन (सीधा लिंक खोलना)
        else:
            ans = f"स्वामी जी, मैं आपके लिए '{cmd}' ब्राउज़र में खोज रहा हूँ।"
            search_url = f"https://www.google.com/search?q={cmd.replace(' ', '+')}"
            os.system(f"termux-open-url '{search_url}'")

        print("HAI:", ans)
        speak(ans)

if __name__ == "__main__":
    main()
EOF
