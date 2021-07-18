import React from 'react'
import { Link } from 'react-router-dom'

const Routes = () => {
   return (
      <ul>
         <li>
            <h1>Vga</h1>
            <ul>
               <li>
                  <Link to='/admin/vga-insert'>Vga bevitele</Link>
               </li>
            </ul>
         </li>
      </ul>
   )
}

export default Routes
