import { createSlice } from "@reduxjs/toolkit";

const packageOptionsSlice = createSlice({
  name: "packageOptions",
  initialState: { selectedOption: null },
  reducers: {
    selectOption: (state, action) => {
      state.selectedOption = action.payload;
    },
  },
});

export const { selectOption } = packageOptionsSlice.actions;

export default packageOptionsSlice.reducer;
