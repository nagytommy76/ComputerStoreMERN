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
const MemoryModify = lazy(() => import('./Memory/Modify/ModifyMemory'))
const MemoryDelete = lazy(() => import('./Memory/Delete/DeleteMemory'))

const HDDInsert = lazy(() => import('./HDD/Insert/InsertHdd'))

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
                  <Route path='modify' element={<MemoryModify />} />
                  <Route path='delete' element={<MemoryDelete />} />
               </Route>
               <Route path='hdd/*'>
                  <Route path='insert' element={<HDDInsert />} />
               </Route>
            </Routes>
         </RightContentStyle>
      </AdminPageContainer>
   )
}

export default Admin
