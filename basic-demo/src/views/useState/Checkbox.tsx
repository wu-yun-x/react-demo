/*
 * @Author: st004362
 * @Date: 2025-12-16 18:04:21
 * @Description:
 * @LastEditTime: 2025-12-16 18:05:42
 * @LastEditors: ST/St004362
 */
import React, { useState } from "react";

export default function MyCheckbox() {
  const [liked, setLiked] = useState<boolean>(true);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setLiked(e.target.checked);
  }

  return (
    <>
      <label>
        <input type="checkbox" checked={liked} onChange={handleChange} />I liked
        this
      </label>
      <p>You {liked ? "liked" : "did not like"} this.</p>
    </>
  );
}
