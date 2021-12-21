import styled from 'styled-components'
import { mobileWindowSize } from '../../../../Theme/GlobalStyles'

export const StyledCartItem = styled.section`
   position: relative;
   margin: 0.6rem 0;
   width: 85%;
   min-height: 145px;
   display: flex;
   align-items: center;
   background-color: white;
`

// LEft Image
export const LeftImageContainerStyle = styled.div`
   width: 90px;
   height: 100%;
   flex: 1;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0 0.4rem;
`

export const ImageStyle = styled.img`
   object-fit: contain;
   width: 100%;
   height: 100%;
`

// RIGHT CONTENT

export const ProductNameStyle = styled.p`
   font-size: 1rem;
   margin: 1.3rem 0;
   @media (max-width: ${mobileWindowSize}) {
      font-size: 0.8rem;
   }
`

export const RightContentContainerStyle = styled.div`
   height: 100%;
   flex: 2;
`
export const PriceAndQuantityStyle = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-around;
   width: 100%;
   font-weight: 600;
`
