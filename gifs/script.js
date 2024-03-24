document.addEventListener('DOMContentLoaded', function() {
    let commands = [
        { text: "!fine (1)", icon: "fas fa-thumbs-up" },
        { text: "!popcorn (1)", icon: "fas fa-popcorn" },
        { text: "!think (1)", icon: "fas fa-lightbulb" },
        { text: "!wow (1)", icon: "fas fa-surprise" },
        { text: "!wtf (1)", icon: "fas fa-question" },
        { text: "!smile (1)", icon: "fas fa-smile" }
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