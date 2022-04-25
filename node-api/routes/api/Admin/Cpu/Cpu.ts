import express from 'express'
import { checkUserIsAdmin } from '../../../../middlewares/AuthenticateAccessOrRefreshTokens'
import {
   insertCpuController,
   modifyCpuProductController,
   getAllCpuItemsController,
   getAllCpuItemsForDeleteController,
   deleteCpuProductByIdController,
} from '../../../../controllers/Admin/Cpu/AdminCpucontroller'
import { insertCpuValidator } from './Validator/CpuValidator'
import { checkErrors } from '../../../../middlewares/CheckValidationErrors'
const router = express.Router()

router.get('/get-all', checkUserIsAdmin, getAllCpuItemsController)
router.get('/get-to-delete', checkUserIsAdmin, getAllCpuItemsForDeleteController)

router.post('/insert', insertCpuValidator, checkUserIsAdmin, checkErrors, insertCpuController)
router.post('/modify', insertCpuValidator, checkUserIsAdmin, checkErrors, modifyCpuProductController)
router.delete('/delete', checkUserIsAdmin, deleteCpuProductByIdController)

module.exports = router
