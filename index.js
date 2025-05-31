function showLocationInput() {
    const place = document.getElementById('placeInput').value.trim();
    if (!place) {
        alert("Please enter a type of place.");
        return;
    }
    document.getElementById('placeSection').classList.add('hidden');
    document.getElementById('locationSection').classList.remove('hidden');
}

function showDateInput() {
    const location = document.getElementById('locationInput').value.trim();
    if (!location) {
        alert("Please enter a location.");
        return;
    }
    document.getElementById('locationSection').classList.add('hidden');
    document.getElementById('dateSection').classList.remove('hidden');
}

function showTimeInput() {
    const date = document.getElementById('dateInput').value.trim();
    if (!date) {
        alert("Please enter a date.");
        return;
    }
    document.getElementById('dateSection').classList.add('hidden');
    document.getElementById('timeSection').classList.remove('hidden');
}

function confirmDetails() {
    const place = document.getElementById('placeInput').value.trim();
    const location = document.getElementById('locationInput').value.trim();
    const date = document.getElementById('dateInput').value.trim();
    const time = document.getElementById('timeInput').value.trim();

    if (!place || !location || !date || !time) {
        alert("Please fill all details before confirming.");
        return;
    }

    const dateObj = new Date(date);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = dateObj.toLocaleString('default', { month: 'long' });
    const formattedDate = `${day} of ${month}`;

    document.getElementById('confirmPlace').textContent = place;
    document.getElementById('confirmLocation').textContent = location;
    document.getElementById('confirmDate').textContent = formattedDate;
    document.getElementById('confirmTime').textContent = time;

    document.getElementById('timeSection').classList.add('hidden');
    document.getElementById('confirmationSection').classList.remove('hidden');

    document.getElementById('greetingMessage').textContent = 
        `Thanks for confirming! We're excited about your plans.`;
}

function editDetails() {
    document.getElementById('confirmationSection').classList.add('hidden');
    document.getElementById('placeSection').classList.remove('hidden');
    document.getElementById('greetingMessage').textContent = "";

    document.getElementById('placeInput').value = '';
    document.getElementById('locationInput').value = '';
    document.getElementById('dateInput').value = '';
    document.getElementById('timeInput').value = '';
}

function sendToWhatsApp() {
    const place = document.getElementById('placeInput').value.trim();
    const location = document.getElementById('locationInput').value.trim();
    const date = document.getElementById('dateInput').value.trim();
    const time = document.getElementById('timeInput').value.trim();

    const dateObj = new Date(date);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = dateObj.toLocaleString('default', { month: 'long' });
    const formattedDate = `${day} of ${month}`;

    const message = `Hi! I'd like us to go to ${place} at ${location} on ${formattedDate} at ${time} to celebrate  my birthday. Let me know what you think!`;

    const phoneNumber = '27718342937';
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
}
