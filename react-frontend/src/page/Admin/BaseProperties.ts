import { BaseProductType } from '../ShopPages/BaseTypes'

export const baseProperties: BaseProductType = {
   _id: '',
   itemNumber: '',
   type: '',
   typeCode: '',
   manufacturer: '',
   price: 0,
   pictureUrls: [],
   inStockQuantity: 0,
   isHighlighted: false,
   ratingValues: [
      {
         ratedAt: new Date(),
         rating: 0,
         userName: '',
         comment: '',
      },
   ],
}
