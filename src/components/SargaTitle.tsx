import React, { useState } from 'react';
import './SargaTitle.css';

interface SargaTitleProps {
  number: number;
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const SargaTitle: React.FC<SargaTitleProps> = ({ number, title, isExpanded, onToggle }) => {
  return (
    <div className="sarga-title" onClick={onToggle}>
      <div className="sarga-header">
        <span className="sarga-number">Sarga {number}</span>
        <span className="sarga-text">{title}</span>
        <span className={`expand-icon ${isExpanded ? 'expanded' : ''}`}>▼</span>
      </div>
    </div>
  );
};

export default SargaTitle; 