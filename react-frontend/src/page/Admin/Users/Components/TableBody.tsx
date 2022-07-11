import React, { useState, useEffect, useContext, useCallback } from 'react'
import { axiosInstance } from '../../../../AxiosSetup/AxiosInstance'

import { CommentContext } from '../Context/CommentContext'
import { UserTypes } from '../UserTypes'

import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'

const DeleteButton = React.lazy(() => import('../../Components/DeleteComponents/DeleteButton'))

const TableBodyComponent = () => {
   const { users, setUsers, setIsSnackOpen, setIsModalOpen, setSelectedUserIdAndName } =
      useContext(CommentContext)

   const fetchUserData = useCallback(async () => {
      try {
         const response = await axiosInstance.get('/admin/users/get-all')
         setUsers(response.data)
      } catch (error) {
         console.log(error)
      }
   }, [setUsers])

   useEffect(() => {
      fetchUserData()
      // console.log(users)
   }, [fetchUserData])

   const toggleModal = (userID: string, userName: string) => {
      setIsModalOpen(prevState => !prevState)
      setSelectedUserIdAndName({ userID, userName })
   }

   return (
      <TableBody>
         {users.map((user: UserTypes) => (
            <TableRow
               sx={{ cursor: 'pointer' }}
               onClick={() => toggleModal(user._id, user.userName)}
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
   )
}

export default TableBodyComponent
