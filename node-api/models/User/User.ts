import { Schema, model } from 'mongoose'
import { UserTypes } from './UserTypes'

const UserSchema = new Schema<UserTypes>({
   userName: { type: String, required: true, unique: true },
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
   orders: {
      orderedAt: { type: Date, required: true },
      totalPrice: { type: Number, required: true },
      paymentMethod: { type: String, required: true },
      products: {
         type: [
            {
               productID: { type: Schema.Types.ObjectId, required: true },
               productName: { type: String, required: true },
               productQty: { type: Number, required: true }
            }
         ],
         required: true
      }
   },
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
   cartItems: [
      {
         itemId: Schema.Types.ObjectId,
         displayImage: String,
         displayName: String,
         price: Number,
         quantity: Number,
         productType: String
      }
   ]
})

export const User = model<UserTypes>('user', UserSchema)
