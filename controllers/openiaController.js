// const { param } = require("jquery");
// const { Configuration, OpenAIApi } = require("openai");
// require("dotenv").config();
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);


const dotenv = require("dotenv");
dotenv.config();
const { OpenAI } = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});



// const { OpenAI } = require("openai");
// const openai = new OpenAI();

// Summary generator
exports.summaryController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: `Summarize this \n${text}` }
      ],
      max_tokens: 500,
      temperature: 0.7,
      top_p: 1,
    });

    if (data && data.choices && data.choices[0] && data.choices[0].text) {
      const generatedSummary = data.choices[0].text;
      return res.status(200).json({ summary: generatedSummary });
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};

// paragraph generator
exports.paragraphController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `write a detail paragraph about \n${text}`,
      max_tokens: 500,
      temperature: 0.5,
    });
    if (data) {
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};

// Chat GPT
exports.chatBotController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await open.createCompletion({
      model: "text-davinci-003",
      prompt: `Answer question similar to how yoda from star war would.
      Me: 'What is your name?'
      yoda: 'yoda is my name'
      Me: ${text}`,
      max_tokens: 300,
      temperature: 0.7,
    });
    if (data) {
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};

// JS Converter
exports.jsconverterController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `/* convert these instruction into javascript code \n${text}`,
      max_tokens: 400,
      temperature: 0.25,
    });
    if (data) {
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};

//Image generation Onather way
// exports.scifiImageController = async (req, res) => {
//   try {
//     const { text } = req.body;
//     const { data } = await openai.images.generate({
//       model:"dall-e-3",
//       prompt: `generate a scifi image of ${text}`,
//       n: 1,
//       size: "1024x1024",
//     });

// Image generation
exports.scifiImageController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await open.createImage({
      prompt: `generate a scifi image of ${text}`,
      n: 1,
      size: "512x512",
    });
    if (data) {
      if (data.data[0].url) {
        return res.status(200).json(data.data[0].url);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};
