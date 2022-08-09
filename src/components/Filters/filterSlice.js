import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filter",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    searchTodoByText: (state, action) => {
      state.search = action.payload.text;
    },
    searchTodoByRadio: (state, action) => {
      state.status = action.payload;
    },
    searchTodoBySelectOption: (state, action) => {
      state.priority = action.payload;
    },
  },
});
