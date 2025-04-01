import React, { useState } from 'react';
import './NounDeclensionTable.css';

type StemType = 'a' | 'i' | 'u' | 'consonant';
type Gender = 'masculine' | 'feminine' | 'neuter';
type Case = 'nominative' | 'accusative' | 'instrumental' | 'dative' | 'ablative' | 'genitive' | 'locative' | 'vocative';
type Number = 'singular' | 'dual' | 'plural';

interface DeclensionPattern {
  stem: string;
  endings: {
    [key in Case]: {
      [key in Number]: string;
    };
  };
}

const declensionPatterns: Record<StemType, Record<Gender, DeclensionPattern>> = {
  a: {
    masculine: {
      stem: 'deva',
      endings: {
        nominative: { singular: 'ḥ', dual: 'au', plural: 'āḥ' },
        accusative: { singular: 'm', dual: 'au', plural: 'n' },
        instrumental: { singular: 'ena', dual: 'ābhyām', plural: 'aiḥ' },
        dative: { singular: 'āya', dual: 'ābhyām', plural: 'ebhyaḥ' },
        ablative: { singular: 'āt', dual: 'ābhyām', plural: 'ebhyaḥ' },
        genitive: { singular: 'sya', dual: 'yoḥ', plural: 'ānām' },
        locative: { singular: 'e', dual: 'yoḥ', plural: 'eṣu' },
        vocative: { singular: 'a', dual: 'au', plural: 'āḥ' }
      }
    },
    feminine: {
      stem: 'kanyā',
      endings: {
        nominative: { singular: 'ā', dual: 'e', plural: 'āḥ' },
        accusative: { singular: 'ām', dual: 'e', plural: 'āḥ' },
        instrumental: { singular: 'ayā', dual: 'ābhyām', plural: 'ābhiḥ' },
        dative: { singular: 'āyai', dual: 'ābhyām', plural: 'ābhyaḥ' },
        ablative: { singular: 'āyāḥ', dual: 'ābhyām', plural: 'ābhyaḥ' },
        genitive: { singular: 'āyāḥ', dual: 'yoḥ', plural: 'ānām' },
        locative: { singular: 'āyām', dual: 'yoḥ', plural: 'āsu' },
        vocative: { singular: 'e', dual: 'e', plural: 'āḥ' }
      }
    },
    neuter: {
      stem: 'phala',
      endings: {
        nominative: { singular: 'm', dual: 'e', plural: 'āni' },
        accusative: { singular: 'm', dual: 'e', plural: 'āni' },
        instrumental: { singular: 'ena', dual: 'ābhyām', plural: 'aiḥ' },
        dative: { singular: 'āya', dual: 'ābhyām', plural: 'ebhyaḥ' },
        ablative: { singular: 'āt', dual: 'ābhyām', plural: 'ebhyaḥ' },
        genitive: { singular: 'sya', dual: 'yoḥ', plural: 'ānām' },
        locative: { singular: 'e', dual: 'yoḥ', plural: 'eṣu' },
        vocative: { singular: 'm', dual: 'e', plural: 'āni' }
      }
    }
  },
  i: {
    masculine: {
      stem: 'agni',
      endings: {
        nominative: { singular: 'ḥ', dual: 'ī', plural: 'ayaḥ' },
        accusative: { singular: 'm', dual: 'ī', plural: 'īn' },
        instrumental: { singular: 'inā', dual: 'ibhyām', plural: 'ibhiḥ' },
        dative: { singular: 'aye', dual: 'ibhyām', plural: 'ibhyaḥ' },
        ablative: { singular: 'eḥ', dual: 'ibhyām', plural: 'ibhyaḥ' },
        genitive: { singular: 'eḥ', dual: 'yoḥ', plural: 'īnām' },
        locative: { singular: 'au', dual: 'yoḥ', plural: 'iṣu' },
        vocative: { singular: 'e', dual: 'ī', plural: 'ayaḥ' }
      }
    },
    feminine: {
      stem: 'mati',
      endings: {
        nominative: { singular: 'ḥ', dual: 'ī', plural: 'ayaḥ' },
        accusative: { singular: 'm', dual: 'ī', plural: 'īḥ' },
        instrumental: { singular: 'yā', dual: 'ibhyām', plural: 'ibhiḥ' },
        dative: { singular: 'yai', dual: 'ibhyām', plural: 'ibhyaḥ' },
        ablative: { singular: 'yāḥ', dual: 'ibhyām', plural: 'ibhyaḥ' },
        genitive: { singular: 'yāḥ', dual: 'yoḥ', plural: 'īnām' },
        locative: { singular: 'yām', dual: 'yoḥ', plural: 'iṣu' },
        vocative: { singular: 'e', dual: 'ī', plural: 'ayaḥ' }
      }
    },
    neuter: {
      stem: 'vāri',
      endings: {
        nominative: { singular: '', dual: 'iṇī', plural: 'īṇi' },
        accusative: { singular: '', dual: 'iṇī', plural: 'īṇi' },
        instrumental: { singular: 'iṇā', dual: 'ibhyām', plural: 'ibhiḥ' },
        dative: { singular: 'iṇe', dual: 'ibhyām', plural: 'ibhyaḥ' },
        ablative: { singular: 'iṇaḥ', dual: 'ibhyām', plural: 'ibhyaḥ' },
        genitive: { singular: 'iṇaḥ', dual: 'ṇoḥ', plural: 'īṇām' },
        locative: { singular: 'iṇi', dual: 'ṇoḥ', plural: 'iṣu' },
        vocative: { singular: 'e', dual: 'iṇī', plural: 'īṇi' }
      }
    }
  },
  u: {
    masculine: {
      stem: 'bhānu',
      endings: {
        nominative: { singular: 'ḥ', dual: 'ū', plural: 'avaḥ' },
        accusative: { singular: 'm', dual: 'ū', plural: 'ūn' },
        instrumental: { singular: 'unā', dual: 'ubhyām', plural: 'ubhiḥ' },
        dative: { singular: 'ave', dual: 'ubhyām', plural: 'ubhyaḥ' },
        ablative: { singular: 'oḥ', dual: 'ubhyām', plural: 'ubhyaḥ' },
        genitive: { singular: 'oḥ', dual: 'voḥ', plural: 'ūnām' },
        locative: { singular: 'au', dual: 'voḥ', plural: 'uṣu' },
        vocative: { singular: 'o', dual: 'ū', plural: 'avaḥ' }
      }
    },
    feminine: {
      stem: 'dhenu',
      endings: {
        nominative: { singular: 'ḥ', dual: 'ū', plural: 'avaḥ' },
        accusative: { singular: 'm', dual: 'ū', plural: 'ūḥ' },
        instrumental: { singular: 'vā', dual: 'ubhyām', plural: 'ubhiḥ' },
        dative: { singular: 'vai', dual: 'ubhyām', plural: 'ubhyaḥ' },
        ablative: { singular: 'vāḥ', dual: 'ubhyām', plural: 'ubhyaḥ' },
        genitive: { singular: 'vāḥ', dual: 'voḥ', plural: 'ūnām' },
        locative: { singular: 'vām', dual: 'voḥ', plural: 'uṣu' },
        vocative: { singular: 'o', dual: 'ū', plural: 'avaḥ' }
      }
    },
    neuter: {
      stem: 'madhu',
      endings: {
        nominative: { singular: '', dual: 'unī', plural: 'ūni' },
        accusative: { singular: '', dual: 'unī', plural: 'ūni' },
        instrumental: { singular: 'unā', dual: 'ubhyām', plural: 'ubhiḥ' },
        dative: { singular: 'une', dual: 'ubhyām', plural: 'ubhyaḥ' },
        ablative: { singular: 'unaḥ', dual: 'ubhyām', plural: 'ubhyaḥ' },
        genitive: { singular: 'unaḥ', dual: 'noḥ', plural: 'ūnām' },
        locative: { singular: 'uni', dual: 'noḥ', plural: 'uṣu' },
        vocative: { singular: 'o', dual: 'unī', plural: 'ūni' }
      }
    }
  },
  consonant: {
    masculine: {
      stem: 'rājan',
      endings: {
        nominative: { singular: '', dual: 'au', plural: 'aḥ' },
        accusative: { singular: 'am', dual: 'au', plural: 'aḥ' },
        instrumental: { singular: 'ā', dual: 'bhyām', plural: 'bhiḥ' },
        dative: { singular: 'e', dual: 'bhyām', plural: 'bhyaḥ' },
        ablative: { singular: 'aḥ', dual: 'bhyām', plural: 'bhyaḥ' },
        genitive: { singular: 'aḥ', dual: 'oḥ', plural: 'ām' },
        locative: { singular: 'i', dual: 'oḥ', plural: 'su' },
        vocative: { singular: 'an', dual: 'au', plural: 'aḥ' }
      }
    },
    feminine: {
      stem: 'mātṛ',
      endings: {
        nominative: { singular: 'ā', dual: 'arau', plural: 'araḥ' },
        accusative: { singular: 'aram', dual: 'arau', plural: 'ṝḥ' },
        instrumental: { singular: 'rā', dual: 'ṛbhyām', plural: 'ṛbhiḥ' },
        dative: { singular: 're', dual: 'ṛbhyām', plural: 'ṛbhyaḥ' },
        ablative: { singular: 'uḥ', dual: 'ṛbhyām', plural: 'ṛbhyaḥ' },
        genitive: { singular: 'uḥ', dual: 'roḥ', plural: 'ṝṇām' },
        locative: { singular: 'ari', dual: 'roḥ', plural: 'ṛṣu' },
        vocative: { singular: 'aḥ', dual: 'arau', plural: 'araḥ' }
      }
    },
    neuter: {
      stem: 'nāman',
      endings: {
        nominative: { singular: '', dual: 'nī', plural: 'āni' },
        accusative: { singular: '', dual: 'nī', plural: 'āni' },
        instrumental: { singular: 'nā', dual: 'bhyām', plural: 'bhiḥ' },
        dative: { singular: 'ne', dual: 'bhyām', plural: 'bhyaḥ' },
        ablative: { singular: 'naḥ', dual: 'bhyām', plural: 'bhyaḥ' },
        genitive: { singular: 'naḥ', dual: 'noḥ', plural: 'nām' },
        locative: { singular: 'ni', dual: 'noḥ', plural: 'su' },
        vocative: { singular: '', dual: 'nī', plural: 'āni' }
      }
    }
  }
};

