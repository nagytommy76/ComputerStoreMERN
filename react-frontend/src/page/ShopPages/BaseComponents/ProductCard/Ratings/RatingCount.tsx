import React from 'react'
import styled from 'styled-components'

const RatingCount: React.FC<{ ratingCount: number }> = ({ ratingCount }) => {
   return (
      <StyledCount>
         <p>{ratingCount}</p>
      </StyledCount>
   )
}

const StyledCount = styled.div`
   width: 30px;
   height: 30px;
   background-color: #817e5c;
   color: white;
   position: absolute;
   right: 0;

   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1.1rem;
   border-radius: 0 0 0 5px;
   font-weight: 700;
`

export default RatingCount
