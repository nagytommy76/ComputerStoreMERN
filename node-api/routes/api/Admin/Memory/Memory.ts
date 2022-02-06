import express from 'express'
import { checkUserIsAdmin } from '../../../../middlewares/AuthenticateAccessOrRefreshTokens'
import { getAllMemoryController, insertMemoryProduct } from '../../../../controllers/Admin/Memory/Memory'
import { insertMemoryValidator } from './Validator/MemoryValidator'
import { checkErrors } from '../../../../middlewares/CheckValidationErrors'

const router = express.Router()

router.get('/get-all', insertMemoryValidator, checkUserIsAdmin, checkErrors, getAllMemoryController)
router.post('/insert', checkUserIsAdmin, insertMemoryProduct)

module.exports = router
