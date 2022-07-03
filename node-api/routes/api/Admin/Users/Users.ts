import { Router } from 'express'
import { checkUserIsAdmin } from '../../../../middlewares/AuthenticateAccessOrRefreshTokens'

import { getAllUsers, removeSingleUser } from '../../../../controllers/Admin/Users/Users'

const router = Router()

router.get('/get-all', checkUserIsAdmin, getAllUsers)

router.delete('/remove-user', checkUserIsAdmin, removeSingleUser)

module.exports = router
