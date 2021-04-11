/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRegion = /* GraphQL */ `
  query GetRegion($id: ID!) {
    getRegion(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listRegions = /* GraphQL */ `
  query ListRegions(
    $filter: ModelRegionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFaction = /* GraphQL */ `
  query GetFaction($id: ID!) {
    getFaction(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listFactions = /* GraphQL */ `
  query ListFactions(
    $filter: ModelFactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCard = /* GraphQL */ `
  query GetCard($id: ID!) {
    getCard(id: $id) {
      id
      name
      type
      description
      number
      region {
        id
        name
        createdAt
        updatedAt
      }
      Faction {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCards = /* GraphQL */ `
  query ListCards(
    $filter: ModelCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type
        description
        number
        region {
          id
          name
          createdAt
          updatedAt
        }
        Faction {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAliasItem = /* GraphQL */ `
  query GetAliasItem($id: ID!) {
    getAliasItem(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listAliasItems = /* GraphQL */ `
  query ListAliasItems(
    $filter: ModelAliasItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAliasItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAlias = /* GraphQL */ `
  query GetAlias($id: ID!) {
    getAlias(id: $id) {
      id
      name
      role {
        id
        name
        description
        createdAt
        updatedAt
      }
      asset {
        id
        name
        description
        createdAt
        updatedAt
      }
      liability {
        id
        name
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAliass = /* GraphQL */ `
  query ListAliass(
    $filter: ModelAliasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAliass(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        role {
          id
          name
          description
          createdAt
          updatedAt
        }
        asset {
          id
          name
          description
          createdAt
          updatedAt
        }
        liability {
          id
          name
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPassport = /* GraphQL */ `
  query GetPassport($id: ID!) {
    getPassport(id: $id) {
      id
      aliases {
        id
        name
        role {
          id
          name
          description
          createdAt
          updatedAt
        }
        asset {
          id
          name
          description
          createdAt
          updatedAt
        }
        liability {
          id
          name
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPassports = /* GraphQL */ `
  query ListPassports(
    $filter: ModelPassportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPassports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        aliases {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      id
      name
      description
      players {
        first {
          id
          name
          turns
        }
        second {
          id
          name
          turns
        }
        third {
          id
          name
          turns
        }
        forth {
          id
          name
          turns
        }
      }
      currentPlayer {
        id
        passport {
          id
          createdAt
          updatedAt
        }
        name
        turns
        alias {
          id
          name
          createdAt
          updatedAt
        }
        hand {
          id
          name
          type
          description
          number
          createdAt
          updatedAt
        }
      }
      gameDeck {
        id
        name
        type
        description
        number
        region {
          id
          name
          createdAt
          updatedAt
        }
        Faction {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      deck {
        id
        name
        type
        description
        number
        region {
          id
          name
          createdAt
          updatedAt
        }
        Faction {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      discard {
        id
        name
        type
        description
        number
        region {
          id
          name
          createdAt
          updatedAt
        }
        Faction {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      escalation
      createdAt
      updatedAt
    }
  }
`;
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        currentPlayer {
          id
          name
          turns
        }
        gameDeck {
          id
          name
          type
          description
          number
          createdAt
          updatedAt
        }
        deck {
          id
          name
          type
          description
          number
          createdAt
          updatedAt
        }
        discard {
          id
          name
          type
          description
          number
          createdAt
          updatedAt
        }
        escalation
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
