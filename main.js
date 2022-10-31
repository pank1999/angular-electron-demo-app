const {app,BrowserWindow} = require("electron");
let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor:'#fffff',
    })

    //it will load the index page when application is opened in BrowserWindow
    win.loadFile('dist/angular-electron-demo-app/index.html');

    win.on('closed', () => {
        win = null;
    })
}

//it will createWindow on electron initialization
app.on('ready', createWindow);


app.on('window-all-closed', () => {
    //macOs specific close process
    if (process.platform!== 'darwin') {
        app.quit();
    }
})

