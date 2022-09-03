import styled from 'styled-components'

import TextField from '@mui/material/TextField'

export const StyledCartSection = styled.section`
   flex: 1;
   display: flex;
   align-items: center;
`
// Input Field Container

export const InputAndLabelContainer = styled.div`
   display: flex;
   flex-direction: column;
   text-align: center;
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
