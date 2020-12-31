import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchData from "./fetchFromJson";

export const name = "deck";

export const initialState = {
  pending: false,
  error: "",
  cards: fetchData(),
  deck: [],
  discard: [],
  1: [],
  2: [],
  3: [],
  4: [],
};

export const fetchCards = createAsyncThunk(`${name}/fetchCards`, async () => {
  const data = fetchData();
  console.log(data);
  return data;
});

const slice = createSlice({
  name,
  initialState,
  reducers: {
    draw: (state, action) => {
      const handId = action.payload.hand;
      const cardId = action.payload.card;
      const hand = [...state[handId]];
      const card = state.cards.find((item) => item.id === cardId);
      const deck = state.deck.filter((item) => item.id !== cardId);
      hand.push(card);

      return { ...state, deck, [handId]: hand };
    },
    discard: (state, action) => {
      const handId = action.payload.hand;
      const cardId = action.payload.card;
      const discard = [...state.discard];
      const card = state.cards.find((item) => item.id === cardId);
      discard.push(card);
      const hand = state[handId].filter((item) => item.id !== cardId);

      return { ...state, discard, [handId]: hand };
    },
    xfer: (state, action) => {
      const from = action.payload.from;
      const to = action.payload.to;
      const cardId = action.payload.card;
      const fromHand = [...state[from]];
      const toHand = [...state[to]];
      const card = state.cards.find((item) => item.id === cardId);
      toHand.push(card);
      const newFromHand = fromHand.filter((item) => item.id !== cardId);

      return { ...state, [from]: newFromHand, [to]: toHand };
    },
    redraw: (state, action) => {
      const handId = action.payload.hand;
      const cardId = action.payload.card;
      const hand = [...state[handId]];
      const card = state.cards.find((item) => item.id === cardId);
      const discard = state.discard.filter((item) => item.id !== cardId);
      hand.push(card);

      return { ...state, discard, [handId]: hand };
    },
    reset: (state) => ({
      ...initialState,
      cards: state.cards,
      deck: state.cards,
    }),
  },
  extraReducers: {
    [fetchCards.pending]: (state, action) => {
      console.log("pending", action);
      return { ...state, pending: true };
    },
    [fetchCards.fulfilled]: (state, action) => {
      console.log("fulfilled", action);
      return {
        ...state,
        cards: action.payload,
        deck: action.payload,
        pending: false,
      };
    },
    [fetchCards.rejected]: (state, action) => {
      console.log("rejected", action);
      return { ...state, error: action.error.message, pending: false };
    },
  },
});
export const { draw, discard, xfer, redraw, reset } = slice.actions;
export default slice.reducer;
