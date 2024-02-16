import { CardDisplay, Filters } from "components";
import { fetchDeck } from "./functions/fetchDeck";
import React from "react";
import styled from "styled-components";

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const App: React.FC = () => {
  const freshDeck = fetchDeck();
  const [deck, setDeck] = React.useState([...freshDeck]);
  return (
    <AppDiv>
      <Filters freshDeck={freshDeck} currentDeck={deck} setDeck={setDeck} />
      <CardDisplay deck={deck} />
    </AppDiv>
  );
};

export default App;
