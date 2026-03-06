import OpenAI from "openai"

const openai = new OpenAI({
 apiKey: process.env.OPENAI_API_KEY
})

export async function routeRequest(messages){

 const last = messages[messages.length-1].content

 let model = "gpt-4.1"

 if(last.includes("code"))
  model = "gpt-4.1"

 if(last.length < 200)
  model = "gpt-4o-mini"

 const response = await openai.chat.completions.create({
   model,
   messages
 })

 return response.choices[0].message
}
