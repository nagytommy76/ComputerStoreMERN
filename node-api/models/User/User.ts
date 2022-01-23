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
   isEmailConfirmed: { type: Boolean, default: false },
   orders: [
      {
         orderedAt: { type: Date, default: new Date() },
         totalPrice: { type: Number, default: 0 },
         deliveryType: { type: String, default: '' },
         deliveryPrice: { type: Number, default: 0 },
         paymentMethod: { type: String, default: '' },
         payedAt: { type: Number, default: 0 },
         products: {
            type: [
               {
                  productID: Schema.Types.ObjectId,
                  productName: String,
                  productQty: Number
               }
            ]
         }
      }
   ],
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
         itemId: String,
         displayImage: String,
         displayName: String,
         price: Number,
         quantity: Number,
         productType: String
      }
   ]
})

export const User = model<UserTypes>('User', UserSchema)
