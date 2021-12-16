import express from 'express'
import { handleCardPaymentController } from '../../../controllers/Payment/Payment'

const router = express.Router()

router.post('/payment', handleCardPaymentController)

module.exports = router
