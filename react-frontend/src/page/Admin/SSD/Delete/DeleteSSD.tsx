import React from 'react'

const BaseTable = React.lazy(() => import('../../Components/DeleteComponents/BaseTable'))

const DeleteSSD = () => {
   return <BaseTable productType='ssd' />
}

export default DeleteSSD
