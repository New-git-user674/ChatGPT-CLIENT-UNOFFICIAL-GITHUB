import { exec } from "child_process"

export function runLua(script){

  return new Promise((resolve,reject)=>{

    exec(`lua ${script}`, (error,stdout,stderr)=>{

      if(error) return reject(stderr)

      resolve(stdout)

    })if(prompt.includes("run lua")){

  const output = await runLua("scripts/task.lua")

  return output

}

  })

}
