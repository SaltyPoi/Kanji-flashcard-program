export interface cardType {
    kanji: string;
    meanings: string[];
    pronunciations: {
        hiragana: string[];
        katakana: string[];
        romaji: string[];
    };
}

export type deckType = cardType[];
