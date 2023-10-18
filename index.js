import "dotenv/config";

const url = "https://api.openai.com/v1/chat/completions";
const question = "Qual nome do pior presidente do Brasil?"

const headers = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${process.env.OPEN_AI_API_KEY}`,
};

const body = {
  'model': 'gpt-3.5-turbo',
  'temperature': 0,
  'messages':[{role:'user', content: question}]
}

fetch(url, {
  method: "POST",
  headers,
  body: JSON.stringify(body),
}).then((response) => response.json())
  .then((data) => {
    console.log(data.choices.at(0))
  })
  .catch(console.log);