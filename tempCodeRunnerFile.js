const { OpenAI } = require("openai");

const openai = new OpenAI();

let buffer = [];

async function main() {
  // const completion = await openai.chat.completions.create({
  //   messages: [
  //     {
  //       role: "system",
  //       content: "You are a helpful assistant designed to output JSON.",
  //     },
  //     { role: "user", content: "Who won the world series in 2016?" },
  //   ],
  //   model: "gpt-3.5-turbo-0125",
  //   response_format: { type: "json_object" },
  // });
  // console.log(completion.choices[0].message.content);

  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();
