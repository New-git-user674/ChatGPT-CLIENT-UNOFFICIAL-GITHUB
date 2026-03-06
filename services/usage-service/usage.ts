import prisma from "../db/prisma.js"

export async function trackUsage(userId,tokens){

 await prisma.usage.create({
  data:{
    userId,
    tokens
  }
 })

}
