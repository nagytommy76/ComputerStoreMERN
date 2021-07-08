import express from 'express'
import { createVgaProduct, createVgaDetails } from './CreateVga'
import { VgaDetailsType } from '../../../models/Vga/VgaTypes'
const router = express.Router()

import { getAllVgaItemController, getSingleVgaItemByItemNumberController } from '../../../controllers/Vgas'

// import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
// https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/

// Ez egy admin funkció lesz majd!!! /admin/addVga... ADDIG ÁTMENETI
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

router.get('/', getAllVgaItemController)

router.get('/vga-details/:itemNumber', getSingleVgaItemByItemNumberController)

module.exports = router
