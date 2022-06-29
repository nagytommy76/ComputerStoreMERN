import React, { lazy } from 'react'
import { HighlightDataType } from '../HighlightSection'

import { CardContainerStyle } from './Style'

const ProductCard = lazy(() => import('../../../ShopPages/BaseComponents/ProductCard/ProductCard'))

const BaseHighlight: React.FC<{
   highlightData: HighlightDataType
   productType: string
   borderColor?: string
}> = ({ highlightData, productType, borderColor }) => {
   return (
      <CardContainerStyle bordercolor={borderColor}>
         {highlightData.map(highlight => (
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
         ))}
      </CardContainerStyle>
   )
}

export default BaseHighlight
