import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';

import App from './App';
import { DragHandler } from './DragHandler';
import { store } from './store/store';

const AppWrapper: React.FC = () => {
    return (
        <React.Fragment>
            <Provider store={store}>
                <DragHandler>
                    <App />
                </DragHandler>
            </Provider>
        </React.Fragment>
    );
};

export const Wrapper = hot(AppWrapper);
