import express from 'express'
import { getAllCpuItemController, getCpuFilterData } from '../../../controllers/Products/Cpu/Cpus'
import {
   rateCpuProductController,
   getCpuRatingSummaryController,
   getAllComments,
   likeDislikeCpuCommentController,
   removeUsersRatingInCpu
} from '../../../controllers/Products/Cpu/CpuRating'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
import { saveCpuAnswerController } from '../../../controllers/Products/Cpu/CpuRatingResponse'
const router = express.Router()

router.get('/', getAllCpuItemController)
router.get('/filter-data', getCpuFilterData)

// Ratings
router.get('/get-cpu-rates', getCpuRatingSummaryController)
router.get('/get-cpu-comments', getAllComments)
router.post('/rate-cpu', authenticateAccessToken, rateCpuProductController)
router.post('/cpu-comment-like', authenticateAccessToken, likeDislikeCpuCommentController)
router.delete('/cpu-comment-remove', authenticateAccessToken, removeUsersRatingInCpu)

// Rating Answers
router.post('/save-cpu-answer', authenticateAccessToken, saveCpuAnswerController)

module.exports = router
