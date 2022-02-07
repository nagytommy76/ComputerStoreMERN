import React, { useState, lazy } from 'react'
import { vgaProperties } from '../VgaProperties'
import { VgaType } from '../../../ShopPages/Vga/VgaTypes'
import { ValidationError } from '../../AdminTypes'

const BaseInputFields = lazy(() => import('../BaseInput/BaseInputFields'))
const BaseProductInsert = lazy(() => import('../../Components/InsertComponent/BaseInsert'))

const AdminVga = () => {
   const [vgaProduct, setVgaProduct] = useState<VgaType>(vgaProperties)
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])

   return (
      <BaseProductInsert
         product={vgaProduct}
         setProducts={setVgaProduct}
         productProperties={vgaProperties}
         productType='vga'
         setValidationErrors={setValidationErrors}
         title='Vga'
      >
         <BaseInputFields setVgaProduct={setVgaProduct} vgaProduct={vgaProduct} validationErrors={validationErrors} />
      </BaseProductInsert>
   )
}

export default AdminVga
