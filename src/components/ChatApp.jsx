



// .....................................................
import React, { useState } from 'react';
import MessageInput from './MessageInput';
import Message from './Message';

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const ChatApp = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
    setMessages([...messages, { text: message, username: randomUser }]);
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <Message key={index} text={message.text} username={message.username} />
        ))}
      </div>
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatApp;
