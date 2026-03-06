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

  )
}

export default App
