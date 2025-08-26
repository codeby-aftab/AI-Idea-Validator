
import React, { useState, useCallback } from 'react';
import { validateIdea } from './services/geminiService';
import type { ValidationData } from './types';
import Header from './components/Header';
import IdeaInputForm from './components/IdeaInputForm';
import LoadingSpinner from './components/LoadingSpinner';
import ValidationResult from './components/ValidationResult';
import { parseValidationText } from './utils/parser';

const App: React.FC = () => {
  const [idea, setIdea] = useState<string>('');
  const [validationResult, setValidationResult] = useState<ValidationData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!idea.trim()) {
      setError('Please enter a business idea to validate.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setValidationResult(null);

    try {
      const resultText = await validateIdea(idea);
      const parsedData = parseValidationText(resultText);
      setValidationResult(parsedData);
    } catch (err) {
      console.error(err);
      setError('Failed to validate idea. The API key might be missing or invalid. Please check the console for more details.');
    } finally {
      setIsLoading(false);
    }
  }, [idea]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 font-sans p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Header />
        <main className="mt-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl shadow-purple-500/10 p-6 md:p-8 border border-slate-700">
            <IdeaInputForm
              idea={idea}
              setIdea={setIdea}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
            />
            {error && (
              <div className="mt-6 p-4 bg-red-900/50 text-red-300 border border-red-700 rounded-lg text-center">
                <p>{error}</p>
              </div>
            )}
          </div>
          
          {isLoading && <LoadingSpinner />}
          
          {validationResult && (
            <div className="mt-8">
              <ValidationResult data={validationResult} />
            </div>
          )}
        </main>
        <footer className="text-center text-slate-500 mt-12 text-sm">
            <p>Powered by AI. Validate your next big idea.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
