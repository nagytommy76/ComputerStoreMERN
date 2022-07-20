import React from 'react'
import { RateState } from '../../../../../ShopPages/BaseComponents/ProductDetailsPage/Ratings/Comments/Helpers'

export interface IncomingCommentType {
   manufacturer: string
   _id: string
   type: string
   ratingValues: RateState[]
}

interface InitialState {
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

interface IBaseListAction {
   type: ProductActionTypes
   errorMessage?: string
   payload?: IncomingCommentType[]
}

export const initialState: InitialState = {
   cpu: [],
   vga: [],
   memory: [],
   hdd: [],
   ssd: [],
}

export function commentsReducer(state: InitialState, action: IBaseListAction): any {
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
