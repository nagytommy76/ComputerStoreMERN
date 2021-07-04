import styled from 'styled-components'

export const StyledCard = styled.article`
   display: flex;
   flex-direction: column;
   height: 350px;
   width: 250px;
`

export const ImageContainer = styled.header`
   width: 100%;
   height: 40%;
`

export const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`

export const CardBody = styled.section`
   height: 60%;
`
