import React from 'react'
import styled from 'styled-components'

const PageSuspense = () => {
   return (
      <PageConteiner>
         <Tilte>Töltés...</Tilte>
      </PageConteiner>
   )
}

const PageConteiner = styled.section`
   width: 100%;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
`

const Tilte = styled.h1`
   color: hsl(0, 0%, 50%);
   font-size: 3.5rem;
`

export default PageSuspense
