import { createSlice } from "@reduxjs/toolkit";

// Create a slice of the Redux state for package options
const packageOptionsSlice = createSlice({
  // The name of the slice, used for generating action types
  name: "packageOptions",
  // The initial state of the slice
  initialState: { selectedOption: null }, // No option selected initially
  // Reducers handle state changes for this slice
  reducers: {
    // Reducer to select a package option
    selectOption: (state, action) => {
      // Update the selectedOption in the state with the payload value
      state.selectedOption = action.payload;
    },
  },
});

// Export the action creator function for the selectOption reducer
export const { selectOption } = packageOptionsSlice.actions;

// Export the reducer function to be used in the store configuration
export default packageOptionsSlice.reducer;
