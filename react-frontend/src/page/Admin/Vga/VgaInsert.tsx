import React, { useState } from 'react'
import { StyledForm, FormContainerStyle, FullWidhtContainerStyle } from './VgaInsertStyle'
import TextOrNumberInput from '../Components/InputFields/TextOrNumberInput'
import PicUrlInput from '../Components/InputFields/PicUrlInput/PicUrlInput'
import TextArea from '../Components/InputFields/TextArea/TextArea'
import SubmitButton from '../Components/InputFields/SubmitButton/SubmitButton'

export type PictureUrlType = {
   id: string
   pictureUrl: string
}

const AdminVga = () => {
   const [itemNumber, setItemNumber] = useState('')
   const [pictureUrls, setPictureUrls] = useState<PictureUrlType[]>([])
   const [type, setType] = useState('')
   const [typeCode, setTypeCode] = useState('')
   const [manufacturer, setManufacturer] = useState('')
   const [price, setPrice] = useState(0)
   // Details
   const [gpuManufacturer, setGpuManufacturer] = useState('')
   const [pcieType, setPcieType] = useState('')
   const [gpuBaseClock, setGpuBaseClock] = useState(0)
   const [gpuPeakClock, setGpuPeakClock] = useState(0)
   const [vramCapacity, setVramCapacity] = useState(0)
   const [vramType, setVramType] = useState('')
   const [vramBandwidth, setVramBandwidth] = useState(0)
   const [vramSpeed, setVramSpeed] = useState(0)
   const [powerConsuption, setPowerConsuption] = useState(0)
   const [description, setDescription] = useState('')
   const [powerPin, setPowerPin] = useState('')
   const [warranity, setWarranity] = useState(0)
   const [displayPort, setDisplayPort] = useState(0)
   const [DVI, setDVI] = useState(0)
   const [HDMI, setHDMI] = useState(0)
   const [minPowerSupply, setMinPowerSupply] = useState(0)
   const [length, setLength] = useState(0)
   const [manufacturerPageUrl, setManufacturerPageUrl] = useState('')
   const [streamProcessors, setStreamProcessors] = useState(0)

   const insertVga = (event: React.FormEvent) => {
      event.preventDefault()
      console.log('vga bevitele')
   }
   return (
      <StyledForm onSubmit={insertVga}>
         <FormContainerStyle>
            <TextOrNumberInput
               labelText='Termék kód'
               onChangeEvent={(event) => setItemNumber(event.target.value)}
               value={itemNumber}
            />
            <TextOrNumberInput labelText='Típus név' onChangeEvent={(event) => setType(event.target.value)} value={type} />
            <TextOrNumberInput
               labelText='Típus kód'
               onChangeEvent={(event) => setTypeCode(event.target.value)}
               value={typeCode}
            />
            <TextOrNumberInput
               labelText='Vga gyártó'
               onChangeEvent={(event) => setManufacturer(event.target.value)}
               value={manufacturer}
            />
            <TextOrNumberInput
               inputType='number'
               labelText='Ár'
               onChangeEvent={(event) => setPrice(parseInt(event.target.value))}
               value={price}
            />
            {/* Details */}
            <TextOrNumberInput
               labelText='Gpu gyártó'
               onChangeEvent={(event) => setGpuManufacturer(event.target.value)}
               value={gpuManufacturer}
            />
            <TextOrNumberInput
               labelText='PCI-E typús'
               onChangeEvent={(event) => setPcieType(event.target.value)}
               value={pcieType}
            />
            <TextOrNumberInput
               labelText='GPU alap órajel'
               inputType='number'
               onChangeEvent={(event) => setGpuBaseClock(parseInt(event.target.value))}
               value={gpuBaseClock}
            />
            <TextOrNumberInput
               labelText='GPU emelt órajel'
               inputType='number'
               onChangeEvent={(event) => setGpuPeakClock(parseInt(event.target.value))}
               value={gpuPeakClock}
            />
            <TextOrNumberInput
               labelText='Vram mennyiség (Gb)'
               inputType='number'
               onChangeEvent={(event) => setVramCapacity(parseInt(event.target.value))}
               value={vramCapacity}
            />
            <TextOrNumberInput
               labelText='Vram típusa'
               onChangeEvent={(event) => setVramType(event.target.value)}
               value={vramType}
            />
            <TextOrNumberInput
               labelText='Vram sávszélesség (bit)'
               inputType='number'
               onChangeEvent={(event) => setVramBandwidth(parseInt(event.target.value))}
               value={vramBandwidth}
            />
            <TextOrNumberInput
               labelText='Vram sebesség (GB/s)'
               inputType='number'
               onChangeEvent={(event) => setVramSpeed(parseInt(event.target.value))}
               value={vramSpeed}
            />
            <TextOrNumberInput
               labelText='Energia fogyasztás (W)'
               inputType='number'
               onChangeEvent={(event) => setPowerConsuption(parseInt(event.target.value))}
               value={powerConsuption}
            />
            <TextOrNumberInput
               labelText='Táp csatlakozók'
               onChangeEvent={(event) => setPowerPin(event.target.value)}
               value={powerPin}
            />
            <TextOrNumberInput
               labelText='Garancia'
               inputType='number'
               onChangeEvent={(event) => setWarranity(parseInt(event.target.value))}
               value={warranity}
            />
            <TextOrNumberInput
               labelText='Display Port (DB)'
               inputType='number'
               onChangeEvent={(event) => setDisplayPort(parseInt(event.target.value))}
               value={displayPort}
            />
            <TextOrNumberInput
               labelText='DVI (DB)'
               inputType='number'
               onChangeEvent={(event) => setDVI(parseInt(event.target.value))}
               value={DVI}
            />
            <TextOrNumberInput
               labelText='HDMI (DB)'
               inputType='number'
               onChangeEvent={(event) => setHDMI(parseInt(event.target.value))}
               value={HDMI}
            />
            <TextOrNumberInput
               labelText='Ajánlott tápegység'
               inputType='number'
               onChangeEvent={(event) => setMinPowerSupply(parseInt(event.target.value))}
               value={minPowerSupply}
            />
            <TextOrNumberInput
               labelText='Hosszúság'
               inputType='number'
               onChangeEvent={(event) => setLength(parseInt(event.target.value))}
               value={length}
            />
            <TextOrNumberInput
               labelText='Gyártói oldal link'
               onChangeEvent={(event) => setManufacturerPageUrl(event.target.value)}
               value={manufacturerPageUrl}
            />
            <TextOrNumberInput
               labelText='Stream processzorok'
               inputType='number'
               onChangeEvent={(event) => setStreamProcessors(parseInt(event.target.value))}
               value={streamProcessors}
            />
         </FormContainerStyle>
         <FullWidhtContainerStyle>
            {/* Ez esetleg Textarea?! */}
            <TextArea labelText='Leírás' onChangeEvent={(event) => setDescription(event.target.value)} value={description} />
         </FullWidhtContainerStyle>
         <FullWidhtContainerStyle>
            <PicUrlInput setPictureUrls={setPictureUrls} pictureUrls={pictureUrls}></PicUrlInput>
         </FullWidhtContainerStyle>
         <FullWidhtContainerStyle>
            <SubmitButton buttonText='Bevitel' />
         </FullWidhtContainerStyle>
      </StyledForm>
   )
}

export default AdminVga
