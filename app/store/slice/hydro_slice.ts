import {
  Species,
  SpeciesDetails,
  SpeciesSchema,
} from "@/app/scheme/species_details";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HydroAPIslice } from "./api/hydro_api_slice";

export interface SpeciesSearchState {
  data: Species | null;
  loading: boolean;
  error: string | null;
  selectedSpecies: SpeciesDetails | null;
}

const initialState: SpeciesSearchState = {
  data: null,
  loading: false,
  error: null,
  selectedSpecies: null,
};

const hydroSlice = createSlice({
  name: "hydroSlice",
  initialState,
  reducers: {
    selectSpecies: (state, action: PayloadAction<string>) => {
      state.selectedSpecies =
        state.data?.data.find(
          (species) => species.id == parseInt(action.payload)
        ) || null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(HydroAPIslice.endpoints.getCategory.matchPending, (state) => {
        state.loading = true;
      })
      .addMatcher(
        HydroAPIslice.endpoints.getCategory.matchFulfilled,
        (state, action: PayloadAction<Species>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addMatcher(
        HydroAPIslice.endpoints.getCategory.matchRejected,
        (state, action) => {
          state.loading = false;
          state.error = action.error.message || "Failed to fetch species";
        }
      );
  },
});

export default hydroSlice.reducer;
export const { selectSpecies } = hydroSlice.actions;
