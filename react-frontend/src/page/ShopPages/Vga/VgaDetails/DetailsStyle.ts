import styled from 'styled-components'
import NumberFormat from 'react-number-format'
import { navbarHeight } from '../../../Navbar/NavbarStyles'

export const VgaDetailsPage = styled.section`
   min-height: 100vh;
   width: 85%;
   margin: calc(${navbarHeight} + 1.5rem) auto 0 auto;
`

// Head sections

export const HeadSection = styled.section`
   display: flex;
   flex-direction: row;
   align-items: stretch;
   justify-content: center;
`

export const LeftHeaderStyle = styled.aside<{ isDarkTheme: boolean }>`
   transition: all 0.2s;
   margin: 0 1rem 0 1rem;
   flex: 1;
   color: ${({ isDarkTheme }) => (isDarkTheme ? 'white' : 'black')};
`

export const TopHeaderTitle = styled.h1`
   text-align: justify;
   margin: 0;
   padding: 2rem 0 2rem 0;
   font-size: 2rem;
`

export const HorizontalLineStyle = styled.div`
   border-bottom: 2px solid #ea9f00;
`

export const PriceAndCartStyle = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: stretch;
   align-items: center;
`

export const StyledNumberFormat = styled(NumberFormat)`
   font-size: 2.8rem;
   margin: 1.3rem 0 1.3rem 0;
   font-weight: 700;
   text-align: right;
   flex: 1;
`

export const WarranityStyle = styled.p`
   text-decoration: underline #ea9f00 solid 3px;
   margin: 1.2rem 0 1.2rem 0;
   font-size: 1.1rem;
`
