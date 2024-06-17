const axios = require('axios');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

const generateAnswer = async (question) => {
  try {
    const response = await axios.post(OPENAI_API_URL, {
      prompt: question,
      max_tokens: 150,
    }, {
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating answer:', error);
    throw new Error('Failed to generate answer');
  }
};

module.exports = { generateAnswer };
