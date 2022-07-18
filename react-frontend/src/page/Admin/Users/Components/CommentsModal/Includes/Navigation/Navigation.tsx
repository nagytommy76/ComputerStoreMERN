import React, { useState } from 'react'

import { StyledBottomNavigation } from './Include/Style'

import BaseIcon from './Assets/BaseIcon'
import { ReactComponent as HDDIcon } from './Assets/hdd.svg'
import { ReactComponent as SSDIcon } from './Assets/ssd.svg'
import { ReactComponent as VgaIcon } from './Assets/vga.svg'
import { ReactComponent as MemoryIcon } from './Assets/ram.svg'
import { ReactComponent as ProcessorIcon } from './Assets/processor.svg'

import BottomNavigationAction from '@mui/material/BottomNavigationAction'

enum NavLabels {
   Processor = 'cpu',
   Vga = 'vga',
   Memory = 'ram',
   HDD = 'hdd',
   SSD = 'ssd',
}

const Navigation = () => {
   const [value, setValue] = useState<NavLabels>(NavLabels.Processor)

   const handleChange = (event: React.SyntheticEvent, newValue: NavLabels) => {
      setValue(newValue)
   }

   return (
      <StyledBottomNavigation value={value} onChange={handleChange}>
         <BottomNavigationAction
            // style={{ color: '#fff' }}
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
