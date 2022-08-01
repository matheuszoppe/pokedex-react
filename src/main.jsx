import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ApiPokemonStorage } from "./contexts/ApiPokemonContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiPokemonStorage>
      <App />
    </ApiPokemonStorage>
  </React.StrictMode>
);
