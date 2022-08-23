import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { OpenNavbarButton } from '../NavbarStyles'
import { useAppSelector } from '../../../app/hooks'
import { NavbarContext } from '../NavbarContext'

const OpenButton: React.FC = () => {
   const isMobileSize = useAppSelector(state => state.mobile.isMobile)
   const { isNavbarOpen, setIsNavbarOpen } = useContext(NavbarContext)

   if (isMobileSize) {
      return (
         <OpenNavbarButton role='button' onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
            <FontAwesomeIcon icon={['fas', 'bars']} size='2x' />
         </OpenNavbarButton>
      )
   } else return null
}

export default OpenButton
