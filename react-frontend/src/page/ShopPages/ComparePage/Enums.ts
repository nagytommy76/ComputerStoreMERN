export enum VgaDetailProperties {
   gpuBaseClock = 'Alap GPU Órajel',
   gpuPeakClock = 'Emelt GPU órajel',
   streamProcessors = 'Stream processzorok',
   vramBandwidth = 'VRAM sávszélesség',
   vramCapacity = 'VRAM mennyiség',
   vramSpeed = 'VRAM sebesség',
   vramType = 'VRAM típusa',
   minPowerSupply = 'Minimum ajánlott tápegység',
   powerConsuption = 'Fogyasztás (TDP)',
   powerPin = 'Tápcsatlakozók',
   pcieType = 'PCI-E típusa',
   gpuManufacturer = 'GPU gyártó',
   length = 'Hosszúság',
   DVI = 'DVI',
   HDMI = 'HDMI',
   displayPort = 'Display Portok szána',
   manufacturerPageUrl = 'Gyártói honlap',
   warranity = 'Garancia',
}

export enum CpuDetailProperties {
   coreCount = 'Magok száma',
   threadCount = 'Szálak száma',
   baseClock = 'Alap órajel',
   boostClock = 'Turbó órajel',
   TDP = 'Fogyasztás',
   architecture = 'Architektúra',
   cpuCodeName = 'CPU kódneve',
   integratedGraphicsName = 'Integrált GPU neve',
   l2Cache = 'L2 cache',
   l3Cache = 'L3 cache',
   socket = 'Foglalat',
   stockCooler = 'Gyári hűtő',
   stockCoolerName = 'Gyári hűtő neve',
   manufacturerPageUrl = 'Gyárói honlap',
   warranity = 'Garancia',
}

export enum RamDetailProperties {
   memoryType = 'Típus',
   capacity = 'Kapacitás',
   moduleNumber = 'Modulok száma',
   frequency = 'Frekvencia',
   voltage = 'Feszültség',
   latency = 'Késleltetés CL',
   manufacturerPageUrl = 'Gyártói honlap',
   warranity = 'Garancia',
}

export enum HddDetailProperties {
   capacity = 'Kapacitás',
   cache = 'Cache',
   rpm = 'Fordulat',
   sataType = 'SATA típusa',
   sizeInCol = 'Méret',
   manufacturerPageUrl = 'Gyárói honlap',
   warranity = 'Garancia',
}

export enum SsdDetailProperties {
   capacity = 'Kapacitás',
   connection = 'Csatlakozás',
   nandTechnology = 'NAND Technológia',
   readingSpeed = 'Olvasási sebesség',
   writingSpeed = 'Írási sebesség',
   tbw = 'TBW (max írási mennyiség)',
   manufacturerPageUrl = 'Gyárói honlap',
   warranity = 'Garancia',
}
