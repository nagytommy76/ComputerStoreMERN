import { body } from 'express-validator'

export const insertVgaValidator = [body('itemNumber').not().isEmpty().withMessage('A típus szám kitöltése kötelező!')]
