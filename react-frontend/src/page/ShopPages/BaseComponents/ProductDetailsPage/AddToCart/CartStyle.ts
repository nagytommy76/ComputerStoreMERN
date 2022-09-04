import styled from 'styled-components'

import TextField from '@mui/material/TextField'

export const StyledCartSection = styled.section`
   width: 100%;
   flex: 1;
   display: flex;
   align-items: center;
`

export const StyledNumberInput = styled(TextField)({
   width: '75px',
   ['::webkit-outer-spin-button']: {
      backgroundColor: 'red',
      webkitAppearance: 'none',
      margin: 0,
   },
   ['::webkit-inner-spin-button']: {
      webkitAppearance: 'none',
      margin: 0,
   },
})
