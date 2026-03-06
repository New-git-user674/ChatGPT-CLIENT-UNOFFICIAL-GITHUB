import express from "express"
import cors from "cors"
import axios from "axios"

const app = express()
app.use(cors())
app.use(express.json())

app.post("/chat", async (req,res)=>{

 const response = await axios.post(
   "http://ai-router:4001/chat",
   req.body
 )

 res.json(response.data)

})

app.listen(4000,()=>{
 console.log("API Gateway running")
})
