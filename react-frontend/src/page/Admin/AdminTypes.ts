export type ValidationError = {
   location: string
   msg: string
   param: string
   value?: string | number
}
