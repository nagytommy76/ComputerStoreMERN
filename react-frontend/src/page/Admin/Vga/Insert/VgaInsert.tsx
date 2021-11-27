import React, { useState, lazy } from 'react'
import handleInsertSubmit from '../../Helper/HandleInsertSubmit'
import { vgaProperties } from '../VgaProperties'
import { VgaType } from '../../../ShopPages/Vga/VgaTypes'
import { PictureUrlType } from '../Types'
import { ValidationError } from '../../AdminTypes'

const PicUrlInput = lazy(() => import('../../Components/InputFields/PicUrlInput/PicUrlInput'))
const DescriptionTextArea = lazy(() => import('../../Components/InputFields/TextArea/DescriptionTextArea'))
const BaseInputFields = lazy(() => import('../BaseInput/BaseInputFields'))
const BaseForm = lazy(() => import('../../Components/Form/BaseForm'))

const AdminVga = () => {
   const [pictureUrls, setPictureUrls] = useState<PictureUrlType[]>([])
   const [vgaProduct, setVgaProduct] = useState<VgaType>(vgaProperties)
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])
   const [inputSuccess, setInputSuccess] = useState<boolean>(false)

   const insertVga = async (event: React.FormEvent) => {
      event.preventDefault()
      handleInsertSubmit('vga', vgaProduct, pictureUrls, setValidationErrors, setVgaProduct, setInputSuccess, vgaProperties)
   }
   return (
      <BaseForm inputWasSuccess={inputSuccess} mainTitle='Vga bevitele' submitButtonText='Vga bevitele' handleSubmit={insertVga}>
         <BaseInputFields setVgaProduct={setVgaProduct} vgaProduct={vgaProduct} validationErrors={validationErrors} />
         <DescriptionTextArea
            labelText='Leírás'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, description: event.target.value } })
            }
            value={vgaProduct.details.description}
         />
         <PicUrlInput setPictureUrls={setPictureUrls} pictureUrls={pictureUrls}></PicUrlInput>
      </BaseForm>
   )
}

export default AdminVga
