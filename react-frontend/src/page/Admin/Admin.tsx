import React from 'react'
import { AdminPageContainer, RightContentStyle } from './AdminStyle'
import SideMenu from './SideMenu/SideMenu'
import { Switch, Route } from 'react-router-dom'

const VgaInsert = React.lazy(() => import('./Vga/VgaInsert'))

const Admin = () => {
   return (
      <AdminPageContainer>
         <SideMenu />
         <RightContentStyle>
            <Switch>
               <Route path='/admin/vga-insert' component={VgaInsert} exact />
            </Switch>
         </RightContentStyle>
      </AdminPageContainer>
   )
}

export default Admin
