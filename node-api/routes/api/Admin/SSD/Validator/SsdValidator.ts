import { body } from 'express-validator'
import {
   notEmptyFieldWithMessage,
   notZeroValueWithMessage,
   pictureUrlsLengthGreaterOne,
} from '../../Validators/BaseValidators'

export const insertSSDValidator = [
   body('pictureUrls').custom(pictureUrlsLengthGreaterOne),
   notEmptyFieldWithMessage('type', 'típus név'),
   notEmptyFieldWithMessage('manufacturer', 'HDD gyártó'),
   notZeroValueWithMessage('price', 'Ár'),
   notZeroValueWithMessage('details.warranity', 'Garancia'),
   notZeroValueWithMessage('details.capacity', 'Kapacitás'),
   notZeroValueWithMessage('details.size', 'Méret'),
   notZeroValueWithMessage('details.connection', 'Csatoló'),
   notZeroValueWithMessage('details.nandTechnology', 'Nand Technológia'),
   notZeroValueWithMessage('details.readingSpeed', 'Olvasási sebesség'),
   notZeroValueWithMessage('details.writingSpeed', 'Írási sebesség'),
   notZeroValueWithMessage('details.tbw', 'TBW'),
]
