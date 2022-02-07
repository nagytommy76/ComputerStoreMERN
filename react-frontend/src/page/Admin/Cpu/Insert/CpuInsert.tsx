import { lazy, useState } from 'react'
import { CpuProductType } from '../../../ShopPages/Cpu/CpuTypes'
import { ValidationError } from '../../AdminTypes'
import { cpuProperties } from '../CpuProperties'

const BaseInputFields = lazy(() => import('../BaseInput/BaseInputFeilds'))
const BaseProductInsert = lazy(() => import('../../Components/InsertComponent/BaseInsert'))

const CpuInsert = () => {
   const [cpuProducts, setCpuProducts] = useState<CpuProductType>(cpuProperties)
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])

   return (
      <BaseProductInsert
         productProperties={cpuProperties}
         productType='cpu'
         product={cpuProducts}
         setProducts={setCpuProducts}
         setValidationErrors={setValidationErrors}
         title='Cpu'
      >
         <BaseInputFields product={cpuProducts} setProduct={setCpuProducts} validationErrors={validationErrors} />
      </BaseProductInsert>
   )
}

export default CpuInsert
