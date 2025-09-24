/*
 * @Author: st004362
 * @Date: 2025-06-10 17:23:06
 * @LastEditors: ST/St004362
 * @LastEditTime: 2025-06-10 17:23:17
 * @Description:
 */
import { forwardRef, useRef, useImperativeHandle } from "react";

const AddComment = forwardRef(function AddComment(props, ref) {
  return <input placeholder="Add comment..." ref={ref} />;
});

export default AddComment;
