import { forwardRef, useRef, useImperativeHandle } from "react";

// 定义 CommentList 可以暴露的方法接口
export interface CommentListHandle {
  scrollToBottom: () => void;
}

const CommentList = forwardRef<CommentListHandle, object>((_props, ref) => {
  // 明确指定 divRef 类型为 HTMLDivElement
  const divRef = useRef<HTMLDivElement>(null);

  // 使用 useImperativeHandle 自定义暴露给父组件的 ref 方法
  useImperativeHandle(
    ref,
    () => {
      return {
        scrollToBottom() {
          if (divRef.current) {
            divRef.current.scrollTop = divRef.current.scrollHeight;
          }
        },
      };
    },
    []
  );

  // 生成评论列表
  const comments = Array.from({ length: 50 }, (_, i) => (
    <p key={i}>Comment #{i}</p>
  ));

  return (
    <div className="CommentList" ref={divRef}>
      {comments}
    </div>
  );
});

export default CommentList;
