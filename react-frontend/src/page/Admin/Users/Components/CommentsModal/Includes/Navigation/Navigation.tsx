import React, { useState } from 'react'

import { NavLabels } from '../../CommentsModal'
import { StyledBottomNavigation } from './Style'

import BaseIcon from './Assets/BaseIcon'
import { ReactComponent as HDDIcon } from './Assets/hdd.svg'
import { ReactComponent as SSDIcon } from './Assets/ssd.svg'
import { ReactComponent as VgaIcon } from './Assets/vga.svg'
import { ReactComponent as MemoryIcon } from './Assets/ram.svg'
import { ReactComponent as ProcessorIcon } from './Assets/processor.svg'

import BottomNavigationAction from '@mui/material/BottomNavigationAction'

const Navigation: React.FC<{
   value: NavLabels
   setValue: React.Dispatch<React.SetStateAction<NavLabels>>
}> = ({ setValue, value }) => {
   const handleChange = (event: React.SyntheticEvent, newValue: NavLabels) => {
      setValue(newValue)
   }

   return (
      <StyledBottomNavigation value={value} onChange={handleChange}>
         <BottomNavigationAction
            value={NavLabels.Processor}
            label='Processzor'
            icon={
               <BaseIcon>
                  <ProcessorIcon />
               </BaseIcon>
            }
         />
         <BottomNavigationAction
            value={NavLabels.Vga}
            label='Vga'
            icon={
               <BaseIcon>
                  <VgaIcon />
               </BaseIcon>
            }
         />
         <BottomNavigationAction
            value={NavLabels.Memory}
            label='Memória'
            icon={
               <BaseIcon>
                  <MemoryIcon />
               </BaseIcon>
            }
         />
         <BottomNavigationAction
            value={NavLabels.HDD}
            label='HDD'
            icon={
               <BaseIcon>
                  <HDDIcon />
               </BaseIcon>
            }
         />
         <BottomNavigationAction
            value={NavLabels.SSD}
            label='SSD'
            icon={
               <BaseIcon>
                  <SSDIcon />
               </BaseIcon>
            }
         />
      </StyledBottomNavigation>
   )
}
// https://mui.com/material-ui/icons/#svgicon

export default Navigation
