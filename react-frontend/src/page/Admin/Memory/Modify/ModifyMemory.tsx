import React, { lazy, useState } from 'react'
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
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])
   return (
      <BaseModifyForm
         productInputs={memoryProductInputs}
         productType='memory'
         selectedProductPictureUrls={selectedProductPictureUrls}
         setValidationErrors={setValidationErrors}
         submitButtonText='Memória módosítása'
         mainTitle='Memória módosítása'
      >
         <ProductSelector
            productProperties={memoryProperties}
            productType='memory'
            setDetailedProducts={setMemoryProductInputs}
            setPictureUrls={setSelectedProductPictureUrls}
         />
         <BaseInputFields
            product={memoryProductInputs}
            setProduct={setMemoryProductInputs}
            validationErrors={validationErrors}
         />
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
         <PicUrlInput
            setPictureUrls={setSelectedProductPictureUrls}
            pictureUrls={selectedProductPictureUrls}
         />
      </BaseModifyForm>
   )
}

export default ModifyMemory
