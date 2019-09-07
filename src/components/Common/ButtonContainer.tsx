import * as React from 'react';
import { connect } from 'react-redux';

import { getDeck } from '../../store/actions/deckActions';
import { rootReducerState } from '../../store/rootReducer';

interface DispatchProps {
    getDeck: (loadLastDeck?: boolean) => void;
}

interface StateProps {
    buttonsEnabled: boolean;
}

interface Props extends DispatchProps, StateProps {}

export const ButtonContainer: React.FC<Props> = ({ getDeck, buttonsEnabled }) => {
    return (
        <div className="button-container">
            <button id="load-deck-button" onClick={() => getDeck(false)} disabled={!buttonsEnabled}>
                Load deck
            </button>
        </div>
    );
};

const mapStateToProps = (state: rootReducerState) => ({
    buttonsEnabled: state.ui.buttonsEnabled
});

export default connect(mapStateToProps, { getDeck })(ButtonContainer);
