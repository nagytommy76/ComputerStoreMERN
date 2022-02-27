import React, { useState, useEffect } from 'react'
import { ValidationError } from '../../../AdminTypes'

import Collapse from '@mui/material/Collapse'
import Alert from '@mui/material/Alert'

const PicUrlError: React.FC<{ validationErrors: ValidationError[] }> = ({ validationErrors }) => {
   const [isPicUrlEmpty, setIsPicUrlEmpty] = useState<boolean>(false)
   const [picUrlErrorMsg, setPicUrlErrorMsg] = useState<string>('')

   useEffect(() => {
      const foundErrorIndex = validationErrors.findIndex(validate => validate.param === 'pictureUrls')
      if (foundErrorIndex !== -1) {
         setPicUrlErrorMsg(validationErrors[foundErrorIndex].msg)
         setIsPicUrlEmpty(true)
      }
   }, [validationErrors])

   const handleClose = () => {
      setIsPicUrlEmpty(false)
   }

   return (
      <Collapse in={isPicUrlEmpty}>
         <Alert severity='error' onClose={handleClose}>
            {picUrlErrorMsg}
         </Alert>
      </Collapse>
   )
}

export default PicUrlError
