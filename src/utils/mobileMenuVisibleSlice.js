import { createSlice } from "@reduxjs/toolkit";

// Create a slice of the Redux state for controlling mobile menu visibility
const mobileMenuVisibleSlice = createSlice({
  // The name of the slice, used for generating action types
  name: "mobileMenuVisible",

  // The initial state of the slice
  initialState: {
    value: false, // Mobile menu is hidden by default
  },

  // Reducers handle state changes for this slice
  reducers: {
    // Reducer to toggle the visibility of the mobile menu
    toggleMobileMenu: (state) => {
      // Toggle the value between true and false
      state.value = !state.value;
    },
  },
});

// Export the action creator function for the toggleMobileMenu reducer
export const { toggleMobileMenu } = mobileMenuVisibleSlice.actions;

// Export the reducer function to be used in the store configuration
export default mobileMenuVisibleSlice.reducer;
