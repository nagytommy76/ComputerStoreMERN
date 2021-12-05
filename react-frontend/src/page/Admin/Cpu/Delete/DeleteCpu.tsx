import React from 'react'

const BaseTable = React.lazy(() => import('../../Components/DeleteComponents/BaseTable'))

const DeleteCpu = () => {
   return <BaseTable productType='cpu' />
}

export default DeleteCpu
