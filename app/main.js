//RENDERER PROCESS
const {ipcRenderer} = require('electron');
const {remote} = require('electron');
const {Menu} = remote;


const template = [
    {
        label: "Filé",
        submenu: [
            {
                label: "prefs",
                click: function () {
                    ipcRenderer.send('toggle-prefs');
                }
            },
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