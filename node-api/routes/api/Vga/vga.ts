import express from 'express'
import { createVgaProduct } from './CreateVga'
const router = express.Router()

import { getAllVgaItemController } from '../../../controllers/Vgas'
import { checkUserIsAdmin } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'

// import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
// https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/

// Ez egy admin funkció lesz majd!!! /admin/addVga... ADDIG ÁTMENETI
router.post('/insert-vga', checkUserIsAdmin, async (_, res) => {
   // console.log(req.body)
   await createVgaProduct()
      .then((newVga) => {
         res.json({ msg: 'Sikeres adatbevitel', newVga })
      })
      .catch((err) => res.json({ msg: err }))
})

router.post('/test', checkUserIsAdmin, (req, res) => {
   res.status(201).json({ msg: 'HELLÓ ADMIN' })
})

router.get('/', getAllVgaItemController)

module.exports = router
