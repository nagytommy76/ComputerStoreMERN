import { Response } from 'express'
import { VgaProduct as VgaProductModel } from '../../../models/Products/Vga/VgaProduct'
import BaseProduct from '../BaseProduct'
import { QueryRequest } from '../Helper'

export default class VgaProduct extends BaseProduct {
   constructor() {
      super(VgaProductModel)
   }

   getAllVgaItemController = async (req: VgaQueryRequestType, res: Response) => {
      try {
         const {
            baseClock,
            boostClock,
            gpuManufacturer,
            length,
            pciType,
            tdp,
            vramBandwidth,
            vramCapacity,
            vramType,
         } = req.query

         const selectedGpuMan = gpuManufacturer == 'all' ? '' : gpuManufacturer
         const selectedPciType = pciType == 'all' ? '' : pciType
         const selectedVramType = vramType == 'all' ? '' : vramType
         const baseClockRange = this.splitStringAndConvertToArray(baseClock)
         const boostClockRange = this.splitStringAndConvertToArray(boostClock)
         const lengthRange = this.splitStringAndConvertToArray(length)
         const tdpRange = this.splitStringAndConvertToArray(tdp)
         const bandwidthRange = this.splitStringAndConvertToArray(vramBandwidth)
         const capacityRange = this.splitStringAndConvertToArray(vramCapacity)

         const extraQueryParams = {
            'details.gpuBaseClock': { $gte: baseClockRange[0], $lte: baseClockRange[1] },
            'details.gpuPeakClock': { $gte: boostClockRange[0], $lte: boostClockRange[1] },
            'details.length': { $gte: lengthRange[0], $lte: lengthRange[1] },
            'details.powerConsuption': { $gte: tdpRange[0], $lte: tdpRange[1] },
            'details.vramBandwidth': { $gte: bandwidthRange[0], $lte: bandwidthRange[1] },
            'details.vramCapacity': { $gte: capacityRange[0], $lte: capacityRange[1] },
            'details.gpuManufacturer': new RegExp(selectedGpuMan, 'i'),
            'details.pcieType': new RegExp(selectedPciType, 'i'),
            'details.vramType': new RegExp(selectedVramType, 'i'),
         }

         const { foundProduct, totalPages } = await this.returnProductModelWithPaginateInfo(
            req,
            extraQueryParams
         )
         res.json({
            allProducts: foundProduct,
            totalPages,
         })
      } catch (error) {
         return res.status(500).json(error)
      }
   }

   getFilterData = async (_: any, res: Response) => {
      try {
         const extraGroup = {
            minBaseClock: { $min: '$details.gpuBaseClock' },
            maxBaseClock: { $max: '$details.gpuBaseClock' },
            minBoostClock: { $min: '$details.gpuPeakClock' },
            maxBoostClock: { $max: '$details.gpuPeakClock' },
            gpuManufacturer: { $addToSet: '$details.gpuManufacturer' },
            minLength: { $min: '$details.length' },
            maxLength: { $max: '$details.length' },
            pciType: { $addToSet: '$details.pcieType' },
            minTdp: { $min: '$details.powerConsuption' },
            maxTdp: { $max: '$details.powerConsuption' },
            minVramBandwidth: { $min: '$details.vramBandwidth' },
            maxVramBandwidth: { $max: '$details.vramBandwidth' },
            minVramCapacity: { $min: '$details.vramCapacity' },
            maxVramCapacity: { $max: '$details.vramCapacity' },
            vramType: { $addToSet: '$details.vramType' },
         }
         const filterData = await this.baseFilterData(extraGroup)
         res.status(200).json(filterData[0])
      } catch (error) {
         return res.status(500).json({ errorMessage: error })
      }
   }
}

type VgaQueryRequestType = QueryRequest & {
   query: {
      baseClock: string
      boostClock: string
      gpuManufacturer: string
      length: string
      pciType: string
      tdp: string
      vramBandwidth: string
      vramCapacity: string
      vramType: string
   }
}
