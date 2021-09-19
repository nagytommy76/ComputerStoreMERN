import express from 'express'
import {
   getAllCpuItemController,
   getCpuFilterData,
   rateCpuProductController,
   getCpuRatingSummaryController
} from '../../../controllers/Products/Cpu/Cpus'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
const router = express.Router()

router.get('/', getAllCpuItemController)
router.get('/filter-data', getCpuFilterData)
router.get('/get-cpu-rates', getCpuRatingSummaryController)

router.post('/rate-cpu', authenticateAccessToken, rateCpuProductController)

module.exports = router
