import { lazy, useState } from 'react'
import { AdminContext } from '../../Context/AdminContext'

import { CpuProductType } from '../../../ShopPages/Cpu/CpuTypes'
import { ValidationError } from '../../AdminTypes'
import { PictureUrlType } from '../../Vga/Types'
import { cpuProperties } from '../CpuProperties'

const BaseInputFields = lazy(() => import('../BaseInput/BaseInputFeilds'))
const BaseProductInsert = lazy(() => import('../../Components/InsertComponent/BaseInsert'))

const CpuInsert = () => {
   const [cpuProducts, setCpuProducts] = useState<CpuProductType>(cpuProperties)
   const [pictureUrls, setPictureUrls] = useState<PictureUrlType[]>([])
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])

   return (
      <AdminContext.Provider
         value={{
            productInputs: cpuProducts,
            setProductInputs: setCpuProducts,
            selectedProductPictureUrls: pictureUrls,
            setSelectedProductPictureUrls: setPictureUrls,
            validationErrors,
            setValidationErrors,
         }}
      >
         <BaseProductInsert productProperties={cpuProperties} productType='cpu' title='Cpu'>
            <BaseInputFields />
         </BaseProductInsert>
      </AdminContext.Provider>
   )
}

export default CpuInsert
