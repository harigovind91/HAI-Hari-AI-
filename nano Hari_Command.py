import os
import time

# आपकी गुप्त सुरक्षा चाबी
MASTER_KEY = "HARI_777" 

def speak(text):
    os.system(f"termux-tts-speak '{text}'")

def start_up():
    print("\n[!] ACCESS RESTRICTED: HAI ADMIN PANEL")
    speak("Master Security Key required to proceed")
    
    key = input("ENTER MASTER SECURITY KEY: ")
    
    if key == MASTER_KEY:
        print("\n[SUCCESS] IDENTITY VERIFIED.")
        speak("Welcome back, Swami Harigovind Singh Ji. All systems are at your command.")
        main_system()
    else:
        print("[ERROR] INVALID KEY. ALARM TRIGGERED!")
        speak("Intruder alert! Access denied.")
        # यहां आप चाहें तो अलार्म या फोटो खींचने का कमांड भी जोड़ सकते हैं

def main_system():
    print("------------------------------------")
    print("   HAI (Hari AI) - MASTER PANEL")
    print("   Status: SECURE & ONLINE")
    print("------------------------------------")
    
    while True:
        cmd = input("\nAwaiting Your Command: ").lower()
        
        if "light on" in cmd:
            os.system("termux-flashlight on")
            speak("Flashlight activated")
        elif "light off" in cmd:
            os.system("termux-flashlight off")
            speak("Flashlight deactivated")
        elif "status" in cmd:
            speak("Master, security is maximum and all satellites are linked.")
        elif "exit" in cmd:
            speak("Shutting down the core. Jai Hari.")
            break

if __name__ == "__main__":
    start_up()
