//RENDERER PROCESS
const {ipcRenderer} = require('electron');
const {remote} = require('electron');
const {Menu} = remote;

 var button = document.createElement('button');
button.textContent = 'Hide';
button.addEventListener('click', function() {
    ipcRenderer.send('toggle-prefs');
});
document.body.appendChild(button);


const template = [
    {
        label: "Filé",
        submenu: [
            {
                label: "alerta",
                click: function() {
                    alert("ALERTA!!!");
                }
            },
            {
                label: "sair",
                role: "close"
            }
        ]
}];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);