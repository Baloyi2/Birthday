const COOLDOWN_SECONDS = 10;

const userPictures = {
  "Nwayitelo": [
    "images/nwayitelo1.jpg",
    "images/nwayitelo2.jpg",
    "images/nwayitelo3.jpg",
    "images/nwayitelo4.jpg",
    "images/nwayitelo5.jpg",
  ],
  "Precious": [
    "images/precious1.jpg",
    "images/precious2.jpg",
    "images/precious3.jpg",
    "images/precious4.jpg",
    "images/precious5.jpg",
  ],
  "Ofentse": [
    "images/ofentse1.jpg",
    "images/ofentse2.jpg",
    "images/ofentse3.jpg",
    "images/ofentse4.jpg",
    "images/ofentse5.jpg",
  ],
  "Nkiyasi": [
    "images/nkiyasi1.jpg",
    "images/nkiyasi2.jpg",
    "images/nkiyasi3.jpg",
    "images/nkiyasi4.jpg",
    "images/nkiyasi5.jpg",
  ],
  "Thembi": [
    "images/thembi1.jpg",
    "images/thembi2.jpg",
    "images/thembi3.jpg",
    "images/thembi4.jpg",
    "images/thembi5.jpg",
  ],
  "Joy": [
    "images/joy1.jpg",
    "images/joy2.jpg",
    "images/joy3.jpg",
    "images/joy4.jpg",
    "images/joy5.jpg",
  ],
  "Talent": [
    "images/talent1.jpg",
    "images/talent2.jpg",
    "images/talent3.jpg",
    "images/talent4.jpg",
    "images/talent5.jpg",
  ],
};

const emojiList = ["🎉", "🎂", "🥳", "💖", "🌟", "🎈", "🦋", "🍰", "✨", "💐", "😊", "🌸"];

function getRandomEmojis(count = 2) {
  const emojis = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * emojiList.length);
    emojis.push(emojiList[randomIndex]);
  }
  return emojis.join('');
}

function addEmojisToParagraph(text) {
  return text.replace(/\.(\s|$)/g, match => `${getRandomEmojis()}.`);
}

const paragraphTemplates = [
  `Today marks a beautiful chapter of your life, filled with endless possibilities and dreams waiting to be realized. May this birthday bring you joy, laughter, and a heart full of gratitude as you continue to blossom into the amazing person you are destined to be. As the sun rises on your special day, remember how much light you bring to those around you. Your kindness, grace, and vibrant spirit make the world a better place. Celebrate yourself today, and embrace the wonderful journey ahead with hope and excitement. Another year of your life is a precious gift, a tapestry woven with memories, lessons, and love. May this birthday be the start of an unforgettable adventure, where every moment is filled with happiness, self-discovery, and the courage to chase your dreams.`,
  
  `On this day, we honor the unique and beautiful soul that you are. Your strength, compassion, and creativity inspire so many. May your birthday overflow with blessings, cherished moments, and the warm embrace of friends and family who adore you. A birthday is not just a date on the calendar; it is a celebration of the love and light you share with the world. May today be a reminder of how deeply you are valued and how bright your future shines. Step into this new year with confidence and joy. Know that your presence is a gift that continues to touch lives in beautiful ways.`,

  `Wishing you a day filled with sweet moments, warm hugs, and unforgettable memories. May this year bring you closer to all the goals and dreams you've set for yourself. Your resilience and determination are truly admirable. Always remember how far you've come and how much further you will go. Embrace the new beginnings that come with this birthday. Let your heart guide you to the places where joy and love dwell. Keep smiling and shining your light.`,

  `The world became brighter the day you were born. Your journey has been nothing short of amazing, filled with courage, growth, and love. Every challenge you've overcome is a testament to your strength. As you celebrate this special day, may your heart be filled with peace and your soul with satisfaction. Let today be a reflection of your beauty, inside and out. You are loved more than words can say. Happy birthday and cheers to many more magical years.`,

  `Here's to a year filled with blessings, good health, and dreams coming true. May every step you take bring you joy and fulfillment. Celebrate the gift of being you and how much joy you bring to others. The love you radiate returns to you tenfold today. Stay true to yourself and embrace the journey ahead. You have everything within you to create a beautiful life. Happiest birthday to a truly remarkable person.`,

  `Birthdays remind us to celebrate life and the incredible moments that make it special. You deserve every bit of love and happiness today. With each candle you blow out, know that the universe cheers you on. Your future holds endless possibilities and magical surprises. Keep your heart open and your spirit high. This is your time to shine brighter than ever. Thank you for being an inspiration to us all.`,

  `On your birthday, may your heart be filled with peace, your mind with clarity, and your life with abundance. Surround yourself with people who bring out the best in you. Your presence uplifts everyone lucky enough to know you. Take a moment to reflect on your achievements and dreams. You are capable of greatness in every sense. Cherish today and the promise of tomorrow. Celebrate you, because you are worth it.`,

  `Let the laughter be loud, the hugs tight, and the cake sweet. Today, it's all about celebrating how special you are. You have a heart of gold and a soul full of wonder. Never stop believing in your magic. May your birthday bring a gentle breeze of hope and renewal. Embrace it with all your heart. You were made for greatness, and your story is just beginning.`,

  `Another year means more memories, more growth, and more love. Take a moment to be proud of who you’ve become. You are strong, smart, and uniquely you. Share your light, speak your truth, and walk in love. May every moment today make you feel celebrated and seen. Here's to laughter, adventures, and dreams that set your soul on fire. Happiest birthday to someone truly one of a kind.`,

  `To the one who brings joy wherever they go: may your day be as wonderful as your heart. You touch lives with your kindness and strength. Every year, you become even more amazing. Let your inner spark light the world around you. May today be the beginning of your best chapter yet. Keep chasing your dreams and never stop believing. You are enough, just as you are, and so very loved.`
];

