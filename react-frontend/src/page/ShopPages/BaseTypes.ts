export type BaseProductType = {
   _id: string
   itemNumber?: string
   type: string
   typeCode?: string
   manufacturer: string
   price: number
   pictureUrls: string[]
   inStockQuantity: number
   isHighlighted: boolean
   ratingValues?: [{ rating: number; comment?: string; ratedAt: Date; userName: string }]
}

export type FilterTypes = {
   orderBy: string
   minPrice: number
   maxPrice: number
   priceRange: number[]
   allManufacturer: string[]
   selectedManufacturer: string
   productType: string
}

export type LocationType = {
   _id: string
   details: any
   pictureUrls: string[]
   type: string
   manufacturer: string
   price: number
   typeCode: string
   productType: string
}
