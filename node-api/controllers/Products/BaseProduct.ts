import { Document, Model } from 'mongoose'
import { BaseProductType } from '../../models/Products/BaseTypes'
import { QueryRequest } from './Helper'

export default abstract class BaseProduct {
   private productModel
   constructor(productModel: Model<any>) {
      this.productModel = productModel
   }

   returnProductModelWithPaginateInfo = async (request: QueryRequest, extraFilerParameters: any = {}) => {
      const currentPage = parseInt(request.query.currentPage) || 1
      const perPage = parseInt(request.query.perPage) || 12
      const orderBy = request.query.orderBy || 'asc'
      const byManufacturer = request.query.byManufacturer == 'all' ? '' : request.query.byManufacturer
      const priceRange = this.splitStringAndConvertToArray(request.query.priceRange)

      let totalPages: number
      const totalItems = await this.productModel.countDocuments()
      totalPages = Math.ceil(totalItems / perPage)

      // A find-ba beilleszteni (spread) egy objectet ami tartalmazza az adott termék egyedi keresési szempontjait
      const foundProduct: (BaseProductType & {
         details: any
      } & Document<any, any>)[] = await this.productModel
         .find({
            manufacturer: new RegExp(byManufacturer, 'i'),
            price: { $gte: priceRange[0], $lte: priceRange[1] },
            ...extraFilerParameters,
         })
         .sort({ price: orderBy })
         .skip((currentPage - 1) * perPage)
         .limit(perPage)

      // totalPages =
      //    foundProduct.length >= perPage
      //       ? Math.ceil(totalItems / perPage)
      //       : Math.ceil(foundProduct.length / perPage)

      return { foundProduct, totalItems, totalPages }
   }

   baseFilterData = async (extraGroupParameters: any = {}) => {
      const filterDataGroup = await this.productModel.aggregate().group({
         _id: null,
         maxPrice: { $max: '$price' },
         minPrice: { $min: '$price' },
         allManufacturers: { $addToSet: '$manufacturer' },
         ...extraGroupParameters,
      })
      filterDataGroup[0].allManufacturers.sort()
      return filterDataGroup
   }

   splitStringAndConvertToArray = (stringToSplit: string, separator: string = ',') => {
      return stringToSplit.split(separator)
   }
}
