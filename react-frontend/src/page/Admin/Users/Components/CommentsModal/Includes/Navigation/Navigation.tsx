import React, { useState } from 'react'

import BaseIcon from './Assets/BaseIcon'
import { ReactComponent as HDDIcon } from './Assets/hdd.svg'
import { ReactComponent as SSDIcon } from './Assets/ssd.svg'
import { ReactComponent as VgaIcon } from './Assets/vga.svg'
import { ReactComponent as MemoryIcon } from './Assets/ram.svg'
import { ReactComponent as ProcessorIcon } from './Assets/processor.svg'

import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import BottomNavigation from '@mui/material/BottomNavigation'

enum NavLabels {
   Processor = 'Processzor',
   Vga = 'Vga',
   Memory = 'Memória',
   HDD = 'HDD',
   SSD = 'SSD',
}

const Navigation = () => {
   const [value, setValue] = useState<NavLabels>(NavLabels.Processor)

   const handleChange = (event: React.SyntheticEvent, newValue: NavLabels) => {
      setValue(newValue)
   }

   return (
      <BottomNavigation sx={{ height: 90 }} value={value} onChange={handleChange}>
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
      </BottomNavigation>
   )
}
// https://mui.com/material-ui/icons/#svgicon

export default Navigation
