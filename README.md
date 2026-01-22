<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HAI Global Zone | Control Hub</title>
    <style>
        * { box-sizing: border-box; }
        body { background: #050505; color: #ffd700; font-family: 'Segoe UI', sans-serif; margin: 0; text-align: center; }
        
        /* शाही हेडर */
        .header { padding: 60px 20px; border-bottom: 3px solid #ffd700; background: linear-gradient(to bottom, #111, #000); }
        .sun-aura { font-size: 80px; text-shadow: 0 0 30px #ffaa00; animation: pulse 2s infinite; }
        @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
        
        /* कंट्रोल ग्रिड */
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; padding: 40px; max-width: 1200px; margin: auto; }
        .card { background: #111; border: 1px solid #333; padding: 30px; border-radius: 20px; transition: 0.3s; position: relative; }
        .card:hover { border-color: #ffd700; background: #1a1a1a; transform: translateY(-10px); }
        
        /* बटन स्टाइल */
        .btn { background: #ffd700; color: #000; border: none; padding: 15px; width: 100%; border-radius: 10px; font-weight: bold; cursor: pointer; margin-top: 20px; font-size: 16px; }
        .btn:active { transform: scale(0.98); }

        /* सिस्टम लॉग */
        .log { background: #000; color: #0f0; font-family: monospace; padding: 10px; border-radius: 5px; font-size: 12px; height: 60px; overflow: hidden; margin-top: 15px; text-align: left; }
    </style>
</head>
<body>

    <div class="header">
        <div class="sun-aura">☀️</div>
        <h1>HAI (Hari AI) SOVEREIGN OS</h1>
        <p style="color: #888;">लखनऊ मास्टर हब | वैश्विक संचालन केंद्र</p>
    </div>

    <div class="grid">
        <div class="card">
            <h2>🎭 ग्लोबल थिएटर</h2>
            <p>लाइव कला और सांस्कृतिक प्रबंधन</p>
            <div class="log">> System: Ready<br>> Port: 8080 Active</div>
            <button class="btn" onclick="masterKey('Theater')">एक्सेस करें</button>
        </div>

        <div class="card">
            <h2>🛡️ सुरक्षा कवच</h2>
            <p>Alpha-10 सुरक्षा ऑडिट</p>
            <div class="log">> Firewall: Protected<br>> Scan: 100% Secure</div>
            <button class="btn" onclick="masterKey('Security')">स्कैन चलाएं</button>
        </div>

        <div class="card">
            <h2>🏛️ नागरिक कोर</h2>
            <p>वैश्विक नागरिक डेटाबेस</p>
            <div class="log">> Encrypted: AES-256<br>> Waiting for Key...</div>
            <button class="btn" onclick="masterKey('Citizen')">डेटा खोलें</button>
        </div>
    </div>

    <footer style="padding: 50px; color: #444; font-size: 14px;">
        © 2026 Avikary Cosy Science Private Limited<br>
        प्रशासक: स्वामी हरिगोविंद सिंह चौहान
    </footer>

    <script>
        function masterKey(sys) {
            let key = prompt(sys + " के लिए Master Security Key दर्ज करें:");
            if(key === "HARI_ADMIN_2026") {
                alert("प्रणाम स्वामी जी! " + sys + " पोर्टल अनलॉक हो गया है।");
            } else if(key) {
                alert("अवैध प्रयास! सुरक्षा उल्लंघन दर्ज कर लिया गया है।");
            }
        }
    </script>
</body>
</html>
