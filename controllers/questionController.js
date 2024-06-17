const questionService = require("../services/questionService");

const askQuestion = async (req, res) => {
    try {
        const { content } = req.body;
        const userId = req.user.userId;
        const question = await questionService.askQuestion(content, userId);
        res.status(201).json(question);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getQuestionById = async (req, res) => {
    try {
        const questionId = req.params.questionId;
        const question = await questionService.getQuestionById(questionId);
        if (!question) {
            return res.status(404).json({ error: "Question not found" });
        }
        res.status(200).json(question);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    askQuestion,
    getQuestionById,
};
