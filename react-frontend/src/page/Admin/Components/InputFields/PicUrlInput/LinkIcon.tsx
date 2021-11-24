import React from 'react'

import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import LinkIcon from '@mui/icons-material/Link'

const PictureLinkIcon: React.FC<{ pictureUrl: string; title: string }> = ({ pictureUrl, title }) => {
   return (
      <Tooltip placement='top' arrow title={title}>
         <a href={pictureUrl || '#'} rel='noreferrer' target={pictureUrl ? '_blank' : ''}>
            <IconButton color='success'>
               <LinkIcon fontSize='large' />
            </IconButton>
         </a>
      </Tooltip>
   )
}

export default PictureLinkIcon
