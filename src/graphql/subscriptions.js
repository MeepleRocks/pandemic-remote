/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRegion = /* GraphQL */ `
  subscription OnCreateRegion {
    onCreateRegion {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRegion = /* GraphQL */ `
  subscription OnUpdateRegion {
    onUpdateRegion {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRegion = /* GraphQL */ `
  subscription OnDeleteRegion {
    onDeleteRegion {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFaction = /* GraphQL */ `
  subscription OnCreateFaction {
    onCreateFaction {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFaction = /* GraphQL */ `
  subscription OnUpdateFaction {
    onUpdateFaction {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFaction = /* GraphQL */ `
  subscription OnDeleteFaction {
    onDeleteFaction {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCard = /* GraphQL */ `
  subscription OnCreateCard {
    onCreateCard {
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
export const onUpdateCard = /* GraphQL */ `
  subscription OnUpdateCard {
    onUpdateCard {
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
export const onDeleteCard = /* GraphQL */ `
  subscription OnDeleteCard {
    onDeleteCard {
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
export const onCreateAliasItem = /* GraphQL */ `
  subscription OnCreateAliasItem {
    onCreateAliasItem {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAliasItem = /* GraphQL */ `
  subscription OnUpdateAliasItem {
    onUpdateAliasItem {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAliasItem = /* GraphQL */ `
  subscription OnDeleteAliasItem {
    onDeleteAliasItem {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAlias = /* GraphQL */ `
  subscription OnCreateAlias {
    onCreateAlias {
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
export const onUpdateAlias = /* GraphQL */ `
  subscription OnUpdateAlias {
    onUpdateAlias {
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
export const onDeleteAlias = /* GraphQL */ `
  subscription OnDeleteAlias {
    onDeleteAlias {
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
export const onCreatePassport = /* GraphQL */ `
  subscription OnCreatePassport {
    onCreatePassport {
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
export const onUpdatePassport = /* GraphQL */ `
  subscription OnUpdatePassport {
    onUpdatePassport {
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
export const onDeletePassport = /* GraphQL */ `
  subscription OnDeletePassport {
    onDeletePassport {
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
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
