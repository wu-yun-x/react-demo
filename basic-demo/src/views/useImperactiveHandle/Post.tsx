import { forwardRef, useImperativeHandle, useRef } from "react";
import CommentList, { CommentListHandle } from "./CommentList";
import AddComment from "./AddComment";

// 定义 Post 可以暴露的方法接口

export interface PostHandle {
  scrollAndFocusAddComment: () => void;
}

const Post = forwardRef<PostHandle, object>((_props, ref) => {
  const commentsRef = useRef<CommentListHandle>(null);
  const addcommentRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        scrollAndFocusAddComment() {
          commentsRef.current?.scrollToBottom();
          addcommentRef.current?.focus();
        },
      };
    },
    []
  );

  return (
    <>
      <article>
        <p>Welcome to my blog!</p>
      </article>
      <CommentList ref={commentsRef} />
      <AddComment ref={addcommentRef} />
    </>
  );
});

export default Post;
