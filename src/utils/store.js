import { configureStore } from "@reduxjs/toolkit";
import mobileMenuVisibleSlice from "./mobileMenuVisibleSlice";
import packageOptionsSlice from "./packageOptionsSlice";

const store = configureStore({
  reducer: {
    mobileMenuVisible: mobileMenuVisibleSlice,
    packageOptions: packageOptionsSlice,
  },
});

export default store;
