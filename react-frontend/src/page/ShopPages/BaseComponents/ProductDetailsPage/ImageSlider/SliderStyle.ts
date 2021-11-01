import styled from 'styled-components'

export const StyledSlideSection = styled.section`
   min-height: 100%;
   flex: 1;
`

export const StyledImageContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 100%;
   overflow: hidden;
   position: relative;
`

export const StyledImage = styled.img`
   object-fit: scale-down;
   width: 100%;
   height: 100%;
`

// Arrows
const baseArrow = `
   z-index: 4;
   position: absolute;
   top: 50%;
`

export const RightArrow = styled.span`
   ${baseArrow}
   right: 5px;
`
export const LeftArrow = styled.span`
   ${baseArrow}
   left: 5px;
`
