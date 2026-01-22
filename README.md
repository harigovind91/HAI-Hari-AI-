<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HAI Sovereign OS - LIVE</title>
    <style>
        :root { --gold: #ffd700; --bg: #0a0a0a; --accent: #e94560; }
        body { background-color: var(--bg); color: white; font-family: sans-serif; text-align: center; margin: 0; }
        .hero { padding: 50px 20px; background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://source.unsplash.com/random/1600x900/?galaxy'); background-size: cover; border-bottom: 3px solid var(--gold); }
        .sun-icon { font-size: 60px; margin-bottom: 10px; }
        .nav-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px; padding: 40px; }
        .card { background: #1a1a1a; padding: 25px; border-radius: 15px; border: 1px solid #333; transition: 0.3s; cursor: pointer; }
        .card:hover { border-color: var(--gold); transform: translateY(-5px); }
        .card i { font-size: 40px; color: var(--gold); }
        .btn-master { background: var(--gold); color: black; padding: 15px 40px; border-radius: 50px; text-decoration: none; font-weight: bold; display: inline-block; margin-top: 20px; }
        footer { padding: 20px; font-size: 12px; color: #666; }
    </style>
</head>
<body>

<div class="hero">
    <div class="sun-icon">☀️</div>
    <h1>HAI (Hari AI) GLOBAL ZONE</h1>
    <p>लखनऊ से वैश्विक साम्राज्य का संचालन | कभी रात नहीं होती</p>
    <a href="#" class="btn-master" onclick="login()">ADMIN LOGIN</a>
</div>

<div class="nav-grid">
    <div class="card" onclick="alert('थिएटर मोड सक्रिय हो रहा है...')">
        <div style="font-size:40px;">🎭</div>
        <h3>Global Theatre</h3>
        <p>कला और संस्कृति का केंद्र</p>
    </div>
    <div class="card" onclick="alert('नागरिक सेवाएं जल्द आ रही हैं')">
        <div style="font-size:40px;">🏛️</div>
        <h3>Citizenship</h3>
        <p>साम्राज्य से जुड़ें</p>
    </div>
    <div class="card" onclick="alert('सुरक्षा कवच सक्रिय है')">
        <div style="font-size:40px;">🛡️</div>
        <h3>Security</h3>
        <p>Level-10-Alpha सुरक्षा</p>
    </div>
</div>

<footer>
    © 2026 H.S. Chauhan | HAI Sovereign OS | Powered by Global Zone Technology
</footer>

<script>
    function login() {
        let key = prompt("अपनी Master Security Key दर्ज करें:");
        if(key === "HARI_ADMIN_2026") {
            alert("प्रणाम स्वामी जी! डैशबोर्ड अनलॉक हो गया है।");
        } else {
            alert("अवैध प्रयास! सुरक्षा टीम को सूचित कर दिया गया है।");
        }
    }
</script>

</body>
</html>
