const { app, BrowserWindow } = require('electron/main')
const url = require('url')
const path = require('path')

function createMainWindow() {
  const win = new BrowserWindow({
    title: "Hydrosphere",
    width: 800,
    height: 600
  })

  const uri = url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file'
  })

  win.loadURL(uri);
}

app.whenReady().then(createMainWindow)
