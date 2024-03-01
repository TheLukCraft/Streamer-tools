let texts = [
    "1000x = 5 punktów",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
];
let currentIndex = 0;

function changeText() {
    currentIndex = (currentIndex - 1) % texts.length;
    document.getElementById("text").innerText = texts[currentIndex];
}

//set intervals 5000 = 5s
setInterval(changeText, 1000);