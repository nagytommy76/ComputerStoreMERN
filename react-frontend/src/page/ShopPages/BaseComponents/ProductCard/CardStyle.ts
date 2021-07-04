import styled from 'styled-components'

export const CardWidth = '250px'
export const StyledCard = styled.article`
   display: flex;
   flex-direction: column;
   background-color: #fff;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 15px 0 rgba(0, 0, 0, 0.19);
   height: 350px;
   width: ${CardWidth};

   cursor: pointer;
`

export const ImageContainer = styled.header`
   width: 100%;
   height: 50%;
`

export const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`

export const CardBody = styled.section`
   height: 50%;
`

export const SubTitleStyle = styled.h5`
   font-size: 1rem;
   padding: 0 0.6rem 0 0.6rem;
   margin-bottom: 0;
   height: 40%;
`

export const PriceStyle = styled.h3`
   font-size: 1.2rem;
   text-align: right;
   padding-right: 1rem;
`
