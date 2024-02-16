import { sortDeck } from "functions/sortDeck";
import React from "react";
import styled from "styled-components";
import { Deck } from "types/Card.types";

type Props = {
  freshDeck: Deck;
  currentDeck: Deck;
  setDeck: (deck: Deck) => void;
};

const StyledSelect = styled.select`
  padding: 10px;
  margin: 10px;
  font-size: 16px;
`;

const FiltersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  background-color: aliceblue;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: lightblue;
  }
`;

export const Filters: React.FC<Props> = ({
  freshDeck,
  currentDeck,
  setDeck
}) => {
  const [drawnCards, setDrawnCards] = React.useState([] as Deck);
  return (
    <FiltersContainer>
      <StyledSelect
        onChange={({ target }) => {
          const selectedSuit = target.value;
          const filteredDeck = freshDeck.filter(
            (card) => card.suit === selectedSuit
          );
          setDeck(filteredDeck);
        }}
      >
        <option value="hearts">Hearts</option>
        <option value="diamonds">Diamonds</option>
        <option value="clubs">Clubs</option>
        <option value="spades">Spades</option>
      </StyledSelect>
      <StyledSelect
        onChange={({ target }) => {
          const selectedSort = target.value as "suit" | "rank";
          const sortedDeck = sortDeck({ deck: currentDeck, selectedSort });
          setDeck(sortedDeck);
        }}
      >
        <option value="suit">Suit</option>
        <option value="rank">Rank</option>
      </StyledSelect>
      <Button
        onClick={() => {
          if (currentDeck.length > 0) {
            setDeck(currentDeck.slice(0, -1));
            setDrawnCards([...drawnCards, currentDeck[currentDeck.length - 1]]);
          }
        }}
      >
        Draw
      </Button>
      <Button
        onClick={() => {
          const shuffledDeck = currentDeck.sort(() => Math.random() - 0.5);
          setDeck([...shuffledDeck]);
        }}
      >
        Shuffle
      </Button>
      <Button
        onClick={() => {
          setDrawnCards([]);
        }}
      >
        Clear Hand
      </Button>
      <Button onClick={() => setDeck(freshDeck)}>Reset</Button>
      <div>{currentDeck.length} cards remaining</div>
      <div>
        {drawnCards.length > 0 && (
          <div>
            {drawnCards.length} cards drawn:{" "}
            {drawnCards.map((card, index) => (
              <span key={index}>
                {card.rank} of {card.suit}
                {index === drawnCards.length - 1 ? "" : ", "}
              </span>
            ))}
          </div>
        )}
      </div>
    </FiltersContainer>
  );
};
