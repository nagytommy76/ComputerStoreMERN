import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../../../../app/hooks'

import ProductCard from './Includes/ProductCard'
import { StyledContainer } from './Styles/PopoverStyle'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import Button from '@mui/material/Button'

const PopoverDialog = () => {
   const navigate = useNavigate()
   const selectedCompareItems = useAppSelector(state => state.productCompare.selectedProductsByType)

   const selectIdsFromCompareItems: string[] = useMemo(() => {
      return selectedCompareItems.map(item => item.productId)
   }, [selectedCompareItems])

   const findFirstProductType = (): string => {
      return selectedCompareItems[0].productType
   }

   const handleClickEvent = () => {
      navigate(`/compare`, { state: { selectIdsFromCompareItems, productType: findFirstProductType() } })
   }

   return (
      <StyledContainer>
         <ProductCard />
         <Button
            onClick={handleClickEvent}
            variant='contained'
            color='info'
            endIcon={<KeyboardDoubleArrowRightIcon />}
         >
            Összehasonlítás
         </Button>
      </StyledContainer>
   )
}

export default PopoverDialog
