document.addEventListener('DOMContentLoaded', function() {
    let commands = [
        { text: "!turtle żółwik dla widza (100pkt)", icon: "fas fa-hand-paper" },
        { text: "!leaf dostajesz z liścia (200pkt)", icon: "fas fa-leaf" },
        { text: "!coaching ocenka konta na op.gg (300pkt)", icon: "fas fa-chart-line" },
        { text: "!autograph podpis Steam (400pkt)", icon: "fas fa-signature" },
        { text: "!photo fotka z Tobą na DC (500pkt)", icon: "fas fa-camera" },
        { text: "!duo gra nierankingową w lolu (700pkt)", icon: "fas fa-gamepad" },
        { text: "!getgame dostajesz grę !games (1k pkt)", icon: "fas fa-gift" },
        { text: "!spinpoints rozlosuj swoje (1k pkt)", icon: "fas fa-random" },
        { text: "!greetings pozdrownia wideo (2k pkt)", icon: "fas fa-video" },
        { text: "!recordvideo tiktoka o Twoim champ (3k)", icon: "fas fa-mobile-alt" },
        { text: "!rateme analiza demka + porady (5k pkt)", icon: "fas fa-search" },
        { text: "!meetingkrk wspólny obiad w Krk (30k pkt)", icon: "fas fa-utensils" },
        { text: "!meeting przyjadę do Ciebie + ^ (80k pkt)", icon: "fas fa-truck" }
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
    setInterval(showCommands, 7000); 
});