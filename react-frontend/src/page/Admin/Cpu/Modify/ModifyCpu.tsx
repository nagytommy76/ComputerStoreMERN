import React, { lazy, useState } from 'react'
import { AdminContext } from '../../Context/AdminContext'
import { CpuProductType } from '../../../ShopPages/Cpu/CpuTypes'
import { ValidationError } from '../../AdminTypes'
import { PictureUrlType } from '../../Vga/Types'
import { cpuProperties } from '../CpuProperties'

const BaseInputFields = lazy(() => import('../BaseInput/BaseInputFeilds'))
const ProductSelector = lazy(() => import('../../Components/InputFields/ProductSelector/ProductSelector'))
const DescriptionTextArea = lazy(() => import('../../Components/InputFields/TextArea/DescriptionTextArea'))
const PicUrlInput = lazy(() => import('../../Components/InputFields/PicUrlInput/PicUrlInput'))
const BaseModifyForm = lazy(() => import('../../Components/Form/BaseModifyForm'))

const ModifyCpu = () => {
   const [selectedProductPictureUrls, setSelectedProductPictureUrls] = useState<PictureUrlType[]>([])
   const [cpuProductInputs, setCpuProductInputs] = useState<CpuProductType>(cpuProperties)
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])

   return (
      <AdminContext.Provider
         value={{
            productInputs: cpuProductInputs,
            setProductInputs: setCpuProductInputs,
            selectedProductPictureUrls,
            setSelectedProductPictureUrls,
            validationErrors,
            setValidationErrors,
         }}
      >
         <BaseModifyForm productType='cpu' submitButtonText='Cpu módosítása' mainTitle='CPU módosítása'>
            <ProductSelector productProperties={cpuProperties} productType='cpu' />
            <BaseInputFields />
            <DescriptionTextArea
               labelText='Leírás'
               value={cpuProductInputs.details.description || ''}
               onChangeEvent={event =>
                  setCpuProductInputs({
                     ...cpuProductInputs,
                     details: { ...cpuProductInputs.details, description: event.target.value },
                  })
               }
            />
            <PicUrlInput />
         </BaseModifyForm>
      </AdminContext.Provider>
   )
}

export default ModifyCpu
