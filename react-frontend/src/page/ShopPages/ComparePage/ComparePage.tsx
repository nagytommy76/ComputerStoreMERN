import React from 'react'
import { useLocation } from 'react-router'

import { ComparePageStyle } from './Styles/CompareStyle'

const ComparePage = () => {
   const { state } = useLocation() as { state: string[] }

   return (
      <ComparePageStyle>
         <h1>Helló összehasonlít</h1>
      </ComparePageStyle>
   )
}

export default ComparePage
