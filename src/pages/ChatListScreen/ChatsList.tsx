import * as React from "react";
import moment from "moment";

import { chats } from "../../data/db";

export const ChatList = () => {
  return (
    <div>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <img src={chat.picture} alt="screen photo" />
            <div>{chat.name}</div>
            {chat.lastMessage && (
              <>
                <div>{chat.lastMessage.content}</div>
                <div>{moment(chat.lastMessage.createdAt).format("HH:mm")}</div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
