export type UserTypes = {
   userName: string
   email: string
   password: string
   isAdmin: boolean
   _id: string
   iat?: number
   exp?: number
}

export type UserDetailsTypes = {
   fullName: string
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
