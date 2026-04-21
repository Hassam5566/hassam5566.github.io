// ===============================
// 🚨 Emergency
// ===============================
function activateEmergency() {

    let confirmAction = confirm("🚨 Do you want to contact emergency services?");

    if (confirmAction) {
        alert("🚑 Emergency services have been notified!");
    }
}


// ===============================
// 🤖 AI Chatbot + Risk System
// ===============================
function sendMessage() {

    let inputField = document.getElementById("userInput");
    let input = inputField.value.toLowerCase();
    let output = document.getElementById("response");
    let riskBox = document.getElementById("riskBox");

    // Clear previous result
    output.innerHTML = "";
    
    if (!input) {
        output.innerHTML = "❌ Please enter symptoms.";
        return;
    }

    // ⏳ Fake AI loading effect
    output.innerHTML = "⏳ Analysing symptoms...";

    setTimeout(() => {

        if (input.includes("chest pain")) {
            output.innerHTML = "⚠️ High Risk: Possible heart issue!";
            updateRisk("high");
        }
        else if (input.includes("breathing")) {
            output.innerHTML = "⚠️ Critical: Breathing difficulty detected!";
            updateRisk("high");
        }
        else if (input.includes("fever")) {
            output.innerHTML = "🌡️ Mild condition: Monitor temperature.";
            updateRisk("low");
        }
        else {
            output.innerHTML = "ℹ️ Symptoms unclear. Consult a doctor.";
            updateRisk("medium");
        }

    }, 1500); // delay for realism
}


// ===============================
// 📊 Risk Level Controller
// ===============================
function updateRisk(level) {

    let riskBox = document.getElementById("riskBox");

    if (!riskBox) return;

    if (level === "high") {
        riskBox.className = "status warning";
        riskBox.innerHTML = "🚨 HIGH RISK - Immediate action required!";
    }
    else if (level === "medium") {
        riskBox.className = "status warning";
        riskBox.innerHTML = "🟡 MEDIUM RISK - Consult doctor.";
    }
    else {
        riskBox.className = "status good";
        riskBox.innerHTML = "🟢 LOW RISK - Monitor condition.";
    }
}


// ===============================
// 🧰 First Aid Tips
// ===============================
function showFirstAid() {

    let box = document.getElementById("firstAid");

    if (!box) return;

    box.innerHTML = `
        <ul>
            <li>✔ Stay calm and call emergency services</li>
            <li>✔ Check breathing and pulse</li>
            <li>✔ Keep patient comfortable</li>
            <li>✔ Do not give food if unconscious</li>
        </ul>
    `;
}


// ===============================
// 📧 Form Validation (Enhanced UX)
// ===============================
function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let success = document.getElementById("successMsg");
    let error = document.getElementById("formError");

    // Reset messages
    success.innerHTML = "";
    error.innerHTML = "";

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Name validation
    if (!name) {
        error.innerHTML = "❌ Name is required.";
        return false;
    }

    if (name.includes("@")) {
        error.innerHTML = "❌ Name should not contain email.";
        return false;
    }

    // Email validation
    if (!emailPattern.test(email)) {
        error.innerHTML = "❌ Invalid email format.";
        return false;
    }

    // Message validation
    if (!message) {
        error.innerHTML = "❌ Message cannot be empty.";
        return false;
    }

    // Success
    success.innerHTML = "✅ Message sent successfully!";
    return false; // prevent reload
}


// ===============================
// 📊 LIVE MONITORING SIMULATION
// ===============================
setInterval(() => {

    let heart = document.getElementById("heart");
    let oxygen = document.getElementById("oxygen");
    let status = document.getElementById("statusBox");

    if (!heart || !oxygen || !status) return;

    let hr = Math.floor(Math.random() * 40) + 60;
    let ox = Math.floor(Math.random() * 5) + 95;

    heart.innerHTML = hr;
    oxygen.innerHTML = ox;

    // Condition logic
    if (hr > 100 || ox < 95) {
        status.className = "status warning";
        status.innerHTML = "⚠️ Warning: Abnormal Condition";
    } else {
        status.className = "status good";
        status.innerHTML = "✅ Stable";
    }

}, 3000);