const messages = [
    "Ты уверена?",
    "Правда уверена??",
    "Ты не в настроении?",
    "Ариночка, пожалуйста...",
    "Просто подумай об этом!",
    "Если скажешь нет, мне будет очень грустно...",
    "Буду очень очень грустным...",
    "Буду очень очень очень очень очень грустным...",
    "Хорошо, больше не буду спрашивать...",
    "Шучу, скажи да, пожалуйста! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}