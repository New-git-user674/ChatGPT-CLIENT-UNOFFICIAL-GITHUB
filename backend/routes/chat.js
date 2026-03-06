import express from "express"
import { generateResponse } from "../../ai-engine/openai.js"

const router = express.Router()

router.post("/", async (req,res)=>{

    const {message} = req.body

    try{

        const response = await generateResponse(message)

        res.json({
            success:true,
            data:response
        })

    }catch(err){

        res.status(500).json({
            success:false,
            error:err.message
        })

    }

})

export default router
