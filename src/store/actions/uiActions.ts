import { createAction } from '../common/actionHelper';
import { ipcRenderer } from 'electron';
import { messageToggleAlwaysOnTop } from '../../ipc/ipcRenderer/ipcRendererMessages';
import { sendMessage } from '../../ipc/ipcRenderer/ipcRenderer';

export const disableButtons = createAction('DISABLE_BUTTONS');
export const enableButtons = createAction('ENABLE_BUTTONS');

export const toggleWindowPin = createAction('TOGGLE_WINDOW_PIN');
export const setWindowPin = (windowPinned: boolean) =>
    createAction('SET_WINDOW_PIN', { windowPinned });

export const checkAndSetWindowPin = () => {
    return (dispatch) => {
        console.log('2');
        ipcRenderer.on('windowToggleAlwaysOnTop', (event, isAlwaysOnTop) => {
            dispatch(setWindowPin(isAlwaysOnTop));
            console.log('1');
            ipcRenderer.removeAllListeners('windowToggleAlwaysOnTop');
        });
        console.log('3');
        sendMessage(messageToggleAlwaysOnTop());
    };
};
