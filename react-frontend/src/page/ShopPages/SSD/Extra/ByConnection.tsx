import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { setSelectedConnections } from '../../../../app/slices/Filter/SsdFilterSlice'

const BaseConnectionSelect = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSelect'))

const ByConnection = () => {
   const { allConnection, selectedConnection } = useAppSelector(state => state.ssdFilter)
   return (
      <BaseConnectionSelect
         allOption={allConnection}
         helperText='Csatlakozás'
         selectedOption={selectedConnection}
         setSelectedDispatchValue={setSelectedConnections}
         labelText='Csatlakozás'
      ></BaseConnectionSelect>
   )
}

export default ByConnection
