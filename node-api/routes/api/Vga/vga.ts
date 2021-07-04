import express, { Request, Response } from 'express'
import { createVgaProduct, createVgaDetails } from './CreateVga'
import { VgaDetailsType } from '../../../models/Vga/VgaTypes'
const router = express.Router()
import { VgaProduct } from '../../../models/Vga/VgaProduct'

// import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
// https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/

// Ez egy admin funkció lesz majd!!! /admin/addVga...
router.post('/insert-vga', async (_, res) => {
   // console.log(req.body)
   await createVgaDetails()
      .then((detail: VgaDetailsType) => {
         const vgaDetailsId = detail._id.toString()
         createVgaProduct(vgaDetailsId)
         res.json({ msg: 'Sikeres adatbevitel' })
      })
      .catch((err) => res.json({ msg: err }))
})

router.get('/', async (req: Request, res: Response) => {
   await VgaProduct.find({})
      .then((allVgaProducts) => {
         if (!allVgaProducts) return res.json({ message: 'Nem található VGA termék!' })
         else return res.json(allVgaProducts)
      })
      .catch((error) => console.log(error))
})

router.get('/:itemNumber', async (req, res) => {
   // a details nélkülit találja meg
   // const foundVga = await VgaProduct.findOne({ itemNumber: req.params.itemNumber })
   const itemNumber = req.params?.itemNumber
   // console.log(itemNumber)
   if (itemNumber) {
      await VgaProduct.findOne({ itemNumber })
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
      res.status(404).json({ hasError: true, errorMsg: 'No parameters has been send' })
   }
})

module.exports = router
