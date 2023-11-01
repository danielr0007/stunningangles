import { createSlice } from "@reduxjs/toolkit";

const mobileMenuVisibleSlice = createSlice({
  name: "mobileMenuVisible",
  initialState: { value: false },
  reducers: {
    toggleMobileMenu: (state) => {
      !state.value ? (state.value = true) : (state.value = false);
    },
  },
});

export const { toggleMobileMenu } = mobileMenuVisibleSlice.actions;

export default mobileMenuVisibleSlice.reducer;
