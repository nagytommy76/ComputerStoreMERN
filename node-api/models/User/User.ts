import { Schema, model } from 'mongoose'
import { UserTypes, UserDetailsTypes } from './UserTypes'

const UserSchema = new Schema<UserTypes>({
   userName: { type: String, required: true },
   password: {
      type: String,
      required: [true, 'Adjon meg egy jelszót!'],
      minlength: [6, 'a jelszó min. 6 karakter legyen!']
   },
   email: {
      type: String,
      required: [true, 'Adjon meg egy email címet!'],
      unique: true,
      lowercase: true
   },
   isAdmin: { type: Boolean, default: false },
   userDetails: { type: Schema.Types.ObjectId, ref: 'userdetails' }
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

export const User = model<UserTypes>('user', UserSchema)
export const UserDetails = model<UserDetailsTypes>('userdetails', UserDetailsSchema)
