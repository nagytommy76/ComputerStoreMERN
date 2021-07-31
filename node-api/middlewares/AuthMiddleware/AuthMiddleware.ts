import { body } from 'express-validator'

export const checkEmailIsEmail = () => {
   return body('email').isEmail().withMessage('Nem megfelelő az email formátum!')
}
