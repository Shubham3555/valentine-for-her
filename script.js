const messages = [
    "Are you sure?",
    "Really sure??",
    "Think again 😏",
    "Pookie please...",
    "Just think about it!",
    "I’ll be sad 🥺",
    "Very sad 😢",
    "Extremely sad 😭",
    "Okay okay...",
    "Say yes already ❤️"
];

let messageIndex = 0;
let moveTimeout = null;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.25}px`;
}

/* Delayed move = still clickable */
function prepareToMoveNo() {
    clearTimeout(moveTimeout);
    moveTimeout = setTimeout(moveNoButton, 180);
}

function moveNoButton() {
    const noButton = document.querySelector('.no-button');
    const container = document.querySelector('.buttons');

    const maxX = container.offsetWidth - noButton.offsetWidth - 20;
    const maxY = container.offsetHeight - noButton.offsetHeight - 20;

    noButton.style.left = Math.random() * maxX + "px";
    noButton.style.top = Math.random() * maxY + "px";
}

/* CONFETTI + redirect */
function handleYesClick() {
    launchConfetti();
    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 1200);
}

function launchConfetti() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.textContent = "💖";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = "24px";
        heart.style.animation = "confettiFloat 1.5s ease-out forwards";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1500);
    }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes confettiFloat {
    to {
        transform: translateY(-120vh) rotate(360deg);
        opacity: 0;
    }
}`;
document.head.appendChild(style);
