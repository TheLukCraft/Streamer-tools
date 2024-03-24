document.addEventListener('DOMContentLoaded', function() {
    let commands = [
        { text: "!fine (1)", gif: "fine.gif" },
        { text: "!popcorn (1)", gif: "popcorn.gif" },
        { text: "!think (1)", gif: "think.gif" },
        { text: "!wow (1)", gif: "wow.gif" },
        { text: "!wtf (1)", gif: "wtf.gif" },
        { text: "!smile (1)", gif: "smile.gif" }
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
            commandElement.innerHTML = `<img src="/gifs/${cmd.gif}" alt="${cmd.text}" style="width: 24px; height: 24px;"> ${cmd.text}`;
            container.appendChild(commandElement);
        }

        commandIndex = (commandIndex + 3) % commands.length;
    }

    showCommands();
    setInterval(showCommands, 5000);
});
