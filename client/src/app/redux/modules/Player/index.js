import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchData from "./fetchFromJson";

export const name = "player";

export const initialState = {
  pending: false,
  error: "",
  1: { name: "", faction: 1, turnTokens: 0, hand: [], passport: [] },
  2: { name: "", faction: 1, turnTokens: 0, hand: [], passport: [] },
  3: { name: "", faction: 1, turnTokens: 0, hand: [], passport: [] },
  4: { name: "", faction: 1, turnTokens: 0, hand: [], passport: [] },
};

export const fetchPassports = createAsyncThunk(
  `${name}/fetchPassports`,
  async () => {
    const data = fetchData();
    return data;
  }
);

const slice = createSlice({
  name,
  initialState,
  reducers: {
    setName: (state, action) => {
      const { id, value } = action.payload;
      if (id && value) {
        return { ...state, [id]: { ...state[id], name: value } };
      }
      return state;
    },
    addTurnToken: (state, action) => {
      const playerId = action.payload;
      if (playerId in state) {
        const turnTokens = state[playerId].turnTokens + 1;
        return { ...state, [playerId]: { ...state[playerId], turnTokens } };
      }
      return state;
    },
    removeTurnToken: (state, action) => {
      const playerId = action.payload;
      if (playerId in state) {
        const dec = state[playerId].turnTokens - 1;
        const turnTokens = dec <= 0 ? 0 : dec;
        return { ...state, [playerId]: { ...state[playerId], turnTokens } };
      }
      return state;
    },
    changeFaction: (state, action) => {
      const playerId = action.payload;
      if (playerId in state) {
        const fac = state[playerId].faction + 1;
        const faction = fac > 3 ? 1 : fac;
        return { ...state, [playerId]: { ...state[playerId], faction } };
      }
      return state;
    },
  },
  extraReducers: {
    [fetchPassports.pending]: (state, action) => {
      return { ...state, pending: true };
    },
    [fetchPassports.fulfilled]: (state, action) => {
      return {
        ...state,
        1: { ...state["1"], passport: action.payload["1"] },
        2: { ...state["2"], passport: action.payload["2"] },
        3: { ...state["3"], passport: action.payload["3"] },
        4: { ...state["4"], passport: action.payload["4"] },
      };
    },
    [fetchPassports.rejected]: (state, action) => {
      return { ...state, error: action.error.message, pending: false };
    },
  },
});
export const {
  addTurnToken,
  removeTurnToken,
  setName,
  changeFaction,
} = slice.actions;
export default slice.reducer;
