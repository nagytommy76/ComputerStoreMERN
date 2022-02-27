import { AxiosError } from 'axios'
import { ValidationError } from '../AdminTypes'

export type ValidationErrorWithAxiosError = AxiosError & ValidationError

export type PictureUrlType = {
   id: string
   pictureUrl: string
}