function getRandomParagraph() {
  const randomIndex = Math.floor(Math.random() * paragraphTemplates.length);
  return addEmojisToParagraph(paragraphTemplates[randomIndex]);
}

window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name') || 'Dear';

  const userNameElem = document.getElementById('userName');
  const messageElem = document.getElementById('birthdayMessage');
  const picturesContainer = document.getElementById('picturesContainer');
  const btnGoOut = document.getElementById('btnGoOut');
  const btnSecretGift = document.getElementById('btnSecretGift');
  const statusMessage = document.getElementById('statusMessage');

  if (userNameElem) {
    userNameElem.textContent = name.charAt(0).toUpperCase() + name.slice(1);
  }

  if (messageElem) {
    messageElem.innerHTML = `<p>${getRandomParagraph()}</p>`;
  }

  // Show all pictures for user
  if (userPictures[name]) {
    userPictures[name].forEach(imgSrc => {
      const img = document.createElement('img');
      img.src = imgSrc;
      img.className = 'user-pic';
      picturesContainer.appendChild(img);
    });
  } else {
    const img = document.createElement('img');
    img.src = "images/default.jpg";
    img.className = 'user-pic';
    picturesContainer.appendChild(img);
  }

  function isCooldownActive() {
    const lastChoiceTime = localStorage.getItem('birthdayChoiceTime');
    if (!lastChoiceTime) return false;
    const now = new Date().getTime();
    return now - parseInt(lastChoiceTime, 10) < COOLDOWN_SECONDS * 1000;
  }

  function disableButtons() {
    if (btnGoOut) btnGoOut.disabled = true;
    if (btnSecretGift) btnSecretGift.disabled = true;
    if (statusMessage) {
      statusMessage.textContent = `Please wait ${COOLDOWN_SECONDS} seconds before making another choice.`;
    }
  }

  function handleChoice(choice) {
    localStorage.setItem('birthdayChoiceTime', new Date().getTime().toString());
    localStorage.setItem('birthdayChoice', choice);
    if (statusMessage) {
      statusMessage.textContent = `You chose: "${choice}". Enjoy your day! 🎉`;
    }
    if (btnGoOut) btnGoOut.disabled = true;
    if (btnSecretGift) btnSecretGift.disabled = true;
  }

  if (isCooldownActive()) {
    disableButtons();
  }

  if (btnGoOut) {
    btnGoOut.addEventListener('click', () => {
      if (confirm(`Are you sure? You can't change this for ${COOLDOWN_SECONDS} seconds.`)) {
        handleChoice('We go out');
        window.location.href = 'date.html';
      }
    });
  }

  if (btnSecretGift) {
    btnSecretGift.addEventListener('click', () => {
      if (confirm(`Are you sure? You can't change this for ${COOLDOWN_SECONDS} seconds.`)) {
        handleChoice('Secret gift');
      }
    });
  }
};
