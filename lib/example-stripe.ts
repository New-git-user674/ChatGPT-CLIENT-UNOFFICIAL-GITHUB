const session = await stripe.checkout.sessions.create({
  payment_method_types:["card"],
  mode:"subscription",
  line_items:[{
    price:"price_id_here",
    quantity:1
  }],
  success_url:"/dashboard",
  cancel_url:"/"
})
