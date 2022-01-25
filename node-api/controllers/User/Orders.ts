import { Request, Response } from 'express'
import { User } from '../../models/User/User'
import { JWTUserType } from '../Types'
import { UserTypes } from '../../models/User/UserTypes'

import NodeMailer from '../../config/Mail/nodemailer'
import { Stripe } from 'stripe'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY) as Stripe

type RequestWithUser = Request & {
   user?: JWTUserType
}

type PaymentBodyType = {
   id?: string
   amount: number
   paymentMethod: string
   deliveryType: string
   deliveryPrice: number
}

const nodemailer = new NodeMailer()

export const handleUserOrderWithCardPaymentController = async (req: RequestWithUser, res: Response) => {
   try {
      const { id, amount, paymentMethod, deliveryType, deliveryPrice } = req.body as PaymentBodyType
      const foundUser = await User.findById(req.user?._id)
      if (foundUser) {
         const currentItemsInCart = getCurrentCartItemsFromFoundUser(foundUser)
         const orderedAt = new Date()
         let payedAt = new Date().valueOf()

         if (paymentMethod == 'stripeCard') {
            const { created, status } = await stripe.paymentIntents.create({
               currency: 'huf',
               amount: amount + deliveryPrice,
               description: 'Computer Store pet project',
               confirm: true,
               payment_method: id,
            })
            payedAt = created
         }

         foundUser.orders.push({
            payedAt,
            orderedAt,
            paymentMethod,
            totalPrice: amount,
            deliveryType,
            deliveryPrice,
            products: currentItemsInCart,
         })
         // if (status === 'succeeded'){
         await foundUser.save()
         // }
         const foundLastOrderId = foundUser.orders.pop()?._id

         const foundUserJson = foundUser.toJSON()
         await nodemailer.sendEmailAfterUserOrder(
            foundUserJson.email,
            foundUserJson.cartItems,
            'termék ID',
            `${orderedAt.toLocaleDateString()} ${orderedAt.toLocaleTimeString()}`,
            amount,
            deliveryPrice,
            foundLastOrderId
         )
         foundUser.cartItems = []

         return res.status(200).json({ orderSuccess: true, paymentSuccess: true, result: foundUser })
      }
      return res.status(404).json({ msg: 'A felhasználó nem található', orderSuccess: false, paymentSuccess: false })
   } catch (error) {
      return res.status(500).json({ error, orderSuccess: false, paymentSuccess: false })
   }
}

const getCurrentCartItemsFromFoundUser = (foundUser: UserTypes) => {
   const currentItemsInCart: { productID: string; productName: string; productQty: number }[] = foundUser.cartItems.map(
      (product) => {
         return {
            productID: product.itemId,
            productName: product.displayName,
            productQty: product.quantity
         }
      }
   )
   return currentItemsInCart
}
