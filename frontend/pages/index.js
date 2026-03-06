import { useState } from "react"

export default function Home(){

    const [message,setMessage] = useState("")
    const [response,setResponse] = useState("")

    async function sendMessage(){

        const res = await fetch("http://localhost:5000/api/chat",{

            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({message})

        })

        const data = await res.json()

        setResponse(data.data)

    }

    return (

        <div style={{padding:40}}>

            <h1>AI Startup Platform</h1>

            <input
                value={message}
                onChange={e=>setMessage(e.target.value)}
            />

            <button onClick={sendMessage}>
                Send
            </button>

            <p>{response}</p>

        </div>

    )
}
