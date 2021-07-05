import styled from 'styled-components'

type Prop = {
   isCardExpanded: boolean
}

export const CardWidth = '250px'
const CardHeight = '350px'
const FooterHeight = '40px'

export const StyledCard = styled.article<Prop>`
   display: flex;
   flex-direction: column;
   background-color: #fff;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 15px 0 rgba(0, 0, 0, 0.19);
   height: ${({ isCardExpanded }) => (isCardExpanded ? `calc(${CardHeight} + ${FooterHeight});` : `${CardHeight};`)};
   width: ${CardWidth};

   cursor: pointer;
   transition: all 0.2s;
   &:hover {
      transform: scale(1.03) translateY(-5px);
   }
`

// Header
export const ImageContainer = styled.header`
   width: 100%;
   height: 175px;
`

export const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`

// BODY
export const CardBody = styled.section`
   height: 175px;
`

export const SubTitleStyle = styled.h5`
   font-size: 1rem;
   padding: 0 0.6rem 0 0.6rem;
   margin: 1rem 0 0.5rem 0;
   height: 60px;
`

export const PriceStyle = styled.h3`
   font-size: 1.2rem;
   text-align: right;
   padding: 0.5rem 1rem 0.5rem 0;
   margin: 0;
`

// Footer
export const CardFooterStyle = styled.footer`
   height: ${FooterHeight};
`
