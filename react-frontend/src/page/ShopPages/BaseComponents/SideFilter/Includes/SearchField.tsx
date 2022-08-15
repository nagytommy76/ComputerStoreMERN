import React, { useEffect } from 'react'
import useGetProductsByQueries from '../../../Hooks/useGetProductsByQueries'
import { useAppSelector, useAppDispatch } from '../../../../../app/hooks'
import { setProductName } from '../../../../../app/slices/Filter/BaseFilterDataSlice'

import { InputContainer } from '../../../BaseComponents/SideFilter/FilterStyle'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SavedSearchIcon from '@mui/icons-material/SavedSearch'

const SearchField: React.FC<{ productType: string; extraQueryParams: string | undefined }> = ({
   productType,
   extraQueryParams,
}) => {
   const dispatch = useAppDispatch()
   const getProducts = useGetProductsByQueries(productType, extraQueryParams)
   const productName = useAppSelector(state => state.filter.filterData.productName)
   const isLoading = useAppSelector(state => state.products.isFetching)

   const handleEnterAction = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setProductName(event.target.value))
   }

   useEffect(() => {
      if (productName) {
         const timer = setTimeout(() => {
            getProducts()
         }, 1300)
         return () => clearTimeout(timer)
      }
   }, [productName, getProducts])

   return (
      <InputContainer>
         <TextField
            disabled={isLoading}
            onChange={handleEnterAction}
            InputProps={{
               startAdornment: (
                  <InputAdornment position='start'>
                     <SavedSearchIcon />
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
