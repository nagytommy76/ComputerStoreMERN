import { lazy, useState } from 'react'
import { AdminContext } from '../../Context/AdminContext'
import { memoryProperties } from '../MemoryProperties'

import { MemoryProductType } from '../../../ShopPages/Memory/MemoryTypes'
import { ValidationError } from '../../AdminTypes'
import { PictureUrlType } from '../../Vga/Types'

const BaseInputFields = lazy(() => import('../BaseInputFeilds'))
const BaseProductInsert = lazy(() => import('../../Components/InsertComponent/BaseInsert'))

const MemoryInsert = () => {
   const [memoryProducts, setMemoryProducts] = useState<MemoryProductType>(memoryProperties)
   const [pictureUrls, setPictureUrls] = useState<PictureUrlType[]>([])
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([
      { location: '', msg: '', param: '' },
   ])

   return (
      <AdminContext.Provider
         value={{
            productInputs: memoryProducts,
            setProductInputs: setMemoryProducts,
            validationErrors,
            setValidationErrors,
            selectedProductPictureUrls: pictureUrls,
            setSelectedProductPictureUrls: setPictureUrls,
         }}
      >
         <BaseProductInsert title='Memória' productProperties={memoryProperties} productType='memory'>
            <BaseInputFields />
         </BaseProductInsert>
      </AdminContext.Provider>
   )
}

export default MemoryInsert
