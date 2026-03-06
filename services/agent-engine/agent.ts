import {searchWeb} from "../tools/search.js"
import {runCode} from "../tools/code.js"

export async function runAgent(task){

 if(task.includes("search")){
   return await searchWeb(task)
 }

 if(task.includes("calculate")){
   return await runCode(task)
 }

 return "No tool required"
}
