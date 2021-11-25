import React from 'react'
import { FormContainerStyle } from '../../Components/Form/FormStyle'
import { VgaInputFieldProps } from '../Types'
import { errorMsg, findOrFailErrorMsg } from '../../../Helpers/SetErrorMsg'
import BaseInputs from '../../Components/BaseInputs'

import TextField from '@mui/material/TextField'

const TextOrNumberInput = React.lazy(() => import('../../Components/InputFields/TextOrNumberInput'))

const BaseInputFields: React.FC<VgaInputFieldProps> = ({ vgaProduct, setVgaProduct, validationErrors }) => {
   return (
      <FormContainerStyle>
         <BaseInputs product={vgaProduct} setProduct={setVgaProduct} validationErrors={validationErrors} />
         {/* Details */}
         <TextOrNumberInput
            id='gpuMan'
            labelText='Gpu gyártó'
            value={vgaProduct.details.gpuManufacturer || ''}
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, gpuManufacturer: event.target.value } })
            }
            required
            validationErrorLocation='details.gpuManufacturer'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='pciType'
            labelText='PCI-E típus'
            value={vgaProduct.details.pcieType || ''}
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, pcieType: event.target.value } })
            }
            required
            validationErrorLocation='details.pcieType'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='gpuBaseClock'
            labelText='GPU alap órajel'
            value={vgaProduct.details.gpuBaseClock || ''}
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, gpuBaseClock: parseInt(event.target.value) } })
            }
            required
            validationErrorLocation='details.gpuBaseClock'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='gpuPeakClock'
            labelText='GPU emelt órajel'
            value={vgaProduct.details.gpuPeakClock || ''}
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, gpuPeakClock: parseInt(event.target.value) } })
            }
            required
            validationErrorLocation='details.gpuPeakClock'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='vramCapacity'
            labelText='Vram kapacitás'
            value={vgaProduct.details.vramCapacity || ''}
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, vramCapacity: parseInt(event.target.value) } })
            }
            required
            validationErrorLocation='details.vramCapacity'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='vramType'
            labelText='Vram típusa'
            value={vgaProduct.details.vramType || ''}
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, vramType: event.target.value } })
            }
            required
            validationErrorLocation='details.vramType'
            validationErrors={validationErrors}
         />
         <TextField
            id='vramBandwidth'
            label='Vram sávszélesség (bit)'
            value={vgaProduct.details.vramBandwidth || ''}
            onChange={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, vramBandwidth: parseInt(event.target.value) } })
            }
            margin='normal'
            variant='filled'
            required
            error={findOrFailErrorMsg(validationErrors, 'details.vramBandwidth')}
            helperText={errorMsg(validationErrors, 'details.vramBandwidth')}
         />
         <TextField
            id='vramSpeed'
            label='Vram sebesség (GB/s)'
            value={vgaProduct.details.vramSpeed || ''}
            onChange={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, vramSpeed: parseInt(event.target.value) } })
            }
            margin='normal'
            variant='filled'
            required
            error={findOrFailErrorMsg(validationErrors, 'details.vramSpeed')}
            helperText={errorMsg(validationErrors, 'details.vramSpeed')}
         />
         <TextField
            id='powerConsuption'
            label='Energia fogyasztás (W)'
            value={vgaProduct.details.powerConsuption || ''}
            onChange={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, powerConsuption: parseInt(event.target.value) } })
            }
            margin='normal'
            variant='filled'
            required
            error={findOrFailErrorMsg(validationErrors, 'details.powerConsuption')}
            helperText={errorMsg(validationErrors, 'details.powerConsuption')}
         />
         <TextField
            id='powerPin'
            label='Táp csatlakozók'
            value={vgaProduct.details.powerPin || ''}
            onChange={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, powerPin: event.target.value } })
            }
            margin='normal'
            variant='filled'
            required
            error={findOrFailErrorMsg(validationErrors, 'details.powerPin')}
            helperText={errorMsg(validationErrors, 'details.powerPin')}
         />
         <TextField
            id='warranity'
            label='Garancia'
            value={vgaProduct.details.warranity || ''}
            onChange={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, warranity: parseInt(event.target.value) } })
            }
            margin='normal'
            variant='filled'
            required
            error={findOrFailErrorMsg(validationErrors, 'details.warranity')}
            helperText={errorMsg(validationErrors, 'details.warranity')}
         />
         <TextField
            id='displayPort'
            label='Display Port (DB)'
            value={vgaProduct.details.displayPort || ''}
            onChange={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, displayPort: parseInt(event.target.value) } })
            }
            margin='normal'
            variant='filled'
            required
            error={findOrFailErrorMsg(validationErrors, 'details.displayPort')}
            helperText={errorMsg(validationErrors, 'details.displayPort')}
         />
         <TextField
            id='DVI'
            label='DVI (DB)'
            value={vgaProduct.details.DVI || ''}
            onChange={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, DVI: parseInt(event.target.value) } })
            }
            margin='normal'
            variant='filled'
            required
            error={findOrFailErrorMsg(validationErrors, 'details.DVI')}
            helperText={errorMsg(validationErrors, 'details.DVI')}
         />
         <TextField
            id='HDMI'
            label='HDMI (DB)'
            value={vgaProduct.details.HDMI || ''}
            onChange={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, HDMI: parseInt(event.target.value) } })
            }
            margin='normal'
            variant='filled'
            required
            error={findOrFailErrorMsg(validationErrors, 'details.HDMI')}
            helperText={errorMsg(validationErrors, 'details.HDMI')}
         />
         <TextField
            id='minPowerSupply'
            label='Ajánlott tápegység'
            value={vgaProduct.details.minPowerSupply || ''}
            onChange={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, minPowerSupply: parseInt(event.target.value) } })
            }
            margin='normal'
            variant='filled'
            required
            error={findOrFailErrorMsg(validationErrors, 'details.minPowerSupply')}
            helperText={errorMsg(validationErrors, 'details.minPowerSupply')}
         />
         <TextField
            id='length'
            label='Hosszúság'
            value={vgaProduct.details.length || ''}
            onChange={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, length: parseInt(event.target.value) } })
            }
            margin='normal'
            variant='filled'
            required
            error={findOrFailErrorMsg(validationErrors, 'details.length')}
            helperText={errorMsg(validationErrors, 'details.length')}
         />
         <TextField
            id='streamProcessors'
            label='Stream processzorok'
            value={vgaProduct.details.streamProcessors || ''}
            onChange={(event) =>
               setVgaProduct({
                  ...vgaProduct,
                  details: { ...vgaProduct.details, streamProcessors: parseInt(event.target.value) }
               })
            }
            margin='normal'
            variant='filled'
            required
            error={findOrFailErrorMsg(validationErrors, 'details.streamProcessors')}
            helperText={errorMsg(validationErrors, 'details.streamProcessors')}
         />
         <TextField
            id='manufacturerPageUrl'
            label='Gyártói oldal link'
            value={vgaProduct.details.manufacturerPageUrl || ''}
            onChange={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, manufacturerPageUrl: event.target.value } })
            }
            margin='normal'
            variant='filled'
         />
      </FormContainerStyle>
   )
}

export default BaseInputFields
