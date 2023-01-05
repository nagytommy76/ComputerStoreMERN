export interface ConvertedVGADetailsType {
   [key: string]: string
   gpuBaseClock: string
   gpuPeakClock: string
   streamProcessors: string
   vramBandwidth: string
   vramCapacity: string
   vramSpeed: string
   vramType: string
   minPowerSupply: string
   powerConsuption: string
   powerPin: string
   pcieType: string
   gpuManufacturer: string
   length: string
   DVI: string
   HDMI: string
   displayPort: string
   manufacturerPageUrl: string
   warranity: string
}

export interface ConvertedCPUDetailsType {
   [key: string]: string
   coreCount: string
   threadCount: string
   baseClock: string
   boostClock: string
   TDP: string
   architecture: string
   cpuCodeName: string
   integratedGraphicsName: string
   l2Cache: string
   l3Cache: string
   socket: string
   stockCooler: string
   stockCoolerName: string
   manufacturerPageUrl: string
   warranity: string
}

export interface ConvertedRAMDetailsType {
   [key: string]: string | number
   capacity: string
   frequency: string
   latency: number
   manufacturerPageUrl: string
   memoryType: string
   moduleNumber: string
   voltage: string
   warranity: string
}

export interface ConvertedHDDDetailsType {
   [key: string]: string
   cache: string
   capacity: string
   manufacturerPageUrl: string
   rpm: string
   sataType: string
   sizeInCol: string
   warranity: string
}
export interface ConvertedSSDDetailsType {
   [key: string]: string
   capacity: string
   manufacturerPageUrl: string
   connection: string
   nandTechnology: string
   readingSpeed: string
   writingSpeed: string
   tbw: string
   warranity: string
}
