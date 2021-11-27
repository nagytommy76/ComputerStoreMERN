import React, { lazy, useState } from 'react'
import { CpuProductType } from '../../../ShopPages/Cpu/CpuTypes'
import { ValidationError } from '../../AdminTypes'
import { PictureUrlType } from '../../Vga/Types'
import { cpuProperties } from '../CpuProperties'
import handleInsertSubmit from '../../Helper/HandleInsertSubmit'

const BaseInputFields = lazy(() => import('../BaseInput/BaseInputFeilds'))
const DescriptionTextArea = lazy(() => import('../../Components/InputFields/TextArea/DescriptionTextArea'))
const PicUrlInput = lazy(() => import('../../Components/InputFields/PicUrlInput/PicUrlInput'))
const BaseForm = lazy(() => import('../../Components/Form/BaseForm'))

const CpuInsert = () => {
   const [pictureUrls, setPictureUrls] = useState<PictureUrlType[]>([])
   const [cpuProducts, setCpuProducts] = useState<CpuProductType>(cpuProperties)
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])
   const [inputSuccess, setInputSuccess] = useState<boolean>(false)

   const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault()
      handleInsertSubmit('cpu', cpuProducts, pictureUrls, setValidationErrors, setCpuProducts, setInputSuccess, cpuProperties)
   }
   return (
      <BaseForm inputWasSuccess={inputSuccess} handleSubmit={handleSubmit} mainTitle='Cpu bevitele' submitButtonText='Bevitel'>
         <BaseInputFields product={cpuProducts} setProduct={setCpuProducts} validationErrors={validationErrors} />
         <DescriptionTextArea
            labelText='Leírás'
            onChangeEvent={(event) =>
               setCpuProducts({ ...cpuProducts, details: { ...cpuProducts.details, description: event.target.value } })
            }
            value={cpuProducts.details.description}
         />
         <PicUrlInput setPictureUrls={setPictureUrls} pictureUrls={pictureUrls}></PicUrlInput>
      </BaseForm>
   )
}

export default CpuInsert
