function goToDatePage() {
    const name = document.getElementById('nameInput').value.trim();
    if (!name) {
        alert("Please enter your name.");
        return;
    }

    // Redirect to date.html with the name as URL parameter
    window.location.href = `date.html?name=${encodeURIComponent(name)}`;
}

function greetUser() {
    let name = document.getElementById("nameInput").value.trim();
    let month = document.getElementById("monthInput").value;
    let day = document.getElementById("dayInput").value;

    // Validate name
    if (!name) {
        alert("Please enter your name.");
        return;
    }

    // Validate month
    const validMonths = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    if (!validMonths.includes(month)) {
        alert("Please select a valid birth month.");
        return;
    }

    // Validate day
    day = parseInt(day, 10);
    if (isNaN(day) || day < 1 || day > 31) {
        alert("Please select a valid birth date.");
        return;
    }

    // Redirect to special.html with the parameters
    window.location.href = `special.html?name=${encodeURIComponent(name)}&month=${encodeURIComponent(month)}&day=${encodeURIComponent(day)}`;
}

// Populate the day dropdown dynamically
document.addEventListener("DOMContentLoaded", function () {
    let daySelect = document.getElementById("dayInput");
    for (let i = 1; i <= 31; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }
});
