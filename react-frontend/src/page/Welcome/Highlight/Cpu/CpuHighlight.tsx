import React, { lazy } from 'react'
import { HighlightDataType } from '../HighlightSection'

import { CardContainerStyle, CardInnerContainerStyle } from './Style'
import Typography from '@mui/material/Typography'

const ProductCard = lazy(() => import('../../../ShopPages/BaseComponents/ProductCard/ProductCard'))

const CpuHighlight: React.FC<{ cpuHighlights: HighlightDataType }> = ({ cpuHighlights }) => {
   return (
      <CardContainerStyle>
         <Typography variant='h5' textAlign='center'>
            Kiemelt CPU termékeink
         </Typography>
         <CardInnerContainerStyle>
            {cpuHighlights.map(
               (highlight, index) => (
                  // index < 4 && (
                  <ProductCard
                     pathNameForDetailsURL='cpu'
                     key={highlight._id}
                     _id={highlight._id}
                     manufacturer={highlight.manufacturer}
                     pictureUrls={highlight.pictureUrls}
                     price={highlight.price}
                     type={highlight.type}
                     typeCode={highlight.typeCode}
                     ratingCount={highlight.ratingValues?.length}
                  />
               )
               // )
            )}
         </CardInnerContainerStyle>
      </CardContainerStyle>
   )
}

export default CpuHighlight
