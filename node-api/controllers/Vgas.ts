import { Request, Response } from 'express'
import { VgaProduct } from '../models/Vga/VgaProduct'
type QueryRequest = Request & {
   query: {
      currentPage: string
      perPage: string
      orderBy: string
      byManufacturer: string
      minPrice: number
   }
}

export const getAllVgaItemController = async (req: QueryRequest, res: Response) => {
   const currentPage = parseInt(req.query.currentPage) || 1
   const perPage = parseInt(req.query.perPage) || 10
   const orderBy = req.query.orderBy || 'asc'
   const byManufacturer = req.query.byManufacturer || ''
   const minPrice = req.query.minPrice || 0
   let totalItems: number
   let totalPages: number

   await VgaProduct.countDocuments()
      .then(async (count) => {
         totalItems = count
         totalPages = Math.ceil(totalItems / perPage)
         return await VgaProduct.find({
            manufacturer: new RegExp(byManufacturer),
            price: { $gt: minPrice }
         })
            .sort({ price: orderBy })
            .skip((currentPage - 1) * perPage)
            .limit(perPage)
      })
      .then((allProducts) => {
         if (!allProducts) return res.json({ message: 'Nem található VGA termék!' })
         else return res.json({ allProducts, totalItems, perPage, totalPages })
      })
      .catch((error) => res.status(500).json({ hasError: true, errorMsg: error }))
}

// Min/Max
// https://www.tutorialspoint.com/get-maximum-and-minimum-value-in-mongodb

export const getFilterData = async (req: QueryRequest, res: Response) => {
   await VgaProduct.aggregate()
      .group({
         _id: null,
         maxPrice: { $max: '$price' },
         minPrice: { $min: '$price' },
         allManufacturers: { $addToSet: '$manufacturer' }
      })
      .then((allVgaFilterData) => {
         return res.status(200).json(allVgaFilterData[0])
      })
      .catch((error) => res.status(500).json({ errorMessage: error }))
}
