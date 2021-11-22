import React, { useState } from 'react'
import styled from 'styled-components'

import Routes from './Routes'

import SwipeableDrawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'

const SideMenu = () => {
   const [isOpen, setIsOpen] = useState<boolean>(false)
   return (
      <>
         <ButtonContainer>
            <Button
               endIcon={<DoubleArrowIcon />}
               variant='contained'
               color='primary'
               size='large'
               onClick={() => setIsOpen((prev) => !prev)}>
               Menü
            </Button>
         </ButtonContainer>
         <SwipeableDrawer
            keepMounted
            sx={{ overflow: 'auto' }}
            variant='temporary'
            transitionDuration={300}
            anchor='left'
            open={isOpen}
            onClose={() => setIsOpen((prev) => !prev)}>
            <Routes setSideBarOpen={setIsOpen} />
         </SwipeableDrawer>
      </>
   )
}

const ButtonContainer = styled.div`
   position: absolute;
   left: 5px;
   top: 50px;
`

export default SideMenu
