import fs from "fs"
import {embed} from "./embed.js"
import {storeVector} from "./store.js"

export async function processDocument(file){

 const text = fs.readFileSync(file,"utf8")

 const chunks = text.match(/.{1,500}/g)

 for(const chunk of chunks){

   const vector = await embed(chunk)

   await storeVector(
     crypto.randomUUID(),
     vector
   )

 }

 return "Document indexed"
}
