"use client"

import {useEffect,useState} from "react"

export default function Dashboard(){

 const [usage,setUsage] = useState(0)

 useEffect(()=>{

   fetch("/api/usage")
   .then(r=>r.json())
   .then(d=>setUsage(d.tokens))

 },[])

 return(

 <div>

   <h1>Dashboard</h1>

   <p>Tokens used: {usage}</p>

   <button
     onClick={()=>window.location="/api/billing"}
   >
     Upgrade Plan
   </button>

 </div>

 )

}
