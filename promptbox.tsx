import { useState } from "react"

export default function PromptBox({ sendMessage }: any) {

  const [input, setInput] = useState("")
  const [model, setModel] = useState("gpt-4.1")

  function submit() {

    if (!input) return

    sendMessage(input, model)

    setInput("")
  }

  return (

    <div className="prompt-box">

      <select
        className="model-selector"
        value={model}
        onChange={(e)=>setModel(e.target.value)}
      >

        <option value="gpt-4.1">GPT-4.1</option>
        <option value="gpt-4o">GPT-4o</option>
        <option value="gpt-4o-mini">GPT-4o Mini</option>

      </select>

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
