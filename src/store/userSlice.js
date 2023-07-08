import { createSlice } from "@reduxjs/toolkit";

const initialState = { ...(localStorage.getItem("user")?.json() ?? []) };
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload;
    },
    unsetUser: () => {
      localStorage.removeItem("user");
      return {};
    },
  },
});

export const { setUser, unsetUser } = userSlice.actions;
export default userSlice.reducer;
