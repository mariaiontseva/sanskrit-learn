import React, { useState } from 'react';
import './Reading.css';
import { nalaText } from '../data/nalaText';

export const Reading: React.FC = () => {
  const [activeText, setActiveText] = useState<'nala' | 'ramayana'>('nala');

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
            <div className="verses">
              {nalaText.map((verse) => (
                <div key={verse.number} className="verse">
                  <div className="verse-number">Verse {verse.number}</div>
                  <div className="sanskrit-text">{verse.sanskrit}</div>
                  {verse.translation && (
                    <div className="translation">{verse.translation}</div>
                  )}
                  {verse.notes && (
                    <div className="notes">{verse.notes}</div>
                  )}
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