/*
 * @Author: st004362
 * @Date: 2025-06-05 17:26:55
 * @LastEditTime: 2025-12-17 11:39:32
 * @LastEditors: ST/St004362
 * @Description: Callback
 */
import { useState } from "react";
import ProductPage from "./ProductPage.tsx";

export default function Callback() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <ProductPage
        referrer="wizard_of_oz"
        productId={123}
        theme={isDark ? "dark" : "light"}
      />
    </>
  );
}
