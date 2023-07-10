import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("customer") ?? sessionStorage.getItem("customer")) ?? {};

const customerSlice = createSlice({
  name: "customer",
  initialState: { value: initialState },
  reducers: {
    setUserTemp: (state, action) => {
      sessionStorage.setItem("customer", JSON.stringify(action.payload));
      state.value = action.payload;
    },
    setUserPermanent: (state, action) => {
      localStorage.setItem("customer", JSON.stringify(action.payload));
      state.value = action.payload;
    },
    unsetUser: (state) => {
      localStorage.removeItem("customer");
      sessionStorage.removeItem("customer")
      state.value = {};
    },
  },
});

export const { setUserTemp, setUserPermanent, unsetUser } = customerSlice.actions;
export default customerSlice.reducer;
