
import React, { useState } from 'react';
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [showEmoji, setShowEmoji] = useState(false);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="flex items-center mt-4">
      <input
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Type your message..."
        className="w-full px-4 py-2 mr-2 text-gray-800 border border-gray-400 rounded"
      /><span onClick={() => setShowEmoji(!showEmoji)} >picker</span>  {showEmoji && (
              <div className="absolute top-[100%] right-2">
                <Picker
                  data={data}
                  emojiSize={20}
                  emojiButtonSize={28}
            
                  maxFrequentRows={0}
                />
              </div>
            )}
        
    
      <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded">
        Send
      </button>
    </div>
  );
};

export default MessageInput;

// ........................................................
