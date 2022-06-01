import { Router } from 'express'

import { insertSSDProductController } from '../../../../controllers/Admin/SSD/SSD'
import { checkUserIsAdmin } from '../../../../middlewares/AuthenticateAccessOrRefreshTokens'
import { checkErrors } from '../../../../middlewares/CheckValidationErrors'

const router = Router()

router.post('/insert', checkUserIsAdmin, checkErrors, insertSSDProductController)
