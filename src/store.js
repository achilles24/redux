import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterState = { counter: 0 };
const authState = { disable: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: counterState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    }
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    login(state) {
      state.disable = true;
    },
    logout(state) {
      state.disable = false;
    }
  }
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  }
});

export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;

export default store;
