import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction} from "@reduxjs/toolkit"
type Location = {
  LocationValue: string;
};

const initialState: Location = {
  LocationValue: ""
};

const LocationSlice = createSlice({
  name: "Location",
  initialState,
  reducers: {
    UpdateLocation: (state, action: PayloadAction<string>) => {
      state.LocationValue = action.payload;
    },
  }
});

export const { UpdateLocation } = LocationSlice.actions; 
export default LocationSlice.reducer; 
