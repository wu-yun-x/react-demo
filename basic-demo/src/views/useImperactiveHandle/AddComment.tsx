import { forwardRef } from "react";

const AddComment = forwardRef<HTMLInputElement, object>((_props, ref) => {
  return <input placeholder="Add comment..." ref={ref} />;
});

export default AddComment;
