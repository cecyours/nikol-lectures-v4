import { io } from "socket.io-client";

export const socket = io("http://192.168.1.3:3000", {
    withCredentials: true,
    autoConnect: true,
});