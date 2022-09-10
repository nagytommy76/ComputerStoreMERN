import { ObjectId } from 'mongoose'

export type JWTUserType = {
   _id: string
   exp: number
   iat: number
}

export type RequestWithQueryId = {
   query: {
      _id: ObjectId
   }
}
