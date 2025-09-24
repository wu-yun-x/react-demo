/*
 * @Author: st004362
 * @Date: 2025-04-03 13:51:27
 * @LastEditors: ST/St004362
 * @LastEditTime: 2025-04-03 15:58:33
 * @Description: cat内容
 */

import {MessageAction} from './types'
import { ContactAction } from './types';

interface ChatProps {
  contact: ContactAction;
  message: string;
  dispatch: React.Dispatch<MessageAction>; // 如果使用 useReducer 需要添加
}

export default function Chat({ contact, message,  dispatch }: ChatProps) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'和 ' + contact?.name + ' 聊天'}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          dispatch({
            type: 'edited_message',
            message: e.target.value
          });
        }}
      />
      <br />
      <button>发送到 {contact?.email}</button>
    </section>
  );
}