
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          AI Idea Validator
        </span>
      </h1>
      <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
        Turn your brainstorms into battle-tested business plans. Get instant, expert feedback on your startup ideas from an AI mentor.
      </p>
    </header>
  );
};

export default Header;
