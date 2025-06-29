"use client";
import { useState } from "react";
import { useSocket } from "../context/SocketProvider";
import classes from "./page.module.css";

export default function Page() {
  const { sendMessage, messages } = useSocket();
  const [message, setMessage] = useState("");

  return (
    <div className={classes["background"]}>
      <div className={classes["chat-container"]}>
        <div className={classes["chat-header"]}>💬 Modern Chat</div>
        <div className={classes["messages-list"]}>
          {messages.map((e, i) => (
            <div
              key={i}
              className={
                i % 2 === 0
                  ? classes["message-bubble-sent"]
                  : classes["message-bubble-received"]
              }
            >
              {e}
            </div>
          ))}
        </div>
        <div className={classes["input-area"]}>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={classes["chat-input"]}
            placeholder="Type your message..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage(message);
                setMessage("");
              }
            }}
          />
          <button
            onClick={() => {
              sendMessage(message);
              setMessage("");
            }}
            className={classes["button"]}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}