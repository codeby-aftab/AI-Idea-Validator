
import React, { useState, useEffect } from 'react';

const messages = [
  "Consulting market trends...",
  "Running competitive analysis...",
  "Simulating user personas...",
  "Brewing a fresh pot of coffee...",
  "Calculating potential risks...",
  "Crafting your validation plan...",
  "Adding a sprinkle of creative genius...",
];

const LoadingSpinner: React.FC = () => {
  const [message, setMessage] = useState(messages[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMessage(prevMessage => {
        const currentIndex = messages.indexOf(prevMessage);
        const nextIndex = (currentIndex + 1) % messages.length;
        return messages[nextIndex];
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-center py-12">
      <div className="animate-pulse text-3xl mb-4">💡</div>
      <p className="text-slate-400 transition-opacity duration-500">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
