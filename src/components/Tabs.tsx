import React from 'react';
import './Tabs.css';

interface TabProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

interface TabsProps {
  activeTab: string;
  onChange: (tabId: string) => void;
  children: React.ReactNode;
}

export const Tab: React.FC<TabProps> = ({ children }) => {
  return <div className="tab-content">{children}</div>;
};

export const Tabs: React.FC<TabsProps> = ({ activeTab, onChange, children }) => {
  const tabs = React.Children.toArray(children) as React.ReactElement<TabProps>[];

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map((tab) => (
          <button
            key={tab.props.id}
            className={`tab-button ${activeTab === tab.props.id ? 'active' : ''}`}
            onClick={() => onChange(tab.props.id)}
          >
            {tab.props.title}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {tabs.find((tab) => tab.props.id === activeTab)}
      </div>
    </div>
  );
}; 