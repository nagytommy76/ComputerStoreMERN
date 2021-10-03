import React from 'react'
import { FormContainerStyle } from '../../Components/Form/FormStyle'
import TextOrNumberInput from '../../Components/InputFields/TextOrNumberInput'
import { VgaInputFieldProps } from '../Types'
import { errorMsg } from '../../../Helpers/SetErrorMsg'
import BaseInputs from '../../Components/BaseInputs'

const BaseInputFields: React.FC<VgaInputFieldProps> = ({ vgaProduct, setVgaProduct, validationErrors }) => {
   return (
      <FormContainerStyle>
         <BaseInputs product={vgaProduct} setProduct={setVgaProduct} validationErrors={validationErrors} />
         {/* Details */}
         <TextOrNumberInput
            labelText='Gpu gyártó'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, gpuManufacturer: event.target.value } })
            }
            value={vgaProduct.details.gpuManufacturer || ''}
            errorMsg={errorMsg(validationErrors, 'details.gpuManufacturer')}
         />
         <TextOrNumberInput
            labelText='PCI-E típus'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, pcieType: event.target.value } })
            }
            value={vgaProduct.details.pcieType || ''}
            errorMsg={errorMsg(validationErrors, 'details.pcieType')}
         />
         <TextOrNumberInput
            labelText='GPU alap órajel'
            inputType='number'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, gpuBaseClock: parseInt(event.target.value) } })
            }
            value={vgaProduct.details.gpuBaseClock || 0}
            errorMsg={errorMsg(validationErrors, 'details.gpuBaseClock')}
         />
         <TextOrNumberInput
            labelText='GPU emelt órajel'
            inputType='number'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, gpuPeakClock: parseInt(event.target.value) } })
            }
            value={vgaProduct.details.gpuPeakClock || 0}
            errorMsg={errorMsg(validationErrors, 'details.gpuPeakClock')}
         />
         <TextOrNumberInput
            labelText='Vram mennyiség (Gb)'
            inputType='number'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, vramCapacity: parseInt(event.target.value) } })
            }
            value={vgaProduct.details.vramCapacity || 0}
            errorMsg={errorMsg(validationErrors, 'details.vramCapacity')}
         />
         <TextOrNumberInput
            labelText='Vram típusa'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, vramType: event.target.value } })
            }
            value={vgaProduct.details.vramType || ''}
            errorMsg={errorMsg(validationErrors, 'details.vramType')}
         />
         <TextOrNumberInput
            labelText='Vram sávszélesség (bit)'
            inputType='number'
            onChangeEvent={(event) =>
               setVgaProduct({
                  ...vgaProduct,
                  details: { ...vgaProduct.details, vramBandwidth: parseInt(event.target.value) }
               })
            }
            value={vgaProduct.details.vramBandwidth || 0}
            errorMsg={errorMsg(validationErrors, 'details.vramBandwidth')}
         />
         <TextOrNumberInput
            labelText='Vram sebesség (GB/s)'
            inputType='number'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, vramSpeed: parseInt(event.target.value) } })
            }
            value={vgaProduct.details.vramSpeed}
            errorMsg={errorMsg(validationErrors, 'details.vramSpeed')}
         />
         <TextOrNumberInput
            labelText='Energia fogyasztás (W)'
            inputType='number'
            onChangeEvent={(event) =>
               setVgaProduct({
                  ...vgaProduct,
                  details: { ...vgaProduct.details, powerConsuption: parseInt(event.target.value) }
               })
            }
            value={vgaProduct.details.powerConsuption || 0}
            errorMsg={errorMsg(validationErrors, 'details.powerConsuption')}
         />
         <TextOrNumberInput
            labelText='Táp csatlakozók'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, powerPin: event.target.value } })
            }
            value={vgaProduct.details.powerPin || 0}
         />
         <TextOrNumberInput
            labelText='Garancia'
            inputType='number'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, warranity: parseInt(event.target.value) } })
            }
            value={vgaProduct.details.warranity || 0}
            errorMsg={errorMsg(validationErrors, 'details.warranity')}
         />
         <TextOrNumberInput
            labelText='Display Port (DB)'
            inputType='number'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, displayPort: parseInt(event.target.value) } })
            }
            value={vgaProduct.details.displayPort || 0}
         />
         <TextOrNumberInput
            labelText='DVI (DB)'
            inputType='number'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, DVI: parseInt(event.target.value) } })
            }
            value={vgaProduct.details.DVI || 0}
         />
         <TextOrNumberInput
            labelText='HDMI (DB)'
            inputType='number'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, HDMI: parseInt(event.target.value) } })
            }
            value={vgaProduct.details.HDMI || 0}
         />
         <TextOrNumberInput
            labelText='Ajánlott tápegység'
            inputType='number'
            onChangeEvent={(event) =>
               setVgaProduct({
                  ...vgaProduct,
                  details: { ...vgaProduct.details, minPowerSupply: parseInt(event.target.value) }
               })
            }
            value={vgaProduct.details.minPowerSupply || 0}
         />
         <TextOrNumberInput
            labelText='Hosszúság'
            inputType='number'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, length: parseInt(event.target.value) } })
            }
            value={vgaProduct.details.length || 0}
         />
         <TextOrNumberInput
            labelText='Gyártói oldal link'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, manufacturerPageUrl: event.target.value } })
            }
            value={vgaProduct.details.manufacturerPageUrl || ''}
         />
         <TextOrNumberInput
            labelText='Stream processzorok'
            inputType='number'
            onChangeEvent={(event) =>
               setVgaProduct({
                  ...vgaProduct,
                  details: { ...vgaProduct.details, streamProcessors: parseInt(event.target.value) }
               })
            }
            value={vgaProduct.details.streamProcessors || 0}
            errorMsg={errorMsg(validationErrors, 'details.streamProcessors')}
         />
      </FormContainerStyle>
   )
}

export default BaseInputFields
