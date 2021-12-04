import React, { useState } from 'react'
import { SnackbarStateTypes } from '../../Components/DeleteComponents/Types'

const BaseTable = React.lazy(() => import('../../Components/DeleteComponents/BaseTable'))
const SnackBar = React.lazy(() => import('../../Components/DeleteComponents/SnackBar'))

const DeleteCpu = () => {
   const [isSnackOpen, setIsSnackOpen] = useState<SnackbarStateTypes>({ isOpen: false, deletedProductName: '' })

   return (
      <>
         <BaseTable productType='cpu' setIsSnackOpen={setIsSnackOpen} />
         <SnackBar isSnackOpen={isSnackOpen} setIsSnackOpen={setIsSnackOpen} />
      </>
   )
}

export default DeleteCpu
