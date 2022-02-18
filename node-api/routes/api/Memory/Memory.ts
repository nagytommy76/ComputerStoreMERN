import { Router } from 'express'
import MemoryProduct from '../../../controllers/Products/Memory/Memory'
import {
   getAllMemoryComments,
   getMemoryRatingSummaryController,
} from '../../../controllers/Products/Memory/MemoryRatings'

const router = Router()
const memoryProduct = new MemoryProduct()

router.get('/', memoryProduct.getAllMemoryProductController)
router.get('/filter-data', memoryProduct.getMemoryFilterData)

// Ratings
router.get('/get-memory-rates', getMemoryRatingSummaryController)
router.get('/get-memory-comments', getAllMemoryComments)

module.exports = router
