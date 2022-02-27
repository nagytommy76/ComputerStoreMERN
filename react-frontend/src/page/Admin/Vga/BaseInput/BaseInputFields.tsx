import React, { useContext } from 'react'
import { FormContainerStyle } from '../../Components/Form/FormStyle'
import BaseInputs from '../../Components/BaseInputs'
import { AdminContext } from '../../Context/AdminContext'

const TextOrNumberInput = React.lazy(() => import('../../Components/InputFields/TextOrNumberInput'))
const SelectField = React.lazy(() => import('../../Components/InputFields/Select/SelectField'))

const BaseInputFields: React.FC = () => {
   const { productInputs, setProductInputs, validationErrors } = useContext(AdminContext)
   return (
      <FormContainerStyle>
         <BaseInputs
            product={productInputs}
            setProduct={setProductInputs}
            validationErrors={validationErrors}
         />
         {/* Details */}
         <SelectField
            id='gpuMan'
            text='Gpu gyártó'
            value={productInputs.details.gpuManufacturer}
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, gpuManufacturer: event.target.value },
               })
            }
            validationErrors={validationErrors}
            validationErrorLocation='details.gpuManufacturer'
         >
            <option value='AMD'>AMD</option>
            <option value='NVIDIA'>NVIDIA</option>
         </SelectField>
         <SelectField
            id='pciType'
            text='PCI-E típus'
            value={productInputs.details.pcieType}
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, pcieType: event.target.value },
               })
            }
            validationErrors={validationErrors}
            validationErrorLocation='details.pcieType'
         >
            <option value='PCI-E 16x 4.0'>PCI-E 16x 4.0</option>
            <option value='PCI-E 16x 3.0'>PCI-E 16x 3.0</option>
            <option value='PCI-E 16x 2.0'>PCI-E 16x 2.0</option>
         </SelectField>
         <TextOrNumberInput
            id='gpuBaseClock'
            labelText='GPU alap órajel'
            value={productInputs.details.gpuBaseClock}
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, gpuBaseClock: parseInt(event.target.value) },
               })
            }
            validationErrorLocation='details.gpuBaseClock'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='gpuPeakClock'
            labelText='GPU emelt órajel'
            value={productInputs.details.gpuPeakClock}
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, gpuPeakClock: parseInt(event.target.value) },
               })
            }
            validationErrorLocation='details.gpuPeakClock'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='vramCapacity'
            labelText='Vram kapacitás'
            value={productInputs.details.vramCapacity}
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, vramCapacity: parseInt(event.target.value) },
               })
            }
            validationErrorLocation='details.vramCapacity'
            validationErrors={validationErrors}
         />
         <SelectField
            id='vramType'
            text='Vram típusa'
            value={productInputs.details.vramType}
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, vramType: event.target.value },
               })
            }
            validationErrors={validationErrors}
            validationErrorLocation='details.vramType'
         >
            <option value='GDDR6'>GDDR6</option>
            <option value='GDDR6X'>GDDR6X</option>
            <option value='GDDR5'>GDDR5</option>
            <option value='DDR4'>DDR4</option>
            <option value='HBM2'>HBM2</option>
         </SelectField>
         <TextOrNumberInput
            id='vramBandwidth'
            labelText='Vram sávszélesség (bit)'
            value={productInputs.details.vramBandwidth}
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, vramBandwidth: parseInt(event.target.value) },
               })
            }
            validationErrorLocation='details.vramBandwidth'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='vramSpeed'
            labelText='Vram sebesség (GB/s)'
            value={productInputs.details.vramSpeed}
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, vramSpeed: parseInt(event.target.value) },
               })
            }
            validationErrorLocation='details.vramSpeed'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='powerConsuption'
            labelText='Energia fogyasztás (W)'
            value={productInputs.details.powerConsuption}
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, powerConsuption: parseInt(event.target.value) },
               })
            }
            validationErrorLocation='details.powerConsuption'
            validationErrors={validationErrors}
         />
         <SelectField
            id='powerPin'
            text='Táp csatlakozók'
            value={productInputs.details.powerPin}
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, powerPin: event.target.value },
               })
            }
            validationErrors={validationErrors}
            validationErrorLocation='details.powerPin'
         >
            <option value='1 * 6pin'>1 * 6pin</option>
            <option value='1 * 6pin + 1 * 8pin'>1 * 6pin + 1 * 8pin</option>
            <option value='1 * 6pin + 2 * 8pin'>1 * 6pin + 2 * 8pin</option>
            <option value='1 * 8pin'>1 * 8pin</option>
            <option value='2 * 8pin'>2 * 8pin</option>
            <option value='3 * 8pin'>3 * 8pin</option>
         </SelectField>
         <TextOrNumberInput
            id='warranity'
            labelText='Garancia'
            value={productInputs.details.warranity}
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, warranity: parseInt(event.target.value) },
               })
            }
            validationErrorLocation='details.warranity'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='displayPort'
            labelText='Display Port (DB)'
            value={productInputs.details.displayPort}
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, displayPort: parseInt(event.target.value) },
               })
            }
            validationErrorLocation='details.displayPort'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='DVI'
            labelText='DVI (DB)'
            value={productInputs.details.DVI}
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, DVI: parseInt(event.target.value) },
               })
            }
            validationErrorLocation='details.DVI'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='HDMI'
            labelText='HDMI (DB)'
            value={productInputs.details.HDMI}
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, HDMI: parseInt(event.target.value) },
               })
            }
            validationErrorLocation='details.HDMI'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='minPowerSupply'
            labelText='Ajánlott tápegység'
            value={productInputs.details.minPowerSupply}
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, minPowerSupply: parseInt(event.target.value) },
               })
            }
            validationErrorLocation='details.minPowerSupply'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='length'
            labelText='Hosszúság'
            value={productInputs.details.length}
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, length: parseInt(event.target.value) },
               })
            }
            validationErrorLocation='details.length'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='streamProcessors'
            labelText='Stream processzorok'
            value={productInputs.details.streamProcessors}
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, streamProcessors: parseInt(event.target.value) },
               })
            }
            validationErrorLocation='details.streamProcessors'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='manufacturerPageUrl'
            labelText='Gyártói oldal link'
            value={productInputs.details.manufacturerPageUrl}
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, manufacturerPageUrl: event.target.value },
               })
            }
         />
      </FormContainerStyle>
   )
}

export default BaseInputFields
