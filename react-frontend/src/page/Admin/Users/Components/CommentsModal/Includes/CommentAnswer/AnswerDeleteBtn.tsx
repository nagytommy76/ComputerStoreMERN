import React from 'react'

import Button from '@mui/material/Button'
import GppBadIcon from '@mui/icons-material/GppBad'

const AnswerDeleteBtn: React.FC<{ toDeleteAnswerId: string }> = ({ toDeleteAnswerId }) => {
   const handleDeleteAnswer = async () => {
      console.log('Válasz törlése, és az ID: ', toDeleteAnswerId)
   }
   return (
      <Button
         onClick={handleDeleteAnswer}
         sx={{ marginTop: 2 }}
         variant='outlined'
         startIcon={<GppBadIcon />}
         color='error'
      >
         Válasz törlése
      </Button>
   )
}

export default AnswerDeleteBtn
