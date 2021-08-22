import React from 'react'
import { FormContainerStyle } from '../../Components/Form/FormStyle'
import TextOrNumberInput from '../../Components/InputFields/TextOrNumberInput'
import { BaseInputFieldProps } from '../Types'

const BaseInputFields: React.FC<BaseInputFieldProps> = ({ vgaProduct, setVgaProduct, validationErrors }) => {
   const setErrorMsg = (param: string) => validationErrors.find((x: any) => x.param === param)?.msg
   return (
      <FormContainerStyle>
         <TextOrNumberInput
            labelText='Termék szám'
            onChangeEvent={(event) => setVgaProduct({ ...vgaProduct, itemNumber: event.target.value })}
            value={vgaProduct.itemNumber}
            errorMsg={setErrorMsg('itemNumber')}
         />
         <TextOrNumberInput
            labelText='Típus név'
            onChangeEvent={(event) => setVgaProduct({ ...vgaProduct, type: event.target.value })}
            value={vgaProduct.type}
            errorMsg={setErrorMsg('type')}
         />
         <TextOrNumberInput
            labelText='Típus kód'
            onChangeEvent={(event) => setVgaProduct({ ...vgaProduct, typeCode: event.target.value })}
            value={vgaProduct.typeCode}
         />
         <TextOrNumberInput
            labelText='Vga gyártó'
            onChangeEvent={(event) => setVgaProduct({ ...vgaProduct, manufacturer: event.target.value })}
            value={vgaProduct.manufacturer}
            errorMsg={setErrorMsg('manufacturer')}
         />
         <TextOrNumberInput
            inputType='number'
            labelText='Ár'
            onChangeEvent={(event) => setVgaProduct({ ...vgaProduct, price: parseInt(event.target.value) })}
            value={vgaProduct.price}
            errorMsg={setErrorMsg('price')}
         />
         {/* Details */}
         <TextOrNumberInput
            labelText='Gpu gyártó'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, gpuManufacturer: event.target.value } })
            }
            value={vgaProduct.details.gpuManufacturer}
            errorMsg={setErrorMsg('details.gpuManufacturer')}
         />
         <TextOrNumberInput
            labelText='PCI-E típus'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, pcieType: event.target.value } })
            }
            value={vgaProduct.details.pcieType}
            errorMsg={setErrorMsg('details.pcieType')}
         />
         <TextOrNumberInput
            labelText='GPU alap órajel'
            inputType='number'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, gpuBaseClock: parseInt(event.target.value) } })
            }
            value={vgaProduct.details.gpuBaseClock}
            errorMsg={setErrorMsg('details.gpuBaseClock')}
         />
         <TextOrNumberInput
            labelText='GPU emelt órajel'
            inputType='number'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, gpuPeakClock: parseInt(event.target.value) } })
            }
            value={vgaProduct.details.gpuPeakClock}
            errorMsg={setErrorMsg('details.gpuPeakClock')}
         />
         <TextOrNumberInput
            labelText='Vram mennyiség (Gb)'
            inputType='number'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, vramCapacity: parseInt(event.target.value) } })
            }
            value={vgaProduct.details.vramCapacity}
            errorMsg={setErrorMsg('details.vramCapacity')}
         />
         <TextOrNumberInput
            labelText='Vram típusa'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, vramType: event.target.value } })
            }
            value={vgaProduct.details.vramType}
            errorMsg={setErrorMsg('details.vramType')}
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
            value={vgaProduct.details.vramBandwidth}
            errorMsg={setErrorMsg('details.vramBandwidth')}
         />
         <TextOrNumberInput
            labelText='Vram sebesség (GB/s)'
            inputType='number'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, vramSpeed: parseInt(event.target.value) } })
            }
            value={vgaProduct.details.vramSpeed}
            errorMsg={setErrorMsg('details.vramSpeed')}
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
            value={vgaProduct.details.powerConsuption}
            errorMsg={setErrorMsg('details.powerConsuption')}
         />
         <TextOrNumberInput
            labelText='Táp csatlakozók'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, powerPin: event.target.value } })
            }
            value={vgaProduct.details.powerPin}
         />
         <TextOrNumberInput
            labelText='Garancia'
            inputType='number'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, warranity: parseInt(event.target.value) } })
            }
            value={vgaProduct.details.warranity}
            errorMsg={setErrorMsg('details.warranity')}
         />
         <TextOrNumberInput
            labelText='Display Port (DB)'
            inputType='number'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, displayPort: parseInt(event.target.value) } })
            }
            value={vgaProduct.details.displayPort}
         />
         <TextOrNumberInput
            labelText='DVI (DB)'
            inputType='number'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, DVI: parseInt(event.target.value) } })
            }
            value={vgaProduct.details.DVI}
         />
         <TextOrNumberInput
            labelText='HDMI (DB)'
            inputType='number'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, HDMI: parseInt(event.target.value) } })
            }
            value={vgaProduct.details.HDMI}
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
            value={vgaProduct.details.minPowerSupply}
         />
         <TextOrNumberInput
            labelText='Hosszúság'
            inputType='number'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, length: parseInt(event.target.value) } })
            }
            value={vgaProduct.details.length}
         />
         <TextOrNumberInput
            labelText='Gyártói oldal link'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, manufacturerPageUrl: event.target.value } })
            }
            value={vgaProduct.details.manufacturerPageUrl}
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
            value={vgaProduct.details.streamProcessors}
            errorMsg={setErrorMsg('details.streamProcessors')}
         />
      </FormContainerStyle>
   )
}

export default BaseInputFields
