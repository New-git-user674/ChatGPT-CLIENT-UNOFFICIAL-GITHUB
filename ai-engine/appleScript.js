import { exec } from "child_process"

export function runAppleScript(script){

  return new Promise((resolve,reject)=>{

    exec(`osascript -e '${script}'`, (err,stdout,stderr)=>{

      if(err) reject(stderr)

      resolve(stdout)

    }) await runAppleScript(`
tell application "Finder"
activate
end tell
`)

  })

}
