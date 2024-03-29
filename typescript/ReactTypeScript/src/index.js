import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App";
import Button from "./Button.tsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Button />
    <App />
  </React.StrictMode>
);