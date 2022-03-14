import { lazy } from 'react'
import { memoryProperties } from '../MemoryProperties'

const BaseInputFields = lazy(() => import('../BaseInputFeilds'))
const BaseModifyForm = lazy(() => import('../../Components/Form/BaseModifyForm'))

const ModifyMemory = () => {
   return (
      <BaseModifyForm
         productType='memory'
         submitButtonText='Memória módosítása'
         mainTitle='Memória módosítása'
         productProperties={memoryProperties}
      >
         <BaseInputFields />
      </BaseModifyForm>
   )
}

export default ModifyMemory
