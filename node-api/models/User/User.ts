import { Schema, model } from 'mongoose'
import { UserTypes, UserDetailsTypes } from './UserTypes'

const UserSchema = new Schema<UserTypes>({
   userName: { type: String, required: true },
   password: { type: String, required: true },
   email: { type: String, required: true },
   userDetails: { type: Schema.Types.ObjectId, ref: 'UserDetails' }
})

const UserDetailsSchema = new Schema<UserDetailsTypes>({
   firstName: { type: String, required: true },
   phone: { type: String, required: true },
   address: {
      zipCode: { type: Number, required: true },
      city: { type: String, required: true },
      street: { type: String, required: true },
      houseNumber: { type: String, required: true },
      floor: String,
      door: String
   }
})

export const User = model<UserTypes>('User', UserSchema)
export const UserDetails = model<UserDetailsTypes>('UserDetails', UserDetailsSchema)
