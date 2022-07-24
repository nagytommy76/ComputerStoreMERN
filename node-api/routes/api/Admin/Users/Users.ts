import { Router } from 'express'
import { checkUserIsAdmin } from '../../../../middlewares/AuthenticateAccessOrRefreshTokens'

import {
   getAllUsers,
   removeSingleUser,
   getAllRatingValuesByUserID,
   removeUserSingleCommentFromProduct,
} from '../../../../controllers/Admin/Users/Users'

const router = Router()

router.get('/get-all', checkUserIsAdmin, getAllUsers)
router.get('/get-all-rating', checkUserIsAdmin, getAllRatingValuesByUserID)

router.delete('/delete', checkUserIsAdmin, removeSingleUser)
router.delete('/delete-comment', checkUserIsAdmin, removeUserSingleCommentFromProduct)

module.exports = router
