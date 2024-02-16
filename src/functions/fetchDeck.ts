import { Card, Rank, Suit } from "types/Card.types";

const swapRank = (rank: Rank) => {
  switch (rank) {
    case "J":
      return "jack";
    case "Q":
      return "queen";
    case "K":
      return "king";
    case "A":
      return "ace";
    default:
      return rank;
  }
};

export const fetchDeck = (): Card[] => {
  const rank: Rank[] = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const suits: Suit[] = ["hearts", "diamonds", "clubs", "spades"];
  return suits.flatMap((suit) =>
    rank.map((rank) => ({
      suit,
      rank,
      imageLocation:
        process.env.PUBLIC_URL + `/images/cards/${swapRank(rank)}_of_${suit}.png`
    }))
  );
};
