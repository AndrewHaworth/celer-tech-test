import { Deck } from "types/Card.types";

type Props = {
  deck: Deck;
  selectedSort: SelectedSort;
};

export type SelectedSort = "suit" | "rank";

const convertRank = (rank: string) => {
  switch (rank) {
    case "J":
      return 11;
    case "Q":
      return 12;
    case "K":
      return 13;
    case "A":
      return 14;
    default:
      return parseInt(rank);
  }
};

const sortDeckByRank = (deck: Deck) => {
  return [...deck].sort((a, b) => {
    return convertRank(a.rank) - convertRank(b.rank);
  });
};

const sortDeckBySuit = (deck: Deck) => {
  return [...deck].sort((a, b) => {
    if (a.suit === b.suit) {
      return convertRank(a.rank) - convertRank(b.rank);
    }
    return a.suit.localeCompare(b.suit);
  });
};

export const sortDeck = ({ deck, selectedSort }: Props) => {
  if (selectedSort === "suit") {
    return sortDeckBySuit(deck);
  }
  return sortDeckByRank(deck);
};
