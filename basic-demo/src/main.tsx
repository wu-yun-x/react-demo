/*
 * @Author: st004362
 * @Date: 2025-04-03 11:13:05
 * @LastEditors: ST/St004362
 * @LastEditTime: 2025-09-24 11:50:09
 * @Description:
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
