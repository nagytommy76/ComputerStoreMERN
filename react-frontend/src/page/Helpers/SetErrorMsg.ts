import { ValidationError } from '../Admin/AdminTypes'

export const findOrFailAndReturnErrorMsg = (validationErrors: ValidationError[], param: string) => {
   const errors = validationErrors.find((x: ValidationError) => x.param === param)
   if (errors) {
      return {
         message: errors.msg,
         hasError: true
      }
   }
   return false
}

export const findValidationErrorByParam = (validationErrors: ValidationError[], param: string) => {
   return validationErrors.find((x: ValidationError) => x.param === param)
}

export type ValidateErrors = {
   hasError: boolean
   errorMsg: string
   field: string
}
