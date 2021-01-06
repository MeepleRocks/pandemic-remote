import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchData from "./fetchFromJson";

export const name = "board";

export const initialState = {
  pending: false,
  error: "",
  cities: [],
};

export const fetchCities = createAsyncThunk(`${name}/fetchCities`, async () => {
  const data = fetchData();
  return data;
});

const slice = createSlice({
  name,
  initialState,
  reducers: {
    increase: (state, action) => {
      const { id, key } = action.payload;
      if (id && key) {
        const cityIndex = state.cities.findIndex((c) => c.id === id);
        if (cityIndex >= 0) {
          const cities = [...state.cities];
          const inc = cities[cityIndex][key] + 1;
          const value = inc > 3 ? 3 : inc;
          cities[cityIndex][key] = value;
          return { ...state, cities };
        }
      }
      return state;
    },
    decrease: (state, action) => {
      const { id, key } = action.payload;
      if (id && key) {
        const cityIndex = state.cities.findIndex((c) => c.id === id);
        if (cityIndex >= 0) {
          const cities = [...state.cities];
          const dec = cities[cityIndex][key] - 1;
          const value = dec < 1 ? 0 : dec;
          cities[cityIndex][key] = value;
          return { ...state, cities };
        }
      }
      return state;
    },
  },
  extraReducers: {
    [fetchCities.pending]: (state, action) => {
      return { ...state, pending: true };
    },
    [fetchCities.fulfilled]: (state, action) => {
      return {
        ...state,
        cities: action.payload,
      };
    },
    [fetchCities.rejected]: (state, action) => {
      return { ...state, error: action.error.message, pending: false };
    },
  },
});
export const { increase, decrease } = slice.actions;
export default slice.reducer;
