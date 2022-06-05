import { body } from 'express-validator'
import {
   notEmptyFieldWithMessage,
   notZeroValueWithMessage,
   pictureUrlsLengthGreaterOne,
} from '../../Validators/BaseValidators'

export const insertHDDValidator = [
   body('pictureUrls').custom(pictureUrlsLengthGreaterOne),
   notEmptyFieldWithMessage('type', 'típus név'),
   notEmptyFieldWithMessage('manufacturer', 'HDD gyártó'),
   notZeroValueWithMessage('price', 'Ár'),
   notZeroValueWithMessage('details.capacity', 'Kapacitás'),
   notZeroValueWithMessage('details.rpm', 'Fordulat'),
   notZeroValueWithMessage('details.sataType', 'SATA típusa'),
   notZeroValueWithMessage('details.sizeInCol', 'Méret'),
   notZeroValueWithMessage('details.cache', 'Cache'),
   notZeroValueWithMessage('details.warranity', 'Garancia'),
]
