/*
 * @Author: st004362
 * @Date: 2025-04-03 11:13:05
 * @LastEditors: ST/St004362
 * @LastEditTime: 2025-09-24 15:50:14
 * @Description:
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    open: false,
  },
});
