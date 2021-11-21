import React from 'react'
import { AdminPageContainer, RightContentStyle } from './AdminStyle'
import SideMenu from './SideMenu/SideMenu'
import { Routes, Route } from 'react-router-dom'

const VgaInsert = React.lazy(() => import('./Vga/Insert/VgaInsert'))
const VgaModify = React.lazy(() => import('./Vga/Modify/ModifyVga'))

const CpuInsert = React.lazy(() => import('./Cpu/Insert/CpuInsert'))

const Admin = () => {
   return (
      <AdminPageContainer>
         <SideMenu />
         <RightContentStyle>
            <Routes>
               <Route path='vga-insert' element={<VgaInsert />} />
               <Route path='vga-modify' element={<VgaModify />} />
               <Route path='cpu-insert' element={<CpuInsert />} />
            </Routes>
         </RightContentStyle>
      </AdminPageContainer>
   )
}

export default Admin
