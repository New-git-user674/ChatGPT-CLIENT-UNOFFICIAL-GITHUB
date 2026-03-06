import { runLua } from "./luaRunner.js"
import { runAppleScript } from "./appleScript.js"

export async function routeAgent(prompt){

  if(prompt.includes("run lua")){

    return await runLua("scripts/example.lua")

  }

  if(prompt.includes("open finder")){

    return await runAppleScript(`
      tell application "Finder"
      activate
      end tell
    `)

  }

  return null
}
