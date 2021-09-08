import express, { Request, Response } from 'express'
import { UserTypes } from '../../../models/User/UserTypes'
import { ValidateRegister } from './Validators/UserValidator'
import { insertUserDetailsValidator } from './Validators/UserDetailsValidator'

import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
import { checkErrors } from '../../../middlewares/CheckValidationErrors'
import { checkUserIsFound } from '../../../middlewares/CheckUserIsFound'

import { registerUserController, loginUserController, checkTokensValidityController } from '../../../controllers/User/Users'
import { insertUserDetailsController, getUserDetailsController } from '../../../controllers/User/UserDetails'

type RequestWithUser = Request & {
   user?: UserTypes | null
}

const router = express.Router()

router.post('/register', ValidateRegister, registerUserController)

router.post('/login', loginUserController)

router.post('/refresh-token', checkTokensValidityController)

router.post('/check-access-token', authenticateAccessToken, (req: RequestWithUser, res: Response) => {
   return res.json({ msg: 'sikeres authentikáció' })
})

// User Details
router.post(
   '/insert-details',
   insertUserDetailsValidator,
   authenticateAccessToken,
   checkErrors,
   checkUserIsFound,
   insertUserDetailsController
)
router.get('/get-details', authenticateAccessToken, checkUserIsFound, getUserDetailsController)

// https://www.freecodecamp.org/news/how-to-make-input-validation-simple-and-clean-in-your-express-js-app-ea9b5ff5a8a7/

// https://auth0.com/blog/node-js-and-typescript-tutorial-secure-an-express-api/#Set-Up-an-Authorization-Service

module.exports = router
