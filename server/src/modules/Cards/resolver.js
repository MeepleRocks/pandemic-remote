import cards from "./data/cards.json";
import factions from "./data/factions.json";
import regions from "./data/regions";

const resolvers = {
  Card: {
    faction: ({ parent }) => factions[parent.faction],
    region: ({ parent }) => regions[parent.region],
  },
  Query: {
    cards: () => cards,
  },
};
