import React, { useState } from 'react';
import './AIAssistant.css';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SYSTEM_PROMPT = `You are a knowledgeable Sanskrit teacher and expert in Indian philosophy, literature, and culture. 
You specialize in:
- Sanskrit grammar and syntax
- Translation and interpretation of Sanskrit texts
- Indian philosophy and religious texts
- Sanskrit literature and poetry
- Cultural and historical context of Sanskrit works

Help users understand Sanskrit texts, explain grammar rules, provide cultural context, and answer questions about Indian philosophy and literature.
Keep your responses clear, informative, and engaging.`;

// Use the Render.com deployment URL
const API_URL = 'https://sanskrit-learn-api.onrender.com/api/chat';

export const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          systemPrompt: SYSTEM_PROMPT,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || 'Failed to get response from AI');
      }

      const data = await response.json();
      const assistantMessage = {
        role: 'assistant' as const,
        content: data.content,
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="ai-assistant-container">
      <div className="chat-container">
        <div className="welcome-message">
          <h2>Sanskrit Learning Assistant</h2>
          <p>Hello! I'm your Sanskrit learning assistant. I can help you with:</p>
          <ul>
            <li>Understanding Sanskrit grammar and syntax</li>
            <li>Translating and interpreting Sanskrit texts</li>
            <li>Learning about Indian philosophy and literature</li>
            <li>Exploring cultural and historical context</li>
          </ul>
          <p>Feel free to ask me anything about Sanskrit!</p>
        </div>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.role === 'user' ? 'user-message' : 'assistant-message'}`}
          >
            <div className="message-content">{message.content}</div>
          </div>
        ))}
        {isLoading && (
          <div className="message assistant-message">
            <div className="message-content loading">Thinking...</div>
          </div>
        )}
        {error && (
          <div className="error-message">
            Error: {error}
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything about Sanskrit..."
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading || !input.trim()}>
          Send
        </button>
      </form>
    </div>
  );
}; 