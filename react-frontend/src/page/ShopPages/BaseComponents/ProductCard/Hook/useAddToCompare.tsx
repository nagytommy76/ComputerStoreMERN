import { useContext } from 'react'
import { MessageContext, MessageTypes } from '../../Context/MessageContext'

import { useAppSelector, useAppDispatch } from '../../../../../app/hooks'
import { addProductIdsToCompare } from '../../../../../app/slices/ProductCompareSlice'

const useAddToCompare = (toSaveCartItems: ToSaveCartItems) => {
   const reduxDispatch = useAppDispatch()
   const savedProductIdsToCompare = useAppSelector((state) => state.productCompare.selectedProductsByType)
   const { dispatch } = useContext(MessageContext)

   const handleAddToCompare = () => {
      // Ide majd egy felugró ablakot, hogy max 4 (vagy valamennyit) lehet csak összehasonlítani,
      // Illetve ha már tartalmazza akkor is
      if (savedProductIdsToCompare.length < 4) {
         const isContainsId = savedProductIdsToCompare.find(
            (compare) => compare.productId === toSaveCartItems._id
         )

         if (!isContainsId) {
            // ha undefined, akkor tedd bele (nincs benne)
            reduxDispatch(
               addProductIdsToCompare({
                  displayImage: toSaveCartItems.displayImage,
                  displayName: toSaveCartItems.displayName,
                  productId: toSaveCartItems._id,
                  productType: toSaveCartItems.productType,
               })
            )
         } else {
            dispatch({
               type: MessageTypes.SET_ISACTIVE,
               payload: {
                  isActive: true,
                  message: `Már hozzáadtad az összeahsonlításhoz a ( ${toSaveCartItems.displayName} ) terméket`,
                  severity: 'error',
               },
            })
         }
      } else {
         dispatch({
            type: MessageTypes.SET_ISACTIVE,
            payload: {
               isActive: true,
               message: '4-nél több terméket nem hasonlíthatsz össze!',
               severity: 'warning',
            },
         })
      }
   }
   return handleAddToCompare
}

export default useAddToCompare

export type FooterProps = {
   toSaveCartItems: ToSaveCartItems
}

export interface ToSaveCartItems {
   _id: string
   displayName: string
   price: number
   itemQuantity: number
   displayImage: string
   productType: string
}
