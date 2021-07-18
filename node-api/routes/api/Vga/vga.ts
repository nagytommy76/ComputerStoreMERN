import express from 'express'
import { getAllVgaItemController } from '../../../controllers/Vgas'
const router = express.Router()

// https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/

router.get('/', getAllVgaItemController)

module.exports = router
