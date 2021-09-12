import { ValidationError } from '../Admin/AdminTypes'

export const errorMsg = (validationErrors: ValidationError[], param: string) => {
   return validationErrors.find((x: ValidationError) => x.param === param)?.msg
}