const NounDeclensionTable: React.FC = () => {
  const [stemType, setStemType] = useState<StemType>('a');
  const [gender, setGender] = useState<Gender>('masculine');
  const [practiceMode, setPracticeMode] = useState(false);
  const [practiceCells, setPracticeCells] = useState<Set<string>>(new Set());
  const [userInputs, setUserInputs] = useState<Record<string, string>>({});

  const generatePracticeCells = () => {
    const cells = new Set<string>();
    const totalCells = 24; // 8 cases × 3 numbers
    const numCellsToBlank = Math.floor(totalCells * 0.3); // 30% of cells

    while (cells.size < numCellsToBlank) {
      const caseIndex = Math.floor(Math.random() * 8);
      const numberIndex = Math.floor(Math.random() * 3);
      cells.add(`${caseIndex}-${numberIndex}`);
    }

    setPracticeCells(cells);
    setUserInputs({});
  };

  const handleCellInput = (caseIndex: number, numberIndex: number, value: string) => {
    setUserInputs(prev => ({
      ...prev,
      [`${caseIndex}-${numberIndex}`]: value
    }));
  };

  const getCellContent = (caseIndex: number, numberIndex: number) => {
    const caseName = Object.keys(declensionPatterns[stemType][gender].endings)[caseIndex] as Case;
    const numberName = Object.keys(declensionPatterns[stemType][gender].endings[caseName])[numberIndex] as Number;
    const cellKey = `${caseIndex}-${numberIndex}`;
    const stem = declensionPatterns[stemType][gender].stem;
    const ending = declensionPatterns[stemType][gender].endings[caseName][numberName];

    if (practiceMode && practiceCells.has(cellKey)) {
      return (
        <input
          type="text"
          value={userInputs[cellKey] || ''}
          onChange={(e) => handleCellInput(caseIndex, numberIndex, e.target.value)}
          className="practice-input"
          placeholder="Enter ending"
        />
      );
    }

    return (
      <div className="cell-content">
        <div className="sanskrit-text">
          <span className="stem">{stem}</span>
          <span className="ending">{ending}</span>
        </div>
        <div className="ending-label">
          {ending}
        </div>
      </div>
    );
  };

  return (
    <div className="declension-table-container">
      <div className="controls">
        <div className="control-group">
          <label>Stem Type:</label>
          <select value={stemType} onChange={(e) => setStemType(e.target.value as StemType)}>
            <option value="a">a-stem</option>
            <option value="i">i-stem</option>
            <option value="u">u-stem</option>
            <option value="consonant">consonant stem</option>
          </select>
        </div>
        <div className="control-group">
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value as Gender)}>
            <option value="masculine">masculine</option>
            <option value="feminine">feminine</option>
            <option value="neuter">neuter</option>
          </select>
        </div>
        <div className="control-group">
          <label>Practice Mode:</label>
          <input
            type="checkbox"
            checked={practiceMode}
            onChange={(e) => {
              setPracticeMode(e.target.checked);
              if (e.target.checked) {
                generatePracticeCells();
              }
            }}
          />
        </div>
      </div>

      <div className="declension-table">
        <div className="table-header">
          <div className="header-cell">Case</div>
          <div className="header-cell">Singular</div>
          <div className="header-cell">Dual</div>
          <div className="header-cell">Plural</div>
        </div>
        {Object.keys(declensionPatterns[stemType][gender].endings).map((caseName, caseIndex) => (
          <div key={caseName} className="table-row">
            <div className="case-cell">{caseName}</div>
            {[0, 1, 2].map((numberIndex) => (
              <div key={numberIndex} className="cell">
                {getCellContent(caseIndex, numberIndex)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NounDeclensionTable; 