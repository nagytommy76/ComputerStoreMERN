import React from 'react'
import { setIsPriceRangeSet } from '../../../../app/slices/Filter/BaseFilterDataSlice'
import { setCurrentPage } from '../../../../app/slices/PaginateSlice'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'

import { Container } from './PaginationStyle'
import { Pagination as MUIPagination } from '@mui/material'

const Pagination: React.FC = () => {
   const dispatch = useAppDispatch()
   const currentPage = useAppSelector(state => state.paginate.currentPage)
   const totalPages = useAppSelector(state => state.paginate.totalPages)

   const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      if (currentPage !== value) {
         dispatch(setCurrentPage(value))
         dispatch(setIsPriceRangeSet(true))
         window.scrollTo({
            top: 0,
            behavior: 'smooth',
         })
      }
   }
   return (
      <Container>
         <MUIPagination
            size='large'
            count={totalPages}
            page={currentPage}
            shape='rounded'
            variant='text'
            color='primary'
            onChange={handleChange}
         />
      </Container>
   )
}

export default Pagination
