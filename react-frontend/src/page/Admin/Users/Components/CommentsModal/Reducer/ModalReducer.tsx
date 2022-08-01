import { RateState } from '../../../../../ShopPages/BaseComponents/ProductDetailsPage/Ratings/Comments/Helpers'

export interface IncomingCommentType {
   manufacturer: string
   _id: string
   type: string
   ratingValues: RateState[]
}

export interface InitialState {
   cpu: IncomingCommentType[]
   vga: IncomingCommentType[]
   memory: IncomingCommentType[]
   hdd: IncomingCommentType[]
   ssd: IncomingCommentType[]
}

export enum ProductActionTypes {
   CPU = 'SET_CPU_COMMENTS',
   VGA = 'SET_VGA_COMMENTS',
   MEMORY = 'SET_MEMORY_COMMENTS',
   HDD = 'SET_HDD_COMMENTS',
   SSD = 'SET_SSD_COMMENTS',
}

export interface IBaseListAction {
   type: ProductActionTypes
   // payload: IncomingCommentType[]
   payload: {
      incomingData: IncomingCommentType[]
      commentID?: string
      productID?: string
   }
}
/**
 * Pl át kéne adni a commentID-t meg a product id-t a deleteCommentBTN ből (dispatch)
 * majd array filter (vagy hasonló) functionnel törölni a commentet
 * https://medium.com/swlh/react-context-with-usereducer-and-typescript-1b7bd9a1c15
 */

export const initialState: InitialState = {
   //https://stackoverflow.com/questions/54771003/usereducers-initialstate-is-typed-as-never
   cpu: [{ manufacturer: '', _id: '', type: '', ratingValues: [] }],
   vga: [{ manufacturer: '', _id: '', type: '', ratingValues: [] }],
   memory: [{ manufacturer: '', _id: '', type: '', ratingValues: [] }],
   hdd: [{ manufacturer: '', _id: '', type: '', ratingValues: [] }],
   ssd: [{ manufacturer: '', _id: '', type: '', ratingValues: [] }],
}

export function commentsReducer(
   state: InitialState,
   { payload: { incomingData, commentID, productID }, type }: IBaseListAction
): InitialState {
   switch (type) {
      case ProductActionTypes.CPU:
         return {
            ...state,
            cpu: incomingData,
         }
      case ProductActionTypes.VGA:
         return {
            ...state,
            vga: incomingData,
         }
      case ProductActionTypes.MEMORY:
         return {
            ...state,
            memory: incomingData,
         }
      case ProductActionTypes.HDD:
         return {
            ...state,
            hdd: incomingData,
         }
      case ProductActionTypes.SSD:
         return {
            ...state,
            ssd: incomingData,
         }
      default:
         return state
   }
}
