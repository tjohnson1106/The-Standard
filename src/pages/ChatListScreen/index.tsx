import * as React from "react";

import { ChatList } from "./ChatsList";
import { ChatsNavbar } from "./ChatsNavbar";

export const ChatsListScreen = () => (
  <div>
    <ChatsNavbar />
    <ChatList />
  </div>
);
