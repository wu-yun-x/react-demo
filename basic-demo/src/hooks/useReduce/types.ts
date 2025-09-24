/*
 * @Author: st004362
 * @Date: 2025-04-03 15:35:45
 * @LastEditors: ST/St004362
 * @LastEditTime: 2025-04-03 15:54:22
 * @Description: 定义ts类型
 */
// 定义 ChangedSelectionAction 类型，描述改变选中联系人的动作
export type ChangedSelectionAction = {
    type: 'changed_selection';
    contactId: number;
  };
  
  // 假设还有其他公共类型，例如 EditedMessageAction
  export interface EditedMessageAction  {
    type: 'edited_message';
    message: string;
  };
  
  // 定义 MessengerState 类型
  export interface MessengerState {
    selectedId: string | number;
    message: string;
  }
  
  // 定义 MessageAction 联合类型
  export type MessageAction = ChangedSelectionAction | EditedMessageAction;

  export interface Contact {
      id: number;
      name: string;
      email: string;
  } 

  export type ContactAction = Contact | undefined