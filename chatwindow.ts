export default function ChatWindow({messages}:any){

  return(

    <div className="chat-window">

      {messages.map((m:any,i:number)=>(

        <div key={i} className={`msg ${m.role}`}>

          {m.content}

        </div>

      ))}

    </div>

  )
}
