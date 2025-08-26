
import React from 'react';

interface IdeaInputFormProps {
  idea: string;
  setIdea: (idea: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

const IdeaInputForm: React.FC<IdeaInputFormProps> = ({ idea, setIdea, handleSubmit, isLoading }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="idea-input" className="block text-lg font-medium text-slate-300 mb-2">
        Describe your business idea
      </label>
      <textarea
        id="idea-input"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="e.g., An app that delivers personalized workout plans and meal suggestions based on a person’s daily mood."
        className="w-full h-36 p-4 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 resize-none placeholder:text-slate-500"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="mt-6 w-full flex items-center justify-center bg-purple-600 hover:bg-purple-700 disabled:bg-purple-900 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-lg shadow-lg shadow-purple-500/30 transform hover:scale-105"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Analyzing...
          </>
        ) : (
          'Validate Idea'
        )}
      </button>
    </form>
  );
};

export default IdeaInputForm;
