import { body, CustomValidator } from 'express-validator'

export const pictureUrlsLengthGreaterOne: CustomValidator = (value: string[]) => {
   if (value.length < 1) throw new Error('Legalább egy kép URL megadása szükséges')

   findAnyEmptyPicUrlString(value)
   return true
}

const findAnyEmptyPicUrlString = (picUrlArray: string[]) => {
   picUrlArray.map(picUrl => {
      if (picUrl == '') throw new Error('Nem lehet üres mező!')
   })
}

export const notEmptyFieldWithMessage = (fieldName: string, messageBody: string) =>
   body(fieldName).isLength({ min: 3 }).trim().withMessage(`A(z) ${messageBody} mező kitöltése kötelező!`)

export const notZeroValueWithMessage = (fieldName: string, messageBody: string) =>
   body(fieldName).not().equals('0').withMessage(`A(z) ${messageBody} mező nem lehet nulla!`)
