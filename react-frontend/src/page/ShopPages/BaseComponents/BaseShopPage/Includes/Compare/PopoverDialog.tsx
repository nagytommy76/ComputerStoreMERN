import { useNavigate } from 'react-router-dom'

import ProductCard from './Includes/ProductCard'
import { StyledContainer } from './Styles/PopoverStyle'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import Button from '@mui/material/Button'

const PopoverDialog = () => {
   const navigate = useNavigate()
   const handleClickEvent = () => navigate(`/compare`)

   return (
      <StyledContainer>
         <ProductCard />
         <Button
            onClick={handleClickEvent}
            variant='contained'
            color='info'
            endIcon={<KeyboardDoubleArrowRightIcon />}>
            Összehasonlítás
         </Button>
      </StyledContainer>
   )
}

export default PopoverDialog
