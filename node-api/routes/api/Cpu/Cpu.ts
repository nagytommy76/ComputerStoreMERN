import express from 'express'
import { getAllCpuItemController, getCpuFilterData } from '../../../controllers/Products/Cpu/Cpus'
const router = express.Router()

router.get('/', getAllCpuItemController)
router.get('/filter-data', getCpuFilterData)

module.exports = router
