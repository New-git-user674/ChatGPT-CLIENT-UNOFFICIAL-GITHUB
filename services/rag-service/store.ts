import {Pinecone} from "@pinecone-database/pinecone"

const pc = new Pinecone({
 apiKey:process.env.PINECONE_API_KEY
})

export async function storeVector(id,vector){

 const index = pc.index("docs")

 await index.upsert([
   {
     id,
     values:vector
   }
 ])

}
