import styled from 'styled-components'
import { mobileWindowSize } from '../../../../Theme/GlobalStyles'

// Close button
export const StyledCloseIcon = styled.div`
   @media (max-width: ${mobileWindowSize}) {
      top: 0;
      right: 0;
   }

   position: absolute;
   right: 2px;
   top: 2px;
   font-size: 1.1rem;
   font-weight: 600;
   color: red;
   cursor: pointer;
   width: 25px;
   height: 25px;

   display: flex;
   justify-content: center;
   align-items: center;

   border-radius: 50%;
   transition: all 0.2s;

   &:hover {
      background-color: hsla(0, 0%, 50%, 0.6);
   }
`

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
