const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;

let win;

function createWindow() {
	win = new BrowserWindow({width: 800, height: 600});
}

app.on('ready', createWindow);