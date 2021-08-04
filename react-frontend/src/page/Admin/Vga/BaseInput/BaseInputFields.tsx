import React from 'react'
import { VgaType } from '../../../ShopPages/Vga/VgaTypes'
import { FormContainerStyle, FullWidhtContainerStyle } from '../../Components/Form/FormStyle'
import TextOrNumberInput from '../../Components/InputFields/TextOrNumberInput'

const BaseInputFields: React.FC<Props> = ({ vgaProduct, setVgaProduct }) => {
   return (
      <FormContainerStyle>
         <TextOrNumberInput
            labelText='Termék szám'
            onChangeEvent={(event) => setVgaProduct({ ...vgaProduct, itemNumber: event.target.value })}
            value={vgaProduct.itemNumber}
         />
         <TextOrNumberInput
            labelText='Típus név'
            onChangeEvent={(event) => setVgaProduct({ ...vgaProduct, type: event.target.value })}
            value={vgaProduct.type}
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
         />
         <TextOrNumberInput
            inputType='number'
            labelText='Ár'
            onChangeEvent={(event) => setVgaProduct({ ...vgaProduct, price: parseInt(event.target.value) })}
            value={vgaProduct.price}
         />
         {/* Details */}
         <TextOrNumberInput
            labelText='Gpu gyártó'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, gpuManufacturer: event.target.value } })
            }
            value={vgaProduct.details.gpuManufacturer}
         />
         <TextOrNumberInput
            labelText='PCI-E typús'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, pcieType: event.target.value } })
            }
            value={vgaProduct.details.pcieType}
         />
         <TextOrNumberInput
            labelText='GPU alap órajel'
            inputType='number'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, gpuBaseClock: parseInt(event.target.value) } })
            }
            value={vgaProduct.details.gpuBaseClock}
         />
         <TextOrNumberInput
            labelText='GPU emelt órajel'
            inputType='number'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, gpuPeakClock: parseInt(event.target.value) } })
            }
            value={vgaProduct.details.gpuPeakClock}
         />
         <TextOrNumberInput
            labelText='Vram mennyiség (Gb)'
            inputType='number'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, vramCapacity: parseInt(event.target.value) } })
            }
            value={vgaProduct.details.vramCapacity}
         />
         <TextOrNumberInput
            labelText='Vram típusa'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, vramType: event.target.value } })
            }
            value={vgaProduct.details.vramType}
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
         />
         <TextOrNumberInput
            labelText='Vram sebesség (GB/s)'
            inputType='number'
            onChangeEvent={(event) =>
               setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, vramSpeed: parseInt(event.target.value) } })
            }
            value={vgaProduct.details.vramSpeed}
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
         />
      </FormContainerStyle>
   )
}

type Props = {
   vgaProduct: VgaType
   setVgaProduct: React.Dispatch<React.SetStateAction<VgaType>>
}

export default BaseInputFields
