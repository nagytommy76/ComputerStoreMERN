import { lazy, useState } from 'react'
import { MemoryProductType } from '../../../ShopPages/Memory/MemoryTypes'
import { ValidationError } from '../../AdminTypes'
import { memoryProperties } from '../MemoryProperties'

const BaseInputFields = lazy(() => import('../BaseInputFeilds'))
const BaseProductInsert = lazy(() => import('../../Components/InsertComponent/BaseInsert'))

const MemoryInsert = () => {
   const [memoryProducts, setMemoryProducts] = useState<MemoryProductType>(memoryProperties)
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])

   return (
      <BaseProductInsert
         title='Memória'
         product={memoryProducts}
         productProperties={memoryProperties}
         productType='memory'
         setProducts={setMemoryProducts}
         setValidationErrors={setValidationErrors}
      >
         <BaseInputFields product={memoryProducts} setProduct={setMemoryProducts} validationErrors={validationErrors} />
      </BaseProductInsert>
   )
}

export default MemoryInsert
