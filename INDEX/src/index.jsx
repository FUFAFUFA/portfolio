import React from "react";
import ReactDOMClient from "react-dom/client";
import { PortfolioWorkPage } from "./screens/PortfolioWorkPage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<PortfolioWorkPage />);
