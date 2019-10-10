import * as React from 'react';

import { cardType } from '../../typings/common';
import MeaningInput from './MeaningInput';
import { connect } from 'react-redux';
import { rootReducerState } from '../../store/rootReducer';

interface StateProps {
  card: cardType;
}

interface DispatchProps {}

interface OwnProps {
  card: cardType;
  numberOfCards: number;
  currentCardIndex: number;
}

interface Props extends OwnProps, DispatchProps, StateProps {}

export const FlashCard: React.FC<Props> = ({
  card: { kanji, meanings },
  numberOfCards,
  currentCardIndex
}: Props) => {
  const [showMeanings, setShowMeanings] = React.useState(false);

  React.useEffect(() => {
    window.onkeydown = event => {
      if (event.key === 'Enter') {
        setShowMeanings(true);
      }
      if (event.key === 'Escape') {
        setShowMeanings(true);
      }
    };
  });

  React.useEffect(() => {
    setShowMeanings(false);
  }, [kanji]);

  return (
    <div className="flash-card">
      <div id="kanji-header">{kanji[0]}</div>
      <MeaningInput meanings={meanings} />
      <h2>
        Character: {currentCardIndex + 1}/{numberOfCards}
      </h2>
      <div className="meanings">
        <h3>{showMeanings && meanings.join(', ')}</h3>
      </div>
    </div>
  );
};

const mapStateToProps = (state: rootReducerState) => ({
  card: state.deck.currentCard,
  currentCardIndex: state.deck.currentCardIndex,
  numberOfCards: state.deck.numberOfCards
});

export default connect<StateProps, DispatchProps>(mapStateToProps)(FlashCard);
