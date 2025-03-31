function greetUser() {
    let name = document.getElementById("nameInput").value;
    let month = document.getElementById("monthInput").value;
    let day = document.getElementById("dayInput").value;

    // Validate name: should be selected
    if (!name) {
        alert("Please select your name.");
        return;
    }

    // Validate month: should be a valid month name
    const validMonths = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    if (!validMonths.includes(month)) {
        alert("Please select a valid birth month.");
        return;
    }

    // Validate day: should be between 1 and 31
    day = parseInt(day, 10);
    if (isNaN(day) || day < 1 || day > 31) {
        alert("Please select a valid birth date.");
        return;
    }

    // Redirect to the special message page with the parameters in the URL
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
