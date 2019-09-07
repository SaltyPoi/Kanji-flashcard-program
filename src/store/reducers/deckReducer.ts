import * as shuffle from 'shuffle-array';

import { cardType, deckType } from '../../typings/common';

export interface deckReducerState {
    deck: deckType | null;
    shuffledDeck: deckType | null;
    currentCard: cardType | null;
    currentCardIndex: number;
    numberOfCards: number;
}

const initalState: deckReducerState = {
    deck: null,
    shuffledDeck: null,
    currentCard: null,
    currentCardIndex: 0,
    numberOfCards: 0
};

export const deckReducer = (
    state: deckReducerState = initalState,
    { type, payload }
): deckReducerState => {
    const { deck, shuffledDeck, currentCard, currentCardIndex, numberOfCards } = state;
    switch (type) {
        case 'LOAD_DECK':
            return {
                ...state,
                deck: payload.deck,
                shuffledDeck: shuffle(payload.deck),
                currentCardIndex: 0,
                numberOfCards: payload.deck.length,
                currentCard: payload.deck[0]
            };
        case 'REMOVE_DECK':
            return { ...state, deck: [] };
        case 'SHUFFLE_DECK':
            return {
                ...state,
                shuffledDeck: shuffle(shuffledDeck),
                currentCardIndex: 0,
                currentCard: deck![0]
            };
        case 'NEXT_CARD':
            let newIndex = currentCardIndex + 1;
            if (newIndex === numberOfCards)
                return {
                    ...state,
                    shuffledDeck: shuffle(shuffledDeck),
                    currentCardIndex: 0,
                    currentCard: deck![0]
                };
            return { ...state, currentCardIndex: newIndex, currentCard: deck![newIndex] };
        default:
            return state;
    }
};
