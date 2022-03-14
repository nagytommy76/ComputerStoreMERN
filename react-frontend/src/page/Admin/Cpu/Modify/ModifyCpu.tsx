import { lazy } from 'react'
import { cpuProperties } from '../CpuProperties'

const BaseInputFields = lazy(() => import('../BaseInput/BaseInputFeilds'))
const BaseModifyForm = lazy(() => import('../../Components/Form/BaseModifyForm'))

const ModifyCpu = () => {
   return (
      <BaseModifyForm
         productType='cpu'
         submitButtonText='CPU módosítása'
         mainTitle='CPU módosítása'
         productProperties={cpuProperties}
      >
         <BaseInputFields />
      </BaseModifyForm>
   )
}

export default ModifyCpu
