import styled from 'styled-components'

export const StyledSlideSection = styled.section`
   min-height: 100%;
   flex: 1;
`

export const StyledImageContainer = styled.div`
   width: 100%;
   height: 100%;
   /* background-color: #fff; */
   position: relative;
`

export const StyledImage = styled.img`
   object-fit: scale-down;
   width: 100%;
   height: 100%;
`

// Arrows
export const RightArrow = styled.span`
   position: absolute;
   top: 50%;
   right: 5px;
`
export const LeftArrow = styled.span`
   position: absolute;
   top: 50%;
   left: 5px;
`
