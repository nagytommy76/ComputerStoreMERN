import express from 'express'
import { getAllVgaItemController, getFilterData } from '../../../controllers/Products/Vga/Vgas'
const router = express.Router()

// https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/

router.get('/', getAllVgaItemController)

router.get('/filter-data', getFilterData)

module.exports = router
