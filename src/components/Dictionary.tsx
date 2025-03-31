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
  'aa': 'A', 'ii': 'I', 'uu': 'U',
  '.r': 'f', '.rr': 'F', '.l': 'x', '.ll': 'X',
  '.m': 'M', '.h': 'H',
  'sh': 'S', '.s': 'z',
  '~n': 'Y', '"n': 'N', '.n': 'R',
  '.t': 'w', '.d': 'q'
};

// Check if input contains IAST characters
const hasIastCharacters = (text: string): boolean => {
  const hasIast = /[āīūṛṝḷḹṃḥśṣñṅṇṭḍ]/.test(text);
  console.log('Checking for IAST characters:', text, hasIast);
  return hasIast;
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
      if (iastToSlp1Map[substr]) {
        result += iastToSlp1Map[substr];
        i += substr.length;
        found = true;
        console.log(`Converted "${substr}" to "${iastToSlp1Map[substr]}"`);
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
  let result = text;
  // Add debug logging
  console.log('Converting Velthuis to SLP1:', text);
  // Sort by length (descending) to handle longer patterns first
  const patterns = Object.entries(velthToSlp1Map).sort((a, b) => b[0].length - a[0].length);
  patterns.forEach(([velth, slp1]) => {
    const regex = new RegExp(velth, 'g');
    const matches = text.match(regex);
    if (matches) {
      console.log(`Found Velthuis pattern: ${velth} -> ${slp1}`);
    }
    result = result.replace(regex, slp1);
  });
  console.log('Result after Velthuis conversion:', result);
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

    // Try both conversion methods and use the one that gives a valid result
    const isIast = hasIastCharacters(term);
    console.log('Input term:', term, 'Is IAST:', isIast);
    
    let slp1Term;
    if (isIast) {
      slp1Term = convertIastToSlp1(term);
    } else {
      slp1Term = convertVelthToSlp1(term);
      // If Velthuis conversion didn't change anything, try IAST anyway
      if (slp1Term === term) {
        console.log('Velthuis conversion had no effect, trying IAST conversion');
        slp1Term = convertIastToSlp1(term);
      }
    }
    
    console.log('Final SLP1 term:', slp1Term);

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