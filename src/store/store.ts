import { configureStore } from 'redux-starter-kit';
import thunk from 'redux-thunk';

import { rootReducer } from './rootReducer';

const middleware = [ thunk ];

export const store = configureStore({
    middleware,
    reducer: rootReducer,
    devTools: true
});
