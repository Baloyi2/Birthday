window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const month = urlParams.get('month');
    const day = parseInt(urlParams.get('day'), 10);

    const messageElement = document.getElementById('specialMessage');

    // List of special birthdays
    const validBirthdays = [
        { name: "Nwayitelo", month: "May", day: 31, page: "nwayitelo.html" },
        { name: "Precious", month: "April", day: 27, page: "precious.html" }
    ];

    // Get today's date
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });

    // Find if the entered details match a valid birthday
    const birthdayEntry = validBirthdays.find(birthday =>
        birthday.name === name && birthday.month === month && birthday.day === day
    );

    if (birthdayEntry) {
        // Check if the current date matches the entered birthday details
        if (currentDay === day && currentMonth === month) {
            // Redirect to the person's birthday page if today is their birthday
            window.location.href = birthdayEntry.page;
        } else {
            // If it's not their birthday today, show the "not today" message
            messageElement.innerHTML = `<p>Hey ${name}, your birthday is on ${day} of ${month}. It's not today, but sending you good vibes! 🎈</p>`;
        }
    } else {
        // If not a valid birthday, show an alert with the specified message and redirect
        alert("Sorry, the details you entered are not recognized on the system. Please try again with valid details.");
        window.location.href = "index.html"; // Redirect to the main page (index.html)
    }
};
