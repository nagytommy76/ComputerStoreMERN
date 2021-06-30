import React from 'react'
import { DropStyle, DropLinkItem } from '../DropMenuStyle'
import { logoutUser } from '../../../../app/slices/AuthSlice'
import { useAppDispatch } from '../../../../app/hooks'

type Prop = {
   reference: React.MutableRefObject<null>
}

const DropMenu: React.FC<Prop> = ({ reference }) => {
   const dispatch = useAppDispatch()
   const logout = () => {
      dispatch(logoutUser())
   }
   return (
      <DropStyle ref={reference}>
         <DropLinkItem onClick={logout} to=''>
            Kijelentkezés
         </DropLinkItem>
      </DropStyle>
   )
}

export default DropMenu
