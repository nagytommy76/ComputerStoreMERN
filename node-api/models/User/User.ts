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
   isAdmin: { type: Boolean, default: false }
}).add({
   userDetails: {
      firstName: String,
      lastName: String,
      phone: String,
      address: {
         zipCode: Number,
         city: String,
         street: String,
         houseNumber: String,
         floor: String,
         door: String
      }
   },
   cartItems: [{ itemId: Schema.Types.ObjectId, quantity: Number }]
})

export const User = model<UserTypes>('user', UserSchema)
