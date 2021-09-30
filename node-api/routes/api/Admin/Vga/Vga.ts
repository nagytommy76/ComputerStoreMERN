import express from 'express'
import { checkUserIsAdmin } from '../../../../middlewares/AuthenticateAccessOrRefreshTokens'
import {
   insertVgaItemController,
   modifyVgaProductController,
   getAllVgaItemsController
} from '../../../../controllers/Admin/Vga/AdminVgaController'
import { insertVgaValidator, modifyVgaValidator } from './Validators/AdminVgaValidator'
import { checkErrors } from '../../../../middlewares/CheckValidationErrors'
const router = express.Router()

router.post('/insert', insertVgaValidator, checkUserIsAdmin, checkErrors, insertVgaItemController)
router.get('/get-all', checkUserIsAdmin, getAllVgaItemsController)
router.post('/modify', modifyVgaValidator, checkUserIsAdmin, checkErrors, modifyVgaProductController)

module.exports = router
