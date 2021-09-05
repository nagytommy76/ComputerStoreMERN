import { ValidationError } from '../Admin/Vga/Types'

export const errorMsg = (validationErrors: ValidationError[], param: string) => {
   return validationErrors.find((x: ValidationError) => x.param === param)?.msg
}
