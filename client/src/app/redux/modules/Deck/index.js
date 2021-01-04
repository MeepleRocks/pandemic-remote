import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchData from "./fetchFromJson";

export const name = "deck";

export const initialState = {
  pending: false,
  error: "",
  cards: fetchData(),
  deck: [],
  discard: [],
  playerTurn: 1,
  1: { name: "", turnTokens: 0, hand: [] },
  2: { name: "", turnTokens: 0, hand: [] },
  3: { name: "", turnTokens: 0, hand: [] },
  4: { name: "", turnTokens: 0, hand: [] },
  incident: 0,
  escalation: 0,
};

export const fetchCards = createAsyncThunk(`${name}/fetchCards`, async () => {
  const data = fetchData();
  return data;
});

const slice = createSlice({
  name,
  initialState,
  reducers: {
    advanceTurn: (state, action) => {
      const advance = state.playerTurn + 1;
      const value = advance > 4 ? 1 : advance;
      return { ...state, playerTurn: value };
    },
    setName: (state, action) => {
      const { id, value } = action.payload;

      if (id && value) {
        return { ...state, [id]: { ...state[id], name: value } };
      }

      return state;
    },
    addTurnToken: (state, action) => {
      const handId = action.payload;
      if (handId in state) {
        const turnTokens = state[handId].turnTokens + 1;
        return { ...state, [handId]: { ...state[handId], turnTokens } };
      }
      return state;
    },
    removeTurnToken: (state, action) => {
      const handId = action.payload;
      if (handId in state) {
        const dec = state[handId].turnTokens - 1;
        const turnTokens = dec <= 0 ? 0 : dec;
        return { ...state, [handId]: { ...state[handId], turnTokens } };
      }
      return state;
    },
    draw: (state, action) => {
      const handId = action.payload.hand;
      const cardId = action.payload.card;
      const hand = [...state[handId].hand];
      const card = state.cards.find((item) => item.id === cardId);
      const deck = state.deck.filter((item) => item.id !== cardId);
      hand.push(card);

      return { ...state, deck, [handId]: { ...state[handId], hand } };
    },
    discard: (state, action) => {
      const handId = action.payload.hand;
      const cardId = action.payload.card;
      const discard = [...state.discard];
      const card = state.cards.find((item) => item.id === cardId);
      discard.push(card);
      const hand = state[handId].hand.filter((item) => item.id !== cardId);

      return { ...state, discard, [handId]: { ...state[handId], hand } };
    },
    xfer: (state, action) => {
      const from = action.payload.from;
      const to = action.payload.to;
      const cardId = action.payload.card;
      const fromHand = [...state[from].hand];
      const toHand = [...state[to].hand];
      const card = state.cards.find((item) => item.id === cardId);
      toHand.hand.push(card);
      const newFromHand = fromHand.hand.filter((item) => item.id !== cardId);

      return {
        ...state,
        [from]: { ...state[from], hand: newFromHand },
        [to]: { ...state[to], hand: toHand },
      };
    },
    redraw: (state, action) => {
      const handId = action.payload.hand;
      const cardId = action.payload.card;
      const hand = [...state[handId].hand];
      const card = state.cards.find((item) => item.id === cardId);
      const discard = state.discard.filter((item) => item.id !== cardId);
      hand.push(card);

      return { ...state, discard, [handId]: hand };
    },
    increase: (state, action) => {
      if (action.payload in state) {
        const value = state[action.payload] + 1;
        return { ...state, [action.payload]: value };
      }
      return state;
    },
    decrease: (state, action) => {
      if (action.payload in state) {
        const dec = state[action.payload] - 1;
        const value = dec <= 0 ? 0 : dec;

        return { ...state, [action.payload]: value };
      }
      return state;
    },
    reset: (state) => ({
      ...initialState,
      cards: state.cards,
      deck: state.cards,
    }),
  },
  extraReducers: {
    [fetchCards.pending]: (state, action) => {
      return { ...state, pending: true };
    },
    [fetchCards.fulfilled]: (state, action) => {
      return {
        ...state,
        cards: action.payload,
        deck: action.payload,
        pending: false,
      };
    },
    [fetchCards.rejected]: (state, action) => {
      return { ...state, error: action.error.message, pending: false };
    },
  },
});
export const {
  advanceTurn,
  addTurnToken,
  removeTurnToken,
  setName,
  draw,
  discard,
  increase,
  decrease,
  xfer,
  redraw,
  reset,
} = slice.actions;
export default slice.reducer;
