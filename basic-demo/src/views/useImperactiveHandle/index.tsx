/*
 * @Author: st004362
 * @Date: 2025-09-24 11:57:03
 * @Description:
 * @LastEditTime: 2025-12-17 11:41:11
 * @LastEditors: ST/St004362
 */
import { useRef } from "react";
import Post, { PostHandle } from "./Post";

export default function ImperactiveHandle() {
  // 明确指定 postRef 的类型
  const postRef = useRef<PostHandle>(null);

  function handleClick() {
    // 安全调用方法，TypeScript 会检查类型
    postRef.current?.scrollAndFocusAddComment();
  }

  return (
    <>
      <button onClick={handleClick}>Write a comment</button>
      <Post ref={postRef} />
    </>
  );
}
