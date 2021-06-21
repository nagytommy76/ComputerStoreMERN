import express from 'express'
import { createVgaProduct, createVgaDetails } from './CreateVga'
import { VgaDetailsType } from '../../../models/Vga/VgaTypes'
const router = express.Router()
import { VgaProduct } from '../../../models/Vga/VgaProduct'
// https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/

// Ez egy admin funkció lesz majd!!! /admin/addVga...
router.post('/insertVga', async (_, res) => {
   // console.log(req.body)
   await createVgaDetails()
      .then((detail: VgaDetailsType) => {
         const vgaDetailsId = detail._id.toString()
         createVgaProduct(vgaDetailsId)
         res.json({ msg: 'Sikeres adatbevitel' })
      })
      .catch((err) => res.json({ msg: err }))
})

router.get('/:itemNumber', async (req, res) => {
   // a details nélkülit találja meg
   // const foundVga = await VgaProduct.findOne({ itemNumber: req.params.itemNumber })
   console.log(req.params.itemNumber)
   if (req.params.itemNumber) {
      await VgaProduct.findOne({ itemNumber: req.params.itemNumber })
         .populate('details')
         .then((foundVgaWithDetails) => {
            if (!foundVgaWithDetails) {
               res.json({ hasError: true, errorMsg: 'Vga item not found' })
            } else {
               res.json(foundVgaWithDetails)
            }
         })
         .catch((err) => console.error(err))
   } else {
      res.json({ hasError: true, errorMsg: 'No parameters has been send' })
   }
})

module.exports = router

const requestToSendInPostman = {
   itemNumber: 'GIGGEFGTX1660SUPEROC',
   type: 'GTX 1660 SUPER Gaming OC',
   typeCode: 'GV-N166SGAMING OC-6GD',
   manufacturer: 'Gigabyte',
   price: 462000,
   pictureUrls: ['képURL1', 'KépURL2'],
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
}
