import { lazy } from 'react'
import { AdminPageContainer, RightContentStyle } from './AdminStyle'
import { Routes, Route } from 'react-router-dom'
import SideMenu from './SideMenu/SideMenu'

const VgaInsert = lazy(() => import('./Vga/Insert/VgaInsert'))
const VgaModify = lazy(() => import('./Vga/Modify/ModifyVga'))
const DeleteVga = lazy(() => import('./Vga/Delete/DeleteVga'))

const CpuInsert = lazy(() => import('./Cpu/Insert/CpuInsert'))
const CpuModify = lazy(() => import('./Cpu/Modify/ModifyCpu'))
const CpuDelete = lazy(() => import('./Cpu/Delete/DeleteCpu'))

const MemoryInsert = lazy(() => import('./Memory/Insert/MemoryInsert'))

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
               <Route path='memory/*'>
                  <Route path='insert' element={<MemoryInsert />} />
                  {/* <Route path='modify' element={<CpuModify />} />
                  <Route path='delete' element={<CpuDelete />} /> */}
               </Route>
            </Routes>
         </RightContentStyle>
      </AdminPageContainer>
   )
}

export default Admin
