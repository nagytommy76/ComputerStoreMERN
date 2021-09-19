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
      const foundCpuProduct = await CpuProduct.findById(req.body._id)
      foundCpuProduct?.ratingValues.push({
         rating: req.body.rating,
         comment: req.body.comment,
         userName: req.body.userName,
         ratedAt: new Date()
      })
      foundCpuProduct?.save()
      return res.sendStatus(201)
   } catch (error) {
      return res.status(500).json(error)
   }
}
type RateQueryRequest = Request & {
   body: {
      userName: string
      _id: ObjectId
      rating: number
      comment: string
   }
}

export const getCpuRatingSummaryController = async (req: RequestQuery, res: Response) => {
   try {
      const allCpuRatings = await CpuProduct.findById(req.query._id)
      const rateCount = allCpuRatings?.ratingValues.length || 0
      let rateSum = 0
      allCpuRatings?.ratingValues.map((obj) => {
         rateSum += obj.rating
      })
      return res.status(200).json({
         rateCount,
         avgRating: rateSum / rateCount
      })
   } catch (error) {
      return res.status(500).json(error)
   }
}

type RequestQuery = Request & {
   query: {
      _id: ObjectId
   }
}
