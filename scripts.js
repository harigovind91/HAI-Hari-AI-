// मास्टर डेटाबेस लोड करने का फंक्शन
async function loadResearchData() {
    try {
        // metadata.json फाइल से डेटा फेच करना
        const response = await fetch('metadata.json');
        const data = await response.json();

        // स्टेट्स अपडेट करना
        document.querySelector('.header-stats div:nth-child(2) p').innerText = data.total_blueprints || '1,250+';
        
        // इन्वेंट्री टेबल को भरना
        const tableBody = document.querySelector('tbody');
        tableBody.innerHTML = ''; // पुरानी लिस्ट साफ करना

        data.redeemed_files.forEach(file => {
            const row = `
                <tr>
                    <td>${file.name}</td>
                    <td>${file.field}</td>
                    <td><span class="status-badge">${file.status}</span></td>
                    <td><button onclick="viewFile('${file.id}')" style="background: none; border: 1px solid #00f2ff; color: #00f2ff; padding: 5px 10px; cursor: pointer;">देखें</button></td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });

    } catch (error) {
        console.error("डेटा लोड करने में समस्या आई:", error);
    }
}

// फाइल देखने का फंक्शन (Security Key चेक के साथ)
function viewFile(fileId) {
    const key = prompt("कृपया अपनी 'Master Security Key' दर्ज करें:");
    if (key === "YOUR_SECRET_KEY") { // यहाँ अपनी की (Key) सेट करें
        alert("एक्सेस ग्रांटेड! फाइल लोड हो रही है...");
        // यहाँ फाइल खोलने का लॉजिक आएगा
    } else {
        alert("गलत की! एक्सेस डिनाइड।");
    }
}

// पेज लोड होते ही डेटा लोड करें
window.onload = loadResearchData;

