import React, { useState } from 'react'

const usePaginate = () => {
   const [currentPage, setCurrentPage] = useState<number>(0)
   const [rowsPerPage, setRowsPerPage] = useState<number>(10)

   const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setCurrentPage(newPage)
   }

   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10))
      setCurrentPage(0)
   }

   return { currentPage, rowsPerPage, handleChangePage, handleChangeRowsPerPage }
}

export default usePaginate
