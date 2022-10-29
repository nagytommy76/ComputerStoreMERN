import React, { useContext } from 'react'
import { NavbarContext } from '../../NavbarContext'
import { NavbarActionTypes } from '../../Reducer/NavbarReducer'

const useClose = (menuType: string = 'shop') => {
   const dispatch = useContext(NavbarContext).dispatch

   const closeDropMenu = (event: React.MouseEvent) => {
      event.stopPropagation()
      if (menuType === 'shop') {
         dispatch({ type: NavbarActionTypes.SET_IS_SHOP_DROP_OPEN, payload: false })
         dispatch({ type: NavbarActionTypes.SET_SHOP_ANCHOR_EL, payload: null })
      } else {
         dispatch({ type: NavbarActionTypes.SET_IS_USER_DROP_OPEN, payload: false })
         dispatch({ type: NavbarActionTypes.SET_USER_ANCHOR_EL, payload: null })
      }
   }
   return closeDropMenu
}

export default useClose
