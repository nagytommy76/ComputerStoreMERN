import { lazy } from 'react'
import { vgaProperties } from '../VgaProperties'

const BaseInputFields = lazy(() => import('../BaseInput/BaseInputFields'))
const BaseModifyForm = lazy(() => import('../../Components/Form/BaseModifyForm'))

const ModifyVga = () => {
   return (
      <BaseModifyForm
         productType='vga'
         submitButtonText='VGA módosítása'
         mainTitle='VGA módosítása'
         productProperties={vgaProperties}
      >
         <BaseInputFields />
      </BaseModifyForm>
   )
}

export default ModifyVga
