import express from 'express'
import { handleUserOrderWithCardOrCashPaymentController } from '../../../controllers/User/Orders'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
import { checkUserIsFound } from '../../../middlewares/CheckUserIsFound'

const router = express.Router()
router.post('/handle-order', authenticateAccessToken, checkUserIsFound, handleUserOrderWithCardOrCashPaymentController)

module.exports = router
