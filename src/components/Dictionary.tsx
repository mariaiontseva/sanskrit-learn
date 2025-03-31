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

// IAST to SLP1 conversion map
const iastToSlp1Map: { [key: string]: string } = {
  'ā': 'A', 'ī': 'I', 'ū': 'U', 'ṛ': 'f', 'ṝ': 'F', 'ḷ': 'x', 'ḹ': 'X',
  'ṃ': 'M', 'ḥ': 'H', 'ś': 'S', 'ṣ': 'z', 'ñ': 'Y', 'ṅ': 'N', 'ṇ': 'R',
  'ṭ': 'w', 'ḍ': 'q'
};

// Velthuis to SLP1 conversion map
const velthToSlp1Map: { [key: string]: string } = {
  'aa': 'A', 'ii': 'I', 'uu': 'U',
  '.r': 'f', '.rr': 'F', '.l': 'x', '.ll': 'X',
  '.m': 'M', '.h': 'H',
  'sh': 'S', '.s': 'z',
  '~n': 'Y', '"n': 'N', '.n': 'R',
  '.t': 'w', '.d': 'q'
};

// Check if input contains IAST characters
const hasIastCharacters = (text: string): boolean => {
  return /[āīūṛṝḷḹṃḥśṣñṅṇṭḍ]/.test(text);
};

// Convert IAST to SLP1
const convertIastToSlp1 = (text: string): string => {
  let result = text;
  Object.entries(iastToSlp1Map).forEach(([iast, slp1]) => {
    result = result.replace(new RegExp(iast, 'g'), slp1);
  });
  return result;
};

// Convert Velthuis to SLP1
const convertVelthToSlp1 = (text: string): string => {
  let result = text;
  // Sort by length (descending) to handle longer patterns first
  const patterns = Object.entries(velthToSlp1Map).sort((a, b) => b[0].length - a[0].length);
  patterns.forEach(([velth, slp1]) => {
    result = result.replace(new RegExp(velth, 'g'), slp1);
  });
  return result;
};

export const Dictionary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedDict, setSelectedDict] = useState<string>(DICTIONARIES[0].id);
  const addWord = useVocabularyStore((state) => state.addWord);

  const searchDictionary = async (term: string) => {
    const dictionary = DICTIONARIES.find(d => d.id === selectedDict);
    if (!dictionary) {
      throw new Error('Selected dictionary not found');
    }

    // Convert input to SLP1 based on format
    const slp1Term = hasIastCharacters(term) ? convertIastToSlp1(term) : convertVelthToSlp1(term);
    console.log(`Converting "${term}" to SLP1: "${slp1Term}"`);

    const response = await fetch(dictionary.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        key: slp1Term,
        input: 'SLP1',
        output: 'IAST',
        filter: 'deva',
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }

    const data = await response.text();
    console.log('API Response:', data);
    
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
      const data = await searchDictionary(searchTerm);

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
          placeholder="Enter Sanskrit word (IAST or Velthuis)..."
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
            <h4>Velthuis:</h4>
            <ul>
              <li>Long vowels: aa, ii, uu</li>
              <li>Retroflex: .t, .d, .n</li>
              <li>Sibilants: sh, .s</li>
              <li>Nasals: .m, "n, ~n</li>
              <li>Examples:</li>
              <li>aatman (for ātman)</li>
              <li>k.r.s.na (for kṛṣṇa)</li>
              <li>shaanti (for śānti)</li>
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