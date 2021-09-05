import { body, CustomValidator } from 'express-validator'

const notEmptyFieldWithMessage = (fieldName: string, messageBody: string, minimum: number = 3) =>
   body(fieldName).isLength({ min: minimum }).trim().withMessage(`A(z) ${messageBody} mező kitöltése kötelező!`)

const phoneNumberValidator: CustomValidator = (value: string) => {
   const regex = /^(\+?36|06)(1|20|30|50|70)\d{7}$/
   if (!regex.test(value)) throw new Error('Csak magyar vezetékes/vonalas telefonszám formátum lehetséges')
   return true
}

export const insertUserDetailsValidator = [
   body('userDetails.address.zipCode').isPostalCode('HU').withMessage(`Az irányítósám mezőnek 1000 és 9999 között kell elnnie`),
   body('userDetails.phone').custom(phoneNumberValidator),
   notEmptyFieldWithMessage('userDetails.firstName', 'Vezetéknév'),
   notEmptyFieldWithMessage('userDetails.lastName', 'Keresztnév'),
   notEmptyFieldWithMessage('userDetails.address.city', 'Város', 2),
   notEmptyFieldWithMessage('userDetails.address.street', 'Utca'),
   body('userDetails.address.houseNumber').isInt({ min: 1, max: 550 }).withMessage('A házszám minimum 1 és maximum 550 lehet!')
]
