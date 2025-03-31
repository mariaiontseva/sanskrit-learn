import React from 'react';
import './Grammar.css';

export const Grammar: React.FC = () => {
  const conjugationTables = {
    present: {
      parasmaipada: {
        singular: ['mi', 'si', 'ti'],
        dual: ['vas', 'thas', 'tas'],
        plural: ['mas', 'tha', 'nti']
      },
      atmanepada: {
        singular: ['e', 'se', 'te'],
        dual: ['vahe', 'āthe', 'āte'],
        plural: ['mahe', 'dhve', 'nte']
      }
    },
    imperative: {
      parasmaipada: {
        singular: ['āni', 'a/hi', 'tu'],
        dual: ['āva', 'tam', 'tām'],
        plural: ['āma', 'ta', 'ntu']
      },
      atmanepada: {
        singular: ['ai', 'sva', 'tām'],
        dual: ['āvahai', 'ethām', 'etām'],
        plural: ['āmahai', 'dhvam', 'ntām']
      }
    },
    optative: {
      parasmaipada: {
        singular: ['yām', 'es', 'et'],
        dual: ['va', 'tam', 'tām'],
        plural: ['ma', 'ta', 'yus']
      },
      atmanepada: {
        singular: ['īya', 'īthās', 'īta'],
        dual: ['īvahi', 'īyāthām', 'īyātām'],
        plural: ['īmahi', 'īdhvam', 'īran']
      }
    },
    imperfect: {
      parasmaipada: {
        singular: ['am', 's', 't'],
        dual: ['va', 'tam', 'tām'],
        plural: ['ma', 'ta', 'n']
      },
      atmanepada: {
        singular: ['i', 'thās', 'ta'],
        dual: ['vahi', 'ethām', 'etām'],
        plural: ['mahi', 'dhvam', 'nta']
      }
    }
  };

  const renderTable = (tense: string, pada: string, endings: any) => (
    <div className="conjugation-table">
      <h3>{tense} - {pada}</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Singular</th>
            <th>Dual</th>
            <th>Plural</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1st Person</td>
            <td>{endings.singular[0]}</td>
            <td>{endings.dual[0]}</td>
            <td>{endings.plural[0]}</td>
          </tr>
          <tr>
            <td>2nd Person</td>
            <td>{endings.singular[1]}</td>
            <td>{endings.dual[1]}</td>
            <td>{endings.plural[1]}</td>
          </tr>
          <tr>
            <td>3rd Person</td>
            <td>{endings.singular[2]}</td>
            <td>{endings.dual[2]}</td>
            <td>{endings.plural[2]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="grammar-container">
      <h2>Sanskrit Grammar</h2>
      <div className="grammar-content">
        <section className="grammar-section">
          <h3>Noun Declensions</h3>
          <table className="grammar-table">
            <thead>
              <tr>
                <th>Case</th>
                <th>Singular</th>
                <th>Dual</th>
                <th>Plural</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nominative</td>
                <td>-aḥ</td>
                <td>-au</td>
                <td>-āḥ</td>
              </tr>
              <tr>
                <td>Accusative</td>
                <td>-am</td>
                <td>-au</td>
                <td>-ān</td>
              </tr>
              <tr>
                <td>Instrumental</td>
                <td>-ena</td>
                <td>-ābhyām</td>
                <td>-aiḥ</td>
              </tr>
              <tr>
                <td>Dative</td>
                <td>-āya</td>
                <td>-ābhyām</td>
                <td>-ebhyaḥ</td>
              </tr>
              <tr>
                <td>Ablative</td>
                <td>-āt</td>
                <td>-ābhyām</td>
                <td>-ebhyaḥ</td>
              </tr>
              <tr>
                <td>Genitive</td>
                <td>-asya</td>
                <td>-ayoḥ</td>
                <td>-ānām</td>
              </tr>
              <tr>
                <td>Locative</td>
                <td>-e</td>
                <td>-ayoḥ</td>
                <td>-eṣu</td>
              </tr>
              <tr>
                <td>Vocative</td>
                <td>-a</td>
                <td>-au</td>
                <td>-āḥ</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="grammar-section">
          <h3>Verb Conjugations (Present Tense)</h3>
          <table className="grammar-table">
            <thead>
              <tr>
                <th>Person</th>
                <th>Singular</th>
                <th>Dual</th>
                <th>Plural</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1st Person</td>
                <td>-āmi</td>
                <td>-āvaḥ</td>
                <td>-āmaḥ</td>
              </tr>
              <tr>
                <td>2nd Person</td>
                <td>-asi</td>
                <td>-athaḥ</td>
                <td>-atha</td>
              </tr>
              <tr>
                <td>3rd Person</td>
                <td>-ati</td>
                <td>-ataḥ</td>
                <td>-anti</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}; 