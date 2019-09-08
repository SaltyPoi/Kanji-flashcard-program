import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

import { settingsType } from './../../typings/settings';

export const defaultSettings: settingsType = {
    deckSaveDir: path.join(os.homedir(), '.flashcard', 'decks'),
    isWindowPinned: false
};

export const settingsDir = path.join(os.homedir(), 'AppData', 'Roaming', '.flashcard');

export const settingsFilePath = path.join(settingsDir, 'settings.json');

export class SettingsHelper {
    private settings: settingsType = {};

    getSettings = (): settingsType => this.settings;

    setSettings = (newSettings: settingsType) => {
        this.settings = { ...this.settings, ...newSettings };
        this.saveSettingsToFile();
    };

    saveSettingsToFile = (settings?: settingsType): void => {
        fs.writeFileSync(
            settingsFilePath,
            JSON.stringify(settings ? settings : this.settings, null, 2)
        );
    };

    loadSettingsFromFile = (): void => {
        this.settings = JSON.parse(fs.readFileSync(settingsFilePath).toString()) as settingsType;
    };

    loadDefaultSettings = (): void => {
        this.settings = defaultSettings;
    };

    checkIfSettingsFolderExists = (): boolean => fs.existsSync(settingsDir);

    checkIfSettingsFileExists = (): boolean => fs.existsSync(settingsFilePath);

    loadSettings = () => {
        const folderExists: boolean = this.checkIfSettingsFolderExists();
        const fileExists: boolean = this.checkIfSettingsFileExists();

        if (folderExists && fileExists) {
            this.loadSettingsFromFile();
        }
        else {
            if (!folderExists) fs.mkdirSync(settingsDir);
            if (!fileExists) this.setSettings(defaultSettings);
        }

        return defaultSettings;
    };
}

export const settingsHelper = new SettingsHelper();
