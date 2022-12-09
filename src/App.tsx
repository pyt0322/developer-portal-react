import React, { useState } from "react";
import logo from "./developer_logo.png";
import "./App.css";
import { Navbar } from "./Navbar";
import axios from "axios";

function App() {
  const [color, setColor] = useState("red");

  const handleClick = async () => {
    setColor(color === "red" ? "green" : "red");

    try {
      const result = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
      
      alert(JSON.stringify(result.data, null, 4));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App">
      <Navbar color={color} callback={handleClick} />
    </div>
  );
}

export default App;
