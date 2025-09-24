/* * @Author: st004362
 * @Date: 2025-04-03 13:51:44
 * @LastEditors: ST/St004362
 * @LastEditTime: 2025-04-03 13:51:50
 * @Description: reduce ts使用
 */

import {MessengerState,MessageAction} from './types'
export const initialState = {
  selectedId: 0,
  message: "你好",
};



export function messengerReducer(state:MessengerState, action:MessageAction):MessengerState {
  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId,
        message: "",
      };
    }
    case "edited_message": {
      return {
        ...state,
        message: action.message,
      };
    }
    default: {
      const unexpectedAction = action as never;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const type = (unexpectedAction as any).type; // 临时使用 any 获取类型
      throw Error("未知 action：" + type);
    }
  }
}
