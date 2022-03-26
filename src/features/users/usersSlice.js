import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Dan Brown" },
  { id: "1", name: "Hermann Hesse" },
  { id: "2", name: "Eric-Emmanuel Schmitt" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
