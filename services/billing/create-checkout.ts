import {stripe} from "../../packages/billing/stripe.js"

export async function createCheckout(userId){

 const session = await stripe.checkout.sessions.create({

   payment_method_types:["card"],

   mode:"subscription",

   line_items:[
     {
       price:process.env.STRIPE_PRICE_ID,
       quantity:1
     }
   ],

   success_url:
     "http://localhost:3000/dashboard",

   cancel_url:
     "http://localhost:3000"

 })

 return session.url
}
