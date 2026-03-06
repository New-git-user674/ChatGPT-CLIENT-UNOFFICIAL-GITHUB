import { useState } from "react"

export default function ChatBox({addMessage}:any){

  const [input,setInput] = useState("")

  async function send(){

    if(!input) return

    addMessage({
      role:"user",
      content:input
    })

    const res = await fetch("http://localhost:5000/api/chat",{

      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify({
        message:input
      })

    })

    const data = await res.json()

    addMessage({
      role:"assistant",
      content:data.data
    })

    setInput("")
  }

  return(

    <div className="chat-box">

      <input
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        placeholder="Ask AI..."
      />

      <button onClick={send}>
        Send
      </button>

    </div>

  )
}
