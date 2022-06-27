import React, { lazy } from 'react'
import { HighlightDataType } from '../HighlightSection'

import { CardContainerStyle, CardInnerContainerStyle } from './Style'
import Typography from '@mui/material/Typography'

const ProductCard = lazy(() => import('../../../ShopPages/BaseComponents/ProductCard/ProductCard'))

const BaseHighlight: React.FC<{
   highlightData: HighlightDataType
   productType: string
   borderColor?: string
}> = ({ highlightData, productType, borderColor }) => {
   return (
      <CardContainerStyle borderColor={borderColor}>
         {/* <Typography variant='h5' textAlign='center'>
            Kiemelt {productType.toUpperCase()} termékeink
         </Typography> */}
         {highlightData.map(highlight => (
            <CardInnerContainerStyle>
               <ProductCard
                  pathNameForDetailsURL={productType}
                  key={highlight._id}
                  _id={highlight._id}
                  manufacturer={highlight.manufacturer}
                  pictureUrls={highlight.pictureUrls}
                  price={highlight.price}
                  type={highlight.type}
                  typeCode={highlight.typeCode}
                  ratingCount={highlight.ratingValues?.length}
               />
            </CardInnerContainerStyle>
         ))}
      </CardContainerStyle>
   )
}

export default BaseHighlight
