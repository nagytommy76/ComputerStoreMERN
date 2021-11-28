import React, { useState, lazy } from 'react'

import { vgaProperties } from '../VgaProperties'
import { VgaType } from '../../../ShopPages/Vga/VgaTypes'
import { PictureUrlType } from '../Types'
import { ValidationError } from '../../AdminTypes'

const BaseInputFields = lazy(() => import('../BaseInput/BaseInputFields'))
const ProductSelector = lazy(() => import('../../Components/InputFields/ProductSelector/ProductSelector'))
const DescriptionTextArea = lazy(() => import('../../Components/InputFields/TextArea/DescriptionTextArea'))
const PicUrlInput = lazy(() => import('../../Components/InputFields/PicUrlInput/PicUrlInput'))
const BaseModifyForm = lazy(() => import('../../Components/Form/BaseModifyForm'))

const ModifyVga = () => {
   const [selectedProductPictureUrls, setSelectedProductPictureUrls] = useState<PictureUrlType[]>([])
   const [vgaProductInputs, setVgaProductInputs] = useState<VgaType>(vgaProperties)
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])

   return (
      <BaseModifyForm
         productInputs={vgaProductInputs}
         productType='vga'
         selectedProductPictureUrls={selectedProductPictureUrls}
         setValidationErrors={setValidationErrors}
         submitButtonText='Vga módosítása'
         mainTitle='Vga módosítása'>
         <ProductSelector setDetailedProducts={setVgaProductInputs} setPictureUrls={setSelectedProductPictureUrls} />
         <BaseInputFields vgaProduct={vgaProductInputs} setVgaProduct={setVgaProductInputs} validationErrors={validationErrors} />
         <DescriptionTextArea
            labelText='Leírás'
            value={vgaProductInputs.details.description || ''}
            onChangeEvent={(event) =>
               setVgaProductInputs({
                  ...vgaProductInputs,
                  details: { ...vgaProductInputs.details, description: event.target.value }
               })
            }
         />
         <PicUrlInput setPictureUrls={setSelectedProductPictureUrls} pictureUrls={selectedProductPictureUrls} />
      </BaseModifyForm>
   )
}

export default ModifyVga
