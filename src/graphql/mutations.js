/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRegion = /* GraphQL */ `
  mutation CreateRegion(
    $input: CreateRegionInput!
    $condition: ModelRegionConditionInput
  ) {
    createRegion(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateRegion = /* GraphQL */ `
  mutation UpdateRegion(
    $input: UpdateRegionInput!
    $condition: ModelRegionConditionInput
  ) {
    updateRegion(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteRegion = /* GraphQL */ `
  mutation DeleteRegion(
    $input: DeleteRegionInput!
    $condition: ModelRegionConditionInput
  ) {
    deleteRegion(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createFaction = /* GraphQL */ `
  mutation CreateFaction(
    $input: CreateFactionInput!
    $condition: ModelFactionConditionInput
  ) {
    createFaction(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateFaction = /* GraphQL */ `
  mutation UpdateFaction(
    $input: UpdateFactionInput!
    $condition: ModelFactionConditionInput
  ) {
    updateFaction(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteFaction = /* GraphQL */ `
  mutation DeleteFaction(
    $input: DeleteFactionInput!
    $condition: ModelFactionConditionInput
  ) {
    deleteFaction(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createCard = /* GraphQL */ `
  mutation CreateCard(
    $input: CreateCardInput!
    $condition: ModelCardConditionInput
  ) {
    createCard(input: $input, condition: $condition) {
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
export const updateCard = /* GraphQL */ `
  mutation UpdateCard(
    $input: UpdateCardInput!
    $condition: ModelCardConditionInput
  ) {
    updateCard(input: $input, condition: $condition) {
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
export const deleteCard = /* GraphQL */ `
  mutation DeleteCard(
    $input: DeleteCardInput!
    $condition: ModelCardConditionInput
  ) {
    deleteCard(input: $input, condition: $condition) {
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
export const createAliasItem = /* GraphQL */ `
  mutation CreateAliasItem(
    $input: CreateAliasItemInput!
    $condition: ModelAliasItemConditionInput
  ) {
    createAliasItem(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateAliasItem = /* GraphQL */ `
  mutation UpdateAliasItem(
    $input: UpdateAliasItemInput!
    $condition: ModelAliasItemConditionInput
  ) {
    updateAliasItem(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteAliasItem = /* GraphQL */ `
  mutation DeleteAliasItem(
    $input: DeleteAliasItemInput!
    $condition: ModelAliasItemConditionInput
  ) {
    deleteAliasItem(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createAlias = /* GraphQL */ `
  mutation CreateAlias(
    $input: CreateAliasInput!
    $condition: ModelAliasConditionInput
  ) {
    createAlias(input: $input, condition: $condition) {
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
export const updateAlias = /* GraphQL */ `
  mutation UpdateAlias(
    $input: UpdateAliasInput!
    $condition: ModelAliasConditionInput
  ) {
    updateAlias(input: $input, condition: $condition) {
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
export const deleteAlias = /* GraphQL */ `
  mutation DeleteAlias(
    $input: DeleteAliasInput!
    $condition: ModelAliasConditionInput
  ) {
    deleteAlias(input: $input, condition: $condition) {
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
export const createPassport = /* GraphQL */ `
  mutation CreatePassport(
    $input: CreatePassportInput!
    $condition: ModelPassportConditionInput
  ) {
    createPassport(input: $input, condition: $condition) {
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
export const updatePassport = /* GraphQL */ `
  mutation UpdatePassport(
    $input: UpdatePassportInput!
    $condition: ModelPassportConditionInput
  ) {
    updatePassport(input: $input, condition: $condition) {
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
export const deletePassport = /* GraphQL */ `
  mutation DeletePassport(
    $input: DeletePassportInput!
    $condition: ModelPassportConditionInput
  ) {
    deletePassport(input: $input, condition: $condition) {
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
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
