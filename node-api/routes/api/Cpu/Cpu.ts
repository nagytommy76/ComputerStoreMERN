import express from 'express'
import { getCpuProducts } from '../../../controllers/Products/Cpu/Cpus'
const router = express.Router()

router.get('/', getCpuProducts)

module.exports = router
