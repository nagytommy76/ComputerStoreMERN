import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobileWindowSize } from '../../Theme/GlobalStyles'

export const BaseStylingForUnderline = `
   &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.1em;
      background-color: #ea9f00;
      transition: opacity 300ms, transform 300ms;
      transform: translate3d(-101%, 0, 0);
   }
   &:hover::after,
   &:focus::after {
      transform: translate3d(0, 0, 0);
   }
`
export const navbarHeight = '6.4rem'

export const OpenNavbarButton = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 5px;
   position: fixed;
   top: 10px;
   left: 10px;
   background: hsl(54, 100%, 46%);
   color: hsl(0, 0%, 21%);
   z-index: 6;
   display: flex;
   justify-content: center;
   align-items: center;
`

export const NavStyle = styled.nav<{ mobileSize: boolean }>`
   z-index: 10;
   position: fixed;
   top: 0;
   width: 100%;
   color: white;
   height: ${navbarHeight};
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   background-color: rgba(11, 11, 11, 0.8);
   ${({ mobileSize }) => (mobileSize ? '' : 'transition: box-shadow 0.2s ease, background-color 0.2s ease;')}
   &:hover {
      background-color: rgba(11, 11, 11, 0.95);
      box-shadow: 0px 0px 15px #111;
   }

   @media (max-width: ${mobileWindowSize}) {
      flex-direction: column;
      justify-content: unset;
      height: 100%;
      background-color: rgba(11, 11, 11, 0.95);
   }
`

export const StyledUnorderedList = styled.ul`
   list-style: none;
   display: flex;
   flex-direction: row;
   align-items: center;
   padding-left: 0;
   @media (max-width: ${mobileWindowSize}) {
      flex-direction: column;
   }
`

export const BrandStyle = styled(Link)`
   font-size: 2.2rem;
   transition: all 0.2s ease;
   margin: 0;
   display: block;
   position: relative;
   overflow: hidden;
   ${BaseStylingForUnderline}
   @media (max-width: ${mobileWindowSize}) {
      margin: 2.6rem 0;
      font-size: 2rem;
   }
`
export const DropdownBackground = styled.section`
   z-index: 8;
   position: fixed;
   bottom: 0;
   width: 100%;
   height: calc(100% - ${navbarHeight});
   background-color: rgba(0, 0, 0, 0.6);
`
