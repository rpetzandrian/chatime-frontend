import { combineReducers } from "redux";
import { Chatlist } from "./chatlist";
import { Auth } from "./auth";
import { Contact } from "./contact";
import { Messages, Chatroom } from "./messages";
import { User } from "./user";
import { exp } from "./exp";

const reducer = combineReducers({
  Chatlist,
  Auth,
  Contact,
  Messages,
  User,
  Chatroom,
  // exp,
});

export default reducer;
