import * as React from 'react';
import { connect } from 'react-redux';

import { sendMessage } from '../../ipc/ipcRenderer/ipcRenderer';
import { messageLoadDeck } from '../../ipc/ipcRenderer/ipcRendererMessages';
import { getDeck, nextCard } from '../../store/actions/deckActions';
import { deckReducerState } from '../../store/reducers/deckReducer';
import { rootReducerState } from '../../store/rootReducer';
import { deckType } from '../../typings/common';
import FlashCard from './FlashCard';

interface StateProps {
    deck: deckReducerState;
}

interface DispatchProps {
    getDeck: () => void;
    nextCard: () => void;
}

interface Props extends StateProps, DispatchProps {}

export const FlashCardsContainer: React.FC<Props> = ({
    deck: { currentCard, currentCardIndex, numberOfCards }
}) => {
    return (
        <div className="flash-card-container">
            {currentCard && (
                <FlashCard currentCardIndex={currentCardIndex} numberOfCards={numberOfCards} />
            )}
        </div>
    );
};

const mapStateToProps = (state: rootReducerState) => ({
    deck: state.deck,
    ui: state.ui
});

const mapDispatchToProps = (dispatch) => ({
    nextCard: dispatch(nextCard())
});

export default connect<StateProps, DispatchProps>(mapStateToProps, {
    ...mapDispatchToProps,
    getDeck
})(FlashCardsContainer);
