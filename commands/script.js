document.addEventListener('DOMContentLoaded', function() {
    let commands = [
        { text: "!top - topka streama", icon: "fas fa-trophy" },
        { text: "!sub - benefity suba", icon: "fas fa-user-plus" },
        { text: "!donate - link w BIO", icon: "fas fa-hand-holding-usd" },
        { text: "!sounds - puść dźwięk", icon: "fas fa-music" },
        { text: "!shop - sklep za punkty", icon: "fas fa-store" },
        { text: "!daily - 10 pkt za darmo", icon: "fas fa-calendar-day" },
        { text: "!rank - moje rangi w lolu", icon: "fas fa-chart-line" },
        { text: "!discord - link jest w BIO", icon: "fas fa-link" },
        { text: "!girl - gifty rodzaj żeński", icon: "fas fa-venus" },
        { text: "!games - gra dnia do wygrania", icon: "fas fa-gamepad" },
        { text: "!awards - nagrody dla top3 miesiąca", icon: "fas fa-award" },
        { text: "!gifs - gify na streamie", icon: "fas fa-film" }
      ];
    const container = document.querySelector('.commands-container');
    let commandIndex = 0; 

    function showCommands() {
        container.innerHTML = ''; 
        for (let i = 0; i < 3; i++) { 
            let cmdIndex = (commandIndex + i) % commands.length; 
            const cmd = commands[cmdIndex]; 
            const commandElement = document.createElement('div');
            commandElement.className = 'command';
            commandElement.innerHTML = `<i class="${cmd.icon}"></i> ${cmd.text}`;
            container.appendChild(commandElement);
        }

        commandIndex = (commandIndex + 3) % commands.length; 
    }

    showCommands(); 
    setInterval(showCommands, 5000); 
});