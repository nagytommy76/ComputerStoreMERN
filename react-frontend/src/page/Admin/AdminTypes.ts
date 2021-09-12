export type ValidationError = {
   location: string
   msg: string
   param: string
   value?: string | number
}

export type BaseInputFieldProps = {
   product: any
   setProduct: React.Dispatch<React.SetStateAction<any>>
   validationErrors: ValidationError[]
}
