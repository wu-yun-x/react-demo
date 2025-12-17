/*
 * @Author: st004362
 * @Date: 2025-12-16 16:12:38
 * @LastEditors: ST/St004362
 * @LastEditTime: 2025-12-17 11:39:58
 * @Description: useOptimistic
 */

import {
  useOptimistic,
  useState,
  useRef,
  startTransition,
  FormEvent,
} from "react";
import { deliverMessage } from "./actions.js";

type Message = {
  text: string;
  sending?: boolean;
};

type ThreadProps = {
  messages: Message[];
  sendMessageAction: (formData: FormData) => Promise<void>;
};

function Thread({ messages, sendMessageAction }: ThreadProps) {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [optimisticMessages, addOptimisticMessage] = useOptimistic<
    Message[],
    string
  >(messages, (state, newMessage) => [
    {
      text: newMessage,
      sending: true,
    },
    ...state,
  ]);

  function formAction(formData: FormData) {
    const text: FormDataEntryValue | null = formData.get("message");
    if (typeof text !== "string") return;

    addOptimisticMessage(text);
    formRef.current?.reset();

    startTransition(async () => {
      await sendMessageAction(formData);
    });
  }

  // 可选：防止非 action 提交的兜底处理
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formAction(formData);
  };

  return (
    <>
      <form action={formAction} onSubmit={handleSubmit} ref={formRef}>
        <input type="text" name="message" placeholder="你好！" />
        <button type="submit">发送</button>
      </form>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small>（发送中……）</small>}
        </div>
      ))}
    </>
  );
}

export default function Optimistic() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "你好，在这儿！", sending: false },
  ]);

  async function sendMessageAction(formData: FormData) {
    const text: FormDataEntryValue | null = formData.get("message");
    if (typeof text !== "string") return;

    const sentMessage = await deliverMessage(text);
    startTransition(() => {
      setMessages((messages) => [{ text: sentMessage }, ...messages]);
    });
  }

  return <Thread messages={messages} sendMessageAction={sendMessageAction} />;
}
