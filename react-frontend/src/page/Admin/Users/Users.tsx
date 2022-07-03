import { useState, useEffect, lazy } from 'react'
import { axiosInstance } from '../../../AxiosSetup/AxiosInstance'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const TableHeader = lazy(() => import('./Components/TableHead'))
const Footer = lazy(() => import('./Components/Footer'))
const DeleteButton = lazy(() => import('./Components/DeleteButton'))

const Users = () => {
   const [users, setUsers] = useState<any>([])

   useEffect(() => {
      const fetchUserData = async () => {
         const response = await axiosInstance.get('/admin/users/get-all')
         console.log(response.data)
         setUsers(response.data)
      }

      fetchUserData()
   }, [])

   return (
      <TableContainer component={Paper}>
         <Table sx={{ minWidth: 850 }} aria-label='simple table'>
            <TableHeader />
            <TableBody>
               {users.map((user: any) => (
                  <TableRow key={user._id}>
                     <TableCell scope='row' component='th'>
                        {user.email}
                     </TableCell>
                     <TableCell align='right'>{user.userName}</TableCell>
                     <TableCell align='right'>{user.isEmailConfirmed ? 'Igen' : 'Nem'}</TableCell>
                     <TableCell align='right'>{user.isAdmin ? 'Igen' : 'Nem'}</TableCell>
                     <TableCell align='right'>
                        <DeleteButton />
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
            <Footer dataLength={users.length} />
         </Table>
      </TableContainer>
   )
}

export default Users
