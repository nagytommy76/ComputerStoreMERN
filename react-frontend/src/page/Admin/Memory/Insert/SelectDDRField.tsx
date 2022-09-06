import React from 'react'
import { MEMORY_TYPES } from '../MemoryProperties'

import { SelectChangeEvent } from '@mui/material/Select'

const BaseMUISelect = React.lazy(() => import('../../Components/InputFields/Select/MUISelectFeild'))

const SelectDDRField: React.FC<{ onChangeEvent: (event: SelectChangeEvent) => void; value: string }> = ({
   onChangeEvent,
   value,
}) => {
   return (
      <BaseMUISelect
         id='memoryType'
         labelText='Memória Típusa'
         onChangeEvent={onChangeEvent}
         value={value}
         selectableItems={MEMORY_TYPES}
      />
   )
}

export default SelectDDRField
