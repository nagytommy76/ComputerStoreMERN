import styled from 'styled-components'
import NumberFormat from 'react-number-format'
import { navbarHeight } from '../../../Navbar/NavbarStyles'
import { mobileWindowSize } from '../../../../Theme/GlobalStyles'

export const DetailsPage = styled.section`
   min-height: 100vh;
   width: 70%;
   margin: calc(${navbarHeight} + 1.5rem) auto 0 auto;
   @media (max-width: ${mobileWindowSize}) {
      width: 95%;
      margin: 3rem auto;
   }
`

// TOP "Navigation"
export const TopNavigationStyle = styled.div<{ isDarkTheme: boolean }>`
   width: 70%;
   color: ${({ isDarkTheme }) => (isDarkTheme ? '#FFF' : '#000')};
   display: flex;
   flex-direction: row;
   align-items: center;
   @media (max-width: ${mobileWindowSize}) {
      width: 95%;
   }
`

export const NavigationLink = styled.h4`
   margin: 0 1rem;
`

// Head sections

export const HeadSection = styled.section`
   display: flex;
   flex-direction: row;
   /* align-items: center; */
   justify-content: center;
   @media (max-width: ${mobileWindowSize}) {
      flex-direction: column;
   }
`

export const RightHeaderStyle = styled.aside<{ isDarkTheme: boolean }>`
   transition: all 0.2s;
   margin: 0 1rem 0 1rem;
   flex: 1;
   color: ${({ isDarkTheme }) => (isDarkTheme ? 'white' : 'black')};
`

export const TopHeaderTitle = styled.h1`
   text-align: justify;
   margin: 0;
   padding: 2rem 0 2rem 0;
   font-size: 2.2rem;
   @media (max-width: ${mobileWindowSize}) {
      font-size: 1.5rem;
   }
`

export const HorizontalLineStyle = styled.div`
   border-bottom: 2px solid #ea9f00;
`

export const PriceAndCartStyle = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: stretch;
   align-items: center;
   padding: 1.2rem 0 1.2rem 0;
`

export const StyledNumberFormat = styled(NumberFormat)`
   font-size: 2.8rem;
   margin: 1.3rem 0 1.3rem 0;
   font-weight: 700;
   text-align: right;
   flex: 1;
   @media (max-width: ${mobileWindowSize}) {
      font-size: 1.7rem;
      font-weight: 500;
   }
`

export const WarranityStyle = styled.p`
   text-decoration: underline #ea9f00 solid 3px;
   margin: 1.2rem 0 2rem 0;
   font-size: 1.3rem;
`

export const ManufacturerUrlPage = styled.a`
   font-size: 1.2rem;
   font-weight: 600;
   transition: color 0.2s linear;
   &:hover {
      color: #ea9f00;
   }
`

// BODY SECTION
export const BodySection = styled.section<{ isDarkTheme: boolean }>`
   min-height: 55vh;
   display: flex;
   flex-direction: row;
   transition: color 0.2s;
   color: ${({ isDarkTheme }) => (isDarkTheme ? '#FFF' : '#000')};
   @media (max-width: ${mobileWindowSize}) {
      flex-direction: column;
   }
`

export const DescriptionStyle = styled.section`
   margin-right: 0.5rem;
   flex: 1;
   font-size: 1.1rem;
   text-align: justify;
`

// FOOTER
export const BottomStyle = styled.section`
   display: flex;
   flex-direction: column;
   margin: 0 auto;
`
