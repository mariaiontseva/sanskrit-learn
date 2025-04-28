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
    id: 'ALL',
    name: 'All Dictionaries',
    baseUrl: ''
  },
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
  'ṭ': 'w', 'ḍ': 'q',
  // Add regular characters that might be in the input
  'a': 'a', 'i': 'i', 'u': 'u', 'e': 'e', 'o': 'o',
  't': 't', 'd': 'd', 'n': 'n', 'm': 'm',
  'k': 'k', 'g': 'g', 'c': 'c', 'j': 'j',
  'p': 'p', 'b': 'b', 'v': 'v', 'y': 'y',
  'r': 'r', 'l': 'l', 's': 's', 'h': 'h'
};

// Velthuis to SLP1 conversion map
const velthToSlp1Map: { [key: string]: string } = {
  // Special characters
  'aa': 'A', 'ii': 'I', 'uu': 'U',
  '.r': 'f', '.rr': 'F', '.l': 'x', '.ll': 'X',
  '.m': 'M', '.h': 'H',
  'sh': 'S', '.s': 'z',
  '~n': 'Y', '"n': 'N', '.n': 'R',
  '.t': 'w', '.d': 'q',
  // Regular characters
  'a': 'a', 'i': 'i', 'u': 'u', 'e': 'e', 'o': 'o',
  't': 't', 'd': 'd', 'n': 'n', 'm': 'm',
  'k': 'k', 'g': 'g', 'c': 'c', 'j': 'j',
  'p': 'p', 'b': 'b', 'v': 'v', 'y': 'y',
  'r': 'r', 'l': 'l', 's': 's', 'h': 'h'
};

// Check if input contains IAST characters
const hasIastCharacters = (text: string): boolean => {
  const hasIast = /[āīūṛṝḷḹṃḥśṣñṅṇṭḍ]/.test(text);
  console.log('Checking for IAST characters:', text, hasIast);
  return hasIast;
};

// Check if input might be Velthuis
const hasVelthuis = (text: string): boolean => {
  const velthuis = /aa|ii|uu|\.r|\.l|\.m|\.h|sh|\.s|~n|"n|\.n|\.t|\.d/.test(text);
  console.log('Checking for Velthuis:', text, velthuis);
  return velthuis;
};

// Check if input might be SLP1
const isSlp1 = (text: string): boolean => {
  // SLP1 uses uppercase letters for long vowels and special characters
  const slp1 = /[AIUFXMHSZYNRWQ]/.test(text);
  console.log('Checking for SLP1:', text, slp1);
  return slp1;
};

// Convert IAST to SLP1
const convertIastToSlp1 = (text: string): string => {
  let result = '';
  console.log('Converting IAST to SLP1:', text);
  
  // Convert character by character to handle overlapping patterns
  let i = 0;
  while (i < text.length) {
    let found = false;
    // Try to match longer patterns first
    for (let len = 4; len > 0; len--) {
      const substr = text.substr(i, len);
      if (iastToSlp1Map[substr.toLowerCase()]) {
        // If the original character was uppercase, capitalize the first letter of the result
        const converted = iastToSlp1Map[substr.toLowerCase()];
        result += substr === substr.toUpperCase() ? converted.toUpperCase() : converted;
        i += substr.length;
        found = true;
        console.log(`Converted "${substr}" to "${converted}"`);
        break;
      }
    }
    if (!found) {
      // If no conversion found, keep the original character
      result += text[i];
      console.log(`Keeping original character: ${text[i]}`);
      i++;
    }
  }
  
  console.log('Result after IAST conversion:', result);
  return result;
};

// Convert Velthuis to SLP1
const convertVelthToSlp1 = (text: string): string => {
  let result = '';
  console.log('Converting Velthuis to SLP1:', text);
  
  // Convert character by character to handle overlapping patterns
  let i = 0;
  while (i < text.length) {
    let found = false;
    // Try to match longer patterns first (like 'aa', 'sh', etc.)
    for (let len = 4; len > 0; len--) {
      const substr = text.substr(i, len);
      const lowerSubstr = substr.toLowerCase();
      if (velthToSlp1Map[lowerSubstr]) {
        // If the original character was uppercase, capitalize the first letter of the result
        const converted = velthToSlp1Map[lowerSubstr];
        result += substr === substr.toUpperCase() ? converted.toUpperCase() : converted;
        i += substr.length;
        found = true;
        console.log(`Converted "${substr}" to "${converted}"`);
        break;
      }
    }
    if (!found) {
      // If no conversion found, keep the original character
      result += text[i];
      console.log(`Keeping original character: ${text[i]}`);
      i++;
    }
  }
  
  console.log('Result after Velthuis conversion:', result);
  return result;
};

export const Dictionary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedDict, setSelectedDict] = useState<string>('ALL');
  const addWord = useVocabularyStore((state) => state.addWord);

  const searchDictionary = async (term: string, dictionary: DictionaryInfo) => {
    // Determine the input format and convert accordingly
    let slp1Term;
    if (isSlp1(term)) {
      slp1Term = term;
      console.log('Using direct SLP1 input:', slp1Term);
    } else if (hasIastCharacters(term)) {
      slp1Term = convertIastToSlp1(term);
    } else if (hasVelthuis(term)) {
      slp1Term = convertVelthToSlp1(term);
    } else {
      slp1Term = convertVelthToSlp1(term);
      if (slp1Term === term) {
        slp1Term = convertIastToSlp1(term);
      }
    }
    
    console.log('Final SLP1 term:', slp1Term);

    try {
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
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.text();
      return data;
    } catch (error) {
      console.error(`Error searching ${dictionary.name}:`, error);
      return `Error searching ${dictionary.name}: ${error}`;
    }
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError('Please enter a search term');
      return;
    }

    setIsLoading(true);
    setError(null);
    setSearchResults({});

    try {
      if (selectedDict === 'ALL') {
        const results: { [key: string]: string } = {};
        const searchPromises = DICTIONARIES.slice(1).map(async (dict) => {
          const result = await searchDictionary(searchTerm, dict);
          results[dict.id] = result;
        });

        await Promise.all(searchPromises);
        setSearchResults(results);
      } else {
        const dictionary = DICTIONARIES.find(d => d.id === selectedDict);
        if (!dictionary) {
          throw new Error('Selected dictionary not found');
        }
        const result = await searchDictionary(searchTerm, dictionary);
        setSearchResults({ [selectedDict]: result });
      }
    } catch (error) {
      console.error('Search error:', error);
      setError(error instanceof Error ? error.message : 'An error occurred during search');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="dictionary-container">
      <div className="search-section">
        <div className="dictionary-select">
          <label htmlFor="dictionary">Dictionary:</label>
          <select
            id="dictionary"
            value={selectedDict}
            onChange={(e) => setSelectedDict(e.target.value)}
          >
            {DICTIONARIES.map(dict => (
              <option key={dict.id} value={dict.id}>
                {dict.name}
              </option>
            ))}
          </select>
        </div>
        <div className="search-input">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter Sanskrit word (IAST, Velthuis, or SLP1)"
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button onClick={handleSearch} disabled={isLoading}>
            {isLoading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="results-section">
        {Object.entries(searchResults).map(([dictId, result]) => (
          <div key={dictId} className="dictionary-result">
            <h3>{DICTIONARIES.find(d => d.id === dictId)?.name}</h3>
            <div className="result-content" dangerouslySetInnerHTML={{ __html: result }} />
          </div>
        ))}
      </div>
    </div>
  );
}; 