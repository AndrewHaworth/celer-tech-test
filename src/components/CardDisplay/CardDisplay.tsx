import React from "react";
import styled from "styled-components";
import { Deck } from "types/Card.types";

type Props = {
  deck: Deck;
};

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  width: 100%;
  img {
    width: 100%;
  }
`;

export const CardDisplay: React.FC<Props> = ({ deck }) => {
  return (
    <CardGrid>
      {deck.map((card, index) => (
        <img
          key={index}
          src={card.imageLocation}
          alt={card.rank + " of " + card.suit}
        />
      ))}
    </CardGrid>
  );
};
