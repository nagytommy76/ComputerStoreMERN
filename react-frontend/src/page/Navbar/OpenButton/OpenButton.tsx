import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { OpenNavbarButton } from '../NavbarStyles'
import { useAppSelector } from '../../../app/hooks'
import { NavbarContext } from '../NavbarContext'
import { NavbarActionTypes } from '../Reducer/NavbarReducer'

const OpenButton: React.FC = () => {
   const isMobileSize = useAppSelector(state => state.mobile.isMobile)
   const {
      dispatch,
      state: { isNavbarOpen },
   } = useContext(NavbarContext)

   const handleNavabrOpen = () => {
      dispatch({ type: NavbarActionTypes.SET_IS_NAVBAR_OPEN, payload: !isNavbarOpen })
   }

   return (
      <OpenNavbarButton mobileSize={isMobileSize} role='button' onClick={handleNavabrOpen}>
         <FontAwesomeIcon icon={['fas', 'bars']} size='2x' />
      </OpenNavbarButton>
   )
}

export default OpenButton
