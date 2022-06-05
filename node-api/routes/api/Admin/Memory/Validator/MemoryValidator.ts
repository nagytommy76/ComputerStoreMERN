import { body } from 'express-validator'
import {
   notEmptyFieldWithMessage,
   notZeroValueWithMessage,
   pictureUrlsLengthGreaterOne,
} from '../../Validators/BaseValidators'

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
