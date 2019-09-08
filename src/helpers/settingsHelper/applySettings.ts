import { settingsType } from '../../typings/settings';
import { BrowserWindow } from 'electron';

export const applySettings = (settings: settingsType) => {
    if (settings.isWindowPinned) applyWindowPin(settings.isWindowPinned);
};

const applyWindowPin = (windowPinned: boolean = false) => {
    const window: Electron.BrowserWindow | null = BrowserWindow.getFocusedWindow();
    if (window) {
        window.setAlwaysOnTop(windowPinned);
    }
};
