import { Request, Response } from 'express'
import { User } from '../../models/User/User'
import { JWTUserType } from '../Types'

import { Stripe } from 'stripe'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY) as Stripe

export const handleUserOrderController = async (req: RequestWithUser, res: Response) => {
   try {
      const { id, amount, paymentMethod } = req.body as PaymentBodyType
      const foundUser = await User.findById(req.user?._id)
      if (foundUser) {
         const currentItemsInCart: { productID: string; productName: string; productQty: number }[] = foundUser.cartItems.map(
            (product) => {
               return {
                  productID: product.itemId,
                  productName: product.displayName,
                  productQty: product.quantity
               }
            }
         )
         const { created, status } = await stripe.paymentIntents.create({
            currency: 'huf',
            amount,
            description: 'Computer Store pet project',
            confirm: true,
            payment_method: id
         })

         foundUser.orders.push({
            payedAt: created,
            orderedAt: new Date(),
            paymentMethod,
            totalPrice: amount,
            products: currentItemsInCart
         })

         foundUser.cartItems = []

         if (status === 'succeeded') foundUser.save()
         return res.status(200).json({ orderSuccess: true, paymentSuccess: true, result: foundUser })
      }
      return res.status(404).json({ msg: 'A felhasználó nem található', orderSuccess: false, paymentSuccess: false })
   } catch (error) {
      return res.status(500).json({ error, orderSuccess: false, paymentSuccess: false })
   }
}

type RequestWithUser = Request & {
   user?: JWTUserType
}

type PaymentBodyType = {
   id: string
   amount: number
   paymentMethod: string
}
