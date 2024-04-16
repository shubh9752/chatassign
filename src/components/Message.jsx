

import React, { useState } from 'react';

const Message = ({ text, username }) => {
  const [likes, setLikes] = useState(0);
  const [likedBy, setLikedBy] = useState([]);

  const handleLike = (user) => {
    if (!likedBy.includes(user)) {
      setLikes(likes + 1);
      setLikedBy([user,...likedBy]);
      console.log(likedBy);
    }
  };

  const getTimeString = () => {
    const currentDate = new Date();
    return currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="p-4 mb-4  bg-gray-200 rounded flex justify-between">
      <div>
        <span className="font-bold">{username}:</span> {text}
        <button onClick={()=>handleLike(username)} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
          Like ({likes})
        </button>
        {likedBy.length >= 0 && (
          <div className="mt-2">Liked by: {likedBy.join(', ')}</div>
        )}
      </div>
      <div className="text-gray-500">{getTimeString()}</div>
    </div>
  );
};

export default Message;




// .....................................................................

