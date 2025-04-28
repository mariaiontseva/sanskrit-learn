const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const OpenAI = require('openai');

// Load environment variables
dotenv.config();

// Debug environment variables
console.log('Environment variables at startup:');
console.log('- NODE_ENV:', process.env.NODE_ENV);
console.log('- PORT:', process.env.PORT);
console.log('- OPENAI_API_KEY exists:', !!process.env.OPENAI_API_KEY);

if (!process.env.OPENAI_API_KEY) {
  console.error('OPENAI_API_KEY environment variable is required');
  process.exit(1);
}

const app = express();

// Enhanced logging
const logRequest = (req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
};

app.use(logRequest);

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://mariaiontseva.github.io',
    'https://sanskrit-learn-api.onrender.com'
  ],
  methods: ['POST', 'GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

app.use(express.json());

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Health check endpoint with detailed status
app.get('/', (req, res) => {
  const status = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    openai_configured: !!process.env.OPENAI_API_KEY,
    port: process.env.PORT
  };
  console.log('Health check response:', status);
  res.json(status);
});

// Chat endpoint with enhanced error handling
app.post('/api/chat', async (req, res) => {
  try {
    console.log('Received chat request');
    const { messages, systemPrompt } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({
        error: 'Invalid messages format',
        timestamp: new Date().toISOString()
      });
    }

    console.log('Making OpenAI API request');
    const response = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    console.log('OpenAI API request successful');
    res.json(response.choices[0].message);
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({
      error: error.message || 'An error occurred while processing your request',
      timestamp: new Date().toISOString()
    });
  }
});

const PORT = process.env.PORT || 10000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
  console.log('Environment variables:');
  console.log('- NODE_ENV:', process.env.NODE_ENV);
  console.log('- PORT:', process.env.PORT);
  console.log('- OpenAI API Key configured:', !!process.env.OPENAI_API_KEY);
}); 