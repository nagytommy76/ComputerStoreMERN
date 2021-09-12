import { body } from 'express-validator'

export const notEmptyFieldWithMessage = (fieldName: string, messageBody: string) =>
   body(fieldName).isLength({ min: 3 }).trim().withMessage(`A(z) ${messageBody} mező kitöltése kötelező!`)

export const notZeroValueWithMessage = (fieldName: string, messageBody: string) =>
   body(fieldName).not().equals('0').withMessage(`A(z) ${messageBody} mező nem lehet nulla!`)
