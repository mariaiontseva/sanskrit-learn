import React from 'react';
import './SandhiTable.css';

const SandhiTable: React.FC = () => {
  return (
    <div className="sandhi-table-container">
      <h3>Overview of external sandhi (fields before voiced initial sounds are shaded)</h3>
      <div className="sandhi-table">
        <table>
          <thead>
            <tr>
              <th colSpan={10} className="header">FINAL SOUND</th>
            </tr>
            <tr>
              <th>k</th>
              <th>ṭ</th>
              <th>t</th>
              <th>p</th>
              <th>ṅ</th>
              <th>n</th>
              <th>m</th>
              <th>ḥ</th>
              <th>āḥ</th>
              <th>aḥ</th>
              <th>Initial Sound</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>k</td>
              <td>ṭ</td>
              <td>t</td>
              <td>p</td>
              <td>ṅ</td>
              <td>n</td>
              <td>m</td>
              <td>ḥ</td>
              <td>āḥ</td>
              <td>aḥ</td>
              <td>zero</td>
            </tr>
            <tr className="voiced">
              <td>g</td>
              <td>ḍ</td>
              <td>d</td>
              <td>b</td>
              <td>ṅ/ṅṅ¹</td>
              <td>n/nn¹</td>
              <td>m</td>
              <td>r</td>
              <td>ā</td>
              <td>a²</td>
              <td>vowels</td>
            </tr>
            <tr>
              <td>k</td>
              <td>ṭ</td>
              <td>t</td>
              <td>p</td>
              <td>ṅ</td>
              <td>n</td>
              <td>m</td>
              <td>ḥ</td>
              <td>āḥ</td>
              <td>aḥ</td>
              <td>k/kh</td>
            </tr>
            <tr className="voiced">
              <td>g</td>
              <td>ḍ</td>
              <td>d</td>
              <td>b</td>
              <td>ṅ</td>
              <td>n</td>
              <td>m</td>
              <td>r</td>
              <td>ā</td>
              <td>o</td>
              <td>g/gh</td>
            </tr>
            <tr>
              <td>k</td>
              <td>ṭ</td>
              <td>c</td>
              <td>p</td>
              <td>ṅ</td>
              <td>mś³</td>
              <td>m</td>
              <td>ś</td>
              <td>āś</td>
              <td>aś</td>
              <td>c/ch</td>
            </tr>
            <tr className="voiced">
              <td>g</td>
              <td>ḍ</td>
              <td>j</td>
              <td>b</td>
              <td>ṅ</td>
              <td>ñ</td>
              <td>m</td>
              <td>r</td>
              <td>ā</td>
              <td>o</td>
              <td>j/jh</td>
            </tr>
            <tr>
              <td>k</td>
              <td>ṭ</td>
              <td>t</td>
              <td>p</td>
              <td>ṅ</td>
              <td>mś³</td>
              <td>m</td>
              <td>ś</td>
              <td>āś</td>
              <td>aś</td>
              <td>t/th</td>
            </tr>
            <tr className="voiced">
              <td>g</td>
              <td>ḍ</td>
              <td>d</td>
              <td>b</td>
              <td>ṅ</td>
              <td>n</td>
              <td>m</td>
              <td>r</td>
              <td>ā</td>
              <td>o</td>
              <td>d/dh</td>
            </tr>
            <tr>
              <td>k</td>
              <td>ṭ</td>
              <td>t</td>
              <td>p</td>
              <td>ṅ</td>
              <td>mś³</td>
              <td>m</td>
              <td>s</td>
              <td>ās</td>
              <td>as</td>
              <td>t/th</td>
            </tr>
            <tr className="voiced">
              <td>g</td>
              <td>ḍ</td>
              <td>d</td>
              <td>b</td>
              <td>ṅ</td>
              <td>n</td>
              <td>m</td>
              <td>r</td>
              <td>ā</td>
              <td>o</td>
              <td>d/dh</td>
            </tr>
            <tr>
              <td>k</td>
              <td>ṭ</td>
              <td>t</td>
              <td>p</td>
              <td>ṅ</td>
              <td>n</td>
              <td>m</td>
              <td>ḥ</td>
              <td>āḥ</td>
              <td>aḥ</td>
              <td>p/ph</td>
            </tr>
            <tr className="voiced">
              <td>g</td>
              <td>ḍ</td>
              <td>d</td>
              <td>b</td>
              <td>ṅ</td>
              <td>n</td>
              <td>m</td>
              <td>r</td>
              <td>ā</td>
              <td>o</td>
              <td>b/bh</td>
            </tr>
            <tr className="voiced">
              <td>ṅ</td>
              <td>ṇ</td>
              <td>n</td>
              <td>m</td>
              <td>ṅ</td>
              <td>n</td>
              <td>m</td>
              <td>r</td>
              <td>ā</td>
              <td>o</td>
              <td>n/m</td>
            </tr>
            <tr className="voiced">
              <td>g</td>
              <td>ḍ</td>
              <td>d</td>
              <td>b</td>
              <td>ṅ</td>
              <td>n</td>
              <td>m</td>
              <td>r</td>
              <td>ā</td>
              <td>o</td>
              <td>y/v</td>
            </tr>
            <tr className="voiced">
              <td>g</td>
              <td>ḍ</td>
              <td>d</td>
              <td>b</td>
              <td>ṅ</td>
              <td>n</td>
              <td>m</td>
              <td>ø⁶</td>
              <td>ā</td>
              <td>o</td>
              <td>r</td>
            </tr>
            <tr className="voiced">
              <td>g</td>
              <td>ḍ</td>
              <td>l</td>
              <td>b</td>
              <td>ṅ</td>
              <td>l⁷</td>
              <td>m</td>
              <td>r</td>
              <td>ā</td>
              <td>o</td>
              <td>l</td>
            </tr>
            <tr>
              <td>k</td>
              <td>ṭ</td>
              <td>c (ch)⁴</td>
              <td>p</td>
              <td>ṅ</td>
              <td>ñ (ś/ch)⁴</td>
              <td>m</td>
              <td>ḥ</td>
              <td>āḥ</td>
              <td>aḥ</td>
              <td>ś</td>
            </tr>
            <tr>
              <td>k</td>
              <td>ṭ</td>
              <td>t</td>
              <td>p</td>
              <td>ṅ</td>
              <td>n</td>
              <td>m</td>
              <td>ḥ</td>
              <td>āḥ</td>
              <td>aḥ</td>
              <td>ṣ/s</td>
            </tr>
            <tr className="voiced">
              <td>g (gh)⁴</td>
              <td>ḍ (dh)⁴</td>
              <td>d (dh)⁴</td>
              <td>b (bh)⁴</td>
              <td>ṅ</td>
              <td>n</td>
              <td>m</td>
              <td>r</td>
              <td>ā</td>
              <td>o</td>
              <td>h</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="sandhi-notes">
        <p>¹ Before vowels</p>
        <p>² Before a</p>
        <p>³ Optional</p>
        <p>⁴ Optional variants</p>
        <p>⁶ Dropped</p>
        <p>⁷ Assimilation</p>
      </div>
    </div>
  );
};

export default SandhiTable; 