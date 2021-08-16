import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { OpenNavbarButton } from '../NavbarStyles'
import { useAppSelector } from '../../../app/hooks'

const OpenButton: React.FC<Props> = ({ isNavbarOpen, setIsNavbarOpen }) => {
   const isMobileSize = useAppSelector((state) => state.mobile.isMobile)

   if (isMobileSize) {
      return (
         <OpenNavbarButton role='button' onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
            <FontAwesomeIcon icon={['fas', 'bars']} size='2x' />
         </OpenNavbarButton>
      )
   } else return null
}

type Props = {
   isNavbarOpen: boolean
   setIsNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default OpenButton
