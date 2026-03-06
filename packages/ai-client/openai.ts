import OpenAI from "openai"

export const openai = new OpenAI({
 apiKey: process.env.OPENAI_API_KEY
})

export async function chat(messages){

 const res = await openai.chat.completions.create({
   model:"gpt-4.1",
   messages
 })

 return res.choices[0].message
}
