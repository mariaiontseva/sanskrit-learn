import React, { useState } from 'react';
import './App.css';
import { Dictionary } from './components/Dictionary';
import { Vocabulary } from './components/Vocabulary';
import { Grammar } from './components/Grammar';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dictionary');

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">संस्कृत Learn Sanskrit</h1>
        <p className="welcome">Welcome to your Sanskrit learning journey!</p>
        
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'dictionary' ? 'active' : ''}`}
            onClick={() => setActiveTab('dictionary')}
          >
            Dictionary
          </button>
          <button 
            className={`tab ${activeTab === 'vocabulary' ? 'active' : ''}`}
            onClick={() => setActiveTab('vocabulary')}
          >
            Vocabulary
          </button>
          <button 
            className={`tab ${activeTab === 'grammar' ? 'active' : ''}`}
            onClick={() => setActiveTab('grammar')}
          >
            Grammar
          </button>
          <button 
            className={`tab ${activeTab === 'phrases' ? 'active' : ''}`}
            onClick={() => setActiveTab('phrases')}
          >
            Phrases
          </button>
          <button 
            className={`tab ${activeTab === 'practice' ? 'active' : ''}`}
            onClick={() => setActiveTab('practice')}
          >
            Practice
          </button>
        </div>

        <div className="tab-container">
          {activeTab === 'dictionary' && <Dictionary />}
          {activeTab === 'vocabulary' && <Vocabulary />}
          {activeTab === 'grammar' && <Grammar />}
        </div>
      </div>
    </div>
  );
};

export default App;
