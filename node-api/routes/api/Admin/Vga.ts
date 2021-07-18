import express from 'express'
import { checkUserIsAdmin } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
import { insertVgaItemController } from '../../../controllers/Admin/AdminVga'
const router = express.Router()

router.post('/insert', checkUserIsAdmin, insertVgaItemController)

router.post('/test', checkUserIsAdmin, (req, res) => {
   res.status(201).json({ msg: 'HELLÓ ADMIN' })
})

module.exports = router
