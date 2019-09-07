import { ipcMain } from 'electron';

import { SettingsHelper } from '../../helpers/settingsHelper/settingsHelper';
import { ipcMainListeners } from './ipcMainListeners';

export const applyListeners = (settingsHelper: SettingsHelper): void => {
	for (const listenerCreator of ipcMainListeners) {
		const { channel, listener } = listenerCreator(settingsHelper);
		ipcMain.on(channel, listener);
	}
};
