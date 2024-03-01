let texts = [
    " 1000x = 5 punktów",
    " Streamy codziennie 20:00",
    " Donate w BIO 1zł to 25 pkt",
    " !help - komendy",
    " !sounds - nowe dźwięki",
    " !top - sprawdź topkę",
    " !shop - sklep za punkty",
    " !daily - 10 pkt za darmo",
    " !spin - kręć kołem fortuny",
    " !awards - nagrody dla top 3",
    
];
let currentIndex = 0;

function changeText() {
    switch(currentIndex) {
        case 0:
            newText = '<i class="fas fa-heart"></i>' + texts[currentIndex];
            break;
        case 1:
            newText = '<i class="fas fa-calendar-alt"></i>' + texts[currentIndex];
            break;
        case 2:
            newText = '<i class="fa-solid fa-circle-dollar-to-slot"></i>' + texts[currentIndex];
            break;
        case 3:
            newText = '<i class="fas fa-comments"></i>' + texts[currentIndex];
            break;
        case 4:
            newText = '<i class="fas fa-music"></i>' + texts[currentIndex];
            break;
        case 5:
            newText = '<i class="fas fa-star"></i>' + texts[currentIndex];
            break;
        case 6:
            newText = '<i class="fas fa-shopping-cart"></i>' + texts[currentIndex];
            break;
        case 7:
            newText = '<i class="fa-solid fa-gift"></i>' + texts[currentIndex];
            break;
        case 8:
            newText = '<i class="fa-solid fa-dice"></i>' + texts[currentIndex];
            break;
        case 9:
            newText = '<i class="fa-solid fa-award"></i>' + texts[currentIndex];
            break;
        default:
            newText = texts[currentIndex];
            break;
    }
    document.getElementById("text").innerHTML = newText;
    currentIndex = (currentIndex + 1) % texts.length;
}

//set intervals 5000 = 5s
setInterval(changeText, 5000);