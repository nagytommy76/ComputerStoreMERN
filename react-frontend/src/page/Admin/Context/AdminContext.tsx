import React from 'react'
import { ValidationError } from '../AdminTypes'
import { PictureUrlType } from '../Vga/Types'

export const AdminContext = React.createContext<ContextType>({
   selectedProductPictureUrls: [],
   setSelectedProductPictureUrls: () => {},
   productInputs: {},
   setProductInputs: () => {},
   validationErrors: [{ location: '', msg: '', param: '' }],
   setValidationErrors: () => {},
})

type ContextType = {
   selectedProductPictureUrls: PictureUrlType[]
   setSelectedProductPictureUrls: React.Dispatch<React.SetStateAction<PictureUrlType[]>>
   productInputs: any
   setProductInputs: React.Dispatch<React.SetStateAction<any>>
   validationErrors: ValidationError[]
   setValidationErrors: React.Dispatch<React.SetStateAction<ValidationError[]>>
}
