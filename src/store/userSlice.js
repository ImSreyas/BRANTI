import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../firebase.config";

const initialState =
  JSON.parse(localStorage.getItem("user")) ?? auth.currentUser ?? {};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload;
    },
    setUserAuth: (state, action) => {
      return action.payload;
    },
    unsetUser: () => {
      localStorage.removeItem("user");
      return {};
    },
  },
});

export const { setUser,setUserAuth, unsetUser } = userSlice.actions;
export default userSlice.reducer;
