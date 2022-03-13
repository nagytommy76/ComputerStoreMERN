import { Router } from 'express'
import MemoryProduct from '../../../controllers/Products/Memory/Memory'
import {
   getAllMemoryComments,
   getMemoryRatingSummaryController,
   likeDislikeMemoryCommentController,
   rateMemoryProductController,
   removeUsersRatingInMemory,
   removeSingleMemoryCommentAnswer,
   saveMemoryAnswerController,
} from '../../../controllers/Products/Memory/MemoryRatings'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'

const router = Router()
const memoryProduct = new MemoryProduct()

router.get('/', memoryProduct.getAllMemoryProductController)
router.get('/filter-data', memoryProduct.getMemoryFilterData)
router.get('/details', memoryProduct.getMemoryDetailsController)

// Ratings
router.get('/get-memory-rates', getMemoryRatingSummaryController)
router.get('/get-memory-comments', getAllMemoryComments)

router.post('/rate-memory', authenticateAccessToken, rateMemoryProductController)
router.post('/memory-comment-like', authenticateAccessToken, likeDislikeMemoryCommentController)
router.delete('/memory-comment-remove', authenticateAccessToken, removeUsersRatingInMemory)

// Rating Answers
router.post('/save-memory-answer', authenticateAccessToken, saveMemoryAnswerController)
router.delete('/memory-answer-remove', authenticateAccessToken, removeSingleMemoryCommentAnswer)

module.exports = router
