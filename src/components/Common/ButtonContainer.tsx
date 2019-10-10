import * as React from 'react';
import { connect } from 'react-redux';

import { getDeck } from '../../store/actions/deckActions';
import { rootReducerState } from '../../store/rootReducer';
import { clipboard } from 'electron';

interface StateProps {
    buttonsEnabled: boolean;
    currentKanji: string;
}

interface DispatchProps {
    getDeck: (loadLastDeck?: boolean) => void;
}

interface Props extends DispatchProps, StateProps {}

export const ButtonContainer: React.FC<Props> = ({ getDeck, buttonsEnabled, currentKanji }) => {
    return (
        <div className="button-container">
            <button id="load-deck-button" onClick={() => getDeck(false)} disabled={!buttonsEnabled}>
                Load deck
            </button>

            <button
                id="copy-to-clipboard-button"
                onClick={() => writeToClipboard(currentKanji)}
                disabled={!buttonsEnabled}>
                Copy
            </button>
        </div>
    );
};

const mapStateToProps = (state: rootReducerState) => ({
    buttonsEnabled: state.ui.buttonsEnabled,
    currentKanji: state.deck.currentCard!.kanji || ''
});

export default connect<StateProps, DispatchProps>(mapStateToProps, { getDeck })(ButtonContainer);

const writeToClipboard = (kanji: string) => clipboard.writeText(kanji);
