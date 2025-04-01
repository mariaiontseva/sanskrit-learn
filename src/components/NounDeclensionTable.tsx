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
      stem: 'अग्नि',
      endings: {
        nominative: { singular: 'ः', dual: 'न्', plural: 'नः' },
        accusative: { singular: 'म्', dual: 'न्', plural: 'नः' },
        instrumental: { singular: 'ना', dual: 'भ्याम्', plural: 'भिः' },
        dative: { singular: 'ये', dual: 'भ्याम्', plural: 'भ्यः' },
        ablative: { singular: 'यः', dual: 'भ्याम्', plural: 'भ्यः' },
        genitive: { singular: 'यः', dual: 'योः', plural: 'नाम्' },
        locative: { singular: 'यि', dual: 'योः', plural: 'षु' },
        vocative: { singular: 'े', dual: 'न्', plural: 'नः' }
      }
    },
    feminine: {
      stem: 'वधू',
      endings: {
        nominative: { singular: 'ः', dual: 'न्', plural: 'नः' },
        accusative: { singular: 'म्', dual: 'न्', plural: 'नः' },
        instrumental: { singular: 'या', dual: 'भ्याम्', plural: 'भिः' },
        dative: { singular: 'यै', dual: 'भ्याम्', plural: 'भ्यः' },
        ablative: { singular: 'यः', dual: 'भ्याम्', plural: 'भ्यः' },
        genitive: { singular: 'यः', dual: 'योः', plural: 'नाम्' },
        locative: { singular: 'यि', dual: 'योः', plural: 'षु' },
        vocative: { singular: 'ः', dual: 'न्', plural: 'नः' }
      }
    },
    neuter: {
      stem: 'वारि',
      endings: {
        nominative: { singular: 'ः', dual: 'न्', plural: 'नि' },
        accusative: { singular: 'ः', dual: 'न्', plural: 'नि' },
        instrumental: { singular: 'ना', dual: 'भ्याम्', plural: 'भिः' },
        dative: { singular: 'ये', dual: 'भ्याम्', plural: 'भ्यः' },
        ablative: { singular: 'यः', dual: 'भ्याम्', plural: 'भ्यः' },
        genitive: { singular: 'यः', dual: 'योः', plural: 'नाम्' },
        locative: { singular: 'यि', dual: 'योः', plural: 'षु' },
        vocative: { singular: 'ः', dual: 'न्', plural: 'नि' }
      }
    }
  },
  u: {
    masculine: {
      stem: 'भानु',
      endings: {
        nominative: { singular: 'ः', dual: 'न्', plural: 'नः' },
        accusative: { singular: 'म्', dual: 'न्', plural: 'नः' },
        instrumental: { singular: 'ना', dual: 'भ्याम्', plural: 'भिः' },
        dative: { singular: 'वे', dual: 'भ्याम्', plural: 'भ्यः' },
        ablative: { singular: 'वः', dual: 'भ्याम्', plural: 'भ्यः' },
        genitive: { singular: 'वः', dual: 'वोः', plural: 'नाम्' },
        locative: { singular: 'वि', dual: 'वोः', plural: 'षु' },
        vocative: { singular: 'वे', dual: 'न्', plural: 'नः' }
      }
    },
    feminine: {
      stem: 'धेनु',
      endings: {
        nominative: { singular: 'ः', dual: 'न्', plural: 'नः' },
        accusative: { singular: 'म्', dual: 'न्', plural: 'नः' },
        instrumental: { singular: 'वा', dual: 'भ्याम्', plural: 'भिः' },
        dative: { singular: 'वै', dual: 'भ्याम्', plural: 'भ्यः' },
        ablative: { singular: 'वः', dual: 'भ्याम्', plural: 'भ्यः' },
        genitive: { singular: 'वः', dual: 'वोः', plural: 'नाम्' },
        locative: { singular: 'वि', dual: 'वोः', plural: 'षु' },
        vocative: { singular: 'वे', dual: 'न्', plural: 'नः' }
      }
    },
    neuter: {
      stem: 'मधु',
      endings: {
        nominative: { singular: 'ः', dual: 'न्', plural: 'नि' },
        accusative: { singular: 'ः', dual: 'न्', plural: 'नि' },
        instrumental: { singular: 'ना', dual: 'भ्याम्', plural: 'भिः' },
        dative: { singular: 'वे', dual: 'भ्याम्', plural: 'भ्यः' },
        ablative: { singular: 'वः', dual: 'भ्याम्', plural: 'भ्यः' },
        genitive: { singular: 'वः', dual: 'वोः', plural: 'नाम्' },
        locative: { singular: 'वि', dual: 'वोः', plural: 'षु' },
        vocative: { singular: 'वे', dual: 'न्', plural: 'नि' }
      }
    }
  },
  consonant: {
    masculine: {
      stem: 'राजन्',
      endings: {
        nominative: { singular: '्', dual: 'ानौ', plural: 'ानः' },
        accusative: { singular: 'ानम्', dual: 'ानौ', plural: 'नः' },
        instrumental: { singular: 'ा', dual: 'भ्याम्', plural: 'भिः' },
        dative: { singular: 'े', dual: 'भ्याम्', plural: 'भ्यः' },
        ablative: { singular: 'ः', dual: 'भ्याम्', plural: 'भ्यः' },
        genitive: { singular: 'ः', dual: 'ोः', plural: 'ाम्' },
        locative: { singular: 'ि', dual: 'ोः', plural: 'सु' },
        vocative: { singular: 'न्', dual: 'ानौ', plural: 'ानः' }
      }
    },
    feminine: {
      stem: 'मातृ',
      endings: {
        nominative: { singular: '्', dual: 'ारौ', plural: 'ारः' },
        accusative: { singular: 'रम्', dual: 'ारौ', plural: 'ः' },
        instrumental: { singular: 'ा', dual: 'भ्याम्', plural: 'भिः' },
        dative: { singular: 'े', dual: 'भ्याम्', plural: 'भ्यः' },
        ablative: { singular: 'ः', dual: 'भ्याम्', plural: 'भ्यः' },
        genitive: { singular: 'ः', dual: 'ोः', plural: 'णाम्' },
        locative: { singular: 'ि', dual: 'ोः', plural: 'सु' },
        vocative: { singular: 'ः', dual: 'ारौ', plural: 'ारः' }
      }
    },
    neuter: {
      stem: 'नामन्',
      endings: {
        nominative: { singular: '्', dual: 'ानी', plural: 'ानि' },
        accusative: { singular: '्', dual: 'ानी', plural: 'ानि' },
        instrumental: { singular: 'ा', dual: 'भ्याम्', plural: 'भिः' },
        dative: { singular: 'े', dual: 'भ्याम्', plural: 'भ्यः' },
        ablative: { singular: 'ः', dual: 'भ्याम्', plural: 'भ्यः' },
        genitive: { singular: 'ः', dual: 'ोः', plural: 'नाम्' },
        locative: { singular: 'ि', dual: 'ोः', plural: 'सु' },
        vocative: { singular: '्', dual: 'ानी', plural: 'ानि' }
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