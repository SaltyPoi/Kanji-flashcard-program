export interface ipcRendererMessageType {
    channel: string;
    payload?: {};
}

export const messageWindowClose = (): ipcRendererMessageType => ({
    channel: 'windowClose'
});

export const messageWindowMinimize = (): ipcRendererMessageType => ({
    channel: 'windowMinimize'
});

export const messageWindowMaximize = (): ipcRendererMessageType => ({
    channel: 'windowMaximize'
});

export const messageToggleAlwaysOnTop = (): ipcRendererMessageType => ({
    channel: 'windowToggleAlwaysOnTop'
});

export const messageLoadDeck = (loadLastDeck = true): ipcRendererMessageType => ({
    channel: 'loadDeck',
    payload: {
        loadLastDeck
    }
});
