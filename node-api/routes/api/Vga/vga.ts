import express from 'express'
import VgaProduct from '../../../controllers/Products/Vga/Vgas'
import {
   likeDislikeVgaCommentController,
   getVgaRatingSummaryController,
   removeUsersRatingInVga,
   getAllVgaComments,
   rateVgaProductController,
   removeSingleVgaCommentAnswer,
   saveVgaAnswerController,
} from '../../../controllers/Products/Vga/VgaRatings'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'

const vgaProduct = new VgaProduct()
const router = express.Router()

// https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/

router.get('/', vgaProduct.getAllVgaItemController)
router.get('/filter-data', vgaProduct.getFilterData)
router.get('/details', vgaProduct.getVgaDetailsController)

// Ratings
router.get('/get-vga-rates', getVgaRatingSummaryController)
router.get('/get-vga-comments', getAllVgaComments)
router.post('/rate-vga', authenticateAccessToken, rateVgaProductController)
router.post('/vga-comment-like', authenticateAccessToken, likeDislikeVgaCommentController)
router.delete('/vga-comment-remove', authenticateAccessToken, removeUsersRatingInVga)

// Rating Answers
router.post('/save-vga-answer', authenticateAccessToken, saveVgaAnswerController)
router.delete('/vga-answer-remove', authenticateAccessToken, removeSingleVgaCommentAnswer)

module.exports = router
