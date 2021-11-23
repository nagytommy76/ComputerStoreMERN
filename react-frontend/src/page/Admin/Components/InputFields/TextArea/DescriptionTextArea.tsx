import React, { ChangeEvent } from 'react'

import TextField from '@mui/material/TextField'

const DescriptionTextArea: React.FC<Props> = ({ labelText, value, onChangeEvent }) => {
   return (
      <TextField
         id='description'
         label={labelText}
         value={value}
         onChange={onChangeEvent}
         margin='normal'
         multiline
         minRows={2}
         maxRows={4}
         fullWidth
         variant='filled'
      />
   )
}

type Props = {
   labelText: string
   value: string | undefined
   onChangeEvent: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export default DescriptionTextArea
