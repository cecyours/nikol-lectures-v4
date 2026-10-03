import { useEffect, useState } from "react";
import { socket } from "../socket";

function Chat() {
  const [userId, setUserId] = useState("");
  const [receiverId, setReceiverId] = useState("");
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [typing, setTyping] = useState(false);
  const [connected, setConnected] = useState(socket.connected);
  const [joined, setJoined] = useState(false);

  /*
   * SOCKET CONNECTION + LISTENERS
   *
   * Register listeners only once.
   */
  useEffect(() => {
    const handleConnect = () => {
      console.log("Socket connected:", socket.id);

      setConnected(true);

      // If user entered their ID before socket connected,
      // join automatically.
      if (userId.trim()) {
        socket.emit("join", userId.trim());
        setJoined(true);
      }
    };

    const handleDisconnect = () => {
      console.log("Socket disconnected");

      setConnected(false);
      setJoined(false);
      setTyping(false);
    };

    const handleConnectError = (error) => {
      console.error("Socket connection error:", error);

      setConnected(false);
    };

    const handleNewMessage = (data) => {
      console.log("New message:", data);

      setMessages((prev) => {
        /*
         * Prevent accidental duplicate messages.
         */
        const exists = prev.some(
          (msg) =>
            msg.senderId === data.senderId &&
            msg.receiverId === data.receiverId &&
            msg.message === data.message &&
            msg.createdAt === data.createdAt
        );

        if (exists) {
          return prev;
        }

        return [...prev, data];
      });
    };

    const handleOnlineUsers = (users) => {
      console.log("Online users:", users);

      setOnlineUsers(users);
    };

    const handleUserTyping = ({ userId: typingUserId }) => {
      setTyping((current) => {
        /*
         * Only show typing for currently selected receiver.
         */
        return typingUserId === receiverId ? true : current;
      });
    };

    const handleUserStoppedTyping = ({
      userId: stoppedUserId,
    }) => {
      if (stoppedUserId === receiverId) {
        setTyping(false);
      }
    };

    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.on("connect_error", handleConnectError);

    socket.on("newMessage", handleNewMessage);
    socket.on("onlineUsers", handleOnlineUsers);

    socket.on("userTyping", handleUserTyping);
    socket.on(
      "userStoppedTyping",
      handleUserStoppedTyping
    );

    /*
     * If socket is already connected when component mounts.
     */
    if (socket.connected) {
      setConnected(true);

      if (userId.trim()) {
        socket.emit("join", userId.trim());
        setJoined(true);
      }
    }

    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("connect_error", handleConnectError);

      socket.off("newMessage", handleNewMessage);
      socket.off("onlineUsers", handleOnlineUsers);

      socket.off("userTyping", handleUserTyping);
      socket.off(
        "userStoppedTyping",
        handleUserStoppedTyping
      );
    };
  }, []);

  /*
   * Keep typing listener behavior synchronized
   * with the currently selected receiver.
   *
   * This effect does NOT register socket listeners.
   */
  useEffect(() => {
    setTyping(false);
  }, [receiverId]);

  /*
   * JOIN CHAT
   */
  const joinChat = () => {
    const id = userId.trim();

    if (!id) {
      return;
    }

    if (!socket.connected) {
      console.log("Socket is not connected");

      return;
    }

    socket.emit("join", id);

    setJoined(true);

    console.log("Joining chat as:", id);
  };

  /*
   * SELECT USER
   */
  const selectUser = (id) => {
    if (id === userId) {
      return;
    }

    setReceiverId(id);
    setTyping(false);
  };

  /*
   * SEND MESSAGE
   */
  const sendMessage = () => {
    const text = message.trim();
    const receiver = receiverId.trim();

    if (!text) {
      return;
    }

    if (!receiver) {
      return;
    }

    if (!socket.connected) {
      console.log("Socket is not connected");

      return;
    }

    if (!joined) {
      console.log("Please join the chat first");

      return;
    }

    socket.emit("sendMessage", {
      receiverId: receiver,
      message: text,
    });

    socket.emit("stopTyping", {
      receiverId: receiver,
    });

    setMessage("");
    setTyping(false);
  };

  /*
   * TYPING
   */
  const handleTyping = (e) => {
    const value = e.target.value;

    setMessage(value);

    if (!receiverId) {
      return;
    }

    if (!socket.connected) {
      return;
    }

    if (!joined) {
      return;
    }

    if (value.trim().length > 0) {
      socket.emit("typing", {
        receiverId,
      });
    } else {
      socket.emit("stopTyping", {
        receiverId,
      });
    }
  };

  /*
   * ENTER TO SEND
   *
   * Shift + Enter can still create a newline if
   * you later change this input to textarea.
   */
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      sendMessage();
    }
  };

  /*
   * Don't show yourself in the contact list.
   */
  const otherOnlineUsers = onlineUsers.filter(
    (id) => id !== userId
  );

  /*
   * Messages for current conversation.
   */
  const conversationMessages = messages.filter(
    (msg) =>
      (msg.senderId === userId &&
        msg.receiverId === receiverId) ||
      (msg.senderId === receiverId &&
        msg.receiverId === userId)
  );

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl h-[650px] bg-white rounded-2xl shadow-xl overflow-hidden flex">
        {/* LEFT SIDE */}
        <div className="w-72 border-r bg-white flex flex-col">
          {/* Header */}
          <div className="p-5 border-b">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold text-slate-800">
                  Socket Chat
                </h1>

                <p className="text-sm text-slate-400 mt-1">
                  Real-time test
                </p>
              </div>

              {/* Connection status */}
              <div
                className={`w-3 h-3 rounded-full ${
                  connected
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
                title={
                  connected
                    ? "Connected"
                    : "Disconnected"
                }
              />
            </div>
          </div>

          {/* Current user */}
          <div className="p-4 border-b">
            <label className="text-xs font-medium text-slate-500">
              Your User ID
            </label>

            <div className="flex gap-2 mt-2">
              <input
                value={userId}
                onChange={(e) => {
                  setUserId(e.target.value);

                  /*
                   * If user changes ID, they need to
                   * join again.
                   */
                  setJoined(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    joinChat();
                  }
                }}
                placeholder="user1"
                disabled={joined}
                className="flex-1 min-w-0 px-3 py-2 text-sm border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-slate-100"
              />

              <button
                onClick={joinChat}
                disabled={
                  !userId.trim() ||
                  !connected ||
                  joined
                }
                className="px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed"
              >
                {joined ? "Joined" : "Join"}
              </button>
            </div>

            {/* Connection text */}
            <div className="mt-2">
              {!connected && (
                <p className="text-xs text-red-500">
                  Connecting to server...
                </p>
              )}

              {connected && !joined && (
                <p className="text-xs text-amber-500">
                  Connected. Enter your user ID and join.
                </p>
              )}

              {connected && joined && (
                <p className="text-xs text-green-500">
                  Connected as {userId}
                </p>
              )}
            </div>
          </div>

          {/* Online users */}
          <div className="p-4 flex-1 overflow-y-auto">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-slate-400 uppercase">
                Online Users
              </p>

              <span className="text-xs text-slate-400">
                {otherOnlineUsers.length}
              </span>
            </div>

            <div className="mt-3 space-y-2">
              {otherOnlineUsers.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-sm text-slate-400">
                    No other users online
                  </p>
                </div>
              ) : (
                otherOnlineUsers.map((id) => (
                  <button
                    key={id}
                    onClick={() => selectUser(id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition ${
                      receiverId === id
                        ? "bg-blue-50"
                        : "hover:bg-slate-50"
                    }`}
                  >
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                        {id.charAt(0).toUpperCase()}
                      </div>

                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-medium text-slate-700 truncate">
                        {id}
                      </p>

                      <p className="text-xs text-green-500">
                        Online
                      </p>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <div className="h-16 px-6 border-b flex items-center">
            {receiverId ? (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                  {receiverId
                    .charAt(0)
                    .toUpperCase()}
                </div>

                <div>
                  <p className="font-semibold text-slate-800">
                    {receiverId}
                  </p>

                  <p className="text-xs text-green-500">
                    Online
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-slate-500">
                  Select a user to start chatting
                </p>

                {!connected && (
                  <p className="text-xs text-red-500 mt-1">
                    Socket disconnected
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 bg-slate-50">
            {conversationMessages.length === 0 ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-3">
                    💬
                  </div>

                  <p className="text-slate-500">
                    No messages yet
                  </p>

                  <p className="text-xs text-slate-400 mt-1">
                    Send a message to start
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {conversationMessages.map(
                  (msg, index) => {
                    const mine =
                      msg.senderId === userId;

                    return (
                      <div
                        key={`${msg.createdAt}-${index}`}
                        className={`flex ${
                          mine
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[70%] px-4 py-2.5 rounded-2xl ${
                            mine
                              ? "bg-blue-600 text-white rounded-br-md"
                              : "bg-white text-slate-700 border rounded-bl-md"
                          }`}
                        >
                          <p className="text-sm break-words">
                            {msg.message}
                          </p>

                          <p
                            className={`text-[10px] mt-1 ${
                              mine
                                ? "text-blue-200"
                                : "text-slate-400"
                            }`}
                          >
                            {new Date(
                              msg.createdAt
                            ).toLocaleTimeString(
                              [],
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                              }
                            )}
                          </p>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            )}
          </div>

          {/* Typing */}
          {typing && receiverId && (
            <div className="px-6 py-2 text-xs text-slate-400">
              {receiverId} is typing...
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t bg-white">
            <div className="flex gap-3">
              <input
                value={message}
                onChange={handleTyping}
                onKeyDown={handleKeyDown}
                disabled={
                  !receiverId ||
                  !connected ||
                  !joined
                }
                placeholder={
                  !joined
                    ? "Join the chat first"
                    : !receiverId
                    ? "Select a user first"
                    : "Type a message..."
                }
                className="flex-1 min-w-0 px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-slate-100"
              />

              <button
                onClick={sendMessage}
                disabled={
                  !message.trim() ||
                  !receiverId ||
                  !connected ||
                  !joined
                }
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;