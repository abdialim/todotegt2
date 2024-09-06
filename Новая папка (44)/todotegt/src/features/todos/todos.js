import { createSlice, createAction } from '@reduxjs/toolkit';

// Создаем действия
export const addTodo = createAction('todos/addTodo');
export const removeTodo = createAction('todos/removeTodo');
export const toggleTodo = createAction('todos/toggleTodo');
export const editTodo = createAction('todos/editTodo');
export const toggleImportant = createAction('todos/toggleImportant');

// Начальное состояние
const initialState = {
  todos: [],
};

// Создаем срез с использованием createSlice
const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTodo, (state, action) => {
        state.todos.push({ id: Date.now(), text: action.payload, completed: false, important: false });
      })
      .addCase(removeTodo, (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
      })
      .addCase(toggleTodo, (state, action) => {
        const todo = state.todos.find(todo => todo.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
        }
      })
      .addCase(editTodo, (state, action) => {
        const { id, text } = action.payload;
        const todo = state.todos.find(todo => todo.id === id);
        if (todo) {
          todo.text = text;
        }
      })
      .addCase(toggleImportant, (state, action) => {
        const todo = state.todos.find(todo => todo.id === action.payload);
        if (todo) {
          todo.important = !todo.important;
        }
      });
  },
});

export default todos.reducer;
