import React from 'react';
import './AlphabetCard.css';

interface AlphabetCardProps {
  letter: string;
  pronunciation: string;
  example: string;
}

const AlphabetCard: React.FC<AlphabetCardProps> = ({ letter, pronunciation, example }) => {
  return (
    <div className="alphabet-card">
      <div className="letter">{letter}</div>
      <div className="pronunciation">Pronunciation: {pronunciation}</div>
      <div className="example">{example}</div>
    </div>
  );
};

export default AlphabetCard;
