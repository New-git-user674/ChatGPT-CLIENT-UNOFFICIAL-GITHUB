import {searchDocs} from "./search.js"
import {chat} from "../../packages/ai-client/openai.js"

export async function ragChat(query){

 const context = await searchDocs(query)

 const prompt = `
 Use this context:

 ${JSON.stringify(context)}

 Question: ${query}
 `

 return await chat([
   {role:"user",content:prompt}
 ])
}
