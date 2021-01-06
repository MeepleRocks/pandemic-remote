import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "./sessionStorage";
import board, { name as BoardName } from "./modules/Board";
import deck, { name as DeckName } from "./modules/Deck";
import player, { name as PlayerName } from "./modules/Player";

const storeKey = "PANDEMIC_ZERO_STORE";

const preloadedState = loadState(storeKey);

const store = configureStore({
  preloadedState,
  reducer: {
    [BoardName]: board,
    [DeckName]: deck,
    [PlayerName]: player,
  },
});

store.subscribe(() => {
  saveState(storeKey, store.getState());
});

export default store;
