import { createAction } from '../common/actionHelper';
import { ipcRenderer } from 'electron';
import { store } from '../store';
import { settingsType } from '../../typings/settings';

export const disableButtons = createAction('DISABLE_BUTTONS');
export const enableButtons = createAction('ENABLE_BUTTONS');

export const toggleWindowPin = createAction('TOGGLE_WINDOW_PIN');
export const setWindowPin = (windowPinned: boolean) =>
    createAction('SET_WINDOW_PIN', { windowPinned });

ipcRenderer.on('windowToggleAlwaysOnTop', (event, isAlwaysOnTop) => {
    store.dispatch(setWindowPin(isAlwaysOnTop));
});

ipcRenderer.on('getSettings', (event, settings: settingsType) => {
    store.dispatch(setWindowPin(settings.isWindowPinned ? settings.isWindowPinned : false));
});
