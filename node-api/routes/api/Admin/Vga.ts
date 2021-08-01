import express from 'express'
import { checkUserIsAdmin } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
import { insertVgaItemController, modifyVgaProductController } from '../../../controllers/Admin/Vga/AdminVga'
import { insertVgaValidator } from './Validators/AdminVgaValidator'
const router = express.Router()

router.post('/insert', insertVgaValidator, checkUserIsAdmin, insertVgaItemController)
router.post('/modify', checkUserIsAdmin, modifyVgaProductController)

module.exports = router
