import React from 'react'
import useExtraDispatch from './Hooks/useExtraDispatch'
import useExtraQuery from './Hooks/useExtraQuery'

const BaseShop = React.lazy(() => import('../BaseComponents/BaseShopPage/BaseShop'))
const SideFilter = React.lazy(() => import('../BaseComponents/SideFilter/SideFilter'))

const SSDShop = () => {
   const extraDispatches = useExtraDispatch()
   const extraQueryParameters = useExtraQuery()
   return (
      <BaseShop productType='ssd'>
         <SideFilter
            productType='ssd'
            extraDispatches={extraDispatches}
            extraQueryParameters={extraQueryParameters}
         ></SideFilter>
      </BaseShop>
   )
}

export default SSDShop
