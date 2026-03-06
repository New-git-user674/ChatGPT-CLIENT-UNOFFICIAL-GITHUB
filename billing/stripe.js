import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET)

export async function createCheckoutSession(customerId){

    const session = await stripe.checkout.sessions.create({

        payment_method_types:["card"],

        mode:"subscription",

        line_items:[
            {
                price:process.env.STRIPE_PRICE_ID,
                quantity:1
            }
        ],

        success_url:"https://yourapp.com/success",
        cancel_url:"https://yourapp.com/cancel",

        customer:customerId

    })

    return session.url
}
