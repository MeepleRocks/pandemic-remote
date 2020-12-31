import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "./sessionStorage";
import deck from "./modules/Deck";

const storeKey = "PANDEMIC_ZERO_STORE";

const preloadedState = loadState(storeKey);

const store = configureStore({
  preloadedState,
  reducer: {
    deck,
  },
});

store.subscribe(() => {
  saveState(storeKey, store.getState());
});

export default store;
