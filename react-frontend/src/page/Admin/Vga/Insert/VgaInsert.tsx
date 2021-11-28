import React, { useState, lazy } from 'react'
import { vgaProperties } from '../VgaProperties'
import { VgaType } from '../../../ShopPages/Vga/VgaTypes'
import { PictureUrlType } from '../Types'
import { ValidationError } from '../../AdminTypes'

const PicUrlInput = lazy(() => import('../../Components/InputFields/PicUrlInput/PicUrlInput'))
const DescriptionTextArea = lazy(() => import('../../Components/InputFields/TextArea/DescriptionTextArea'))
const BaseInputFields = lazy(() => import('../BaseInput/BaseInputFields'))
const BaseInsertForm = lazy(() => import('../../Components/Form/BaseInsertForm'))

const AdminVga = () => {
   const [pictureUrls, setPictureUrls] = useState<PictureUrlType[]>([])
   const [vgaProduct, setVgaProduct] = useState<VgaType>(vgaProperties)
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])

   return (
      <BaseInsertForm
         pictureUrls={pictureUrls}
         product={vgaProduct}
         setProduct={setVgaProduct}
         productBaseProperties={vgaProperties}
         productType='vga'
         setValidationErrors={setValidationErrors}
         mainTitle='Vga bevitele'
         submitButtonText='Vga bevitele'>
         <BaseInputFields setVgaProduct={setVgaProduct} vgaProduct={vgaProduct} validationErrors={validationErrors} />
         <DescriptionTextArea
            labelText='Leírás'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, description: event.target.value } })
            }
            value={vgaProduct.details.description}
         />
         <PicUrlInput setPictureUrls={setPictureUrls} pictureUrls={pictureUrls}></PicUrlInput>
      </BaseInsertForm>
   )
}

export default AdminVga
