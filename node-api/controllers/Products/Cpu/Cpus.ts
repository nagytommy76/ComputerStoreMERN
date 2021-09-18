import { Response, Request } from 'express'
import { CpuProduct } from '../../../models/Products/Cpu/CpuSchema'
import { QueryRequest, returnProductModelWithPaginateInfo, baseFilterData } from '../Helper'
import { ObjectId } from 'mongoose'

export const getCpuFilterData = async (req: QueryRequest, res: Response) => {
   try {
      baseFilterData(CpuProduct, res)
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const getAllCpuItemController = async (req: QueryRequest, res: Response) => {
   try {
      returnProductModelWithPaginateInfo(CpuProduct, req, res)
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const rateCpuProductController = async (req: RateQueryRequest, res: Response) => {
   try {
      const foundCpuProduct = await CpuProduct.findById(req.query._id)
      foundCpuProduct?.ratingValues.push({
         rating: req.query.rating,
         comment: req.query.comment
      })
      return res.status(200).json(foundCpuProduct?.ratingValues)
   } catch (error) {
      return res.status(500).json(error)
   }
}

type RateQueryRequest = Request & {
   query: {
      _id: ObjectId
      rating: number
      comment: string
   }
}
