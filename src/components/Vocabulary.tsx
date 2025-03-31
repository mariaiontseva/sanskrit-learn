import React, { useState, useMemo } from 'react';
import './Vocabulary.css';
import { useVocabularyStore } from '../store/vocabularyStore';
import type { VocabularyWord } from '../store/vocabularyStore';

interface ExpandedCardState {
  [key: string]: boolean;
}

export const Vocabulary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPartOfSpeech, setSelectedPartOfSpeech] = useState<string>('all');
  const [expandedCards, setExpandedCards] = useState<ExpandedCardState>({});
  
  const words = useVocabularyStore((state) => state.words);
  const removeWord = useVocabularyStore((state) => state.removeWord);

  const partsOfSpeech = useMemo(() => {
    const uniqueParts = new Set(words.map((word: VocabularyWord) => word.partOfSpeech));
    return Array.from(uniqueParts) as string[];
  }, [words]);

  const filteredWords = useMemo(() => {
    return words.filter((word: VocabularyWord) => {
      const matchesSearch = word.sanskrit.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          word.meaning.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPartOfSpeech = selectedPartOfSpeech === 'all' || word.partOfSpeech === selectedPartOfSpeech;
      return matchesSearch && matchesPartOfSpeech;
    });
  }, [words, searchTerm, selectedPartOfSpeech]);

  const toggleCard = (sanskrit: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [sanskrit]: !prev[sanskrit]
    }));
  };

  const truncateText = (text: string, maxLength: number = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="vocabulary-container">
      <div className="controls">
        <div className="search-box">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search words..."
            className="search-input"
          />
        </div>
        
        <div className="filters">
          <select
            value={selectedPartOfSpeech}
            onChange={(e) => setSelectedPartOfSpeech(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Parts of Speech</option>
            {partsOfSpeech.map((pos: string) => (
              <option key={pos} value={pos}>{pos}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="vocabulary-stats">
        <p>Total words: {filteredWords.length}</p>
      </div>

      <div className="vocabulary-list">
        {filteredWords.map((word: VocabularyWord) => (
          <div 
            key={word.sanskrit} 
            className={`word-card ${expandedCards[word.sanskrit] ? 'expanded' : ''}`}
            onClick={() => toggleCard(word.sanskrit)}
          >
            <div className="word-header">
              <div className="word-summary">
                <h3 className="sanskrit-word">{word.sanskrit}</h3>
                {!expandedCards[word.sanskrit] && (
                  <p className="word-preview">{truncateText(word.meaning)}</p>
                )}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeWord(word.sanskrit);
                }}
                className="remove-button"
                title="Remove word"
              >
                ×
              </button>
            </div>

            {expandedCards[word.sanskrit] && (
              <div className="word-details">
                {word.transliteration && <p className="transliteration">{word.transliteration}</p>}
                <p className="meaning">{word.meaning}</p>
                <div className="word-metadata">
                  <span className="part-of-speech">{word.partOfSpeech}</span>
                  {word.root && <span className="root">Root: {word.root}</span>}
                  {word.chapter && <span className="chapter">Chapter {word.chapter}</span>}
                </div>
                {word.notes && <p className="notes">{word.notes}</p>}
                <div className="date-added">
                  Added: {new Date(word.dateAdded).toLocaleDateString()}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}; 