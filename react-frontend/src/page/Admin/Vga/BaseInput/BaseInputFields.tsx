import React from 'react'
import { FormContainerStyle } from '../../Components/Form/FormStyle'
import { VgaInputFieldProps } from '../Types'
import BaseInputs from '../../Components/BaseInputs'

const TextOrNumberInput = React.lazy(() => import('../../Components/InputFields/TextOrNumberInput'))

const BaseInputFields: React.FC<VgaInputFieldProps> = ({ vgaProduct, setVgaProduct, validationErrors }) => {
   return (
      <FormContainerStyle>
         <BaseInputs product={vgaProduct} setProduct={setVgaProduct} validationErrors={validationErrors} />
         {/* Details */}
         <TextOrNumberInput
            id='gpuMan'
            labelText='Gpu gyártó'
            value={vgaProduct.details.gpuManufacturer}
            onChangeEvent={event =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, gpuManufacturer: event.target.value } })
            }
            validationErrorLocation='details.gpuManufacturer'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='pciType'
            labelText='PCI-E típus'
            value={vgaProduct.details.pcieType}
            onChangeEvent={event =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, pcieType: event.target.value } })
            }
            validationErrorLocation='details.pcieType'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='gpuBaseClock'
            labelText='GPU alap órajel'
            value={vgaProduct.details.gpuBaseClock}
            onChangeEvent={event =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, gpuBaseClock: parseInt(event.target.value) } })
            }
            validationErrorLocation='details.gpuBaseClock'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='gpuPeakClock'
            labelText='GPU emelt órajel'
            value={vgaProduct.details.gpuPeakClock}
            onChangeEvent={event =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, gpuPeakClock: parseInt(event.target.value) } })
            }
            validationErrorLocation='details.gpuPeakClock'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='vramCapacity'
            labelText='Vram kapacitás'
            value={vgaProduct.details.vramCapacity}
            onChangeEvent={event =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, vramCapacity: parseInt(event.target.value) } })
            }
            validationErrorLocation='details.vramCapacity'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='vramType'
            labelText='Vram típusa'
            value={vgaProduct.details.vramType}
            onChangeEvent={event =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, vramType: event.target.value } })
            }
            validationErrorLocation='details.vramType'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='vramBandwidth'
            labelText='Vram sávszélesség (bit)'
            value={vgaProduct.details.vramBandwidth}
            onChangeEvent={event =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, vramBandwidth: parseInt(event.target.value) } })
            }
            validationErrorLocation='details.vramBandwidth'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='vramSpeed'
            labelText='Vram sebesség (GB/s)'
            value={vgaProduct.details.vramSpeed}
            onChangeEvent={event =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, vramSpeed: parseInt(event.target.value) } })
            }
            validationErrorLocation='details.vramSpeed'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='powerConsuption'
            labelText='Energia fogyasztás (W)'
            value={vgaProduct.details.powerConsuption}
            onChangeEvent={event =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, powerConsuption: parseInt(event.target.value) } })
            }
            validationErrorLocation='details.powerConsuption'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='powerPin'
            labelText='Táp csatlakozók'
            value={vgaProduct.details.powerPin}
            onChangeEvent={event =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, powerPin: event.target.value } })
            }
            validationErrorLocation='details.powerPin'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='warranity'
            labelText='Garancia'
            value={vgaProduct.details.warranity}
            onChangeEvent={event =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, warranity: parseInt(event.target.value) } })
            }
            validationErrorLocation='details.warranity'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='displayPort'
            labelText='Display Port (DB)'
            value={vgaProduct.details.displayPort}
            onChangeEvent={event =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, displayPort: parseInt(event.target.value) } })
            }
            validationErrorLocation='details.displayPort'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='DVI'
            labelText='DVI (DB)'
            value={vgaProduct.details.DVI}
            onChangeEvent={event =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, DVI: parseInt(event.target.value) } })
            }
            validationErrorLocation='details.DVI'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='HDMI'
            labelText='HDMI (DB)'
            value={vgaProduct.details.HDMI}
            onChangeEvent={event =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, HDMI: parseInt(event.target.value) } })
            }
            validationErrorLocation='details.HDMI'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='minPowerSupply'
            labelText='Ajánlott tápegység'
            value={vgaProduct.details.minPowerSupply}
            onChangeEvent={event =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, minPowerSupply: parseInt(event.target.value) } })
            }
            validationErrorLocation='details.minPowerSupply'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='length'
            labelText='Hosszúság'
            value={vgaProduct.details.length}
            onChangeEvent={event =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, length: parseInt(event.target.value) } })
            }
            validationErrorLocation='details.length'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='streamProcessors'
            labelText='Stream processzorok'
            value={vgaProduct.details.streamProcessors}
            onChangeEvent={event =>
               setVgaProduct({
                  ...vgaProduct,
                  details: { ...vgaProduct.details, streamProcessors: parseInt(event.target.value) },
               })
            }
            validationErrorLocation='details.streamProcessors'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='manufacturerPageUrl'
            labelText='Gyártói oldal link'
            value={vgaProduct.details.manufacturerPageUrl}
            onChangeEvent={event =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, manufacturerPageUrl: event.target.value } })
            }
         />
      </FormContainerStyle>
   )
}

export default BaseInputFields
