import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "./sessionStorage";
import deck, { name as DeckName } from "./modules/Deck";
import player, { name as PlayerName } from "./modules/Player";

const storeKey = "PANDEMIC_ZERO_STORE";

const preloadedState = loadState(storeKey);

const store = configureStore({
  preloadedState,
  reducer: {
    [DeckName]: deck,
    [PlayerName]: player,
  },
});

store.subscribe(() => {
  saveState(storeKey, store.getState());
});

export default store;
