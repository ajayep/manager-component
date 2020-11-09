import React from "react";
import "./styles.css";
import Filter from "./filter";
import Dashboard from "./dashboard";

export default function App() {
  return (
    <div className="App">
      <Filter />
      <Dashboard />
    </div>
  );
}
