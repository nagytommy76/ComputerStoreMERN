import { Router } from 'express'
import MemoryProduct from '../../../controllers/Products/Memory/Memory'

const router = Router()
const memoryProduct = new MemoryProduct()

router.get('/', memoryProduct.getAllMemoryProductController)
router.get('/filter-data', memoryProduct.getMemoryFilterData)

module.exports = router
