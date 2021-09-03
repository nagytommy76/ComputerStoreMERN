import styled from 'styled-components'
import { navbarHeight } from '../../Navbar/NavbarStyles'

export const ProductsContainer = styled.section`
   flex: 1;
   margin-top: calc(${navbarHeight} + 1.5rem);
   color: black;
   display: flex;
   justify-content: center;
`

export const ProductCarts = styled.div`
   width: 50%;
   height: 90%;
`
