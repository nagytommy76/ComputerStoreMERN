import { lazy, useState } from 'react'
import { AdminContext } from '../../Context/AdminContext'

import { hddProperties } from '../HDDProperties'
import { ValidationError } from '../../AdminTypes'
import { PictureUrlType } from '../../Vga/Types'
import { HDDProductType } from '../../../ShopPages/HDD/HDDTypes'

const BaseProductInsert = lazy(() => import('../../Components/InsertComponent/BaseInsert'))
const BaseHDDInputFields = lazy(() => import('../BaseInputFields'))

const InsertHdd = () => {
   const [HddProducts, setHddProducts] = useState<HDDProductType>(hddProperties)
   const [pictureUrls, setPictureUrls] = useState<PictureUrlType[]>([])
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([
      { location: '', msg: '', param: '' },
   ])
   return (
      <AdminContext.Provider
         value={{
            productInputs: HddProducts,
            setProductInputs: setHddProducts,
            validationErrors,
            setValidationErrors,
            selectedProductPictureUrls: pictureUrls,
            setSelectedProductPictureUrls: setPictureUrls,
         }}
      >
         <BaseProductInsert productProperties={hddProperties} productType='hdd' title='Merevlemezek'>
            <BaseHDDInputFields />
         </BaseProductInsert>
      </AdminContext.Provider>
   )
}

export default InsertHdd
