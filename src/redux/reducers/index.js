import { combineReducers } from "redux";
import { Chatlist } from "./chatlist";
import { Auth } from "./auth";
import { Contact } from "./contact";
import { Messages } from "./messages";

const reducer = combineReducers({
  Chatlist,
  Auth,
  Contact,
  Messages,
});

export default reducer;
