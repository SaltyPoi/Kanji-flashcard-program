import { ipcRenderer } from 'electron';

import { ipcRendererMessageType } from './ipcRendererMessages';

export const sendMessage = (message: ipcRendererMessageType): void => {
	ipcRenderer.send(message.channel, message.payload);
};
