import express from 'express'
import { checkUserIsAdmin } from '../../../../middlewares/AuthenticateAccessOrRefreshTokens'
import { insertCpuController, modifyCpuProductController } from '../../../../controllers/Admin/Cpu/AdminCpuController'
import { insertCpuValidator } from './Validator/CpuValidator'
import { checkErrors } from '../../../../middlewares/CheckValidationErrors'
const router = express.Router()

router.post('/insert', insertCpuValidator, checkUserIsAdmin, checkErrors, insertCpuController)

router.post('/modify', insertCpuValidator, checkUserIsAdmin, checkErrors, modifyCpuProductController)

module.exports = router
