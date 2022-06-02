import React, { lazy, useState } from 'react'
import { AdminContext } from '../../Context/AdminContext'

import { ssdProperties } from '../SSDProperties'
import { ValidationError } from '../../AdminTypes'
import { PictureUrlType } from '../../Vga/Types'
import { SSDProductType } from '../../../ShopPages/SSD/SSDTypes'

const BaseProductInsert = lazy(() => import('../../Components/InsertComponent/BaseInsert'))
const BaseSSDInputFields = lazy(() => import('../BaseInputFields'))

const InsertSsd = () => {
   const [SsdProducts, setSsdProducts] = useState<SSDProductType>(ssdProperties)
   const [pictureUrls, setPictureUrls] = useState<PictureUrlType[]>([])
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([
      { location: '', msg: '', param: '' },
   ])

   return (
      <AdminContext.Provider
         value={{
            productInputs: SsdProducts,
            setProductInputs: setSsdProducts,
            validationErrors,
            setValidationErrors,
            selectedProductPictureUrls: pictureUrls,
            setSelectedProductPictureUrls: setPictureUrls,
         }}
      >
         <BaseProductInsert productProperties={ssdProperties} productType='ssd' title='SSD meghajtók'>
            <BaseSSDInputFields />
         </BaseProductInsert>
      </AdminContext.Provider>
   )
}

export default InsertSsd
