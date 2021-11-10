import express from 'express'
import {
   getAllCpuItemController,
   getCpuFilterData,
   rateCpuProductController,
   getCpuRatingSummaryController,
   getAllComments,
   likeDislikeCpuCommentController,
   removeUsersRatingInCpu
} from '../../../controllers/Products/Cpu/Cpus'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
const router = express.Router()

router.get('/', getAllCpuItemController)
router.get('/filter-data', getCpuFilterData)
router.get('/get-cpu-rates', getCpuRatingSummaryController)
router.get('/get-cpu-comments', getAllComments)

router.post('/rate-cpu', authenticateAccessToken, rateCpuProductController)
router.post('/cpu-comment-like', authenticateAccessToken, likeDislikeCpuCommentController)
router.delete('/cpu-comment-remove', authenticateAccessToken, removeUsersRatingInCpu)

module.exports = router
