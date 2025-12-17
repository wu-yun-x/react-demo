/*
 * @Author: st004362
 * @Date: 2025-12-17 09:57:37
 * @LastEditTime: 2025-12-17 10:05:44
 * @Description: StateApp
 */
import { JSX } from "react";
import { useOnlineStatus } from "./useOnlineStatus";

// 为 StatusBar 增加类型标注
function StatusBar(): JSX.Element {
  const isOnline: boolean = useOnlineStatus();
  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

// 为 SaveButton 增加类型标注
function SaveButton(): JSX.Element {
  const isOnline: boolean = useOnlineStatus();

  function handleSaveClick(): void {
    console.log("✅ Progress saved");
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? "Save progress" : "Reconnecting..."}
    </button>
  );
}

// 为 StateApp 增加类型标注
export default function StateApp(): JSX.Element {
  return (
    <>
      <SaveButton />
      <StatusBar />
    </>
  );
}
