import { useState, useEffect, lazy } from 'react'
import { createPortal } from 'react-dom'
import { axiosInstance } from '../../../AxiosSetup/AxiosInstance'

import { UserTypes } from './UserTypes'
import { SnackbarStateTypes } from '../Components/DeleteComponents/Types'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const TableHeader = lazy(() => import('./Components/TableHead'))
const Footer = lazy(() => import('./Components/Footer'))
const DeleteButton = lazy(() => import('../Components/DeleteComponents/DeleteButton'))
const SnackBar = lazy(() => import('../Components/DeleteComponents/SnackBar'))
const CommentModal = lazy(() => import('./Components/CommentsModal'))

const Users = () => {
   const [users, setUsers] = useState<UserTypes[]>([])
   const [selectedUserId, setSelectedUserId] = useState<string | null>(null)
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
   const [isSnackOpen, setIsSnackOpen] = useState<SnackbarStateTypes>({
      isOpen: false,
      deletedProductName: '',
   })

   const toggleModal = (userID: string) => {
      setIsModalOpen(!isModalOpen)
      setSelectedUserId(userID)
   }

   useEffect(() => {
      const fetchUserData = async () => {
         const response = await axiosInstance.get('/admin/users/get-all')
         console.log(response.data)
         setUsers(response.data)
      }

      fetchUserData()
   }, [])

   return (
      <>
         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 850 }} aria-label='simple table'>
               <TableHeader />
               <TableBody>
                  {users.map((user: UserTypes) => (
                     <TableRow
                        sx={{ cursor: 'pointer' }}
                        onClick={() => toggleModal(user._id)}
                        hover
                        key={user._id}
                     >
                        <TableCell scope='row' component='th'>
                           {user.email}
                        </TableCell>
                        <TableCell align='right'>{user.userName}</TableCell>
                        <TableCell align='right'>{user.isEmailConfirmed ? 'Igen' : 'Nem'}</TableCell>
                        <TableCell align='right'>{user.isAdmin ? 'Igen' : 'Nem'}</TableCell>
                        <TableCell align='right'>
                           {!user.isAdmin && (
                              <DeleteButton
                                 productTypeForURL='users'
                                 setIsSnackOpen={setIsSnackOpen}
                                 nameForSnackbar={user.userName}
                                 allToDelete={users}
                                 setAllToDelete={setUsers}
                                 toDeleteID={user._id}
                              />
                           )}
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
               <Footer dataLength={users.length} />
            </Table>
         </TableContainer>
         {createPortal(
            <SnackBar isSnackOpen={isSnackOpen} setIsSnackOpen={setIsSnackOpen} />,
            document.getElementById('delete-snackbar') as HTMLElement
         )}
         <CommentModal userID={selectedUserId} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      </>
   )
}

export default Users
