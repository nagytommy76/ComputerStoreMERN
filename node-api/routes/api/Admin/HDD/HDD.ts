import { Router } from 'express'
import {
   getAllHDDToModifyController,
   insertHDDProductController,
   modifyHDDProductController,
} from '../../../../controllers/Admin/HDD/HDD'
import { checkUserIsAdmin } from '../../../../middlewares/AuthenticateAccessOrRefreshTokens'
import { checkErrors } from '../../../../middlewares/CheckValidationErrors'
import { insertHDDValidator } from './Validator/HddValidator'

const router = Router()

router.get('/get-all', checkUserIsAdmin, getAllHDDToModifyController)

router.post('/insert', insertHDDValidator, checkUserIsAdmin, checkErrors, insertHDDProductController)
router.post('/modify', insertHDDValidator, checkUserIsAdmin, checkErrors, modifyHDDProductController)

module.exports = router
