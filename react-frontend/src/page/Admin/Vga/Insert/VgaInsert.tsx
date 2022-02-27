import React, { useState, lazy } from 'react'
import { AdminContext } from '../../Context/AdminContext'
import { vgaProperties } from '../VgaProperties'

import { ValidationError } from '../../AdminTypes'
import { VgaType } from '../../../ShopPages/Vga/VgaTypes'
import { PictureUrlType } from '../Types'

const BaseInputFields = lazy(() => import('../BaseInput/BaseInputFields'))
const BaseProductInsert = lazy(() => import('../../Components/InsertComponent/BaseInsert'))

const AdminVga = () => {
   const [vgaProduct, setVgaProduct] = useState<VgaType>(vgaProperties)
   const [pictureUrls, setPictureUrls] = useState<PictureUrlType[]>([])
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])

   return (
      <AdminContext.Provider
         value={{
            productInputs: vgaProduct,
            setProductInputs: setVgaProduct,
            selectedProductPictureUrls: pictureUrls,
            setSelectedProductPictureUrls: setPictureUrls,
            validationErrors,
            setValidationErrors,
         }}
      >
         <BaseProductInsert productProperties={vgaProperties} productType='vga' title='Vga'>
            <BaseInputFields />
         </BaseProductInsert>
      </AdminContext.Provider>
   )
}

export default AdminVga
