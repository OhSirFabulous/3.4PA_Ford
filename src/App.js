  import React, { useState } from 'react';

const MessageDisplay=() => {
  const[message,setMessage]=useState('Hello World');
  const[inputText,setInputText]=useState('');
  const handleInputChange=(e)=>{
    setInputText(e.target.value);
  };
  const handleDisplayMessage=()=>{
    setMessage(inputText);
    setInputText('');
  };
  return(
    <div className="p-4 max-w-md mx-auto">
      <input
      type="text"
      placeholder="Message to Display"
      value={inputText}
      onChange={handleInputChange}
      className="w-full p-2 border rounded mb-2"
      />
      <button
      onClick={handleDisplayMessage}
      className="w-full bg-blue-400 text-white p-2 rounded mb-2"
      >
        Display Message
      </button>
      <h2 className="text-xl font-bold">{message}</h2>
    </div>
  );
};
export default MessageDisplay