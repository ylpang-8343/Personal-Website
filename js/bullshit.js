const texts = [
    "Cabbage is not delicious.",
    "WTF why there are so many bugs?",
    "Bugs? Will be fixed at 32 December.",
    "Money? Do I look like a bank?",
    "Finding a bug for 99 years and found that a tag is lost.",
    "Still refreshing? Go find a girlfriend.",
    "Stop refreshing, I am not a bot.",
    "Still refreshing? RM100 for 1 refresh.",
    "Boring? Go find a girlfriend.",
    "Empty wallet after a month of work.",
    "!@#$%^&*()_+",
    "诶嘿，以为没有中文？",
];

const index = Math.floor(Math.random() * texts.length);
document.getElementById("bullshit-text").textContent = texts[index];