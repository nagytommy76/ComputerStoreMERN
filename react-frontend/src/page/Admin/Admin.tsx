import React from 'react'
import { AdminPageContainer, RightContentStyle } from './AdminStyle'
import SideMenu from './SideMenu/SideMenu'
import { Switch, Route } from 'react-router-dom'

const VgaInsert = React.lazy(() => import('./Vga/Insert/VgaInsert'))
const VgaModify = React.lazy(() => import('./Vga/Modify/ModifyVga'))

const Admin = () => {
   return (
      <AdminPageContainer>
         <SideMenu />
         <RightContentStyle>
            <Switch>
               <Route path='/admin/vga-insert' component={VgaInsert} exact />
               <Route path='/admin/vga-modify' component={VgaModify} />
            </Switch>
         </RightContentStyle>
      </AdminPageContainer>
   )
}

export default Admin
