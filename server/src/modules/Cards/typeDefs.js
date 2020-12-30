module.exports.typeDefs = `
type Faction {
  id: ID
  name: String
}

type Region {
  id: ID
  name: String
}

type Card {
  id: ID
  name: String
  region: Region
  faction: Faction
  number: String
}

type Query {
  cards: [Card]
}`;
