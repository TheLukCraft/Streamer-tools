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
    if (texts[currentIndex] === "1000x = 5 punktów") {
        document.getElementById("text").innerHTML = '<i class="fas fa-heart"></i> ' + texts[currentIndex];
    } else {
        document.getElementById("text").innerHTML = texts[currentIndex];
    }
    currentIndex = (currentIndex + 1) % texts.length;
}


//set intervals 5000 = 5s
setInterval(changeText, 1000);