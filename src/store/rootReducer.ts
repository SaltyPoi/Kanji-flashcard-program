import { combineReducers } from 'redux';

import { deckReducer, deckReducerState } from './reducers/deckReducer';
import { uiReducer, uiReducerState } from './reducers/uiReducer';

export interface rootReducerState {
    deck: deckReducerState;
    ui: uiReducerState;
}

export const rootReducer = combineReducers({
    deck: deckReducer,
    ui: uiReducer
});
