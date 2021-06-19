const vgaObject: VgaType[] = [
   {
      itemNumber: 'ASRX57008GBROGSTR',
      type: 'RX 5700 ROG STRIX',
      typeCode: 'ROG-STRIX-RX5700-O8G-GAMING',
      manufacturer: 'Asus',
      gpuManufacturer: 'AMD',
      pcieType: 'PCI-E 16x 4.0',
      gpuBaseClock: 1610,
      gpuPeakClock: 1725,
      vramCapacity: 8,
      vramType: 'GDDR6',
      vramBandwidth: 256,
      powerConsuption: 180
   }
]

interface VgaType {
   itemNumber: string
   type: string
   typeCode: string
   manufacturer: string
   gpuManufacturer: string
   pcieType: string
   gpuBaseClock: number
   gpuPeakClock: number
   vramCapacity: number
   vramType: string
   vramBandwidth: number
   powerConsuption: number
}

module.exports = vgaObject
