import express from 'express'
import { handleCardPaymentController } from '../../../controllers/Payment/Payment'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'

const router = express.Router()

router.post('/', authenticateAccessToken, handleCardPaymentController)

module.exports = router
