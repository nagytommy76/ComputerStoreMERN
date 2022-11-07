import express from 'express'
import CpuProduct from '../../../controllers/Products/Cpu/Cpus'
import BaseRatingController from '../../../controllers/Products/Ratings/BaseRatingController'
import { CpuProduct as CpuModel } from '../../../models/Products/Cpu/CpuSchema'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'

const router = express.Router()
const cpuProduct = new CpuProduct()
const BaseRating = new BaseRatingController(CpuModel)

router.get('/', cpuProduct.getAllCpuItemController)
router.get('/filter-data', cpuProduct.getCpuFilterData)
router.get('/details', cpuProduct.getCpuDetailsController)

// Ratings
router.get('/get-cpu-rates', BaseRating.getRatingSummaryController)
router.get('/get-cpu-comments', BaseRating.getAllComments)
router.post('/rate-cpu', authenticateAccessToken, BaseRating.rateProductController)
router.post('/cpu-comment-like', authenticateAccessToken, BaseRating.likeDislikeCommentController)
router.delete('/cpu-comment-remove', authenticateAccessToken, BaseRating.removeUsersRatingController)

// Rating Answers
router.post('/save-cpu-answer', authenticateAccessToken, BaseRating.saveAnswerController)
router.patch('/edit-cpu-answer', authenticateAccessToken, BaseRating.editAnswerController)
router.patch('/edit-cpu-comment', authenticateAccessToken, BaseRating.editCommentController)
router.delete('/cpu-answer-remove', authenticateAccessToken, BaseRating.removeSingleCommentAnswer)

module.exports = router
