import React from 'react'

const BaseTable = React.lazy(() => import('../../Components/DeleteComponents/BaseTable'))

const DeleteHDD = () => {
   return <BaseTable productType='hdd' />
}

export default DeleteHDD
