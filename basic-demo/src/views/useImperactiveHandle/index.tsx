import { useRef } from "react";
import Post, { PostHandle } from "./Post";

export default function Page() {
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
