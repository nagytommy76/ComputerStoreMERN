import React from 'react'
import { AdminPageContainer, RightContentStyle } from './AdminStyle'
import { Routes, Route } from 'react-router-dom'
import SideMenu from './SideMenu/SideMenu'

const VgaInsert = React.lazy(() => import('./Vga/Insert/VgaInsert'))
const VgaModify = React.lazy(() => import('./Vga/Modify/ModifyVga'))
const DeleteVga = React.lazy(() => import('./Vga/Delete/DeleteVga'))

const CpuInsert = React.lazy(() => import('./Cpu/Insert/CpuInsert'))
const CpuModify = React.lazy(() => import('./Cpu/Modify/ModifyCpu'))
const CpuDelete = React.lazy(() => import('./Cpu/Delete/DeleteCpu'))

const Admin = () => {
   return (
      <AdminPageContainer>
         <SideMenu />
         <RightContentStyle>
            <Routes>
               <Route path='vga/*'>
                  <Route path='insert' element={<VgaInsert />} />
                  <Route path='modify' element={<VgaModify />} />
                  <Route path='delete' element={<DeleteVga />} />
               </Route>
               <Route path='cpu/*'>
                  <Route path='insert' element={<CpuInsert />} />
                  <Route path='modify' element={<CpuModify />} />
                  <Route path='delete' element={<CpuDelete />} />
               </Route>
            </Routes>
         </RightContentStyle>
      </AdminPageContainer>
   )
}

export default Admin
