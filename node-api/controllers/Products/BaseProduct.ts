import { Document, Model } from 'mongoose'
import { BaseProductType } from '../../models/Products/BaseTypes'
import { QueryRequest } from './Helper'

export default abstract class BaseProduct {
   private productModel
   constructor(productModel: Model<any>) {
      this.productModel = productModel
   }

   returnProductModelWithPaginateInfoWithoutDetails = async (
      request: QueryRequest,
      extraFilerParameters: any = {}
   ) => {
      const currentPage = parseInt(request.query.currentPage) || 1
      const perPage = parseInt(request.query.perPage) || 12
      const orderBy = request.query.orderBy || 'asc'
      const byManufacturer = request.query.byManufacturer === 'all' ? '' : request.query.byManufacturer
      const warranty = request.query.selectedWarranty.trim()
      const byWarranty = warranty === 'all' ? null : { 'details.warranity': warranty }
      const priceRange = this.splitStringAndConvertToArray(request.query.priceRange)
      let totalPages: number

      const foundProduct: (BaseProductType & {
         details: any
      } & Document<any, any>)[] = await this.productModel
         .find({
            manufacturer: new RegExp(byManufacturer, 'i'),
            ...byWarranty,
            price: { $gte: priceRange[0], $lte: priceRange[1] },
            ...extraFilerParameters,
         })
         .select('price manufacturer type typeCode pictureUrls ratingValues._id')
         .sort({ price: orderBy })
         .lean()

      const startIndex = (currentPage - 1) * perPage
      const endIndex = currentPage * perPage
      const pagedProducts = foundProduct.slice(startIndex, endIndex)

      totalPages = Math.ceil(foundProduct.length / perPage)
      return { foundProduct: pagedProducts, totalPages, totalProductCount: foundProduct.length }
   }

   returnProductDetails = async (productId: string) => {
      const foundProductDetails = await this.productModel
         .findById(productId)
         .select('type typeCode pictureUrls price manufacturer details')
         .sort({ 'details.chartData.timpestamp': 1 })
         .lean()
      return foundProductDetails
   }

   baseFilterData = async (extraGroupParameters: any = {}) => {
      const filterDataGroup = await this.productModel.aggregate().group({
         _id: null,
         maxPrice: { $max: '$price' },
         minPrice: { $min: '$price' },
         allManufacturers: { $addToSet: '$manufacturer' },
         allWarranties: { $addToSet: '$details.warranity' },
         ...extraGroupParameters,
      })
      filterDataGroup[0].allManufacturers.sort()
      return filterDataGroup
   }

   splitStringAndConvertToArray = (stringToSplit: string, separator: string = ',') => {
      return stringToSplit.split(separator)
   }
}
