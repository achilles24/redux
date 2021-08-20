import React from "react";
import { Provider } from "react-redux";
import store from "./store";
//import Buttons from "./Buttons";
import Button from "./Button";
import Login from "./Login";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Login />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button />
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
