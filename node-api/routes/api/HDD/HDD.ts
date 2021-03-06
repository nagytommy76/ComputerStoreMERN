import { Router } from 'express'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
import HDDProduct from '../../../controllers/Products/HDD/HDD'
import { HddProduct as HDDModel } from '../../../models/Products/HDD/Hdd'
import BaseRatingController from '../../../controllers/Products/Ratings/BaseRatingController'

const hddProduct = new HDDProduct()
const BaseRating = new BaseRatingController(HDDModel)

const router = Router()

router.get('/', hddProduct.getAllHDDProductController)
router.get('/filter-data', hddProduct.getHDDFilterData)
router.get('/details', hddProduct.getHDDDetailsController)

// Ratings
router.get('/get-hdd-rates', BaseRating.getRatingSummaryController)
router.get('/get-hdd-comments', BaseRating.getAllComments)
router.delete('/hdd-comment-remove', authenticateAccessToken, BaseRating.removeUsersRatingController)

router.post('/rate-hdd', authenticateAccessToken, BaseRating.rateProductController)
router.post('/hdd-comment-like', authenticateAccessToken, BaseRating.likeDislikeCommentController)

// Rating answers
router.post('/save-hdd-answer', authenticateAccessToken, BaseRating.saveAnswerController)
router.delete('/hdd-answer-remove', authenticateAccessToken, BaseRating.removeSingleCommentAnswer)

module.exports = router
