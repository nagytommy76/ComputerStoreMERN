import React, { useState, lazy } from 'react'
import { AdminContext } from '../../Context/AdminContext'
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
      <AdminContext.Provider
         value={{
            productInputs: vgaProductInputs,
            setProductInputs: setVgaProductInputs,
            selectedProductPictureUrls,
            setSelectedProductPictureUrls,
            validationErrors,
            setValidationErrors,
         }}
      >
         <BaseModifyForm productType='vga' submitButtonText='Vga módosítása' mainTitle='Vga módosítása'>
            <ProductSelector productProperties={vgaProperties} productType='vga' />
            <BaseInputFields />
            <DescriptionTextArea
               labelText='Leírás'
               value={vgaProductInputs.details.description || ''}
               onChangeEvent={event =>
                  setVgaProductInputs({
                     ...vgaProductInputs,
                     details: { ...vgaProductInputs.details, description: event.target.value },
                  })
               }
            />
            <PicUrlInput />
         </BaseModifyForm>
      </AdminContext.Provider>
   )
}

export default ModifyVga
