import React, { lazy, useState } from 'react'
import { StyledForm, FullWidhtContainerStyle } from '../../Components/Form/FormStyle'
import { cpuProperties } from '../CpuProperties'
import { CpuProductType } from '../../../ShopPages/Cpu/CpuTypes'
import { ValidationError } from '../../AdminTypes'
import { PictureUrlType } from '../../Vga/Types'
import handleInsertSubmit from '../../Helper/HandleInsertSubmit'

const SubmitButton = lazy(() => import('../../Components/InputFields/SubmitButton/SubmitButton'))
const BaseInputFields = lazy(() => import('../BaseInput/BaseInputFeilds'))
const DescriptionTextArea = lazy(() => import('../../Components/InputFields/TextArea/DescriptionTextArea'))
const PicUrlInput = lazy(() => import('../../Components/InputFields/PicUrlInput/PicUrlInput'))

const CpuInsert = () => {
   const [pictureUrls, setPictureUrls] = useState<PictureUrlType[]>([])
   const [cpuProducts, setCpuProducts] = useState<CpuProductType>(cpuProperties)
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])

   const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault()
      handleInsertSubmit('cpu', cpuProducts, pictureUrls, setValidationErrors, setCpuProducts, cpuProperties)
   }
   return (
      <StyledForm onSubmit={handleSubmit}>
         <BaseInputFields product={cpuProducts} setProduct={setCpuProducts} validationErrors={validationErrors} />
         <FullWidhtContainerStyle>
            <DescriptionTextArea
               labelText='Leírás'
               onChangeEvent={(event) =>
                  setCpuProducts({ ...cpuProducts, details: { ...cpuProducts.details, description: event.target.value } })
               }
               value={cpuProducts.details.description}
            />
         </FullWidhtContainerStyle>
         <FullWidhtContainerStyle>
            <PicUrlInput setPictureUrls={setPictureUrls} pictureUrls={pictureUrls}></PicUrlInput>
         </FullWidhtContainerStyle>
         <SubmitButton>Bevitel</SubmitButton>
      </StyledForm>
   )
}

export default CpuInsert
