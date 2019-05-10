import * as React from "react";
import moment from "moment";
import { List, ListItem } from "@material-ui/core";

import { chats } from "../../data/db";

export const ChatList = () => {
  return (
    <div>
      <ul>
        <List>
          {chats.map((chat) => (
            <ListItem key={chat.id}>
              <img src={chat.picture} alt="screen photo" />
              <div>{chat.name}</div>
              {chat.lastMessage && (
                <>
                  <div>{chat.lastMessage.content}</div>
                  <div>
                    {moment(chat.lastMessage.createdAt).format("HH:mm")}
                  </div>
                </>
              )}
            </ListItem>
          ))}
        </List>
      </ul>
    </div>
  );
};
