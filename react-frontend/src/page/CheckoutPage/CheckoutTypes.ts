export type UserDetails = {
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
