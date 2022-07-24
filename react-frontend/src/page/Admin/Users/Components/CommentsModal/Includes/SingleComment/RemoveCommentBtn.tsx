import React from 'react'

import Button from '@mui/material/Button'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation'

const RemoveCommentBtn: React.FC<{ commentToDeletId: string }> = ({ commentToDeletId }) => {
   const handleSingleCommentDelete = () => {
      console.log('Egy komment törlése, és az ID: ', commentToDeletId)
   }

   return (
      <Button
         sx={{ width: 200 }}
         color='error'
         variant='outlined'
         onClick={handleSingleCommentDelete}
         startIcon={<CancelPresentationIcon />}
      >
         Komment törlése
      </Button>
   )
}

export default RemoveCommentBtn
