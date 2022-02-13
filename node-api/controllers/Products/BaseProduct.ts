import { Response } from 'express'
import { Model } from 'mongoose'
import { QueryRequest } from './Helper'

export default abstract class BaseProduct {
   private productModel
   constructor(productModel: Model<any>) {
      this.productModel = productModel
   }

   returnProductModelWithPaginateInfo = async (request: QueryRequest, extraFilerParameters: any = {}) => {
      const currentPage = parseInt(request.query.currentPage) || 1
      const perPage = parseInt(request.query.perPage) || 10
      const orderBy = request.query.orderBy || 'asc'
      const byManufacturer = request.query.byManufacturer == 'all' ? '' : request.query.byManufacturer
      const priceRange = request.query.priceRange.split(',') || [0, 5000000]

      let totalItems: number
      let totalPages: number
      const documentCount = await this.productModel.countDocuments()
      totalItems = documentCount
      totalPages = Math.ceil(totalItems / perPage)
      // A find-ba beilleszteni (spread) egy objectet ami tartalmazza az adott termék egyedi keresési szempontjait
      const foundProduct = await this.productModel
         .find({
            manufacturer: new RegExp(byManufacturer, 'i'),
            price: { $gte: priceRange[0], $lte: priceRange[1] },
            ...extraFilerParameters,
         })
         .sort({ price: orderBy })
         .skip((currentPage - 1) * perPage)
         .limit(perPage)
      return { foundProduct, totalItems, totalPages, perPage }
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
