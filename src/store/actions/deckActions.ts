import { ipcRenderer } from 'electron';

import { sendMessage } from '../../ipc/ipcRenderer/ipcRenderer';
import { messageLoadDeck } from '../../ipc/ipcRenderer/ipcRendererMessages';
import { deckType } from '../../typings/common';
import { createAction } from '../common/actionHelper';
import { disableButtons, enableButtons } from './uiActions';
import { store } from '../store';

export const loadDeck = (deck: deckType) => createAction('LOAD_DECK', { deck });
export const removeDeck = () => createAction('REMOVE_DECK');
export const reshuffleDeck = () => createAction('SHUFFLE_DECK');
export const nextCard = () => createAction('NEXT_CARD');

ipcRenderer.on('loadDeck', (event, { deck }) => {
    store.dispatch(loadDeck(deck));
    store.dispatch(enableButtons);
});

ipcRenderer.on('loadDeckFailed', () => {
    store.dispatch(enableButtons);
});

export const getDeck = (loadLastDeck = true) => {
    return (dispatch) => {
        dispatch(disableButtons);
        sendMessage(messageLoadDeck(loadLastDeck));
    };
};
