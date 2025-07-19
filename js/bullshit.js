const texts = [
    "Cabbage is not delicious.",
    "Try Minecraft, it's fun.",
    "This is not a bug, it's a feature. --Minecraft community",
    "Money? Do I look like a bank?",
    "Finding a bug for 99 years and found that a tag is lost.",
    "I thought that you wont see this.",
    "No refreshing, nothing here.",
    "Being fired because of bringing durian to work.",
    "Myvi semua pun boleh.",
    "Don't ask me to play MOBA games, f*ck that.",
    "ZZZZZ... Oh, still here?",
];

const index = Math.floor(Math.random() * texts.length);
document.getElementById("bullshit-text").textContent = texts[index];