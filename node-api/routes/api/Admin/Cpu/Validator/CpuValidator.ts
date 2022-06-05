import { body } from 'express-validator'
import {
   notEmptyFieldWithMessage,
   notZeroValueWithMessage,
   pictureUrlsLengthGreaterOne,
} from '../../Validators/BaseValidators'

export const insertCpuValidator = [
   body('pictureUrls').custom(pictureUrlsLengthGreaterOne),
   notEmptyFieldWithMessage('type', 'típus név'),
   notEmptyFieldWithMessage('manufacturer', 'Cpu gyártó'),
   notZeroValueWithMessage('price', 'Ár'),
   notZeroValueWithMessage('details.coreCount', 'Magok száma'),
   notZeroValueWithMessage('details.threadCount', 'Szálak száma'),
   notZeroValueWithMessage('details.baseClock', 'Alap órajel'),
   notZeroValueWithMessage('details.boostClock', 'Turbó órajel'),
   notZeroValueWithMessage('details.l3Cache', 'l3Cache'),
   notZeroValueWithMessage('details.warranity', 'Garancia'),
   notZeroValueWithMessage('details.TDP', 'TDP'),
   notEmptyFieldWithMessage('details.socket', 'Foglalat'),
]
