import express from 'express'
import { checkUserIsAdmin } from '../../../../middlewares/AuthenticateAccessOrRefreshTokens'
import {
   deleteMemoryProductByIdController,
   getAllMemoryController,
   insertMemoryProduct,
   modifyMemoryProductController,
} from '../../../../controllers/Admin/Memory/Memory'
import { insertMemoryValidator } from './Validator/MemoryValidator'
import { checkErrors } from '../../../../middlewares/CheckValidationErrors'

const router = express.Router()

router.get('/get-all', insertMemoryValidator, checkUserIsAdmin, checkErrors, getAllMemoryController)
router.post('/insert', checkUserIsAdmin, checkErrors, insertMemoryProduct)

router.post('/modify', insertMemoryValidator, checkUserIsAdmin, checkErrors, modifyMemoryProductController)
router.delete('/delete', checkUserIsAdmin, deleteMemoryProductByIdController)

module.exports = router
