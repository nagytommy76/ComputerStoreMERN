import { Router } from 'express'
import { checkUserIsAdmin } from '../../../../middlewares/AuthenticateAccessOrRefreshTokens'

import {
   getAllUsers,
   removeSingleUser,
   getAllRatingValuesByUserID,
} from '../../../../controllers/Admin/Users/Users'

const router = Router()

router.get('/get-all', checkUserIsAdmin, getAllUsers)
router.get('/get-all-rating', checkUserIsAdmin, getAllRatingValuesByUserID)

router.delete('/delete', checkUserIsAdmin, removeSingleUser)

module.exports = router
