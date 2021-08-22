import express from 'express'
import { body, check } from 'express-validator'
import { checkUserIsAdmin } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
import { insertVgaItemController, modifyVgaProductController } from '../../../controllers/Admin/Vga/AdminVgaController'
import { insertVgaValidator, modifyVgaValidator } from './Validators/AdminVgaValidator'
import { getAllVgaItemController } from '../../../controllers/Vgas'
const router = express.Router()

router.post('/insert', insertVgaValidator, checkUserIsAdmin, insertVgaItemController)
router.get('/get-all', checkUserIsAdmin, getAllVgaItemController)
router.post('/modify', modifyVgaValidator, checkUserIsAdmin, modifyVgaProductController)

module.exports = router
