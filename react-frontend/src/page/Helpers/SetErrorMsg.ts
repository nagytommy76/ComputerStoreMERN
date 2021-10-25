import { ValidationError } from '../Admin/AdminTypes'

export const errorMsg = (validationErrors: ValidationError[], param: string) => {
   return validationErrors.find((x: ValidationError) => x.param === param)?.msg
}

export const errorMsgTest = (validationErrors: ValidateErrors[], param: string) => {
   return validationErrors.find((x: ValidateErrors) => x.field === param)
}

export type ValidateErrors = {
   hasError: boolean
   errorMsg: string
   field: string
}
