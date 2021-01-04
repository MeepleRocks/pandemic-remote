const cards = require("./data/cards.json");
const factions = require("./data/factions.json");
const regions = require("./data/regions.json");

module.exports = {
  Card: {
    faction: (parent) => {
      return factions[parent.faction];
    },
    region: (parent) => {
      return regions[parent.region];
    },
  },
  Query: {
    cards: () => cards,
  },
};
