import { ObjectId } from 'mongoose'

export type UserTypes = {
   userName: string
   email: string
   password: string
   isAdmin: boolean
   cartItems: CartItemsType[]
   userDetails: UserDetailsTypes
   orders: UserOrders
   _id: string
   iat?: number
   exp?: number
}

export type UserDetailsTypes = {
   firstName: string
   lastName: string
   phone: string
   address: {
      zipCode: number
      city: string
      street: string
      houseNumber: string
      floor?: string
      door?: string
   }
}

export type UserOrders = {
   _id?: ObjectId | string
   orderedAt: Date
   totalPrice: number
   paymentMethod: string
   payedAt?: number
   products?: {
      productID: ObjectId | string
      productName: string
      productQty: number
   }[]
}[]

export type CartItemsType = {
   itemId: string
   productType: string
   quantity: number
   displayImage: string
   displayName: string
   price: number
}
