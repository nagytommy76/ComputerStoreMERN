import { lazy } from 'react'
import { hddProperties } from '../HDDProperties'

const BaseInputFields = lazy(() => import('../BaseInputFields'))
const BaseModifyForm = lazy(() => import('../../Components/Form/BaseModifyForm'))

const ModifyHDD = () => {
   return (
      <BaseModifyForm
         mainTitle='Merevlemez módosítása'
         submitButtonText='Merevlemez módosítása'
         productProperties={hddProperties}
         productType='hdd'
      >
         <BaseInputFields />
      </BaseModifyForm>
   )
}

export default ModifyHDD
