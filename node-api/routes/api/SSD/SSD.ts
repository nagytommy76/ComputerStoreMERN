import { Router } from 'express'
import SSDProduct from '../../../controllers/Products/SSD/SSD'
import {
   getSSDRatingSummaryController,
   getAllSSDComments,
} from '../../../controllers/Products/SSD/SSDRatings'

const ssdProduct = new SSDProduct()

const router = Router()

router.get('/', ssdProduct.getAllSSDProductController)
router.get('/filter-data', ssdProduct.getSSDFilterDataController)
router.get('/details', ssdProduct.getSSDDetailsController)

// Ratings
router.get('/get-ssd-rates', getSSDRatingSummaryController)
router.get('/get-ssd-comments', getAllSSDComments)

module.exports = router
