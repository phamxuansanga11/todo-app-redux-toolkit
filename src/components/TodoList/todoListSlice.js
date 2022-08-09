import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todoList",
  initialState: [
    {
      id: 1,
      name: "chua rua? chen' xong /false/",
      completed: false,
      priority: "High",
    },
    {
      id: 2,
      name: "xong roi` ne` ba /true/",
      completed: true,
      priority: "Medium",
    },
    { id: 3, name: "gau gau gau /true/", completed: true, priority: "Low" },
    {
      id: 4,
      name: "meo meo meo /false/",
      completed: false,
      priority: "Medium",
    },
    { id: 5, name: "hu' bo` /false/", completed: false, priority: "High" },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state = state.filter((todo) => todo.id !== action.payload);
      return state;
    },
    changeCompleted: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      currentTodo.completed = !currentTodo.completed;
    },
  },
});
