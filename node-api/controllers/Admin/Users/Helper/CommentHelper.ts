import { Model, ObjectId } from 'mongoose'

import { RatingValues } from '../../../../models/Products/BaseTypes'

// Itt szintén nem jó az any, Megoldani!!!
export const removeSingleCommentFromRatingValues = async (
   ProductModel: Model<any>,
   productID: string,
   commentID: string | ObjectId
) => {
   try {
      const product = await ProductModel.findOne({ _id: productID })
      if (product === null) {
         return { msg: 'Nincs ilyen komment', ratingValues: null }
      }
      product.ratingValues = product.ratingValues.filter((rating: RatingValues) => {
         return rating._id != commentID
      })
      product.save()
      return { msg: 'sikeres törlés', ratingValues: product.ratingValues as RatingValues[] }
   } catch (error) {
      throw new Error('Valami gond van a komment törlésekor')
   }
}
