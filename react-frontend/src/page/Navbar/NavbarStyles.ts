import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BaseStylingForUnderline = `
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

export const NavStyle = styled.nav`
   position: fixed;
   top: 0;
   width: 100%;
   color: white;
   height: 7rem;
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

export const StylesListItems = styled.li`
   padding: 1.1rem 1.2rem 1.1rem 1.2rem;
   margin: 0 0.7rem 0 0.7rem;
   font-size: 1.3rem;
   /* border-radius: 5px; */
   cursor: pointer;
   /* transition: all 0.2s ease; */
   display: block;
   position: relative;
   overflow: hidden;
   ${BaseStylingForUnderline}
`
