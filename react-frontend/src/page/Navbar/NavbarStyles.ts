import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
const navbarHeight = '7rem'

export const NavStyle = styled.nav`
   z-index: 5;
   position: fixed;
   top: 0;
   width: 100%;
   color: white;
   height: ${navbarHeight};
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   background-color: rgba(11, 11, 11, 0.8);
   transition: all 0.2s ease;
   &:hover {
      background-color: rgba(11, 11, 11, 0.95);
      box-shadow: 0px 0px 15px #111;
   }
`

export const StyledUnorderedList = styled.ul`
   list-style: none;
   display: flex;
   flex-direction: row;
   padding-left: 0;
`

export const BrandStyle = styled(Link)`
   font-size: 2.2rem;
   transition: all 0.2s ease;
   margin: 0;
   display: block;
   position: relative;
   overflow: hidden;
   ${BaseStylingForUnderline}
`
export const DropdownBackground = styled.section`
   z-index: 0;
   position: fixed;
   bottom: 0;
   width: 100%;
   height: calc(100% - ${navbarHeight});
   background-color: rgba(0, 0, 0, 0.3);
`
