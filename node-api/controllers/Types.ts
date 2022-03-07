import { ObjectId } from 'mongoose'

export type JWTUserType = {
   _id: string
   email: string
   userName: string
   isAdmin: boolean
   exp: number
   iat: number
}

export type RequestWithQueryId = {
   query: {
      _id: ObjectId
   }
}
