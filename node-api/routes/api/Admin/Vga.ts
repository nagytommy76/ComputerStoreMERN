import express from 'express'
import { checkUserIsAdmin } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
import { insertVgaItemController } from '../../../controllers/Admin/AdminVga'
// import { checkEmail } from '../../../middlewares/AuthMiddleware/AuthMiddleware'
// import { body } from 'express-validator'
const router = express.Router()

router.post(
   '/insert',
   // checkEmail(),
   checkUserIsAdmin,
   insertVgaItemController
)

router.post('/test', checkUserIsAdmin, (req, res) => {
   res.status(201).json({ msg: 'HELLÓ ADMIN' })
})

module.exports = router
