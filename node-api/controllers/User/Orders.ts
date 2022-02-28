import { Request, Response } from 'express'
import { Document, LeanDocument, ObjectId } from 'mongoose'
import { Stripe } from 'stripe'
import NodeMailer from '../../config/Mail/nodemailer'

import { UserOrders as UserOrderType } from '../../models/User/UserTypes'
import { JWTUserType } from '../Types'
import { CartItemsType, UserTypes } from '../../models/User/UserTypes'

import { User } from '../../models/User/User'
import { CpuProduct } from '../../models/Products/Cpu/CpuSchema'

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

export default class UserOrders extends NodeMailer {
   constructor() {
      super()
   }
   handleUserOrderWithCardOrCashPaymentController = async (req: RequestWithUser, res: Response) => {
      try {
         const { id, amount, paymentMethod, deliveryType, deliveryPrice } = req.body as PaymentBodyType
         const foundUser = await User.findById(req.user?._id)
         if (foundUser) {
            const currentItemsInCart = this.getCurrentCartItemsFromFoundUser(foundUser)
            const orderedAt = new Date()
            let payedAt = 0

            if (paymentMethod == 'stripeCard') {
               const { created } = await stripe.paymentIntents.create({
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

            const foundLastOrderId = foundUser.orders[foundUser.orders.length - 1]._id

            const foundUserJson = foundUser.toJSON()
            await this.sendEmailAfterUserOrder(
               foundUserJson.email,
               foundUserJson.cartItems,
               'termék ID',
               `${orderedAt.toLocaleDateString()} ${orderedAt.toLocaleTimeString()}`,
               amount + deliveryPrice,
               deliveryPrice,
               foundLastOrderId
            )
            // Módosítom az összes kosárban lévő termék stockQty-jét
            await this.modifyProductStockQtyAfterOrder(foundUser.cartItems)

            foundUser.cartItems = []
            await foundUser.save()
            return res.status(200).json({ orderSuccess: true, paymentSuccess: true, result: foundUser })
         }
         return res
            .status(404)
            .json({ msg: 'A felhasználó nem található', orderSuccess: false, paymentSuccess: false })
      } catch (error) {
         return res.status(500).json({ error, orderSuccess: false, paymentSuccess: false })
      }
   }

   getUserOrders = async (request: RequestWithUser, response: Response) => {
      try {
         const foundUserOrders = (await User.findById(request.user?._id)
            .select('orders')
            .lean()) as LeanDocument<
            {
               orders: UserOrderType[]
               _id: ObjectId
            } & Document<any, any>
         >

         if (foundUserOrders) {
            response.status(200).json(foundUserOrders.orders.reverse()) // Megfordítom, hogy a legújabb legyen legelöl
         }
      } catch (error) {
         response.status(500).json({ error })
      }
   }

   private modifyProductStockQtyAfterOrder = async (cartItems: CartItemsType[]) => {
      cartItems.forEach(async cart => {
         switch (cart.productType) {
            case 'cpu':
               const foundCpuItem = await CpuProduct.findById(cart.itemId).select('inStockQuantity')
               if (foundCpuItem) {
                  foundCpuItem.inStockQuantity = foundCpuItem.inStockQuantity - cart.quantity
                  foundCpuItem.save()
               }
               break
         }
      })
   }

   private getCurrentCartItemsFromFoundUser = (foundUser: UserTypes) => {
      const currentItemsInCart: {
         productID: string
         productName: string
         productQty: number
         productImage: string
         productPrice: number
         productType: string
      }[] = foundUser.cartItems.map(product => {
         return {
            productID: product.itemId,
            productImage: product.displayImage,
            productName: product.displayName,
            productQty: product.quantity,
            productPrice: product.price,
            productType: product.productType,
         }
      })
      return currentItemsInCart
   }
}
