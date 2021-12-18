import { Request, Response } from 'express'
import { Stripe } from 'stripe'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY) as Stripe

type PaymentRequest = {
   body: {
      id: string
      amount: number
   }
}

export const handleCardPaymentController = async (req: PaymentRequest, res: Response) => {
   try {
      const { amount, id } = req.body
      const payment = await stripe.paymentIntents.create({
         currency: 'HUF',
         amount,
         description: 'Computer Store pet project',
         confirm: true,
         payment_method: id
      })
      return res.status(200).json({ paymentSuccess: true, payment })
   } catch (error) {
      return res.status(500).json({ error, paymentSuccess: false })
   }
}
