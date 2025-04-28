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

export const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4-turbo-preview',
          messages: [
            {
              role: 'system',
              content: SYSTEM_PROMPT
            },
            ...messages,
            userMessage
          ],
          temperature: 0.7,
          max_tokens: 1000,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from AI');
      }

      const data = await response.json();
      const assistantMessage = {
        role: 'assistant' as const,
        content: data.choices[0].message.content,
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
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