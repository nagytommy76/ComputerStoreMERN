import express from 'express'
import {
   getAllCpuItemController,
   getCpuFilterData,
   rateCpuProductController,
   getCpuRatingSummaryController,
   getAllComments,
   likeDislikeCpuCommentController,
   removeUsersRating
} from '../../../controllers/Products/Cpu/Cpus'
import { authenticateAccessToken, userAuthenticatedWithAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
const router = express.Router()

router.get('/', getAllCpuItemController)
router.get('/filter-data', getCpuFilterData)
router.get('/get-cpu-rates', getCpuRatingSummaryController)
router.get('/get-cpu-comments', userAuthenticatedWithAccessToken, getAllComments)

router.post('/rate-cpu', authenticateAccessToken, rateCpuProductController)
router.post('/cpu-comment-like', authenticateAccessToken, likeDislikeCpuCommentController)
router.delete('/cpu-comment-remove', authenticateAccessToken, removeUsersRating)

module.exports = router
