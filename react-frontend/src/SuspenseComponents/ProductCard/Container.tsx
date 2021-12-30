import React from 'react'
import ProductCard from './ProductCard'
import styled from 'styled-components'
import FilterSuspense from '../SideFilter/FilterSuspense'
import { mobileWindowSize } from '../../Theme/GlobalStyles'

const Container = () => {
   return (
      <PageContainer data-testid='suspense-cards'>
         <FilterSuspense />
         <RightFlexContainer>
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
         </RightFlexContainer>
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

const RightFlexContainer = styled.section`
   width: 80%;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`

const GridContainer = styled.div`
   display: grid;
   width: 85%;
   row-gap: 3rem;
   column-gap: 2rem;
   justify-content: center;
   min-width: 0%;
   min-height: 100vh;
   grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
   grid-template-rows: repeat(auto-fit, 380px);

   @media (max-width: ${mobileWindowSize}) {
      margin-top: 3rem;
      width: 100%;
   }
`

export default Container
