import { Request } from 'express'

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

export type DetailsQueryRequestType = {
   query: {
      productId: string
   }
}
