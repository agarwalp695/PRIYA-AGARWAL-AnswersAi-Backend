const axios = require("axios");
const { OPENAI_API_KEY } = require("../config");

const askQuestion = async (question, userId) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci/completions",
      {
        prompt: question,
        max_tokens: 150,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    const answer = response.data.choices[0].text.trim();
    return {
      id: "123",
      content: question,
      answer,
      userId,
    };
  } catch (error) {
    throw new Error("Failed to generate answer");
  }
};

const getQuestionById = async (questionId) => {
  const question = {
    id: questionId,
    content: "Sample question content",
    answer: "sample answer",
    userId: "user123",
  };
  return question;
};

module.exports = {
  askQuestion,
  getQuestionById,
};
