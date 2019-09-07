import * as React from 'react';

import { cardType } from '../../typings/common';
import MeaningInput from './MeaningInput';

interface Props {
    card: cardType;
    numberOfCards: number;
    currentCardIndex: number;
}

export const FlashCard: React.FC<Props> = ({
    card: { kanji, meanings },
    numberOfCards,
    currentCardIndex
}) => {
    const [ showMeanings, setShowMeanings ] = React.useState(false);

    React.useEffect(() => {
        window.onkeydown = (event) => {
            if (event.key === 'Enter') {
                setShowMeanings(true);
            }
        };
    });

    React.useEffect(
        () => {
            setShowMeanings(false);
        },
        [ kanji ]
    );

    return (
        <div className="flash-card">
            <div id="kanji-header">{kanji}</div>
            <MeaningInput meanings={meanings} />
            <h2>
                Character: {currentCardIndex}/{numberOfCards}
            </h2>
            <div className="meanings">
                <h3>{showMeanings && meanings.join(', ')}</h3>
            </div>
        </div>
    );
};
