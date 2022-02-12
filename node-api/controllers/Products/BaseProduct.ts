import { Response } from 'express'
import { Model } from 'mongoose'
import { QueryRequest } from './Helper'

export default abstract class BaseProduct {
   private productModel
   constructor(productModel: Model<any>) {
      this.productModel = productModel
   }

   returnProductModelWithPaginateInfo = async (
      request: QueryRequest,
      response: Response,
      extraFilerParameters: any = {}
   ) => {
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
      // await this.productModel.countDocuments().then(async count => {
      //    totalItems = count
      //    totalPages = Math.ceil(totalItems / perPage)
      //    // A find-ba beilleszteni (spread) egy objectet ami tartalmazza az adott termék egyedi keresési szempontjait
      //    return await this.productModel
      //       .find({
      //          manufacturer: new RegExp(byManufacturer, 'i'),
      //          price: { $gte: priceRange[0], $lte: priceRange[1] },
      //          ...extraFilerParameters,
      //       })
      //       .sort({ price: orderBy })
      //       .skip((currentPage - 1) * perPage)
      //       .limit(perPage)
      // })
      // .then(allProducts => {
      //    if (allProducts.length === 0)
      //       return response.json({
      //          message: 'Nem található termék!',
      //          allProducts,
      //          totalItems,
      //          perPage,
      //          totalPages,
      //       })
      //    else return response.json({ allProducts, totalItems, perPage, totalPages })
      // })
      // .catch(error => response.status(500).json({ hasError: true, errorMsg: error }))
   }

   baseFilterData = async (res: Response, extraGroupParameters: any = {}) => {
      await this.productModel
         .aggregate()
         .group({
            _id: null,
            maxPrice: { $max: '$price' },
            minPrice: { $min: '$price' },
            allManufacturers: { $addToSet: '$manufacturer' },
            ...extraGroupParameters,
         })
         .sort({ allManufacturers: 1 })
         .then(allFilterData => {
            allFilterData[0].allManufacturers.sort()
            return res.status(200).json(allFilterData[0])
         })
         .catch(error => res.status(500).json({ errorMessage: error }))
   }

   splitStringAndConvertToArray = (stringToSplit: string, separator: string = ',') => {
      return stringToSplit.split(separator)
   }
}
