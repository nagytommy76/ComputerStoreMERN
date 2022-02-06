import React, { useState } from 'react'
import { MemoryProductType } from '../../../ShopPages/Memory/MemoryTypes'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const SelectDDRField: React.FC<{ onChangeEvent: React.Dispatch<React.SetStateAction<MemoryProductType>>; value: string }> = ({
   onChangeEvent,
   value,
}) => {
   const [selected, setSelected] = useState<string>('DDR4')

   const handleChange = (event: SelectChangeEvent) => {
      setSelected(event.target.value as string)
      // setProduct({ ...product, details: { ...product.details, memoryType: event.target.value } })
   }

   return (
      <FormControl margin='normal'>
         <InputLabel id='uncontrolled-native'>Memória Típusa</InputLabel>
         <Select
            value={selected}
            id='uncontrolled-native'
            onChange={handleChange}
            native
            variant='filled' /* defaultValue='DDR4'*/
         >
            <option value='DDR'>DDR</option>
            <option value='DDR2'>DDR2</option>
            <option value='DDR3'>DDR3</option>
            <option value='DDR4'>DDR4</option>
            <option value='DDR5'>DDR5</option>
         </Select>
      </FormControl>
   )
}

export default SelectDDRField
