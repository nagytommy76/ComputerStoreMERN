import express from 'express'
import {
   handleUserOrderWithCardPaymentController,
   handleUserOrderWithCashPaymentController
} from '../../../controllers/User/Orders'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
import { checkUserIsFound } from '../../../middlewares/CheckUserIsFound'

const router = express.Router()
router.post('/handle-order-card', authenticateAccessToken, checkUserIsFound, handleUserOrderWithCardPaymentController)
router.post('/handle-order-cash', authenticateAccessToken, checkUserIsFound, handleUserOrderWithCashPaymentController)

module.exports = router
