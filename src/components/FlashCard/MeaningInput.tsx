import * as React from 'react';
import { connect } from 'react-redux';

import { nextCard } from '../../store/actions/deckActions';

interface DispatchProps {
    displayNextCard: () => void;
}

interface Props extends DispatchProps {
    meanings: string[];
}

export const MeaningInput: React.FC<Props> = ({ meanings, displayNextCard }) => {
    const [ inputValue, setInputValue ] = React.useState('');
    const onChange = (e) => {
        if (meanings.includes(e.target.value.toLowerCase())) {
            setInputValue('');
            displayNextCard();
        }
        else {
            setInputValue(e.target.value);
        }
    };

    return (
        <form id="meaning-input-form" onSubmit={(e) => e.preventDefault()}>
            <input
                id="meaning-input"
                type="text"
                autoFocus
                value={inputValue}
                onChange={onChange}
            />
        </form>
    );
};

const mapDispatchToProps = (dispatch) => ({
    displayNextCard: () => dispatch(nextCard())
});

export default connect(null, mapDispatchToProps)(MeaningInput);
