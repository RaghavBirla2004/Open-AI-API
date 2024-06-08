
//! Tested and worked


const express = require("express")
const app = express()
const api = process.env.OPENAI_API_KEY
  
const OpenApi = require("openai").default

app.use(express.json())

const openai = new OpenApi({
    apiKey:api
})


async function main() {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ "role": "user", "content": "Indore" }],
    max_tokens: 100
  });
  console.log(response.choices[0].message.content);
}

main();



app.listen(3000,()=>{
    console.log("Server started")
})




