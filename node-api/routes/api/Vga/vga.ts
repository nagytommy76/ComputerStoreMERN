import express from 'express'
import {
   getAllVgaComments,
   getAllVgaItemController,
   getFilterData,
   getVgaRatingSummaryController,
   rateVgaProductController,
   likeDislikeVgaCommentController
} from '../../../controllers/Products/Vga/Vgas'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
const router = express.Router()

// https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/

router.get('/', getAllVgaItemController)
router.get('/filter-data', getFilterData)
router.get('/get-vga-rates', getVgaRatingSummaryController)
router.get('/get-vga-comments', getAllVgaComments)

router.post('/rate-vga', authenticateAccessToken, rateVgaProductController)
router.post('/vga-comment-like', authenticateAccessToken, likeDislikeVgaCommentController)

module.exports = router
