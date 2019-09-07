import './src/helpers/deckHelper/deckHelper';

import { app, BrowserWindow } from 'electron';

import { saveDefaultDecks } from './src/helpers/deckHelper/deckHelper';
import { loadExtensions } from './src/helpers/loadExtensions';
import { settingsHelper } from './src/helpers/settingsHelper/settingsHelper';
import { applyListeners } from './src/ipc/ipcMain/ipcMain';

let mainWindow: BrowserWindow | null;

const createMainWindow = (): void => {
    mainWindow = new BrowserWindow({
        width: 450,
        height: 600,
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        },
        frame: false,
        backgroundColor: '#3a3a3a',
        title: 'Flashcard'
    });

    if (process.env.USE_DEV_SERVER) {
        mainWindow.loadURL('http://localhost:8080/build/debug/index.html');
    }
    else {
        mainWindow.loadFile(`./index.html`);
    }

    if (!process.env.ISPRODUCTION) {
        mainWindow.webContents.openDevTools({
            mode: 'detach'
        });
        loadExtensions();
    }

    mainWindow.on('close', () => {
        mainWindow = null;
        settingsHelper.saveSettingsToFile();
        app.quit();
    });
};

app.on('ready', () => {
    createMainWindow();
    saveDefaultDecks();
    settingsHelper.loadSettings();
    applyListeners(settingsHelper);
});
