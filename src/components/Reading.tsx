import React, { useState } from 'react';
import './Reading.css';
import { nalaText } from '../data/nalaText';

interface WordAnalysis {
  sanskrit: string;
  iast: string;
  grammar: string;
  meaning: string;
}

interface Verse {
  number: number;
  sanskrit: string;
  transliteration: string;
  translation: string;
  wordByWord?: WordAnalysis[];
}

export const Reading: React.FC = () => {
  const [activeText, setActiveText] = useState<'nala' | 'ramayana'>('nala');
  const [expandedVerses, setExpandedVerses] = useState<number[]>([]);

  const toggleVerse = (verseNumber: number) => {
    setExpandedVerses(prev => 
      prev.includes(verseNumber) 
        ? prev.filter(v => v !== verseNumber)
        : [...prev, verseNumber]
    );
  };

  return (
    <div className="reading-container">
      <div className="reading-tabs">
        <button 
          className={`reading-tab ${activeText === 'nala' ? 'active' : ''}`}
          onClick={() => setActiveText('nala')}
        >
          Nala & Damayantī
        </button>
        <button 
          className={`reading-tab ${activeText === 'ramayana' ? 'active' : ''}`}
          onClick={() => setActiveText('ramayana')}
        >
          Rāmāyaṇa
        </button>
      </div>

      <div className="reading-content">
        {activeText === 'nala' && (
          <div className="text-section">
            <h2>Nala & Damayantī</h2>
            <p className="text-info">From Lanman's Sanskrit Reader (1884)</p>
            <div className="sargas">
              {nalaText.map((sarga) => (
                <div key={sarga.number} className="sarga">
                  <h3>{sarga.title}</h3>
                  <div className="verses">
                    {sarga.verses.map((verse) => (
                      <div 
                        key={verse.number} 
                        className={`verse ${expandedVerses.includes(verse.number) ? 'expanded' : ''}`}
                        onClick={() => toggleVerse(verse.number)}
                      >
                        <div className="verse-number">Verse {verse.number}</div>
                        <div className="sanskrit-text">{verse.sanskrit}</div>
                        <div className="transliteration">{verse.transliteration}</div>
                        <div className="translation">{verse.translation}</div>
                        {verse.wordByWord && expandedVerses.includes(verse.number) && (
                          <div className="word-by-word">
                            <div className="word-analysis">
                              {verse.wordByWord.map((word, index) => (
                                <div key={index} className="word-item">
                                  <div className="sanskrit-word">{word.sanskrit}</div>
                                  <div className="iast-word">{word.iast}</div>
                                  <div className="grammar-info">{word.grammar}</div>
                                  <div className="meaning">{word.meaning}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeText === 'ramayana' && (
          <div className="text-section">
            <h2>Rāmāyaṇa</h2>
            <p className="text-info">From Lanman's Sanskrit Reader (1884)</p>
            <div className="sanskrit-text">
              {/* Text content will be added here */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reading; 