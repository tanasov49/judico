import React from "react";
import { createRoot } from "react-dom/client";
import App from "@components/App";
import "./styles/styles.scss";
const container = document.querySelector(".app") as HTMLElement;
const root = createRoot(container);
import { HashRouter } from "react-router-dom";
import { ModalState } from "@context";
root.render(
    <HashRouter>
        <ModalState>
            <App />
        </ModalState>
    </HashRouter>
);
