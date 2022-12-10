import { useState, useRef, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../../../app/hooks'
import { selectByProductType } from '../../../../../../../app/slices/ProductCompareSlice'

const useCompareBtn = (pageProductType: string) => {
   const dispatch = useAppDispatch()
   const compareLength = useAppSelector(state => state.productCompare.productIdsToComare.length) || 0
   const compareSelected = useAppSelector(state => state.productCompare.selectedProductsByType)

   const [anchorOpened, setAnchorOpened] = useState<boolean>(false)
   const [isDispalyed, setIsDisplayed] = useState<boolean>(false)
   const popoverAnchor = useRef<HTMLButtonElement | null>(null)

   useEffect(() => {
      if (compareSelected.length === 0) setIsDisplayed(false)
      else setIsDisplayed(true)
   }, [compareSelected])

   useEffect(() => {
      dispatch(selectByProductType(pageProductType))
   }, [compareSelected, dispatch, pageProductType, compareLength])

   const handleOpenPopover = () => {
      setAnchorOpened(true)
   }
   const handleClosePopover = () => {
      setAnchorOpened(false)
   }
   return {
      handleOpenPopover,
      handleClosePopover,
      anchorOpened,
      isDispalyed,
      popoverAnchor,
   }
}

export default useCompareBtn
