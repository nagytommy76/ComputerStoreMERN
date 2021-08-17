import React from 'react'
import { vgaDetailType } from '../../VgaTypes'

export const VgaDetailsContext = React.createContext<ContextType>({
   _id: '',
   price: 0,
   details: {
      gpuManufacturer: '',
      pcieType: '',
      gpuBaseClock: 0,
      gpuPeakClock: 0,
      vramCapacity: 0,
      vramType: '',
      vramBandwidth: 0,
      powerConsuption: 0,
      description: '',
      powerPin: '',
      warranity: 0,
      displayPort: 0,
      DVI: 0,
      HDMI: 0,
      minPowerSupply: 0,
      length: 0,
      manufacturerPageUrl: '',
      vramSpeed: 0,
      streamProcessors: 0
   },
   pictureUrls: [],
   type: '',
   manufacturer: '',
   typeCode: ''
})

type ContextType = {
   _id?: string
   price: number
   details: vgaDetailType
   pictureUrls: string[]
   type: string
   manufacturer: string
   typeCode: string
}
