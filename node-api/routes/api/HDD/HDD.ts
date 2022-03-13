import { Router } from 'express'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
import HDDProduct from '../../../controllers/Products/HDD/HDD'
import {
   getAllHDDComments,
   getHDDRatingSummaryController,
   rateHDDProductController,
   likeDislikeHDDCommentController,
   removeUsersRatingInHDDController,
   saveHddAnswerController,
   removeSingleHddCommentAnswer,
} from '../../../controllers/Products/HDD/HDDRating'

const hddProduct = new HDDProduct()

const router = Router()

router.get('/', hddProduct.getAllHDDProductController)
router.get('/filter-data', hddProduct.getHDDFilterData)
router.get('/details', hddProduct.getHDDDetailsController)

// Ratings
router.get('/get-hdd-rates', getHDDRatingSummaryController)
router.get('/get-hdd-comments', getAllHDDComments)
router.delete('/hdd-comment-remove', authenticateAccessToken, removeUsersRatingInHDDController)

router.post('/rate-hdd', authenticateAccessToken, rateHDDProductController)
router.post('/hdd-comment-like', authenticateAccessToken, likeDislikeHDDCommentController)

// Rating answers
router.post('/save-hdd-answer', authenticateAccessToken, saveHddAnswerController)
router.delete('/hdd-answer-remove', authenticateAccessToken, removeSingleHddCommentAnswer)

module.exports = router
