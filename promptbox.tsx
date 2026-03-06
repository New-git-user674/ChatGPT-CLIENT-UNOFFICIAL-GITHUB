import { useState } from "react"

export default function PromptBox({sendMessage}:any){

  const [input,setInput] = useState("")

  function submit(){

    if(!input) return

    sendMessage(input)

    setInput("")

  }

  return(

    <div className="prompt-box">

      <input

        value={input}

        onChange={(e)=>setInput(e.target.value)}

        placeholder="Message AI..."

      />

      <button onClick={submit}>
        Send
      </button>

    </div>

  )
}
