document.addEventListener('DOMContentLoaded', function() {
    let commands = [
        { text: "!ara (3)", icon: "fas fa-heart" },
        { text: "!daddy (3)", icon: "fas fa-user-tie" },
        { text: "!goofy (3)", icon: "fas fa-dog" },
        { text: "!indian (3)", icon: "fas fa-feather" },
        { text: "!okay (3)", icon: "fas fa-thumbs-up" },
        { text: "!drums (3)", icon: "fas fa-drum" },
        { text: "!kurczaki (5)", icon: "fas fa-egg" },
        { text: "!cipi (20)", icon: "fas fa-fish" },
        { text: "!sigma (20)", icon: "fas fa-bold" },
        { text: "sub: !budowa (10)", icon: "fas fa-hammer" },
        { text: "sub: !drogi (20)", icon: "fas fa-road" },
        { text: "sub: !kotlety (40)", icon: "fas fa-drumstick-bite" }
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