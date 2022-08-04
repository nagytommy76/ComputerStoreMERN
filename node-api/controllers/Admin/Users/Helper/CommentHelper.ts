import { Response } from 'express'
import { Model, ObjectId } from 'mongoose'
import { RatingValues } from '../../../../models/Products/BaseTypes'

// Itt szintén nem jó az any, Megoldani!!!
export const removeSingleCommentFromRatingValues = async (
   response: Response,
   ProductModel: Model<any>,
   productID: string,
   commentID: string | ObjectId
) => {
   try {
      const product = await ProductModel.findOne({ _id: productID })
      // https://bobbyhadz.com/blog/javascript-error-cannot-set-headers-after-they-are-sent-to-client
      // console.log(product)
      if (product === null) {
         // console.log('A product === NULL')
         // console.log(product)
         return response.status(404).json({ msg: 'Nincs ilyen termék' })
      }
      product.ratingValues = product.ratingValues.filter((rating: RatingValues) => {
         return rating._id != commentID
      })
      product.save()

      return response.status(200).json({
         msg: 'sikeres törlés',
      })
   } catch (error) {
      response.status(500).json({ msg: 'Hiba történt a törlés során' })
   }
}
