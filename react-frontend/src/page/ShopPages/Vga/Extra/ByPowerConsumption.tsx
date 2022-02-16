import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { setSelectedPowerConsuption } from '../../../../app/slices/Filter/VgaFilterSlice'

const BasePowerCon = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const ByPowerConsumption = () => {
   const { powerConsuptions, selectedPowerConsuption } = useAppSelector(state => state.vgaFilter)
   return (
      <BasePowerCon
         range={powerConsuptions}
         selectedRange={selectedPowerConsuption}
         setSelectedDispatchValue={setSelectedPowerConsuption}
         text='TDP Fogyasztás'
         unit=' Watt'
      />
   )
}

export default ByPowerConsumption
