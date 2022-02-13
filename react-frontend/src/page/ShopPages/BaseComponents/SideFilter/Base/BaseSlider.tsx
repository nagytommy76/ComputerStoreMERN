import React, { useEffect, useState } from 'react'
import { InputContainer } from '../FilterStyle'

import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Slider from '@mui/material/Slider'

const BaseSlider: React.FC<Props> = ({ range, selectedRange, changeRange, text, unit = 'MHz' }) => {
   const [value, setValue] = useState<number[]>([0, 8000])

   const handleChange = (_: any, newValue: number | number[]) => {
      setValue(newValue as number[])
   }

   useEffect(() => {
      setValue(selectedRange)
   }, [selectedRange])

   return (
      <InputContainer>
         <FormControl fullWidth>
            <FormLabel color='primary'>
               <div>{text}</div>
               <span>
                  {selectedRange[0]}
                  {unit} - {selectedRange[1]}
                  {unit}
               </span>
            </FormLabel>
            <Slider
               getAriaLabel={() => 'Range'}
               min={range[0]}
               max={range[1]}
               value={value as number[]}
               valueLabelDisplay='auto'
               onChangeCommitted={changeRange}
               onChange={handleChange}
            />
         </FormControl>
      </InputContainer>
   )
}

export default BaseSlider

type Props = {
   range: number[]
   selectedRange: number[]
   changeRange: (_: any, newValue: number | number[]) => void
   text: string
   unit?: string
}
