import { AxiosError } from 'axios'
import { VgaType } from '../../ShopPages/Vga/VgaTypes'
import { ValidationError } from '../AdminTypes'

export type BaseInputFieldProps = {
   vgaProduct: VgaType
   setVgaProduct: React.Dispatch<React.SetStateAction<VgaType>>
   validationErrors: ValidationError[]
}

export type ValidationErrorWithAxiosError = AxiosError & ValidationError

export type PictureUrlType = {
   id: string
   pictureUrl: string
}
