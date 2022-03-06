import express from 'express'
import CpuProduct from '../../../controllers/Products/Cpu/Cpus'
import {
   rateCpuProductController,
   getCpuRatingSummaryController,
   getAllComments,
   likeDislikeCpuCommentController,
   removeUsersRatingInCpu,
} from '../../../controllers/Products/Cpu/CpuRating'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
import {
   saveCpuAnswerController,
   removeSingleCpuCommentAnswer,
} from '../../../controllers/Products/Cpu/CpuRatingResponse'

const router = express.Router()
const cpuProduct = new CpuProduct()

router.get('/', cpuProduct.getAllCpuItemController)
router.get('/filter-data', cpuProduct.getCpuFilterData)
router.get('/details', cpuProduct.getCpuDetailsController)

// Ratings
router.get('/get-cpu-rates', getCpuRatingSummaryController)
router.get('/get-cpu-comments', getAllComments)
router.post('/rate-cpu', authenticateAccessToken, rateCpuProductController)
router.post('/cpu-comment-like', authenticateAccessToken, likeDislikeCpuCommentController)
router.delete('/cpu-comment-remove', authenticateAccessToken, removeUsersRatingInCpu)

// Rating Answers
router.post('/save-cpu-answer', authenticateAccessToken, saveCpuAnswerController)
router.delete('/cpu-answer-remove', authenticateAccessToken, removeSingleCpuCommentAnswer)

module.exports = router
