import './scss/index.scss';

import * as React from 'react';
import { connect } from 'react-redux';

import ButtonContainer from './components/Common/ButtonContainer';
import FlashCardsContainer from './components/FlashCard/FlashCardContainer';
import TitleBar from './components/TitleBar/TitleBar';
import { getDeck } from './store/actions/deckActions';
import { sendMessage } from './ipc/ipcRenderer/ipcRenderer';
import { messageGetSettings } from './ipc/ipcRenderer/ipcRendererMessages';

interface DispatchProps {
    getDeck: () => void;
}

interface Props extends DispatchProps {}

export const App: React.FC<Props> = ({ getDeck }) => {
    React.useEffect(() => {
        getDeck();
        sendMessage(messageGetSettings());
    });
    return (
        <React.Fragment>
            <TitleBar />
            <div id="main-container">
                <FlashCardsContainer />
            </div>
            <ButtonContainer />
        </React.Fragment>
    );
};

export default connect<null, DispatchProps>(null, { getDeck })(App);
