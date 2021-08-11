import express, { Request, Response } from 'express'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
import { addCartItemsToUser } from '../../../controllers/Cart/Cart'

const router = express.Router()
router.post('/add-items', authenticateAccessToken, addCartItemsToUser)

module.exports = router
