import styled from 'styled-components'

import CircularProgress from '@mui/material/CircularProgress'

const PageSuspense = () => {
   return (
      <PageConteiner>
         <CircularProgress color='success' size={85} />
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

export default PageSuspense
