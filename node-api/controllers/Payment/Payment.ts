import { Request, Response } from 'express'
import { Stripe } from 'stripe'
import { JWTUserType } from '../Types'
import { UserOrders } from '../../models/User/UserTypes'
import { User } from '../../models/User/User'
import { Document } from 'mongoose'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY) as Stripe

type PaymentRequest = Request & {
   user?: JWTUserType
   body: {
      id: string
      amount: number
   }
}

export const handleCardPaymentController = async (req: PaymentRequest, res: Response) => {
   try {
      const { amount, id } = req.body
      const foundUserOrder = (await User.findById(req.user?._id, 'orders')) as (UserOrders & Document<any, any>) | null

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
