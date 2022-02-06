import { lazy, useState } from 'react'

import { MemoryProductType } from '../../../ShopPages/Memory/MemoryTypes'
import { ValidationError } from '../../AdminTypes'
import { PictureUrlType } from '../../Vga/Types'

import { memoryProperties } from '../MemoryProperties'

const BaseInputFields = lazy(() => import('../BaseInputFeilds'))
const DescriptionTextArea = lazy(() => import('../../Components/InputFields/TextArea/DescriptionTextArea'))
const PicUrlInput = lazy(() => import('../../Components/InputFields/PicUrlInput/PicUrlInput'))
const BaseInsertForm = lazy(() => import('../../Components/Form/BaseInsertForm'))

const MemoryInsert = () => {
   const [pictureUrls, setPictureUrls] = useState<PictureUrlType[]>([])
   const [memoryProducts, setMemoryProducts] = useState<MemoryProductType>(memoryProperties)
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])

   return (
      <BaseInsertForm
         productType='memory'
         pictureUrls={pictureUrls}
         setPictureUrls={setPictureUrls}
         product={memoryProducts}
         productBaseProperties={memoryProperties}
         setProduct={setMemoryProducts}
         setValidationErrors={setValidationErrors}
         mainTitle='Cpu bevitele'
         submitButtonText='Bevitel'
      >
         <BaseInputFields /*product={memoryProducts} setProduct={setMemoryProducts} validationErrors={validationErrors} */ />
         <DescriptionTextArea
            labelText='Leírás'
            onChangeEvent={event =>
               setMemoryProducts({ ...memoryProducts, details: { ...memoryProducts.details, description: event.target.value } })
            }
            value={memoryProducts.details.description}
         />
         <PicUrlInput setPictureUrls={setPictureUrls} pictureUrls={pictureUrls}></PicUrlInput>
      </BaseInsertForm>
   )
}

export default MemoryInsert
