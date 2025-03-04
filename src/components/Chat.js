import React from 'react';

const Chat = () => {
  return (
    <div className="chat-container">
      <h1 className="chat-title">Live Chat</h1>
      <div className="chat-box">
        <div className="chat-message received">
          <p>Hello! How can I help you?</p>
          <span className="chat-time">10:05 AM</span>
        </div>
        <div className="chat-message sent">
          <p>I need assistance with my order.</p>
          <span className="chat-time">10:06 AM</span>
        </div>
      </div>
      <div className="chat-input-container">
        <input type="text" placeholder="Type a message..." className="chat-input" />
        <button className="chat-send-button">Send</button>
      </div>
    </div>
  );
};

export default Chat;