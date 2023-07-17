import { createSlice } from "@reduxjs/toolkit";

const initialState =
  JSON.parse(
    localStorage.getItem("customer") ?? sessionStorage.getItem("customer")
  ) ?? {};

const customerSlice = createSlice({
  name: "customer",
  initialState: { value: initialState },
  reducers: {
    setUser: (state, action) => {
      if (action.payload.type == "TEMPORARY") {
        sessionStorage.setItem(
          "customer",
          JSON.stringify(action.payload.value)
        );
      } else {
        localStorage.setItem("customer", JSON.stringify(action.payload.value));
      }
      state.value = action.payload.value;
    },
    unsetUser: (state) => {
      localStorage.removeItem("customer");
      sessionStorage.removeItem("customer");
      state.value = {};
    },
  },
});

export const { setUser, unsetUser } = customerSlice.actions;
export default customerSlice.reducer;
