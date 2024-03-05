document.addEventListener('DOMContentLoaded', function() {
    let commands = [
        { text: "żółwik dla widza (100pkt)", icon: "fas fa-hand-paper" },
        { text: "dostajesz z liścia (200pkt)", icon: "fas fa-leaf" },
        { text: "ocenka konta na op.gg (300pkt)", icon: "fas fa-chart-line" },
        { text: "podpis Steam (400pkt)", icon: "fas fa-signature" },
        { text: "fotka z Tobą na DC (500pkt)", icon: "fas fa-camera" },
        { text: "gra nierankingową w lolu (700pkt)", icon: "fas fa-gamepad" },
        { text: "dostajesz grę !games (1k pkt)", icon: "fas fa-gift" },
        { text: "rozlosuj swoje (1k pkt)", icon: "fas fa-random" },
        { text: "pozdrownia + życzenia wideo (2k pkt)", icon: "fas fa-video" },
        { text: "nagram tiktoka o Twoim champ (3k)", icon: "fas fa-mobile-alt" },
        { text: "analiza demka widza + porady (5k pkt)", icon: "fas fa-search" },
        { text: "wspólny obiad/piwo w Krk (30k pkt)", icon: "fas fa-utensils" },
        { text: "przyjadę do Twojego miasta + ^ (80k pkt)", icon: "fas fa-truck" }
    ];
    const container = document.querySelector('.commands-container');
    let commandIndex = 0; // Indeks aktualnie wyświetlanej komendy

    function showCommands() {
        container.innerHTML = ''; // Wyczyść kontener przed dodaniem nowych komend
        for (let i = 0; i < 3; i++) { // Pętla dla trzech komend
            let cmdIndex = (commandIndex + i) % commands.length; // Oblicz indeks cyklicznie
            const cmd = commands[cmdIndex]; // Pobierz komendę
            const commandElement = document.createElement('div');
            commandElement.className = 'command';
            commandElement.innerHTML = `<i class="${cmd.icon}"></i> ${cmd.text}`;
            container.appendChild(commandElement);
        }

        commandIndex = (commandIndex + 3) % commands.length; // Przeskocz o trzy komendy do przodu
    }

    showCommands(); // Pokaż pierwsze trzy komendy od razu
    setInterval(showCommands, 5000); // Aktualizuj komendy co 5 sekund dla szybszego tempa
});