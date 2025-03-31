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

// IAST characters that indicate the input is in IAST format
const iastCharacters = ['ā', 'ī', 'ū', 'ṛ', 'ṝ', 'ḷ', 'ḹ', 'ṃ', 'ḥ', 'ś', 'ṣ', 'ñ', 'ṅ', 'ṇ', 'ṭ', 'ḍ'];

// SLP1 characters that indicate the input is in SLP1 format
const slp1Characters = ['A', 'I', 'U', 'f', 'F', 'x', 'X', 'M', 'H', 'S', 'z', 'Y', 'N', 'R', 'w', 'q'];

export const Dictionary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedDict, setSelectedDict] = useState<string>(DICTIONARIES[0].id);
  const addWord = useVocabularyStore((state) => state.addWord);

  // Detect input format
  const detectInputFormat = (text: string): 'IAST' | 'SLP1' | null => {
    const hasIastChars = iastCharacters.some(char => text.includes(char));
    const hasSlp1Chars = slp1Characters.some(char => text.includes(char));
    
    if (hasIastChars) return 'IAST';
    if (hasSlp1Chars) return 'SLP1';
    return null; // Simple ASCII text
  };

  const searchDictionary = async (term: string, inputType: 'IAST' | 'SLP1') => {
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
        key: term,
        input: inputType,
        output: 'IAST',
        filter: 'deva',
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }

    const data = await response.text();
    if (data.includes('Not Found') || data.trim() === '') {
      return null;
    }
    return data;
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    
    setIsLoading(true);
    setError(null);
    try {
      // Detect input format
      const detectedFormat = detectInputFormat(searchTerm);
      
      // Try both formats
      let data = await searchDictionary(searchTerm, 'SLP1');
      if (!data) {
        data = await searchDictionary(searchTerm, 'IAST');
      }

      if (!data) {
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
          transliteration: searchTerm,
          meaning: textContent.trim(),
          partOfSpeech: 'unknown',
          notes: `Added from ${DICTIONARIES.find(d => d.id === selectedDict)?.name}`
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
          placeholder="Enter Sanskrit word (IAST or SLP1)..."
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
        <h3>Enter Sanskrit words using either:</h3>
        <div className="input-methods">
          <div className="input-method">
            <h4>IAST:</h4>
            <ul>
              <li>Long vowels: ā, ī, ū</li>
              <li>Retroflex: ṭ, ḍ, ṇ</li>
              <li>Sibilants: ś, ṣ</li>
              <li>Nasals: ṃ, ṅ, ñ</li>
              <li>Visarga: ḥ</li>
            </ul>
          </div>
          <div className="input-method">
            <h4>SLP1:</h4>
            <ul>
              <li>Long vowels: A, I, U</li>
              <li>Examples:</li>
              <li>kRSNa (for kṛṣṇa)</li>
              <li>Atman (for ātman)</li>
              <li>zAnti (for śānti)</li>
            </ul>
          </div>
        </div>
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