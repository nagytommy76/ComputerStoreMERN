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
         return { statusCode: 404, msg: 'Nincs ilyen termék' }
      }
      product.ratingValues = product.ratingValues.filter((rating: RatingValues) => {
         return rating._id != commentID
      })
      product.save()
      return {
         msg: 'sikeres törlés',
         statusCode: 200,
      }
   } catch (error) {
      throw new Error('Valami gond van a komment törlésekor')
   }
}
