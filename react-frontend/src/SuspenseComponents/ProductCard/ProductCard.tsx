import React from 'react'
import styled from 'styled-components'

const ProductCard = () => {
   return (
      <SuspenseCard>
         <BlankImage />
         <Body>
            <Title />
            <Title />
            <Title />
            <Price />
         </Body>
      </SuspenseCard>
   )
}

const SuspenseCard = styled.article`
   display: flex;
   flex-direction: column;
   justify-items: center;
   background-color: #fff;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 15px 0 rgba(0, 0, 0, 0.19);
   height: 350px;
   width: 250px;
   overflow: hidden;
   min-width: 0;
   min-height: 0;
   cursor: pointer;
`

const BlankImage = styled.header`
   height: 175px;
   width: 100%;
   background-color: hsl(0, 0%, 64%);
`

const Body = styled.section`
   height: 175px;
   width: 100%;
   display: flex;
   flex-direction: column;
`
const Text = `
    background: hsl(0, 0%, 64%);
    height: 20px;
    margin: 0.4rem 0;
    border-radius: 10px;
`

const Title = styled.div`
   ${Text}
   align-self: center;
   width: 90%;
`

const Price = styled.div`
   ${Text}
   width: 40%;
   margin-right: 0.3rem;
   align-self: flex-end;
`

export default ProductCard
