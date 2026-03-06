import {Pinecone} from "@pinecone-database/pinecone"
import {embed} from "./embed.js"

const pc = new Pinecone({
 apiKey:process.env.PINECONE_API_KEY
})

export async function searchDocs(query){

 const vector = await embed(query)

 const index = pc.index(
   process.env.PINECONE_INDEX
 )

 const results = await index.query({
   vector,
   topK:5
 })

 return results.matches
}
