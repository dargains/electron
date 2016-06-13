//MAIN PROCESS
const electron = require("electron");
const {app} = electron;
const {BrowserWindow} = electron;
const {ipcMain} = require('electron');



app.on('ready', function() {
    //cria janela principal
    var mainWindow = new BrowserWindow({
        width: 1200,
        height: 600
    });
    //carrega o html da janela principal
    mainWindow.loadURL("file://" + __dirname + "/html/main.html");
    //carrega o devtools na janela principal
    mainWindow.openDevTools();
    
    var prefsWindow = new BrowserWindow({
        width: 400,
        height: 400,
        frame: false,
        show: false
    });
    prefsWindow.loadURL('file://' + __dirname + '/html/prefs.html');
    ipcMain.on('toggle-prefs', function() {
        if (prefsWindow.isVisible()) {
            prefsWindow.hide();
        } else prefsWindow.show();
    });
});