import express from 'express'
import { checkUserIsAdmin } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
import {
   insertVgaItemController,
   getAllVgaProductToModifyController,
   modifyVgaProductController
} from '../../../controllers/Admin/Vga/AdminVgaController'
import { insertVgaValidator } from './Validators/AdminVgaValidator'
const router = express.Router()

router.post('/insert', insertVgaValidator, checkUserIsAdmin, insertVgaItemController)
router.post('/get-all', checkUserIsAdmin, getAllVgaProductToModifyController)
router.post('/modify', checkUserIsAdmin, modifyVgaProductController)

module.exports = router
