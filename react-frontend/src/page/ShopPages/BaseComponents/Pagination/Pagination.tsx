import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, PageButton, CurrentPageNumber } from './PaginationStyle'
import { setCurrentPage } from '../../../../app/slices/PaginateSlice'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'

const Pagination: React.FC = () => {
   const dispatch = useAppDispatch()
   const currentPage = useAppSelector((state) => state.paginate.currentPage)
   const totalPages = useAppSelector((state) => state.paginate.totalPages)

   const nextPage = () => {
      // eslint-disable-next-line
      if (currentPage + 1 > totalPages === false) {
         dispatch(setCurrentPage(currentPage + 1))
      }
   }
   const previousPage = () => {
      if (currentPage - 1 !== 0) {
         dispatch(setCurrentPage(currentPage - 1))
      }
   }
   return (
      <Container>
         <PageButton onClick={previousPage}>
            <FontAwesomeIcon icon={['fas', 'arrow-left']} size='2x' />
         </PageButton>
         <CurrentPageNumber>
            {currentPage} / {totalPages}
         </CurrentPageNumber>
         <PageButton onClick={nextPage}>
            <FontAwesomeIcon icon={['fas', 'arrow-right']} size='2x' />
         </PageButton>
      </Container>
   )
}

export default Pagination
