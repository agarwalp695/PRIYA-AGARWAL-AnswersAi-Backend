const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const authRoutes = require("./routes/authRoutes");
const questionRoutes = require("./routes/questionRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/answer-ai/auth", authRoutes);
app.use("/answer-ai/questions", questionRoutes);
app.use("/answer-ai/users", userRoutes);
69;

module.exports = app;

app.listen(port, () => {
  console.log("listening to the port 3000");
});
