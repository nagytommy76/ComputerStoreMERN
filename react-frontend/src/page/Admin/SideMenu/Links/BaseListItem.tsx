import React from 'react'

import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'

const BaseListItem: React.FC<{ displayText: string }> = ({ displayText }) => {
   return (
      <ListItem button>
         <Typography variant='subtitle1'>{displayText}</Typography>
      </ListItem>
   )
}

export default BaseListItem
