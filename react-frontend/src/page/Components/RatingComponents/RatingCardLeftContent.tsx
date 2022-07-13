import React from 'react'
import { formatDate } from '../../Helpers/FormatDate'

import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'

const RatingCardLeftContent: React.FC<{ contentText: string; rating: number; ratedAt: Date }> = ({
   contentText,
   ratedAt,
   rating,
}) => {
   return (
      <div style={{ flex: 1 }}>
         <Typography variant='h5'>{contentText}</Typography>
         <Rating name='read-only' precision={0.5} value={rating} size='large' readOnly />
         <Typography variant='subtitle2'>{formatDate(ratedAt)}</Typography>
      </div>
   )
}

export default RatingCardLeftContent
