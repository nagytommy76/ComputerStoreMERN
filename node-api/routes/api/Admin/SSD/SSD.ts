import { Router } from 'express'

import { checkUserIsAdmin } from '../../../../middlewares/AuthenticateAccessOrRefreshTokens'
import { checkErrors } from '../../../../middlewares/CheckValidationErrors'
import {
   insertSSDProductController,
   getAllSSDController,
   deleteSSDProductByIdController,
   getAllSSDItemsForDeleteController,
   modifySSDProductController,
} from '../../../../controllers/Admin/SSD/SSD'

import { insertSSDValidator } from './Validator/SsdValidator'

const router = Router()

router.get('/get-all', checkUserIsAdmin, getAllSSDController)
router.get('/get-to-delete', checkUserIsAdmin, getAllSSDItemsForDeleteController)

router.post('/insert', insertSSDValidator, checkUserIsAdmin, checkErrors, insertSSDProductController)
router.patch('/modify', insertSSDValidator, checkUserIsAdmin, checkErrors, modifySSDProductController)
router.delete('/delete', checkUserIsAdmin, deleteSSDProductByIdController)

module.exports = router
