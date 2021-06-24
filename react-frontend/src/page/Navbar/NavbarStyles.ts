import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BrandStyle = styled(Link)`
   font-size: 1.7rem;
`

export const NavStyle = styled.nav`
   width: 100%;
   color: white;
   height: 7rem;
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   background-color: rgba(11, 11, 11, 0.8);
`

export const StyledUnorderedList = styled.ul`
   list-style: none;
   display: flex;
   flex-direction: row;
   padding-left: 0;
`

export const StylesListItems = styled.li`
   padding: 1rem;
   margin: 0 0.7rem 0 0.7rem;
   font-size: 1.1rem;
`
