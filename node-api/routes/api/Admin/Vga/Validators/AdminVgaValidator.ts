import { body } from 'express-validator'
import {
   notEmptyFieldWithMessage,
   notZeroValueWithMessage,
   pictureUrlsLengthGreaterOne,
} from '../../Validators/BaseValidators'

export const insertVgaValidator = [
   body('pictureUrls').custom(pictureUrlsLengthGreaterOne),
   notEmptyFieldWithMessage('itemNumber', 'típus szám'),
   notEmptyFieldWithMessage('type', 'típus név'),
   notEmptyFieldWithMessage('manufacturer', 'Vga gyártó'),
   notZeroValueWithMessage('price', 'Ár'),
   notEmptyFieldWithMessage('details.gpuManufacturer', 'Gpu gyártó'),
   notEmptyFieldWithMessage('details.pcieType', 'PCI-E típus'),
   notZeroValueWithMessage('details.gpuBaseClock', 'Gpu alap órajel'),
   notZeroValueWithMessage('details.gpuPeakClock', 'Gpu emelt órajel'),
   notZeroValueWithMessage('details.vramCapacity', 'Vram mennyiség'),
   notEmptyFieldWithMessage('details.vramType', 'Vram típus'),
   notZeroValueWithMessage('details.vramBandwidth', 'Vram adatátvitel'),
   notZeroValueWithMessage('details.vramSpeed', 'Vram sebesség'),
   notZeroValueWithMessage('details.powerConsuption', 'Fogyasztás'),
   notZeroValueWithMessage('details.warranity', 'Garancia'),
   notZeroValueWithMessage('details.streamProcessors', 'Stream processzorok'),
]

export const modifyVgaValidator = [
   body('pictureUrls').custom(pictureUrlsLengthGreaterOne),
   notEmptyFieldWithMessage('itemNumber', 'típus szám'),
   notEmptyFieldWithMessage('_id', 'ObjectId'),
   notEmptyFieldWithMessage('type', 'típus név'),
   notEmptyFieldWithMessage('manufacturer', 'Vga gyártó'),
   notZeroValueWithMessage('price', 'Ár'),
   notEmptyFieldWithMessage('details.gpuManufacturer', 'Gpu gyártó'),
   notEmptyFieldWithMessage('details.pcieType', 'PCI-E típus'),
   notZeroValueWithMessage('details.gpuBaseClock', 'Gpu alap órajel'),
   notZeroValueWithMessage('details.gpuPeakClock', 'Gpu emelt órajel'),
   notZeroValueWithMessage('details.vramCapacity', 'Vram mennyiség'),
   notEmptyFieldWithMessage('details.vramType', 'Vram típus'),
   notZeroValueWithMessage('details.vramBandwidth', 'Vram adatátvitel'),
   notZeroValueWithMessage('details.vramSpeed', 'Vram sebesség'),
   notZeroValueWithMessage('details.powerConsuption', 'Fogyasztás'),
   notZeroValueWithMessage('details.warranity', 'Garancia'),
   notZeroValueWithMessage('details.streamProcessors', 'Stream processzorok'),
]
