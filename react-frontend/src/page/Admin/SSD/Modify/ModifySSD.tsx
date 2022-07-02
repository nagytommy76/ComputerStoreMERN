import React from 'react'
import { ssdProperties } from '../SSDProperties'

const BaseInputFields = React.lazy(() => import('../BaseInputFields'))
const BaseModifyForm = React.lazy(() => import('../../Components/Form/BaseModifyForm'))

const ModifySSD = () => {
   return (
      <BaseModifyForm
         productType='ssd'
         submitButtonText='Memória módosítása'
         mainTitle='Memória módosítása'
         productProperties={ssdProperties}
      >
         <BaseInputFields />
      </BaseModifyForm>
   )
}

export default ModifySSD
