import React, { useState } from 'react';
import './Grammar.css';
import NounDeclensionTable from './NounDeclensionTable';

const Grammar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('sandhi');

  return (
    <div className="grammar-container">
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'sandhi' ? 'active' : ''}`}
          onClick={() => setActiveTab('sandhi')}
        >
          Sandhi Rules
        </button>
        <button
          className={`tab ${activeTab === 'declensions' ? 'active' : ''}`}
          onClick={() => setActiveTab('declensions')}
        >
          Noun Declensions
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'sandhi' ? (
          <div className="sandhi-content">
            <h2>Sandhi Rules</h2>
            <div className="sandhi-rule">
              <h3>Vowel Sandhi</h3>
              <p>When two vowels meet, they combine according to these rules:</p>
              <ul>
                <li>a + a = ā</li>
                <li>a + i = e</li>
                <li>a + u = o</li>
                <li>a + ṛ = ar</li>
                <li>i + i = ī</li>
                <li>u + u = ū</li>
                <li>ṛ + ṛ = ṝ</li>
              </ul>
            </div>
            <div className="sandhi-rule">
              <h3>Consonant Sandhi</h3>
              <p>When a vowel meets a consonant:</p>
              <ul>
                <li>a + k = ak</li>
                <li>a + g = ag</li>
                <li>a + ṅ = aṅ</li>
                <li>a + c = ac</li>
                <li>a + j = aj</li>
                <li>a + ñ = añ</li>
                <li>a + ṭ = aṭ</li>
                <li>a + ḍ = aḍ</li>
                <li>a + ṇ = aṇ</li>
                <li>a + t = at</li>
                <li>a + d = ad</li>
                <li>a + n = an</li>
                <li>a + p = ap</li>
                <li>a + b = ab</li>
                <li>a + m = am</li>
                <li>a + y = ay</li>
                <li>a + r = ar</li>
                <li>a + l = al</li>
                <li>a + v = av</li>
                <li>a + ś = aś</li>
                <li>a + ṣ = aṣ</li>
                <li>a + s = as</li>
                <li>a + h = ah</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="declensions-content">
            <h2>Noun Declensions</h2>
            <NounDeclensionTable />
          </div>
        )}
      </div>
    </div>
  );
};

export default Grammar; 