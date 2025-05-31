window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const month = urlParams.get('month');
    const day = parseInt(urlParams.get('day'), 10);

    const messageElement = document.getElementById('specialMessage');

    // List of valid birthdays (now all redirect to celebrate.html)
    const validBirthdays = [
        { name: "Nwayitelo", month: "june", day: 1 },
        { name: "Precious", month: "April", day: 27 },
        { name: "Ofentse", month: "April", day: 15 },
        { name: "Nkiyasi", month: "August", day: 8 },
        { name: "Thembi", month: "July", day: 18 },
        { name: "Joy", month: "January", day: 1 },
        { name: "Talent", month: "December", day: 25 }
    ];

    // Get today's date
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });

    // Find matching birthday entry
    const birthdayEntry = validBirthdays.find(birthday =>
        birthday.name.toLowerCase() === name?.toLowerCase() &&
        birthday.month.toLowerCase() === month?.toLowerCase() &&
        birthday.day === day
    );

    if (birthdayEntry) {
        if (currentDay === day && currentMonth.toLowerCase() === month?.toLowerCase()) {
            // Redirect to the shared celebration page
            window.location.href = `celebrate.html?name=${encodeURIComponent(name)}`;
        } else {
            // Not their birthday today
            messageElement.innerHTML = `<p>Hey ${birthdayEntry.name}, your birthday is on ${day} of ${month}. It's not today, but sending you good vibes! 🎈</p>`;
        }
    } else {
        // Invalid entry
        alert("Sorry, the details you entered are not recognized. Please try again.");
        window.location.href = "index.html";
    }
};
