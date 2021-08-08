import { AxiosError } from 'axios'
import { VgaType } from '../../ShopPages/Vga/VgaTypes'

export type BaseInputFieldProps = {
   vgaProduct: VgaType
   setVgaProduct: React.Dispatch<React.SetStateAction<VgaType>>
   validationErrors: ValidationError[]
}

export type ValidationErrorWithAxiosError = AxiosError & ValidationError

export type ValidationError = {
   location: string
   msg: string
   param: string
   value?: string
}

export type PictureUrlType = {
   id: string
   pictureUrl: string
}
