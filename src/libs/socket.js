import { io } from "socket.io-client";
import { api } from "../config/api";

export const socket = io(api.imgUrl)