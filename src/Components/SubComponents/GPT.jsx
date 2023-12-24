import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../../CSS/GPT.css';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    const newMessage = {
      id: uuidv4(),
      role: 'user',
      text: input,
    };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  // Generate random word for AI response
  const generateRandomWord = () => {
    const words = ['Hello', 'Not Now', 'Word', 'Test', 'Mock', 'Chat', 'React', 'JS', 'AI', 'As an AI developed by OpenAI, Im designed to assist users with their inquiries and provide helpful and constructive responses.'];
    return words[Math.floor(Math.random() * words.length)];
  };

  // Update messages with AI response after user sends a message
  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].role === 'user') {
      const aiMessage = {
        id: uuidv4(),
        role: 'ai',
        text: generateRandomWord(),
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    }
  }, [messages]);

  return (
    <div className="chatbox">
      <div className="messages">
        {messages.map((message) => (
          <p key={message.id} className={message.role}>{message.text}</p>
        ))}
      </div>
      <form className="input-area" onSubmit={handleInputSubmit}>
        <input value={input} onChange={handleInputChange} placeholder="Type a message..." />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBox;
