import React, { useState, lazy } from 'react'
import { StyledForm, FullWidhtContainerStyle } from '../../Components/Form/FormStyle'
import { VgaType } from '../../../ShopPages/Vga/VgaTypes'
import { vgaProperties } from '../VgaProperties'
import { PictureUrlType } from '../Types'
import { ValidationError } from '../../AdminTypes'
import { handleInsertSubmit } from '../../Helpers/HandleInsertSubmit'

const PicUrlInput = lazy(() => import('../../Components/InputFields/PicUrlInput/PicUrlInput'))
const TextArea = lazy(() => import('../../Components/InputFields/TextArea/TextArea'))
const SubmitButton = lazy(() => import('../../Components/InputFields/SubmitButton/SubmitButton'))
const BaseInputFields = lazy(() => import('../BaseInput/BaseInputFields'))

const AdminVga = () => {
   const [pictureUrls, setPictureUrls] = useState<PictureUrlType[]>([])
   const [vgaProduct, setVgaProduct] = useState<VgaType>(vgaProperties)
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])

   const insertVga = async (event: React.FormEvent) => {
      event.preventDefault()
      handleInsertSubmit('vga', vgaProduct, pictureUrls, setValidationErrors, setVgaProduct, vgaProperties)
   }
   return (
      <StyledForm onSubmit={insertVga}>
         <BaseInputFields setVgaProduct={setVgaProduct} vgaProduct={vgaProduct} validationErrors={validationErrors} />
         <FullWidhtContainerStyle>
            <TextArea
               labelText='Leírás'
               onChangeEvent={(event) =>
                  setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, description: event.target.value } })
               }
               value={vgaProduct.details.description}
            />
         </FullWidhtContainerStyle>
         <FullWidhtContainerStyle>
            <PicUrlInput setPictureUrls={setPictureUrls} pictureUrls={pictureUrls}></PicUrlInput>
         </FullWidhtContainerStyle>
         <FullWidhtContainerStyle>
            <SubmitButton>Bevitel</SubmitButton>
         </FullWidhtContainerStyle>
      </StyledForm>
   )
}

export default AdminVga
