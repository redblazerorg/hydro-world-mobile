import { configureStore } from "@reduxjs/toolkit";
import { Store } from "redux";
import { HydroAPIslice } from "./slice/api/hydro_api_slice";
import hydroSlice from "./slice/hydro_slice";

export const store: Store = configureStore({
  reducer: {
    hydroSlice: hydroSlice,
    [HydroAPIslice.reducerPath]: HydroAPIslice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(HydroAPIslice.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
