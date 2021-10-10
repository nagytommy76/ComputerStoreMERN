import { Request, Response } from 'express'
import { Model } from 'mongoose'

export const returnProductModelWithPaginateInfo = async (ProductModel: Model<any>, req: QueryRequest, res: Response) => {
   const currentPage = parseInt(req.query.currentPage) || 1
   const perPage = parseInt(req.query.perPage) || 10
   const orderBy = req.query.orderBy || 'asc'
   const byManufacturer = req.query.byManufacturer == 'all' ? '' : req.query.byManufacturer
   const priceRange = req.query.priceRange.split(',') || [0, 5000000]

   let totalItems: number
   let totalPages: number
   await ProductModel.countDocuments()
      .then(async (count) => {
         totalItems = count
         totalPages = Math.ceil(totalItems / perPage)
         return await ProductModel.find({
            manufacturer: new RegExp(byManufacturer),
            price: { $gte: priceRange[0], $lte: priceRange[1] }
         })
            .sort({ price: orderBy })
            .skip((currentPage - 1) * perPage)
            .limit(perPage)
      })
      .then((allProducts) => {
         if (!allProducts) return res.json({ message: 'Nem található termék!' })
         else return res.json({ allProducts, totalItems, perPage, totalPages })
      })
      .catch((error) => res.status(500).json({ hasError: true, errorMsg: error }))
}

export const baseFilterData = async (ProductModel: Model<any>, res: Response) => {
   await ProductModel.aggregate()
      .group({
         _id: null,
         maxPrice: { $max: '$price' },
         minPrice: { $min: '$price' },
         allManufacturers: { $addToSet: '$manufacturer' }
      })
      .then((allFilterData) => {
         return res.status(200).json(allFilterData[0])
      })
      .catch((error) => res.status(500).json({ errorMessage: error }))
}

export type QueryRequest = Request & {
   query: {
      currentPage: string
      perPage: string
      orderBy: string
      byManufacturer: string
      minPrice: number
      priceRange: string
   }
}
