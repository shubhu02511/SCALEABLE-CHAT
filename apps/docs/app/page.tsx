
'use client';
import React from "react";
import "./globals.css"; // Ensure you have a CSS file for styles
import type { Metadata } from "next";
 
import localFont from "next/font/local"; // Import local font support
// Import local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
import { useState } from "react";

export default function Page() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      alert(`You typed: ${message}`);
      setMessage("");
    }
  };

  return (
    <div className="chat-container">
      <input
        className="chat-input"
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="chat-send" onClick={handleSend}>
        Send
      </button>
    </div>
  );
}
