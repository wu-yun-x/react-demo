/*
 * @Author: st004362
 * @Date: 2025-04-03 13:51:19
 * @LastEditors: ST/St004362
 * @LastEditTime: 2025-04-03 15:56:06
 * @Description: 
 */

import {MessageAction} from './types'
import { Contact } from './types.ts';



// 定义 ContactList 组件的 props 类型
interface ContactListProps {
  contacts: Contact[]; // contacts 是 Contact 类型的数组
  selectedId: number | string; // selectedId 可以是数字或者 null
  dispatch: React.Dispatch<MessageAction>; // dispatch 是一个函数，接收 MessageAction 类型的参数
}

// 为 ContactList 函数添加类型注解
export default function ContactList({ contacts, selectedId, dispatch }: ContactListProps) {
    return (
      <section className="contact-list">
        <ul>
          {contacts.map((contact: Contact) => ( // 为 map 方法中的 contact 参数添加类型注解
            <li key={contact.id}>
              <button
                onClick={() => {
                  dispatch({
                    type: 'changed_selection',
                    contactId: contact.id,
                  });
                }}>
                {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }