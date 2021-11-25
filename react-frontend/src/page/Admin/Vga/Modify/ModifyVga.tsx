import axios from 'axios'
import React, { useState, lazy } from 'react'

import { vgaProperties } from '../VgaProperties'
import { VgaType } from '../../../ShopPages/Vga/VgaTypes'
import { ValidationErrorWithAxiosError, PictureUrlType } from '../Types'
import { ValidationError } from '../../AdminTypes'

const BaseInputFields = lazy(() => import('../BaseInput/BaseInputFields'))
const ProductSelector = lazy(() => import('../../Components/InputFields/ProductSelector/ProductSelector'))
const DescriptionTextArea = lazy(() => import('../../Components/InputFields/TextArea/DescriptionTextArea'))
const PicUrlInput = lazy(() => import('../../Components/InputFields/PicUrlInput/PicUrlInput'))
const BaseForm = lazy(() => import('../../Components/Form/BaseForm'))

const ModifyVga = () => {
   const [selectedProductPictureUrls, setSelectedProductPictureUrls] = useState<PictureUrlType[]>([])
   const [productDetails, setProductDetails] = useState<VgaType>(vgaProperties)
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])

   const sendModifyRequest = async (event: React.FormEvent) => {
      event.preventDefault()
      const filteredPictureArray = selectedProductPictureUrls.map((x) => x.pictureUrl)
      await axios
         .post('admin/vga/modify', { ...productDetails, pictureUrls: filteredPictureArray })
         .then((result) => console.log(result))
         .catch((errors: ValidationErrorWithAxiosError) => {
            if (errors.response?.data) setValidationErrors(errors.response?.data.errors)
         })
   }
   return (
      <BaseForm handleSubmit={sendModifyRequest} submitButtonText='Vga módosítása' mainTitle='Vga módosítása'>
         <ProductSelector setDetailedProducts={setProductDetails} setPictureUrls={setSelectedProductPictureUrls} />
         <BaseInputFields vgaProduct={productDetails} setVgaProduct={setProductDetails} validationErrors={validationErrors} />
         <DescriptionTextArea
            labelText='Leírás'
            value={productDetails.details.description || ''}
            onChangeEvent={(event) =>
               setProductDetails({
                  ...productDetails,
                  details: { ...productDetails.details, description: event.target.value }
               })
            }
         />
         <PicUrlInput setPictureUrls={setSelectedProductPictureUrls} pictureUrls={selectedProductPictureUrls} />
      </BaseForm>
   )
}

export default ModifyVga
