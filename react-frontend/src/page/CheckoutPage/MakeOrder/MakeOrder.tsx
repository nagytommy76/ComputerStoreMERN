import React, { useState } from 'react'
import axios from 'axios'

import LoadingButton from '@mui/lab/LoadingButton'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'

const MakeOrder = () => {
   const [isOrderLoading, setIsOrderLoading] = useState<boolean>(false)
   const handleNextButton = async () => {
      console.log('rendelés leadása')
      setIsOrderLoading(true)
      const orderResult = await axios.post('/order/handle-order')
      console.log(orderResult.data)
      setIsOrderLoading(false)
   }

   return (
      <LoadingButton
         sx={{
            position: 'absolute',
            bottom: '40px'
         }}
         loading={isOrderLoading}
         loadingPosition='end'
         variant='contained'
         size='large'
         endIcon={<DoubleArrowIcon />}
         onClick={handleNextButton}>
         Rendelés Leadása
      </LoadingButton>
   )
}

export default MakeOrder
