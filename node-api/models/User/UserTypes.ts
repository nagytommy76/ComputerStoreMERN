export type UserTypes = {
   userName: string
   email: string
   password: string
   isAdmin: boolean
   cartItems: CartItemsType[]
   userDetails: UserDetailsTypes
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

export type CartItemsType = {
   itemId: string
   productType: string
   quantity: number
}
