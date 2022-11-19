import express from 'express'
import { checkUserIsAdmin } from '../../../../middlewares/AuthenticateAccessOrRefreshTokens'
import {
   deleteMemoryProductByIdController,
   getAllMemoryController,
   insertMemoryProduct,
   modifyMemoryProductController,
   getAllMemoryItemsForDeleteController,
} from '../../../../controllers/Admin/Memory/Memory'
import { insertMemoryValidator } from './Validator/MemoryValidator'
import { checkErrors } from '../../../../middlewares/CheckValidationErrors'

const router = express.Router()

router.get('/get-all', checkUserIsAdmin, getAllMemoryController)
router.get('/get-to-delete', checkUserIsAdmin, getAllMemoryItemsForDeleteController)

router.post('/insert', insertMemoryValidator, checkUserIsAdmin, checkErrors, insertMemoryProduct)
router.patch('/modify', insertMemoryValidator, checkUserIsAdmin, checkErrors, modifyMemoryProductController)
router.delete('/delete', checkUserIsAdmin, deleteMemoryProductByIdController)

module.exports = router
