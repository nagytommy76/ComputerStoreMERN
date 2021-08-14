import React from 'react'
import ProductCard from './ProductCard'
import styled from 'styled-components'
import { navbarHeight } from '../../page/Navbar/NavbarStyles'

const Container = () => {
   return (
      <ContainerStyle>
         <GridContainer>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
         </GridContainer>
      </ContainerStyle>
   )
}

const ContainerStyle = styled.section`
   min-height: 100vh;
   width: 100%;
   margin-top: calc(${navbarHeight} + 1.5rem);
   display: flex;
   justify-content: center;
`

const GridContainer = styled.div`
   display: grid;
   width: 85%;
   row-gap: 3rem;
   column-gap: 2rem;
   justify-content: center;
   min-width: 0;
   min-height: 0;
   grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
   grid-template-rows: repeat(auto-fit, 380px);
`

export default Container
