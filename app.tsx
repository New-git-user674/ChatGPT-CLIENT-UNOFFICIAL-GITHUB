import { useState } from "react"
import ChatBox from "./components/ChatBox"

function App() {

  const [messages, setMessages] = useState<any[]>([])

  function addMessage(msg:any){
    setMessages(prev => [...prev, msg])
  }

  return (

    <div className="app">

      <header className="header">
        <h1>AI Startup Platform</h1>
      </header>

      <div className="chat-container">

        {messages.map((m,i)=>(
          <div key={i} className={m.role}>
            {m.content}
          </div>
        ))}

      </div>

      <ChatBox addMessage={addMessage}/>

    </div>

  )async function sendMessage(text:string, model:string){

  const userMsg = {role:"user",content:text}

  setMessages(prev => [...prev,userMsg])

  const res = await fetch("http://localhost:5000/api/chat",{

    method:"POST",

    headers:{
      "Content-Type":"application/json"
    },

    body:JSON.stringify({
      message:text,
      model:model
    })

  })

  const data = await res.json()

  const aiMsg = {
    role:"assistant",
    content:data.data
  }

  setMessages(prev => [...prev,aiMsg])
}
}

export default App
