import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const arr = ["1", "2", "3", "34"];

  let [items, setItems] = useState(arr);
  let [filter, setFilter] = useState("");

  useEffect(() => {
    let filteredItems = arr.filter((item) =>
      item.includes(filter.toLowerCase())
    );

    setItems(filteredItems);
  }, [filter]);

  return (
    <div className="App">
      <h1>Список задач</h1>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      {items.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}

export default App;
