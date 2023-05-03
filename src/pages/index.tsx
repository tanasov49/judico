import React from "react";
import { createRoot } from "react-dom/client";
import App from "../App";
import "./styles.scss";
const container = document.querySelector(".app") as HTMLElement;
const root = createRoot(container);
import { BrowserRouter } from "react-router-dom";
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
