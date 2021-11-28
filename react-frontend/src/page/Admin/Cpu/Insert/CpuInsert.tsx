import { lazy, useState } from 'react'
import { CpuProductType } from '../../../ShopPages/Cpu/CpuTypes'
import { ValidationError } from '../../AdminTypes'
import { PictureUrlType } from '../../Vga/Types'
import { cpuProperties } from '../CpuProperties'

const BaseInputFields = lazy(() => import('../BaseInput/BaseInputFeilds'))
const DescriptionTextArea = lazy(() => import('../../Components/InputFields/TextArea/DescriptionTextArea'))
const PicUrlInput = lazy(() => import('../../Components/InputFields/PicUrlInput/PicUrlInput'))
const BaseInsertForm = lazy(() => import('../../Components/Form/BaseInsertForm'))

const CpuInsert = () => {
   const [pictureUrls, setPictureUrls] = useState<PictureUrlType[]>([])
   const [cpuProducts, setCpuProducts] = useState<CpuProductType>(cpuProperties)
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])

   return (
      <BaseInsertForm
         productType='cpu'
         pictureUrls={pictureUrls}
         product={cpuProducts}
         productBaseProperties={cpuProperties}
         setProduct={setCpuProducts}
         setValidationErrors={setValidationErrors}
         mainTitle='Cpu bevitele'
         submitButtonText='Bevitel'>
         <BaseInputFields product={cpuProducts} setProduct={setCpuProducts} validationErrors={validationErrors} />
         <DescriptionTextArea
            labelText='Leírás'
            onChangeEvent={(event) =>
               setCpuProducts({ ...cpuProducts, details: { ...cpuProducts.details, description: event.target.value } })
            }
            value={cpuProducts.details.description}
         />
         <PicUrlInput setPictureUrls={setPictureUrls} pictureUrls={pictureUrls}></PicUrlInput>
      </BaseInsertForm>
   )
}

export default CpuInsert
