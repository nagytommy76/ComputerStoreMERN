import { ValidationError } from '../Admin/AdminTypes'

export const errorMsg = (validationErrors: ValidationError[], param: string) => {
   return validationErrors.find((x: ValidationError) => x.param === param)?.msg
}

export const findOrFailErrorMsg = (validationErrors: ValidationError[], param: string) => {
   return validationErrors.find((x: ValidationError) => x.param === param) ? true : false
}

export const findErrorByFieldType = (validationErrors: ValidateErrors[], param: string) => {
   return validationErrors.find((x: ValidateErrors) => x.field === param)
}

export type ValidateErrors = {
   hasError: boolean
   errorMsg: string
   field: string
}
