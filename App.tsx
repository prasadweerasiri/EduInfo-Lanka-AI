
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Header from './components/Header';
import QueryInput from './components/QueryInput';
import ResponseDisplay from './components/ResponseDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorDisplay from './components/ErrorDisplay';
import { fetchEducationalInfo, GeminiServiceResponse } from './services/geminiService';
import { Language, AppMessage } from './types';
import { UI_TEXTS, getGreetingByTime, APP_LOGO_BASE64 } from './constants';

const App: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(Language.ENGLISH);
  const [messages, setMessages] = useState<AppMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [apiKeyMissing, setApiKeyMissing] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null); // For scrolling to new messages

  const uiTexts = UI_TEXTS[currentLanguage]; // This will re-evaluate when currentLanguage changes

  const initializeGreeting = useCallback(() => {
    const greetingText = getGreetingByTime(currentLanguage);
    setMessages([{
      id: `greeting-${currentLanguage}-${Date.now()}`,
      role: 'assistant',
      text: greetingText,
      timestamp: new Date(),
    }]);
  }, [currentLanguage]);


  useEffect(() => {
    // Effect to check API key status and initialize greeting message.
    const key = process.env.API_KEY;
    if (!key) {
      setApiKeyMissing(true);
      const missingKeyError = UI_TEXTS[currentLanguage].apiKeyMissingError; 
      setError(missingKeyError);
      setMessages([{
        id: 'apikey-error-' + Date.now(),
        role: 'error',
        text: missingKeyError,
        timestamp: new Date()
      }]);
    } else {
      setApiKeyMissing(false);
      // If the current error IS the API key error, or if messages only contain the API key error, clear it and show greeting.
      if (error === UI_TEXTS[currentLanguage].apiKeyMissingError || (messages.length === 1 && messages[0].id.startsWith('apikey-error'))) {
        setError(null);
        initializeGreeting(); 
      } else if (messages.length === 0 && !isLoading) { // Or if messages are empty and not loading, initialize greeting.
        initializeGreeting();
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLanguage, initializeGreeting]); 

  useEffect(() => {
    // Scroll to the bottom when new messages are added
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLanguage(lang);
    setError(null); // Clear general errors
    // Greeting will be updated by the useEffect dependent on currentLanguage -> initializeGreeting
  };

  const handleNewChat = () => {
    setError(null);
    setIsLoading(false);
    initializeGreeting();
  };

  const handleSubmitQuery = useCallback(async (userQuery: string) => {
    if (apiKeyMissing) {
      setError(uiTexts.apiKeyMissingError); 
      setMessages(prev => [...prev, {
        id: Date.now().toString() + '-apikey-error',
        role: 'error',
        text: uiTexts.apiKeyMissingError,
        timestamp: new Date()
      }]);
      return;
    }
    
    setIsLoading(true);
    setError(null);

    try {
      const result: GeminiServiceResponse = await fetchEducationalInfo(userQuery, currentLanguage);
      
      const assistantMessage: AppMessage = {
        id: Date.now().toString() + '-assistant',
        role: 'assistant',
        text: result.text || "I couldn't retrieve a text response.",
        sources: result.sources,
        timestamp: new Date(),
      };
      
      setMessages([assistantMessage]); // Replace previous messages with the new response

    } catch (e: any) {
      let errorMessageText = uiTexts.errorMessageDefault;
      if (e.message === "API_KEY_MISSING") {
        errorMessageText = uiTexts.apiKeyMissingError;
        setApiKeyMissing(true); 
      } else if (e.message) {
        errorMessageText = e.message.replace("Gemini API Error:", "").trim(); 
      }
      setError(errorMessageText);
      const errorMessage: AppMessage = {
        id: Date.now().toString() + '-error',
        role: 'error',
        text: errorMessageText,
        timestamp: new Date(),
      };
      setMessages([errorMessage]); 
    } finally {
      setIsLoading(false);
    }
  }, [currentLanguage, apiKeyMissing, uiTexts]);


  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-slate-100 via-sky-100 to-indigo-200 text-slate-900">
      <Header 
        currentLanguage={currentLanguage} 
        onLanguageChange={handleLanguageChange}
        onNewChat={handleNewChat}
      />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 max-w-3xl w-full flex flex-col">
        
        <QueryInput
          onSubmit={handleSubmitQuery}
          isLoading={isLoading}
          currentLanguage={currentLanguage}
        />
        
        <div className="flex-grow overflow-y-auto space-y-5 pr-1"> 
          {messages.map((msg) => {
            if (msg.id.startsWith('greeting-')) {
                 return (
                    <div key={msg.id} className="bg-white p-6 sm:p-8 rounded-xl shadow-xl text-center my-6">
                        <img 
                            src={APP_LOGO_BASE64}
                            alt="Sri Lanka Education Sector Logo" 
                            className="mx-auto mb-5 w-32 h-32 sm:w-40 sm:h-40 object-contain shadow-md rounded-lg" 
                        />
                        <p className="text-slate-700 text-lg sm:text-xl">{msg.text}</p>
                    </div>
                );
            }
            if (msg.role === 'error' && msg.id.startsWith('apikey-error-')) { 
                 return <ErrorDisplay key={msg.id} message={msg.text} />;
            }
            return <ResponseDisplay key={msg.id} message={msg} currentLanguage={currentLanguage} />;
          })}
          <div ref={messagesEndRef} /> 
        </div>
        
        {isLoading && <LoadingSpinner />}

        
        {error && !isLoading && !messages.some(m => m.role === 'error' && m.text === error) && !apiKeyMissing && (
          <div className="mt-4">
            <ErrorDisplay message={error} />
          </div>
        )}

        <footer className="text-center py-8 mt-10 text-sm text-slate-600">
          <p>&copy; {new Date().getFullYear()} EduInfo Lanka AI. All rights reserved.</p>
          <p className="text-xs">Information provided is for guidance and may require verification from official sources.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
