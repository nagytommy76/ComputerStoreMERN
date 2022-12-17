import { Router } from 'express'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
import HDDProduct from '../../../controllers/Products/HDD/HDD'
import { HddProduct as HDDModel } from '../../../models/Products/HDD/HDD'
import BaseRatingController from '../../../controllers/Products/Ratings/BaseRatingController'

const hddProduct = new HDDProduct()
const BaseRating = new BaseRatingController(HDDModel)

const router = Router()

router.get('/', hddProduct.getAllHDDProductController)
router.get('/filter-data', hddProduct.getHDDFilterData)
router.get('/details', hddProduct.getHDDDetailsController)
router.get('/compare', hddProduct.getHDDCompareDetailsController)

// Ratings
router.get('/get-hdd-rates', BaseRating.getRatingSummaryController)
router.get('/get-hdd-comments', BaseRating.getAllComments)
router.delete('/hdd-comment-remove', authenticateAccessToken, BaseRating.removeUsersRatingController)

router.post('/rate-hdd', authenticateAccessToken, BaseRating.rateProductController)
router.post('/hdd-comment-like', authenticateAccessToken, BaseRating.likeDislikeCommentController)

// Rating answers
router.post('/save-hdd-answer', authenticateAccessToken, BaseRating.saveAnswerController)
router.patch('/edit-hdd-answer', authenticateAccessToken, BaseRating.editAnswerController)
router.patch('/edit-hdd-comment', authenticateAccessToken, BaseRating.editCommentController)
router.delete('/hdd-answer-remove', authenticateAccessToken, BaseRating.removeSingleCommentAnswer)

module.exports = router
