import { body } from 'express-validator'

export const ValidateRegister = [
   body('email').isEmail(),
   body('firstPassword').custom((value, { req }) => {
      if (value !== req.body.secondPassword) throw new Error('A két jelszó nem egyezik!')
      return true
   }),
]

export const ValidatePasswordMatch = [
   body('firstPassword').custom((firstPassword: string, { req }) => {
      if (firstPassword !== req.body.secondPassword) throw new Error('A két jelszó nem egyezik!')
      return true
   }),
]
