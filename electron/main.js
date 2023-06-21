// Модули для управления приложением и создания окна
const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

function createWindow() {
  // Создаем окно браузера.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // и загрузить index.html приложения.
  //mainWindow.loadFile('index.html')

  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, "../index.html"),
      protocol: "file:",
      slashes: true,
    });

  mainWindow.loadURL(startUrl);
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Выйти когда все окна закрыты
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
