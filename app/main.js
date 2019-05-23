const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow = null;

app.on("ready", () => {
	console.log("Welcome.");
	mainWindow = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true
		}
	});
	mainWindow.webContents.loadURL(
		"file://" + path.join(__dirname, "index.html")
	);
});
