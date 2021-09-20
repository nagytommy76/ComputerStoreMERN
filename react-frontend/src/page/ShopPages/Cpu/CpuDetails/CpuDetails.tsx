import React from 'react'
import styled from 'styled-components'

const ProductDetails = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/ProductDetails'))
const DetailsTable = React.lazy(() => import('./CpuDetailTable'))
const Rating = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/Ratings/AddNew/Rating'))
const Comments = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/Ratings/Comments/Comments'))

const CpuDetails = () => {
   return (
      <>
         <ProductDetails>
            <DetailsTable />
         </ProductDetails>
         <BottomStyle>
            <Rating />
            <Comments />
         </BottomStyle>
      </>
   )
}

const BottomStyle = styled.section`
   display: flex;
   flex-direction: column;
   width: 70%;
   margin: 0 auto;
`

export default CpuDetails
