import { Router } from 'express'
import BaseRatingController from '../../../controllers/Products/Ratings/BaseRatingController'
import MemoryProduct from '../../../controllers/Products/Memory/Memory'
import { MemoryProduct as MemoryModel } from '../../../models/Products/Memory/Memory'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'

const router = Router()

const memoryProduct = new MemoryProduct()
const BaseRating = new BaseRatingController(MemoryModel)

router.get('/', memoryProduct.getAllMemoryProductController)
router.get('/filter-data', memoryProduct.getMemoryFilterData)
router.get('/details', memoryProduct.getMemoryDetailsController)

// Ratings
router.get('/get-memory-rates', BaseRating.getRatingSummaryController)
router.get('/get-memory-comments', BaseRating.getAllComments)

router.post('/rate-memory', authenticateAccessToken, BaseRating.rateProductController)
router.post('/memory-comment-like', authenticateAccessToken, BaseRating.likeDislikeCommentController)
router.delete('/memory-comment-remove', authenticateAccessToken, BaseRating.removeUsersRatingController)

// Rating Answers
router.post('/save-memory-answer', authenticateAccessToken, BaseRating.saveAnswerController)
router.patch('/edit-memory-answer', authenticateAccessToken, BaseRating.editAnswerController)
router.delete('/memory-answer-remove', authenticateAccessToken, BaseRating.removeSingleCommentAnswer)

module.exports = router
