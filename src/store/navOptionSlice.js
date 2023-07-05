import { createSlice } from "@reduxjs/toolkit";

const navOptionSlice = createSlice({
  name: "navOptionSlice",
  initialState: false,
  reducers: {
    change: (state) => {
      return !state;
    },
    disable: () => false,
  },
});

export default navOptionSlice.reducer;
export const { change, disable } = navOptionSlice.actions;
