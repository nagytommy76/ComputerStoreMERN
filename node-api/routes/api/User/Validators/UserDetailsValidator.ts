import { body } from 'express-validator'

const notEmptyFieldWithMessage = (fieldName: string, messageBody: string, minimum: number = 3) =>
   body(fieldName).isLength({ min: minimum }).trim().withMessage(`A(z) ${messageBody} mező kitöltése kötelező!`)

const notZeroValueWithMessage = (fieldName: string, messageBody: string) =>
   body(fieldName).isInt({ min: 1000, max: 9999 }).withMessage(`A(z) ${messageBody} mező nem lehet nulla!`)

// 'hu-HU': /^(\+?36)(20|30|70)\d{7}$/ PHONE

export const insertUserDetailsValidator = [
   body('userDetails.address.zipCode').isPostalCode('HU').withMessage(`Az irányítósám mezőnek 1000 és 9999 között kell elnnie`),
   body('userDetails.phone').isMobilePhone('hu-HU').withMessage('Telefonszám formátum szükséges'),
   notEmptyFieldWithMessage('userDetails.firstName', 'Vezetéknév'),
   notEmptyFieldWithMessage('userDetails.lastName', 'Keresztnév'),
   notEmptyFieldWithMessage('userDetails.address.city', 'Város', 2),
   notEmptyFieldWithMessage('userDetails.address.street', 'Utca'),
   body('userDetails.address.houseNumber').isInt({ min: 1, max: 550 }).withMessage('A házszám minimum 1 és maximum 550 lehet!')
]
