import {stripe} from "../../packages/billing/stripe.js"

export async function handleWebhook(req){

 const event = stripe.webhooks.constructEvent(
   req.body,
   req.headers["stripe-signature"],
   process.env.STRIPE_WEBHOOK_SECRET
 )

 if(event.type === "checkout.session.completed"){
   console.log("User subscribed")
 }

}
