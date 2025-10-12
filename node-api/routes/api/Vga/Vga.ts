import express from 'express'
import BaseRatingController from '../../../controllers/Products/Ratings/BaseRatingController'
import VgaProduct from '../../../controllers/Products/Vga/Vgas'
import { VgaProduct as VgaModel } from '../../../models/Products/Vga/VgaProduct'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'

const router = express.Router()

const vgaProduct = new VgaProduct()
const BaseRating = new BaseRatingController(VgaModel)

// https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/

router.get('/', vgaProduct.getAllVgaItemController)
router.get('/filter-data', vgaProduct.getFilterData)
router.get('/details', vgaProduct.getVgaDetailsController)
// Compare
router.get('/compare', vgaProduct.getVgaCompareDetailsController)

// Ratings
router.get('/get-vga-rates', BaseRating.getRatingSummaryController)
router.get('/get-vga-comments', BaseRating.getAllComments)
router.post('/rate-vga', authenticateAccessToken, BaseRating.rateProductController)
router.post('/vga-comment-like', authenticateAccessToken, BaseRating.likeDislikeCommentController)
router.delete('/vga-comment-remove', authenticateAccessToken, BaseRating.removeUsersRatingController)

// Rating Answers
router.post('/save-vga-answer', authenticateAccessToken, BaseRating.saveAnswerController)
router.patch('/edit-vga-answer', authenticateAccessToken, BaseRating.editAnswerController)
router.patch('/edit-vga-comment', authenticateAccessToken, BaseRating.editCommentController)
router.delete('/vga-answer-remove', authenticateAccessToken, BaseRating.removeSingleCommentAnswer)

module.exports = router
