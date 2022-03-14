import { useState } from 'react'
import { ValidationError } from '../AdminTypes'
import { PictureUrlType } from '../Vga/Types'

const useAdminStates = (productProperties: any) => {
   const [selectedProductPictureUrls, setSelectedProductPictureUrls] = useState<PictureUrlType[]>([])
   const [productInputs, setProductInputs] = useState(productProperties)
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([
      { location: '', msg: '', param: '' },
   ])
   return {
      productInputs,
      setProductInputs,
      selectedProductPictureUrls,
      setSelectedProductPictureUrls,
      validationErrors,
      setValidationErrors,
   }
}

export default useAdminStates
