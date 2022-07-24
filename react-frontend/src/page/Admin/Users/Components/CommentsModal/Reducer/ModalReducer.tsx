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
   payload: IncomingCommentType[]
}

export const initialState: InitialState = {
   //https://stackoverflow.com/questions/54771003/usereducers-initialstate-is-typed-as-never
   cpu: [],
   vga: [],
   memory: [],
   hdd: [],
   ssd: [],
}

export function commentsReducer(state: InitialState, action: IBaseListAction): InitialState {
   switch (action.type) {
      case ProductActionTypes.CPU:
         return {
            ...state,
            cpu: action.payload,
         }
      case ProductActionTypes.VGA:
         return {
            ...state,
            vga: action.payload,
         }
      case ProductActionTypes.MEMORY:
         return {
            ...state,
            memory: action.payload,
         }
      case ProductActionTypes.HDD:
         return {
            ...state,
            hdd: action.payload,
         }
      case ProductActionTypes.SSD:
         return {
            ...state,
            ssd: action.payload,
         }
      default:
         return state
   }
}
