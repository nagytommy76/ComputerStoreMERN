import { Router } from 'express'

import { insertSSDProductController } from '../../../../controllers/Admin/SSD/SSD'
import { checkUserIsAdmin } from '../../../../middlewares/AuthenticateAccessOrRefreshTokens'
import { checkErrors } from '../../../../middlewares/CheckValidationErrors'

import { insertSSDValidator } from './Validator/SsdValidator'

const router = Router()

router.post('/insert', insertSSDValidator, checkUserIsAdmin, checkErrors, insertSSDProductController)

module.exports = router
