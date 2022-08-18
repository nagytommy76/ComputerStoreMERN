import React from 'react'
import useGetProductsByQueries from '../../../Hooks/useGetProductsByQueries'
import { useAppSelector, useAppDispatch } from '../../../../../app/hooks'
import { setProductName } from '../../../../../app/slices/Filter/BaseFilterDataSlice'

import { InputContainer } from '../../../BaseComponents/SideFilter/FilterStyle'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SavedSearchIcon from '@mui/icons-material/SavedSearch'
import IconButton from '@mui/material/IconButton'

const SearchField: React.FC<{ productType: string; extraQueryParams: string | undefined }> = ({
   productType,
   extraQueryParams,
}) => {
   const dispatch = useAppDispatch()
   const getProducts = useGetProductsByQueries(productType, extraQueryParams)
   const isLoading = useAppSelector(state => state.products.isFetchingStatus)

   const handleEnterAction = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setProductName(event.target.value))
   }

   const handleFetchProductsOnClick = () => {
      getProducts()
   }
   const handleFetchProductsOnKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
         getProducts()
      }
   }

   return (
      <InputContainer>
         <TextField
            fullWidth
            disabled={isLoading === 'PENDING'}
            onChange={handleEnterAction}
            onKeyUp={handleFetchProductsOnKeyUp}
            InputProps={{
               endAdornment: (
                  <InputAdornment position='end'>
                     <IconButton onClick={handleFetchProductsOnClick} size='small'>
                        <SavedSearchIcon />
                     </IconButton>
                  </InputAdornment>
               ),
            }}
            id='search'
            label='Keresés a karegóriában'
            helperText='Név szerinti keresés'
            type='search'
            variant='filled'
         />
      </InputContainer>
   )
}

export default SearchField
