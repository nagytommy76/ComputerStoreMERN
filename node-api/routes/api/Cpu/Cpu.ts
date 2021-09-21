import express from 'express'
import {
   getAllCpuItemController,
   getCpuFilterData,
   rateCpuProductController,
   getCpuRatingSummaryController,
   getAllComments
} from '../../../controllers/Products/Cpu/Cpus'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
const router = express.Router()

router.get('/', getAllCpuItemController)
router.get('/filter-data', getCpuFilterData)
router.get('/get-cpu-rates', getCpuRatingSummaryController)
router.get('/get-cpu-comments', getAllComments)

router.post('/rate-cpu', authenticateAccessToken, rateCpuProductController)

module.exports = router
