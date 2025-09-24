/*
 * @Author: st004362
 * @Date: 2025-04-03 13:50:46
 * @LastEditors: ST/St004362
 * @LastEditTime: 2025-04-03 15:55:00
 * @Description: 使用useReduce
 */
import { useReducer } from 'react';
import Chat from './Chat.tsx';
import ContactList from './ContactList.tsx';
import { initialState, messengerReducer } from './messengerReducer.ts';
import { ContactAction } from './types.ts';




export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.message;
  const contact:ContactAction = contacts.find((c) => c.id === state.selectedId);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact?.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}

const contacts = [
  {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
  {id: 1, name: 'Alice', email: 'alice@mail.com'},
  {id: 2, name: 'Bob', email: 'bob@mail.com'},
];
