import { body, CustomValidator } from 'express-validator'
import { notEmptyFieldWithMessage, notZeroValueWithMessage } from '../../Validators/BaseValidators'

const pictureUrlsLengthGreaterOne: CustomValidator = (value: string[]) => {
   if (value.length >= 1) return true
   throw new Error('Legalább egy kép URL szükséges')
}

export const insertCpuValidator = [
   body('pictureUrls').custom(pictureUrlsLengthGreaterOne),
   notEmptyFieldWithMessage('type', 'típus név'),
   notEmptyFieldWithMessage('manufacturer', 'Cpu gyártó'),
   notZeroValueWithMessage('price', 'Ár'),
   notZeroValueWithMessage('details.coreCount', 'Magok száma'),
   notZeroValueWithMessage('details.threadCount', 'Szálak száma'),
   notZeroValueWithMessage('details.baseClock', 'Alap órajel'),
   notZeroValueWithMessage('details.boostClock', 'Turbó órajel'),
   notZeroValueWithMessage('details.TDP', 'TDP'),
   notZeroValueWithMessage('details.l2Cache', 'l2Cache'),
   notZeroValueWithMessage('details.l3Cache', 'l3Cache'),
   notEmptyFieldWithMessage('details.socket', 'Foglalat')
]
