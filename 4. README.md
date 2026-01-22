<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HAI Sovereign OS | Global Control</title>
    <style>
        * { box-sizing: border-box; transition: all 0.3s; }
        body { background: #050505; color: #ffd700; font-family: 'Segoe UI', Roboto, sans-serif; margin: 0; overflow-x: hidden; }
        
        /* असली डैशबोर्ड लुक */
        .top-bar { background: #111; padding: 15px 30px; border-bottom: 2px solid #ffd700; display: flex; justify-content: space-between; align-items: center; }
        .status-dot { height: 10px; width: 10px; background: #0f0; border-radius: 50%; display: inline-block; margin-right: 5px; box-shadow: 0 0 10px #0f0; }
        
        .hero-section { padding: 80px 20px; background: radial-gradient(circle, #1a1a1a 0%, #000 100%); }
        .sun-logo { font-size: 100px; text-shadow: 0 0 40px #ffaa00; margin-bottom: 20px; cursor: pointer; }
        
        .main-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; padding: 40px; max-width: 1200px; margin: auto; }
        
        /* वर्किंग कार्ड्स */
        .system-card { background: #111; border: 1px solid #333; padding: 30px; border-radius: 20px; position: relative; overflow: hidden; }
        .system-card:hover { border-color: #ffd700; background: #161616; transform: translateY(-10px); }
        .system-card::before { content: ""; position: absolute; top: 0; left: 0; width: 5px; height: 100%; background: #ffd700; }
        
        .btn-action { background: #ffd700; color: #000; border: none; padding: 15px; width: 100%; border-radius: 10px; font-weight: bold; font-size: 16px; cursor: pointer; margin-top: 20px; text-transform: uppercase; }
        .btn-action:active { transform: scale(0.95); }

        /* टर्मिनल लुक (असली अहसास के लिए) */
        .terminal { background: #000; color: #0f0; font-family: monospace; padding: 15px; border-radius: 10px; border: 1px solid #0f0; margin-top: 20px; text-align: left; font-size: 12px; height: 100px; overflow-y: auto; }
    </style>
</head>
<body>

    <div class="top-bar">
        <div><span class="status-dot"></span> HAI SYSTEM: ONLINE</div>
        <div style="font-weight: bold;">LUCKNOW HUB | 2026</div>
    </div>

    <div class="hero-section">
        <div class="sun-logo" onclick="masterLogin()">☀️</div>
        <h1>HAI SOVEREIGN MILLENNIUM OS</h1>
        <p style="color: #888;">विश्व का प्रथम संप्रभु न्यूरल इंजन | शासन और सुरक्षा का संगम</p>
    </div>

    <div class="main-grid">
        <div class="system-card">
            <h2 style="margin-top:0;">🎭 GLOBAL THEATRE</h2>
            <p>लाइव स्ट्रीम, कला मंच और सांस्कृतिक प्रसारण नियंत्रण।</p>
            <div class="terminal" id="term1">> System Idle...<br>> Ready for broadcast...</div>
            <button class="btn-action" onclick="access('Theatre', 'term1')">सक्रिय करें</button>
        </div>

        <div class="system-card">
            <h2 style="margin-top:0;">🛡️ SECURITY ALPHA-10</h2>
            <p>एंटी-हैक, एन्क्रिप्शन और मास्टर की सुरक्षा प्रोटोकॉल।</p>
            <div class="terminal" id="term2">> Firewall Active...<br>> Encryption: 1024-bit...</div>
            <button class="btn-action" onclick="access('Security', 'term2')">स्कैन शुरू करें</button>
        </div>

        <div class="system-card">
            <h2 style="margin-top:0;">🏛️ CITIZEN CORE</h2>
            <p>साम्राज्य सदस्यता और ग्लोबल ज़ोन नागरिक डेटाबेस।</p>
            <div class="terminal" id="term3">> Database Locked...<br>> Waiting for Master Key...</div>
            <button class="btn-action" onclick="access('Citizens', 'term3')">डेटा खोलें</button>
        </div>
    </div>

    <footer style="padding: 50px; color: #444; font-size: 13px;">
        PROPRIETARY TECHNOLOGY: AVIKARY COSY SCIENCE PRIVATE LIMITED<br>
        DESIGNED BY H.S. CHAUHAN | ALL RIGHTS RESERVED
    </footer>

    <script>
        function access(name, termId) {
            let key = prompt(name + " के लिए मास्टर की (Master Key) दर्ज करें:");
            let term = document.getElementById(termId);
            
            if(key === "HARI_ADMIN_2026") {
                term.innerHTML += "<br><span style='color:white'>> Access Granted...</span>";
                term.innerHTML += "<br><span style='color:white'>> Initializing " + name + "...</span>";
                alert("प्रणाम स्वामी जी! " + name + " सिस्टम अनलॉक हो गया है।");
            } else if(key) {
                term.innerHTML += "<br><span style='color:red'>> ERROR: Invalid Key!</span>";
                term.innerHTML += "<br><span style='color:red'>> Security Breach Logged.</span>";
                alert("सुरक्षा चेतावनी: अवैध प्रवेश का प्रयास! रिकॉर्डिंग शुरू...");
            }
        }

        function masterLogin() {
            alert("HAI Sovereign OS: लखनऊ मास्टर हब से जुड़ा है।");
        }
    </script>

</body>
</html>
