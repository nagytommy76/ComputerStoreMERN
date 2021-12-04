import React, { useState } from 'react'
import { SnackbarStateTypes } from '../../Components/DeleteComponents/Types'

const BaseTable = React.lazy(() => import('../../Components/DeleteComponents/BaseTable'))
const SnackBar = React.lazy(() => import('../../Components/DeleteComponents/SnackBar'))

const DeleteVga = () => {
   const [isSnackOpen, setIsSnackOpen] = useState<SnackbarStateTypes>({ isOpen: false, deletedProductName: '' })

   return (
      <>
         <BaseTable productType='vga' setIsSnackOpen={setIsSnackOpen} />
         <SnackBar isSnackOpen={isSnackOpen} setIsSnackOpen={setIsSnackOpen} />
      </>
   )
}

export default DeleteVga
