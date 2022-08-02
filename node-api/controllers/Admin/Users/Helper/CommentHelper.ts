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
      if (product === null) {
         return { statusCode: 404, msg: 'Nincs ilyen termék' }
      }
      product.ratingValues = product.ratingValues.filter((rating: RatingValues) => {
         return rating._id != commentID
      })
      product.save()

      return response.status(200).json({
         msg: 'sikeres törlés',
      })
   } catch (error) {
      throw new Error('Valami gond van a komment törlésekor')
   }
}
