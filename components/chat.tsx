"use client"

import { useState } from "react"

export default function Chat() {

  const [messages,setMessages] = useState([])
  const [input,setInput] = useState("")

  async function send(){

    const newMessages = [
      ...messages,
      {role:"user",content:input}
    ]

    setMessages(newMessages)

    const res = await fetch("/api/chat",{
      method:"POST",
      body: JSON.stringify({messages:newMessages})
    })

    const data = await res.json()

    setMessages([
      ...newMessages,
      data.reply
    ])

    setInput("")
  }

  return (
    <div>

      {messages.map((m,i)=>(
        <div key={i}>
          <b>{m.role}</b>: {m.content}
        </div>
      ))}

      <input
        value={input}
        onChange={e=>setInput(e.target.value)}
      />

      <button onClick={send}>
        Send
      </button>

    </div>
  )
}
