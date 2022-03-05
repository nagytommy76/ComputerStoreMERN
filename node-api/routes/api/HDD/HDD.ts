import { Router } from 'express'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
import HDDProduct from '../../../controllers/Products/HDD/HDD'

const hddProduct = new HDDProduct()

const router = Router()

router.get('/', hddProduct.getAllHDDProductController)
router.get('/filter-data', hddProduct.getHDDFilterData)
