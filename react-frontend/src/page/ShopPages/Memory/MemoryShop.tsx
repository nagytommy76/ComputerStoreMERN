import React from 'react'

const BaseShop = React.lazy(() => import('../BaseComponents/BaseShopPage/BaseShop'))
const SideFilter = React.lazy(() => import('../BaseComponents/SideFilter/SideFilter'))

const MemoryShop = () => {
   return (
      <BaseShop productType='memory'>
         <SideFilter productType='memory' />
      </BaseShop>
   )
}

export default MemoryShop
