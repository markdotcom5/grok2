import React, { useState } from 'react';
import Link from 'next/link';

const chatRooms = ['General', 'Tech', 'Random'];

export default function ChatRooms() {
  return (
    <div className="chatrooms-container">
      <h1>Chat Rooms</h1>
      <ul>
        {chatRooms.map((room, index) => (
          <li key={index}>
            <Link href={`/chat/${room.toLowerCase()}`}>
              <a>{room}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
