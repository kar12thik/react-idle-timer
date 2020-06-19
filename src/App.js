import React from "react";
import "./styles.css";
import IdleTimerContainer from "./components/IdleTimerContainer";

export default function App() {
  return (
    <div className="App">
      <h1>React Idle Timer</h1>
      <h2>
        Idle Timer App to see if user is idle, then display modal to allow user
        to stay active or logout!
      </h2>
      <IdleTimerContainer />
    </div>
  );
}
