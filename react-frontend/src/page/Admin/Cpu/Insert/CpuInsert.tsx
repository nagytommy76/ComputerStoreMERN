import React, { lazy, useState } from 'react'
import axios from 'axios'
import { StyledForm, FullWidhtContainerStyle } from '../../Components/Form/FormStyle'
import { CpuProductType } from '../../../ShopPages/Cpu/CpuTypes'
import { cpuProperties } from '../CpuProperties'
import { ValidationError } from '../../AdminTypes'
import { PictureUrlType } from '../../Vga/Types'

const SubmitButton = lazy(() => import('../../Components/InputFields/SubmitButton/SubmitButton'))
const BaseInputFields = lazy(() => import('../BaseInput/BaseInputFeilds'))
const TextArea = lazy(() => import('../../Components/InputFields/TextArea/TextArea'))
const PicUrlInput = lazy(() => import('../../Components/InputFields/PicUrlInput/PicUrlInput'))

const CpuInsert = () => {
   const [pictureUrls, setPictureUrls] = useState<PictureUrlType[]>([])
   const [cpuProducts, setCpuProducts] = useState<CpuProductType>(cpuProperties)
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])

   const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault()
      console.log('CPU Bevitele')
      axios
         .post('admin/cpu/insert', {
            ...cpuProducts
         })
         .then((result) => {
            console.log(result)
         })
         .catch((error) => {
            console.log(error)
         })
   }
   return (
      <StyledForm onSubmit={handleSubmit}>
         <h1>sdads</h1>
         <BaseInputFields product={cpuProducts} setProduct={setCpuProducts} validationErrors={validationErrors} />
         <FullWidhtContainerStyle>
            <TextArea
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
