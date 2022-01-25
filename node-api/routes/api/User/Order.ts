import express from 'express'
import { handleUserOrderWithCardPaymentController } from '../../../controllers/User/Orders'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
import { checkUserIsFound } from '../../../middlewares/CheckUserIsFound'

const router = express.Router()
router.post('/handle-order', authenticateAccessToken, checkUserIsFound, handleUserOrderWithCardPaymentController)

module.exports = router
