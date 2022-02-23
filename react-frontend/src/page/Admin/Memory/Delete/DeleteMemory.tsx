import React from 'react'

const BaseTable = React.lazy(() => import('../../Components/DeleteComponents/BaseTable'))

const DeleteMemory = () => {
   return <BaseTable productType='memory' />
}

export default DeleteMemory
