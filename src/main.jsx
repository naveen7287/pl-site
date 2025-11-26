import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";

// enable smooth scroll for anchor links
if (typeof window !== "undefined") document.documentElement.style.scrollBehavior = "smooth";

createRoot(document.getElementById("root")).render(<App />);
