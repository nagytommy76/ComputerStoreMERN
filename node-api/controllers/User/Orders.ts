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
         const { created, status } = await stripe.paymentIntents.create({
            currency: 'huf',
            amount: amount + deliveryPrice,
            description: 'Computer Store pet project',
            confirm: true,
            payment_method: id
         })
         const orderedAt = new Date()
         
         foundUser.orders.push({
            payedAt: created,
            orderedAt,
            paymentMethod,
            totalPrice: amount,
            deliveryType,
            deliveryPrice,
            products: currentItemsInCart
         })
         // if (status === 'succeeded'){
         //    const itemId = foundUser.save()
         // }

         const foundUserJson = foundUser.toJSON()
         await nodemailer.sendEmailAfterUserOrder(foundUserJson.email, foundUserJson.cartItems, 'termék ID', `${orderedAt.toLocaleDateString()} ${orderedAt.toLocaleTimeString()}`, amount, deliveryPrice)
         foundUser.cartItems = []
         return res.status(200).json({ orderSuccess: true, paymentSuccess: true, result: foundUser })
      }
      return res.status(404).json({ msg: 'A felhasználó nem található', orderSuccess: false, paymentSuccess: false })
   } catch (error) {
      return res.status(500).json({ error, orderSuccess: false, paymentSuccess: false })
   }
}

export const handleUserOrderWithCashPaymentController = async (req: RequestWithUser, res: Response) => {
   try {
      const { amount, paymentMethod, deliveryType, deliveryPrice } = req.body as PaymentBodyType
      const foundUser = await User.findById(req.user?._id)
      if (foundUser) {
         const currentItemsInCart = getCurrentCartItemsFromFoundUser(foundUser)

         foundUser.orders.push({
            orderedAt: new Date(),
            paymentMethod,
            totalPrice: amount,
            deliveryType,
            deliveryPrice,
            products: currentItemsInCart
         })

         foundUser.cartItems = []
         foundUser.save()

         return res.status(200).json({ orderSuccess: true, foundUser })
      }
   } catch (error) {
      return res.status(500).json({ error, orderSuccess: false })
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
