import { body, CustomValidator } from 'express-validator'

const checkPasswordsEquality: CustomValidator = (value: any, { req }: any) => {
   if (value !== req.body.secondPassword) throw new Error('A két jelszó nem egyezik!')
   return true
}

export const ValidateRegister = [
   body('email').isEmail(),
   body('firstPassword').custom(checkPasswordsEquality),
]

export const ValidatePasswordMatch = [
   body('firstPassword').custom(checkPasswordsEquality),
   body('firstPassword').custom((firstPassword: string) => {
      if (firstPassword.length <= 4) throw new Error('Legalább 4 karakter hosszú jelszó legyen!')
      return true
   }),
   body('secondPassword').custom((secondPassword: string) => {
      if (secondPassword.length <= 4) throw new Error('Legalább 4 karakter hosszú jelszó legyen!')
      return true
   }),
]
