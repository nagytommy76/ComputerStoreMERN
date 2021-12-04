import express from 'express'
import { checkUserIsAdmin } from '../../../../middlewares/AuthenticateAccessOrRefreshTokens'
import {
   insertVgaItemController,
   modifyVgaProductController,
   getAllVgaItemsController,
   getAllVgaItemsForDeleteController,
   deleteVgaProductByIdController
} from '../../../../controllers/Admin/Vga/AdminVgaController'
import { insertVgaValidator, modifyVgaValidator } from './Validators/AdminVgaValidator'
import { checkErrors } from '../../../../middlewares/CheckValidationErrors'
const router = express.Router()

router.get('/get-all', checkUserIsAdmin, getAllVgaItemsController)
router.get('/get-to-delete', checkUserIsAdmin, getAllVgaItemsForDeleteController)

router.post('/insert', insertVgaValidator, checkUserIsAdmin, checkErrors, insertVgaItemController)
router.post('/modify', modifyVgaValidator, checkUserIsAdmin, checkErrors, modifyVgaProductController)

router.delete('/delete', checkUserIsAdmin, deleteVgaProductByIdController)

module.exports = router
