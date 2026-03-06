"use client"

import {useState} from "react"

export default function Chat(){

 const [messages,setMessages] = useState([])
 const [input,setInput] = useState("")

 async function send(){

  const newMessages = [
   ...messages,
   {role:"user",content:input}
  ]

  const res = await fetch("/api/chat",{
    method:"POST",
    body:JSON.stringify({messages:newMessages})
  })

  const data = await res.json()

  setMessages([
    ...newMessages,
    data
  ])

 }

 return(
  <div>
   {messages.map((m,i)=>
     <div key={i}>{m.content}</div>
   )}

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
