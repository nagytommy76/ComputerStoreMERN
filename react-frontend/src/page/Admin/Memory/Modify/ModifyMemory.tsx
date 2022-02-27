import React, { lazy, useState } from 'react'
import { AdminContext } from '../../Context/AdminContext'

import { ValidationError } from '../../AdminTypes'
import { PictureUrlType } from '../../Vga/Types'
import { MemoryProductType } from '../../../ShopPages/Memory/MemoryTypes'
import { memoryProperties } from '../MemoryProperties'

const BaseInputFields = lazy(() => import('../BaseInputFeilds'))
const ProductSelector = lazy(() => import('../../Components/InputFields/ProductSelector/ProductSelector'))
const DescriptionTextArea = lazy(() => import('../../Components/InputFields/TextArea/DescriptionTextArea'))
const PicUrlInput = lazy(() => import('../../Components/InputFields/PicUrlInput/PicUrlInput'))
const BaseModifyForm = lazy(() => import('../../Components/Form/BaseModifyForm'))

const ModifyMemory = () => {
   const [selectedProductPictureUrls, setSelectedProductPictureUrls] = useState<PictureUrlType[]>([])
   const [memoryProductInputs, setMemoryProductInputs] = useState<MemoryProductType>(memoryProperties)
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([
      { location: '', msg: '', param: '' },
   ])
   return (
      <AdminContext.Provider
         value={{
            productInputs: memoryProductInputs,
            setProductInputs: setMemoryProductInputs,
            selectedProductPictureUrls,
            setSelectedProductPictureUrls,
            validationErrors,
            setValidationErrors,
         }}
      >
         <BaseModifyForm
            productType='memory'
            submitButtonText='Memória módosítása'
            mainTitle='Memória módosítása'
         >
            <ProductSelector productProperties={memoryProperties} productType='memory' />
            <BaseInputFields />
            <DescriptionTextArea
               labelText='Leírás'
               value={memoryProductInputs.details.description || ''}
               onChangeEvent={event =>
                  setMemoryProductInputs({
                     ...memoryProductInputs,
                     details: { ...memoryProductInputs.details, description: event.target.value },
                  })
               }
            />
            <PicUrlInput />
         </BaseModifyForm>
      </AdminContext.Provider>
   )
}

export default ModifyMemory
