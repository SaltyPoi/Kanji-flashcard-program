import { ipcRenderer } from 'electron';

import { sendMessage } from '../../ipc/ipcRenderer/ipcRenderer';
import { messageLoadDeck } from '../../ipc/ipcRenderer/ipcRendererMessages';
import { deckType } from '../../typings/common';
import { createAction } from '../common/actionHelper';
import { disableButtons, enableButtons } from './uiActions';

export const loadDeck = (deck: deckType) => createAction('LOAD_DECK', { deck });
export const removeDeck = () => createAction('REMOVE_DECK');
export const reshuffleDeck = () => createAction('SHUFFLE_DECK');
export const nextCard = () => createAction('NEXT_CARD');

export const getDeck = (loadLastDeck = true) => {
    return (dispatch) => {
        dispatch(disableButtons);

        ipcRenderer.on('loadDeck', (event, { deck }) => {
            dispatch(loadDeck(deck));
            afterGetDeck(dispatch);
        });

        ipcRenderer.on('loadDeckFailed', () => {
            dispatch(enableButtons);
            afterGetDeck(dispatch);
        });

        sendMessage(messageLoadDeck(loadLastDeck));
    };
};

const afterGetDeck = (dispatch) => {
    dispatch(enableButtons);
    ipcRenderer.removeAllListeners('loadDeck');
    ipcRenderer.removeAllListeners('loadDeckFailed');
};
