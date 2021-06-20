import express from 'express'
// const vgaObject = require('./VgaItems')
const router = express.Router()
const { VgaProduct, VgaDetails } = require('../../models/VgaProducts')
import { VgaType, VgaDetailsType } from '../../models/VgaProducts'

const createVgaProduct = async (vgaDetailsId: string) => {
   const vga = new VgaProduct({
      itemNumber: 'GIGGEFGTX1660SUPEROC',
      type: 'GTX 1660 SUPER Gaming OC',
      typeCode: 'GV-N166SGAMING OC-6GD',
      manufacturer: 'Gigabyte',
      price: 462000,
      pictureUrls: ['képURL1', 'KépURL2'],
      details: vgaDetailsId
   })
   return await vga.save()
}

const createVgaDetails = async () => {
   const vgaDetailsModel = new VgaDetails({
      gpuManufacturer: 'NVIDIA',
      pcieType: 'PCI-E 16x 4.0',
      gpuBaseClock: 1700,
      gpuPeakClock: 1860,
      vramCapacity: 6,
      vramType: 'GDDR5',
      vramBandwidth: 192,
      powerConsuption: 125,
      description: '',
      powerPin: '8-pin x 1',
      warranity: 24,
      displayPort: 2,
      DVI: 0,
      HDMI: 2
   })
   return await vgaDetailsModel.save()
}
// https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/

router.get('/', async (req, res) => {
   await createVgaDetails()
      .then((detail: VgaDetailsType) => {
         const vgaDetailsId = detail._id.toString()
         return createVgaProduct(vgaDetailsId)
      })
      .then((vga: VgaType) => console.log('vga details created: ', vga))
   res.json({ msg: 'Sikeres adatbevitel' })
   // console.log(req.body)
})

module.exports = router
