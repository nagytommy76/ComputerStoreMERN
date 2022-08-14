import React from 'react'

import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SavedSearchIcon from '@mui/icons-material/SavedSearch'

const SearchField = () => {
   const handleEnterAction = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
         console.log('helló')
      }
   }
   return (
      <TextField
         onKeyUp={handleEnterAction}
         InputProps={{
            startAdornment: (
               <InputAdornment position='start'>
                  <SavedSearchIcon />
               </InputAdornment>
            ),
         }}
         size='small'
         id='search'
         label='Keresés a karegóriában'
         type='search'
         variant='filled'
      />
   )
}

export default SearchField
