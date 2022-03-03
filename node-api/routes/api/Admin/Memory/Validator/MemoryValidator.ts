import { body, CustomValidator } from 'express-validator'
import { notEmptyFieldWithMessage, notZeroValueWithMessage } from '../../Validators/BaseValidators'

const pictureUrlsLengthGreaterOne: CustomValidator = (value: string[]) => {
   if (value.length >= 1) return true
   throw new Error('Legalább egy kép URL szükséges')
}

export const insertMemoryValidator = [
   body('pictureUrls').custom(pictureUrlsLengthGreaterOne),
   notEmptyFieldWithMessage('type', 'típus név'),
   notEmptyFieldWithMessage('manufacturer', 'Memória gyártó'),
   notZeroValueWithMessage('price', 'Ár'),
   notZeroValueWithMessage('details.capacity', 'Kapacitás'),
   notZeroValueWithMessage('details.memoryType', 'Típus'),
   notZeroValueWithMessage('details.frequency', 'Órajel'),
   notZeroValueWithMessage('details.latency', 'Késleltetés'),
   notZeroValueWithMessage('details.voltage', 'Feszültség'),
   notZeroValueWithMessage('details.warranity', 'Garancia'),
]
