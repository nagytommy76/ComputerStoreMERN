import { Router } from 'express'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
import SSDProduct from '../../../controllers/Products/SSD/SSD'
import { SSDProduct as SSDModel } from '../../../models/Products/SSD/SSD'
import BaseRatingController from '../../../controllers/Products/Ratings/BaseRatingController'

const ssdProduct = new SSDProduct()
const BaseRating = new BaseRatingController(SSDModel)

const router = Router()

router.get('/', ssdProduct.getAllSSDProductController)
router.get('/filter-data', ssdProduct.getSSDFilterDataController)
router.get('/details', ssdProduct.getSSDDetailsController)

// Ratings
router.get('/get-ssd-rates', BaseRating.getRatingSummaryController)
router.get('/get-ssd-comments', BaseRating.getAllComments)
router.delete('/ssd-comment-remove', authenticateAccessToken, BaseRating.removeUsersRatingController)

router.post('/rate-ssd', authenticateAccessToken, BaseRating.rateProductController)
router.post('/ssd-comment-like', authenticateAccessToken, BaseRating.likeDislikeCommentController)

// Rating answers
router.post('/save-ssd-answer', authenticateAccessToken, BaseRating.saveAnswerController)
router.patch('/edit-ssd-answer', authenticateAccessToken, BaseRating.editAnswerController)
router.patch('/edit-ssd-comment', authenticateAccessToken, BaseRating.editCommentController)
router.delete('/ssd-answer-remove', authenticateAccessToken, BaseRating.removeSingleCommentAnswer)

module.exports = router
