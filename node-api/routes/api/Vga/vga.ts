import express from 'express'
import { getAllVgaItemController, getFilterData, rateVgaProductController } from '../../../controllers/Products/Vga/Vgas'
import {
   likeDislikeVgaCommentController,
   getVgaRatingSummaryController,
   removeUsersRatingInVga,
   getAllVgaComments
} from '../../../controllers/Products/Vga/VgaRatings'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
import { removeSingleVgaCommentAnswer, saveVgaAnswerController } from '../../../controllers/Products/Vga/VgaRatingResponse'
const router = express.Router()

// https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/

router.get('/', getAllVgaItemController)
router.get('/filter-data', getFilterData)
router.get('/get-vga-rates', getVgaRatingSummaryController)
router.get('/get-vga-comments', getAllVgaComments)

router.post('/rate-vga', authenticateAccessToken, rateVgaProductController)
router.post('/vga-comment-like', authenticateAccessToken, likeDislikeVgaCommentController)
router.delete('/vga-comment-remove', authenticateAccessToken, removeUsersRatingInVga)

// Rating Answers
router.post('/save-vga-answer', authenticateAccessToken, saveVgaAnswerController)
router.delete('/vga-answer-remove', authenticateAccessToken, removeSingleVgaCommentAnswer)

module.exports = router
