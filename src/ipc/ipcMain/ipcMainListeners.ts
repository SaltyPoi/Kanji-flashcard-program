import { BrowserWindow, dialog, IpcMainEvent } from 'electron';

import { loadDeck, validateDeck } from '../../helpers/deckHelper/deckHelper';
import { SettingsHelper } from '../../helpers/settingsHelper/settingsHelper';
import { ipcMainListenerType } from './ipcMainListeners';

export interface ipcMainListenerType {
    channel: string;
    listener: (event: IpcMainEvent, payload: any) => void;
}

export type ipcMainListenerCreator = (settingsHelper?: SettingsHelper) => ipcMainListenerType;

const listenerWindowClose = (): ipcMainListenerType => ({
    channel: 'windowClose',
    listener: () => {
        const window: Electron.BrowserWindow | null = BrowserWindow.getFocusedWindow();
        window!.close();
    }
});

const listenerwindowMinimize = (): ipcMainListenerType => ({
    channel: 'windowMinimize',
    listener: () => {
        const window: Electron.BrowserWindow | null = BrowserWindow.getFocusedWindow();
        window!.minimize();
    }
});

const listenerwindowMaximize = (): ipcMainListenerType => ({
    channel: 'windowMaximize',
    listener: () => {
        const window: Electron.BrowserWindow | null = BrowserWindow.getFocusedWindow();
        if (window!.isMaximized()) {
            window!.unmaximize();
        }
        else {
            window!.maximize();
        }
    }
});

const listenerToggleAlwaysOnTop = (): ipcMainListenerType => ({
    channel: 'windowToggleAlwaysOnTop',
    listener: (event: IpcMainEvent) => {
        const window: Electron.BrowserWindow | null = BrowserWindow.getFocusedWindow();
        window!.setAlwaysOnTop(!window!.isAlwaysOnTop());
        console.log('asdjoiawjdoiwajd');
        event.reply('windowToggleAlwaysOnTop', window!.isAlwaysOnTop());
    }
});

const listenerLoadDeck = (settingsHelper: SettingsHelper): ipcMainListenerType => ({
    channel: 'loadDeck',
    listener: (event, { loadLastDeck }) => {
        const lastDeckLoaded = settingsHelper.getSettings().lastDeckLoaded;
        if (loadLastDeck && lastDeckLoaded !== undefined) {
            const deck = loadDeck(lastDeckLoaded);
            if (validateDeck(deck)) event.reply('loadDeck', { deck });
            else event.reply('loadDeckFailed');
        }
        else {
            const deckDirs = dialog.showOpenDialogSync({
                title: 'Select deck to load',
                defaultPath: settingsHelper.getSettings().deckSaveDir,
                message: 'Select the deck to load',
                filters: [ { name: 'JSON', extensions: [ 'json' ] } ],
                properties: [ 'openFile' ]
            });

            if (deckDirs !== undefined) {
                const deck = loadDeck(deckDirs[0]);
                if (validateDeck(deck)) {
                    settingsHelper.setSettings({ lastDeckLoaded: deckDirs[0] });
                    event.reply('loadDeck', { deck });
                }
                else event.reply('loadDeckFailed');
            }
            else event.reply('loadDeckFailed');
        }
    }
});

export const ipcMainListeners: ipcMainListenerCreator[] = [
    listenerWindowClose,
    listenerwindowMinimize,
    listenerwindowMaximize,
    listenerLoadDeck,
    listenerToggleAlwaysOnTop
];
