import ProductCard from './Includes/ProductCard'

import { StyledContainer } from './Styles/PopoverStyle'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import Button from '@mui/material/Button'

const PopoverDialog = () => {
   const handleClickEvent = () => {
      console.log('Átírányít a compare page-re')
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
