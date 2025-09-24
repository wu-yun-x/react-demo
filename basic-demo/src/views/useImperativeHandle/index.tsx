/*
 * @Author: st004362
 * @Date: 2025-06-10 17:01:19
 * @LastEditors: ST/St004362
 * @LastEditTime: 2025-09-23 10:48:56
 * @Description: imperative handle
 */
import { useRef } from "react";
import Post from "./Post.js";

export default function Page() {
  const postRef = useRef<HTMLInputElement | null>(null);

  function handleClick() {
    postRef.current?.scrollAndFocusAddComment();
  }

  return (
    <>
      <button onClick={handleClick}>Write a comment</button>
      <Post ref={postRef} />
    </>
  );
}
