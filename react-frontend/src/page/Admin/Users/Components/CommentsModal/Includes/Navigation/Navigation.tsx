import React from 'react'

// import { ReactComponent as VgaIcon } from './Assets/vga.svg'
import VgaIcon from './Include/VgaIcon'

import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import BottomNavigation from '@mui/material/BottomNavigation'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import FavoriteIcon from '@mui/icons-material/Favorite'

const Navigation = () => {
   return (
      <BottomNavigation
      // showLabels
      // value={value}
      // onChange={(event, newValue) => {
      //    setValue(newValue);
      // }}
      >
         <BottomNavigationAction label='Recents' icon={<VgaIcon color='primary' />} />
         <BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
         <BottomNavigationAction label='Nearby' icon={<LocationOnIcon />} />
      </BottomNavigation>
   )
}

export default Navigation
