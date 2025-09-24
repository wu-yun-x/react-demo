import { useEffect } from "react";
import { createConnection } from "./chat.ts";

type UseChatRoomProps = {
  serverUrl: string;
  roomId: string;
};
export function useChatRoom({ serverUrl, roomId }: UseChatRoomProps) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);
}
