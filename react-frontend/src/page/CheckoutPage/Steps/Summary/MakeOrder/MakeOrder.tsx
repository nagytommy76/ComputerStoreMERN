import React, { useState } from 'react'
import axios from 'axios'

import LoadingButton from '@mui/lab/LoadingButton'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'

const MakeOrder = () => {
   const [isOrderLoading, setIsOrderLoading] = useState<boolean>(false)
   const handleNextButton = async () => {
      setIsOrderLoading(true)
      const orderResult = await axios.post('/order/handle-order')
      console.log(orderResult.data)
      setIsOrderLoading(false)
   }

   return (
      <LoadingButton
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
