import React from 'react'

import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import DeleteIcon from '@mui/icons-material/Delete'

const RemoveIcon: React.FC<{ title: string; onClickEvent: () => void }> = ({ title, onClickEvent }) => {
   return (
      <Tooltip placement='top' arrow title={title}>
         <IconButton color='error' onClick={onClickEvent}>
            <DeleteIcon fontSize='large' />
         </IconButton>
      </Tooltip>
   )
}

export default RemoveIcon
