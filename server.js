// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { OpenAIApi, Configuration } = require('openai');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const openai = new OpenAIApi(
  new Configuration({
    apiKey: 'your_openai_api_key',
  })
);

app.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.createChatCompletion({
      model: 'text-davinci-003',
      prompt: `User: ${message}\nAI:`,
      max_tokens: 150,
      n: 1,
      stop: ['\n', 'User:'],
    });

    res.json({
      reply: response.data.choices[0].text.trim(),
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
