export type UserTypes = {
   userName: string
   email: string
   password: string
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
