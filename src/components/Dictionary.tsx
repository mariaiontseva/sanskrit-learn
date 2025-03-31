import React, { useState } from 'react';
import './Dictionary.css';
import { useVocabularyStore } from '../store/vocabularyStore';
import type { VocabularyWord } from '../store/vocabularyStore';

interface DictionaryInfo {
  id: string;
  name: string;
  baseUrl: string;
}

const DICTIONARIES: DictionaryInfo[] = [
  {
    id: 'LAN',
    name: "Lanman's Sanskrit Reader (1884)",
    baseUrl: 'https://www.sanskrit-lexicon.uni-koeln.de/scans/LANScan/2020/web/webtc/getword.php'
  },
  {
    id: 'MW',
    name: 'Monier-Williams Sanskrit-English Dictionary',
    baseUrl: 'https://www.sanskrit-lexicon.uni-koeln.de/scans/MWScan/2020/web/webtc/getword.php'
  },
  {
    id: 'AP',
    name: 'Apte Practical Sanskrit-English Dictionary',
    baseUrl: 'https://www.sanskrit-lexicon.uni-koeln.de/scans/AP90Scan/2020/web/webtc/getword.php'
  }
];

export const Dictionary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedDict, setSelectedDict] = useState<string>(DICTIONARIES[0].id);
  const addWord = useVocabularyStore((state) => state.addWord);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    
    setIsLoading(true);
    setError(null);
    try {
      const dictionary = DICTIONARIES.find(d => d.id === selectedDict);
      if (!dictionary) {
        throw new Error('Selected dictionary not found');
      }

      const response = await fetch(dictionary.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          key: searchTerm,
          input: 'SLP1',
          output: 'IAST',
          filter: 'deva',
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
      }

      const data = await response.text();
      
      if (data.includes('Not Found') || data.trim() === '') {
        setError(`No results found for "${searchTerm}"`);
        setSearchResult('');
      } else {
        setSearchResult(data);
        
        // Extract text content from HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = data;
        const textContent = tempDiv.textContent || '';

        // Create a word object
        const wordToAdd: Omit<VocabularyWord, 'dateAdded'> = {
          sanskrit: searchTerm,
          transliteration: '', // We'll get this from the dictionary if available
          meaning: textContent.trim(),
          partOfSpeech: 'unknown', // Default value
          notes: `Added from ${dictionary.name}`
        };

        // Add to vocabulary
        addWord(wordToAdd);
      }
    } catch (err) {
      console.error('Dictionary search error:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch dictionary data. Please try again.');
      setSearchResult('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="dictionary-container">
      <select 
        className="dictionary-select"
        value={selectedDict}
        onChange={(e) => setSelectedDict(e.target.value)}
      >
        {DICTIONARIES.map(dict => (
          <option key={dict.id} value={dict.id}>
            {dict.name}
          </option>
        ))}
      </select>

      <div className="search-section">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter Sanskrit word..."
          className="search-input"
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button 
          onClick={handleSearch} 
          disabled={isLoading || !searchTerm.trim()} 
          className="search-button"
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>

      <div className="transliteration-guide">
        <h3>Enter Sanskrit words using simple transliteration:</h3>
        <ul>
          <li>Simple vowels: a, i, u</li>
          <li>Long vowels: aa/ā, ii/ī, uu/ū</li>
          <li>Special consonants: th, dh, gh, etc.</li>
          <li>Or use IAST: ś, ṣ, ṃ, ḥ</li>
        </ul>
      </div>

      <div className="selected-dictionary">
        Selected dictionary: {DICTIONARIES.find(d => d.id === selectedDict)?.name}
      </div>
      
      {error && <div className="error-message">{error}</div>}
      
      {searchResult && !error && (
        <div className="result-section">
          <div dangerouslySetInnerHTML={{ __html: searchResult }} />
        </div>
      )}
    </div>
  );
}; 