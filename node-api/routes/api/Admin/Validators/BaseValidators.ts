import { body, CustomValidator } from 'express-validator'

export const pictureUrlsLengthGreaterOne: CustomValidator = (value: string[]) => {
   if (value.length >= 1 && findAnyEmptyPicUrlString(value)) return true
   throw new Error('Legalább egy kép URL szükséges, illetve nem lehet üres mező!')
}

const findAnyEmptyPicUrlString = (picUrlArray: string[]) => {
   picUrlArray.forEach(picUrl => {
      if (picUrl !== '') return true
   })
   return false
}

export const notEmptyFieldWithMessage = (fieldName: string, messageBody: string) =>
   body(fieldName).isLength({ min: 3 }).trim().withMessage(`A(z) ${messageBody} mező kitöltése kötelező!`)

export const notZeroValueWithMessage = (fieldName: string, messageBody: string) =>
   body(fieldName).not().equals('0').withMessage(`A(z) ${messageBody} mező nem lehet nulla!`)
