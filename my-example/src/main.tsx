import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import App2 from "./App2.tsx";
import App5 from "./App5.tsx";
import ToDoList from "./App3.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <App2 />
    <ToDoList />
    <App5 />
  </StrictMode>
);
