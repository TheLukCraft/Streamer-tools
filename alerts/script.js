document.addEventListener('DOMContentLoaded', function() {
    let commands = [
        { text: "Progi gift: 1 | 10 | 50 | 100 | 500", icon: "fas fa-gift" },
        { text: "| 1k | 5k | 10k | 25k | 40k monet" },
        { text: "monety = ilość punktów (suby 2x)", icon: "fas fa-exchange-alt" },
        { text: "Progi donate: 1zł | 5 zł | 10zł | 20zł", icon: "fas fa-donate" },
        { text: "| 21,37zł | 50zł | 100zł | 200zł | 1000zł"},
        { text: "1zł = 25 punktów (suby 2x)", icon: "fas fa-calculator" }
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