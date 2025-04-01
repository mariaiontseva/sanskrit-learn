import React, { useState } from 'react';
import './Text.css';
import SargaTitle from './SargaTitle';
import { Sarga, Verse, WordAnalysis } from '../data/nalaText';

interface TextProps {
  sargas: Sarga[];
}

const Text: React.FC<TextProps> = ({ sargas }) => {
  const [expandedSargas, setExpandedSargas] = useState<number[]>([]);

  const toggleSarga = (sargaNumber: number) => {
    setExpandedSargas(prev => 
      prev.includes(sargaNumber) 
        ? prev.filter(num => num !== sargaNumber)
        : [...prev, sargaNumber]
    );
  };

  return (
    <div className="text-container">
      {sargas.map(sarga => (
        <div key={sarga.number} className="sarga-container">
          <SargaTitle
            number={sarga.number}
            title={sarga.title}
            isExpanded={expandedSargas.includes(sarga.number)}
            onToggle={() => toggleSarga(sarga.number)}
          />
          {expandedSargas.includes(sarga.number) && (
            <div className="verses-container">
              {sarga.verses.map((verse: Verse) => (
                <div key={verse.number} className="verse">
                  <div className="verse-number">{verse.number}</div>
                  <div className="verse-content">
                    <div className="sanskrit-text">{verse.sanskrit}</div>
                    <div className="transliteration">{verse.transliteration}</div>
                    <div className="translation">{verse.translation}</div>
                    {verse.wordByWord && (
                      <div className="word-by-word">
                        {verse.wordByWord.map((word: WordAnalysis, index: number) => (
                          <div key={index} className="word-analysis">
                            <span className="sanskrit-word">{word.sanskrit}</span>
                            <span className="iast">({word.iast})</span>
                            <span className="grammar">{word.grammar}</span>
                            <span className="meaning">- {word.meaning}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Text; 