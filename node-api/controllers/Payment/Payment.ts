import { Request, Response } from 'express'
import { Stripe } from 'stripe'
import { JWTUserType } from '../Types'
import { UserTypes } from '../../models/User/UserTypes'
import { Document } from 'mongoose'
import { User } from '../../models/User/User'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY) as Stripe

type PaymentRequest = Request & {
   user?: JWTUserType
}

type PaymentBodyType = {
   id: string
   amount: number
}

export const handleCardPaymentController = async (req: PaymentRequest, res: Response) => {
   try {
      const { amount, id } = req.body as PaymentBodyType
      const foundUserOrders = (await User.findById(req.user?._id, 'orders')) as (UserTypes & Document<any, any>) | null
      if (foundUserOrders) {
         const payment = await stripe.paymentIntents.create({
            currency: 'huf',
            amount,
            description: 'Computer Store pet project',
            confirm: true,
            payment_method: id
         })

         foundUserOrders.orders.payedAt = new Date()
         foundUserOrders.orders.paymentMethod = 'StripeCard'
         foundUserOrders.orders.totalPrice = amount

         if (payment.status === 'succeeded') foundUserOrders.save()

         return res.status(200).json({ paymentSuccess: true, payment })
      } else return res.status(404).json({ msg: 'Nem található felhasználó' })
   } catch (error) {
      return res.status(500).json({ error, paymentSuccess: false })
   }
}
