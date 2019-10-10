import * as _ from 'lodash';

import { cardType, deckType } from '../../typings/common';

export interface deckReducerState {
  deck: deckType | null;
  shuffledDeck: deckType | null;
  currentCard: Partial<cardType> | null;
  currentCardIndex: number;
  numberOfCards: number;
}

const initalState: deckReducerState = {
  deck: null,
  shuffledDeck: null,
  currentCard: {
    kanji: ''
  },
  currentCardIndex: 0,
  numberOfCards: 0
};

export const deckReducer = (
  state: deckReducerState = initalState,
  { type, payload }
): deckReducerState => {
  const {
    deck,
    shuffledDeck,
    currentCard,
    currentCardIndex,
    numberOfCards
  } = state;

  let cCard;
  let sDeck;

  switch (type) {
    case 'LOAD_DECK':
      sDeck = _.shuffle(payload.deck);
      return {
        ...state,
        deck: payload.deck,
        shuffledDeck: sDeck,
        currentCardIndex: 0,
        numberOfCards: payload.deck.length,
        currentCard: sDeck[0]
      };
    case 'REMOVE_DECK':
      return { ...state, deck: [] };
    case 'SHUFFLE_DECK':
      sDeck = _.shuffle(shuffledDeck);
      return {
        ...state,
        shuffledDeck: sDeck,
        currentCardIndex: 0,
        currentCard: sDeck[0]
      };
    case 'NEXT_CARD':
      sDeck = _.shuffle(shuffledDeck);
      let newIndex = currentCardIndex + 1;
      if (newIndex === numberOfCards)
        return {
          ...state,
          shuffledDeck: sDeck,
          currentCardIndex: 0,
          currentCard: sDeck[0]
        };
      return {
        ...state,
        currentCardIndex: newIndex,
        currentCard: deck![newIndex]
      };
    default:
      return state;
  }
};
