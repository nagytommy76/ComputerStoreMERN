import React from 'react'

const BaseTable = React.lazy(() => import('../../Components/DeleteComponents/BaseTable'))

const DeleteVga = () => {
   return <BaseTable productType='vga' />
}

export default DeleteVga
