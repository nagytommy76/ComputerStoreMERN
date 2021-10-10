import React from 'react'
import ProductCard from './ProductCard'
import styled from 'styled-components'
import FilterSuspense from '../SideFilter/FilterSuspense'
import { mobileWindowSize } from '../../Theme/GlobalStyles'

const Container = () => {
   return (
      <PageContainer style={{ minHeight: '100vh' }} data-testid='suspense-cards'>
         <FilterSuspense />
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
            <ProductCard />
            <ProductCard />
            <ProductCard />
         </GridContainer>
      </PageContainer>
   )
}

const PageContainer = styled.section`
   width: 100%;
   min-height: 100vh;
   display: flex;
   flex-direction: row;
   justify-content: space-between;

   @media (max-width: ${mobileWindowSize}) {
      flex-direction: column;
      margin-top: 3rem;
      align-items: center;
   }
`

const GridContainer = styled.div`
   display: grid;
   width: 80%;
   row-gap: 3rem;
   column-gap: 2rem;
   min-width: 0;
   min-height: 100vh;
   grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
   grid-template-rows: repeat(auto-fit, 380px);
`

export default Container
