document.addEventListener("DOMContentLoaded", function () {
  let commands = [
    { text: "2x więcej pkt za gift, donate itd.", icon: "fas fa-gift" },
    { text: "2x wpis na kole fortuny", icon: "fas fa-spinner" },
    { text: "pierwszeństwo w grach z widzami", icon: "fas fa-users" },
    { text: "odpowiadam na priv", icon: "fas fa-comments" },
    { text: "odpowiadam na komentarze", icon: "fas fa-comment-dots" },
    { text: "znajomi na DC i lolu", icon: "fab fa-discord" },
  ];
  const container = document.querySelector(".commands-container");
  let commandIndex = 0;

  function showCommands() {
    container.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      let cmdIndex = (commandIndex + i) % commands.length;
      const cmd = commands[cmdIndex];
      const commandElement = document.createElement("div");
      commandElement.className = "command";
      commandElement.innerHTML = `<i class="${cmd.icon}"></i> ${cmd.text}`;
      container.appendChild(commandElement);
    }

    commandIndex = (commandIndex + 3) % commands.length;
  }

  showCommands();
  setInterval(showCommands, 7000);
});
