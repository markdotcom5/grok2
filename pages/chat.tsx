import React, { useState, useEffect } from "react";

const Chat: React.FC = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Fetch messages
  useEffect(() => {
    const fetchMessages = async () => {
      const res = await fetch("/api/messages");
      const data = await res.json();
      setMessages(data);
    };

    fetchMessages();
  }, []);

  // Send message
  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const res = await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newMessage, user: "test@example.com" }),
    });

    if (res.ok) {
      const updatedMessages = await res.json();
      setMessages((prev) => [...prev, updatedMessages.data]);
      setNewMessage("");
    }
  };

  return (
    <div>
      <h1>Chat Page</h1>
      <div>
        {messages.map((msg, i) => (
          <p key={i}>
            <strong>{msg.user}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chat;
