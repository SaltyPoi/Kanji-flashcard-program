import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

import { deckType } from './../../typings/common';

export const createDeckSaveDir = (deckSaveDir: string): void => {
    if (!fs.existsSync(deckSaveDir)) {
        fs.mkdirSync(deckSaveDir);
    }
};

export const deleteDeckSaveDir = (deckSaveDir: string): void => {
    if (fs.existsSync(deckSaveDir)) fs.rmdirSync(deckSaveDir);
};

export const checkIfDeckExists = (deckSaveDir: string, deckName: string): boolean => {
    if (fs.existsSync(path.join(deckSaveDir, deckName))) return true;
    return false;
};

export const saveDeck = (deckSaveDir: string, deckName: string, deckData: deckType): void => {
    fs.writeFileSync(path.join(deckSaveDir, deckName), JSON.stringify(deckData, null, 2));
};

export const loadDeck = (deckSaveDir: string): deckType => {
    return JSON.parse(fs.readFileSync(deckSaveDir).toString()) as deckType;
};

export const validateDeck = (deck: deckType): boolean => {
    if (deck.length > 0) {
        for (const card of deck) {
            if (!card.kanji || !card.meanings || !card.pronunciations) return false;
        }
    }
    return true;
};

export const saveDefaultDecks = () => {
    const saveDir = path.join(os.homedir(), '.flashcard', 'decks');
    const deckDirs = fs.readdirSync(path.resolve('default decks'));
    if (!fs.existsSync(saveDir)) fs.mkdirSync(saveDir);
    for (const deckDir of deckDirs) {
        fs.copyFileSync(
            path.join(path.resolve('default decks'), deckDir),
            path.join(saveDir, deckDir)
        );
    }
};
