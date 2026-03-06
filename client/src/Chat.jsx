import { useState } from "react";

export default function Chat() {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  async function send() {

    const newMessages = [
      ...messages,
      { role: "user", content: input }
    ];

    setMessages(newMessages);
    setInput("");

    const res = await fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: input })
    });

    const reader = res.body.getReader();
    const decoder = new TextDecoder();

    let assistant = "";

    while (true) {

      const { done, value } = await reader.read();

      if (done) break;

      const chunk = decoder.decode(value);

      assistant += chunk;

      setMessages([
        ...newMessages,
        { role: "assistant", content: assistant }
      ]);
    }
  }

  return (
    <div>

      <div style={{ marginBottom: 20 }}>

        {messages.map((m, i) => (
          <div key={i}>
            <b>{m.role}</b>: {m.content}
          </div>
        ))}

      </div>

      <input
        value={input}
        onChange={e => setInput(e.target.value)}
      />

      <button onClick={send}>
        Send
      </button>

    </div>
  );
}
