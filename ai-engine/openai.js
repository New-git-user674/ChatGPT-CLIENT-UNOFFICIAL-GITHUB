import OpenAI from "openai"
import dotenv from "dotenv"

dotenv.config()

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

export async function generateResponse(prompt){

    const completion = await client.chat.completions.create({

        model: "gpt-4.1",

        messages:[
            {role:"system",content:"You are an AI assistant"},
            {role:"user",content:prompt}
        ]

    })export async function generateResponse(prompt, model){

  const completion = await client.chat.completions.create({

    model: model || "gpt-4.1",

    messages:[
      {role:"system",content:"You are an AI assistant"},
      {role:"user",content:prompt}
    ]

  })

  return completion.choices[0].message.content
}

    return completion.choices[0].message.content

}
