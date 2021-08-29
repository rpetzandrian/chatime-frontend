import { io } from "socket.io-client";
import { api } from "../config/api";

export const socket = io(api.imgUrl, {
  transports: ["websocket"], // or [ 'websocket', 'polling' ], which is the same thing
});
