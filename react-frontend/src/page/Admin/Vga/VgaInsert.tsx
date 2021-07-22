import React, { useState } from 'react'
import styled from 'styled-components'
// import { VgaType } from '../../ShopPages/Vga/VgaTypes'
import InputField from '../Components/InputFields/InputField'
import PicUrlInput from '../Components/InputFields/PicUrlInput/PicUrlInput'

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
            <InputField labelText='Termék kód' onChangeEvent={(event) => setItemNumber(event.target.value)} value={itemNumber} />
            <InputField labelText='Típus név' onChangeEvent={(event) => setType(event.target.value)} value={type} />
            <InputField labelText='Típus kód' onChangeEvent={(event) => setTypeCode(event.target.value)} value={typeCode} />
            <InputField
               labelText='Vga gyártó'
               onChangeEvent={(event) => setManufacturer(event.target.value)}
               value={manufacturer}
            />
            <InputField
               inputType='number'
               labelText='Ár'
               onChangeEvent={(event) => setPrice(parseInt(event.target.value))}
               value={price}
            />
            {/* Details */}
            <InputField
               labelText='Gpu gyártó'
               onChangeEvent={(event) => setGpuManufacturer(event.target.value)}
               value={gpuManufacturer}
            />
            <InputField labelText='Termék kód' onChangeEvent={(event) => setItemNumber(event.target.value)} value={itemNumber} />
            <InputField labelText='Termék kód' onChangeEvent={(event) => setItemNumber(event.target.value)} value={itemNumber} />
            <InputField labelText='Termék kód' onChangeEvent={(event) => setItemNumber(event.target.value)} value={itemNumber} />
         </FormContainerStyle>
         <FullWidhtContainerStyle>
            <p>Kép Url</p>
            <PicUrlInput setPictureUrls={setPictureUrls} pictureUrls={pictureUrls}></PicUrlInput>
         </FullWidhtContainerStyle>
      </StyledForm>
   )
}

const StyledForm = styled.form`
   width: 80%;
   height: 90%;
   background-color: #fff;
`

const FormContainerStyle = styled.section`
   display: grid;
   grid-template-columns: repeat(3, 30%);
   justify-content: center;
   row-gap: 2rem;
   column-gap: 1rem;
`

const FullWidhtContainerStyle = styled.section`
   width: 90%;
   margin: auto;
`

export default AdminVga
