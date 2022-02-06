import React from 'react'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const SelectDDRField: React.FC<{ onChangeEvent: (event: SelectChangeEvent) => void; value: string }> = ({
   onChangeEvent,
   value,
}) => {
   return (
      <FormControl margin='normal'>
         <InputLabel id='uncontrolled-native'>Memória Típusa</InputLabel>
         <Select value={value} id='uncontrolled-native' onChange={onChangeEvent} native variant='filled'>
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
