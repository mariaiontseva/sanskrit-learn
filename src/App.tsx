import React, { useState } from 'react';
import './App.css';
import { Dictionary } from './components/Dictionary';
import { Vocabulary } from './components/Vocabulary';
import { Grammar } from './components/Grammar';
import { Reading } from './components/Reading';
import { AIAssistant } from './components/AIAssistant';

function App() {
  const [activeTab, setActiveTab] = useState('dictionary');

  return (
    <div className="app">
      <nav className="nav-tabs">
        <button 
          className={`tab-button ${activeTab === 'dictionary' ? 'active' : ''}`}
          onClick={() => setActiveTab('dictionary')}
        >
          Dictionary
        </button>
        <button 
          className={`tab-button ${activeTab === 'vocabulary' ? 'active' : ''}`}
          onClick={() => setActiveTab('vocabulary')}
        >
          Vocabulary
        </button>
        <button 
          className={`tab-button ${activeTab === 'grammar' ? 'active' : ''}`}
          onClick={() => setActiveTab('grammar')}
        >
          Grammar
        </button>
        <button 
          className={`tab-button ${activeTab === 'reading' ? 'active' : ''}`}
          onClick={() => setActiveTab('reading')}
        >
          Reading
        </button>
        <button 
          className={`tab-button ${activeTab === 'assistant' ? 'active' : ''}`}
          onClick={() => setActiveTab('assistant')}
        >
          AI Assistant
        </button>
      </nav>

      <div className="tab-content">
        {activeTab === 'dictionary' && <Dictionary />}
        {activeTab === 'vocabulary' && <Vocabulary />}
        {activeTab === 'grammar' && <Grammar />}
        {activeTab === 'reading' && <Reading />}
        {activeTab === 'assistant' && <AIAssistant />}
      </div>
    </div>
  );
}

export default App;
