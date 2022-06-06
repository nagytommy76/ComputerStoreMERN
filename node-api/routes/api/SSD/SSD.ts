import { Router } from 'express'
import SSDProduct from '../../../controllers/Products/SSD/SSD'

const ssdProduct = new SSDProduct()

const router = Router()

router.get('/', ssdProduct.getAllSSDProductController)
router.get('/filter-data', ssdProduct.getSSDFilterDataController)

module.exports = router
