import { body, CustomValidator } from 'express-validator'
import { notEmptyFieldWithMessage, notZeroValueWithMessage } from '../../Validators/BaseValidators'

const pictureUrlsLengthGreaterOne: CustomValidator = (value: string[]) => {
   if (value.length >= 1) return true
   throw new Error('Legalább egy kép URL szükséges')
}

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
