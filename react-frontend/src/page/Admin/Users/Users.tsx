import { lazy, useContext } from 'react'
import { createPortal } from 'react-dom'
import { CommentContext, CommentContextProvider } from './Context/CommentContext'

import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'

const TableHeader = lazy(() => import('./Components/TableHead'))
const Footer = lazy(() => import('./Components/Footer'))
const TableBody = lazy(() => import('./Components/TableBody'))
const SnackBar = lazy(() => import('../Components/DeleteComponents/SnackBar'))
const CommentModal = lazy(() => import('./Components/CommentsModal/CommentsModal'))

const Users = () => {
   const { isSnackOpen, setIsSnackOpen } = useContext(CommentContext)
   return (
      <CommentContextProvider>
         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 850 }} aria-label='simple table'>
               <TableHeader />
               <TableBody />
               <Footer />
            </Table>
         </TableContainer>
         {createPortal(
            <SnackBar isSnackOpen={isSnackOpen} setIsSnackOpen={setIsSnackOpen} />,
            document.getElementById('delete-snackbar') as HTMLElement
         )}
         <CommentModal />
      </CommentContextProvider>
   )
}

export default Users
