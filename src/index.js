import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import Parse from "parse";

Parse.initialize(
  "JZR7qAeKjlKQTGTUsB6MS80ZfUiCpdUNaviJnH6a",
  "3czyhzVzwhGAte7pH1BYjqomQSATT8ggoIwnOSCq",
  "HhE6x96owxbIObVadQXzyt2ko4kyEUDBIZ0QrZPS"
);

Parse.serverURL = "https://parseapi.back4app.com/";

//export const excContext = createContext();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
