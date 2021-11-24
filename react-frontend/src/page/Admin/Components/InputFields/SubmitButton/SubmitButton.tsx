import React from 'react'

import Button from '@mui/material/Button'
import SaveIcon from '@mui/icons-material/Save'

const SubmitButton: React.FC<{ children: string }> = ({ children }) => {
   return (
      <Button disableElevation sx={{ marginTop: '1rem' }} size='large' variant='contained' endIcon={<SaveIcon />} type='submit'>
         {children}
      </Button>
   )
}

export default SubmitButton
