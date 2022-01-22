import { useState } from 'react'

const useSnackbar = () => {
   const [isSnackOpen, setIsSnackOpen] = useState<{ open: boolean; message: string }>({ open: false, message: '' })

   const handleClose = () => {
      setIsSnackOpen({ open: false, message: '' })
   }
   return {
      handleClose,
      setIsSnackOpen,
      isSnackOpen
   }
}

export default useSnackbar
