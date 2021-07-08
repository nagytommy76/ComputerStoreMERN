import express, { Request, Response } from 'express'
import { UserTypes } from '../../../models/User/UserTypes'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'

import { registerUserController, loginUserController, checkTokensValidityController } from '../../../controllers/Users'

type RequestWithUser = Request & {
   user?: UserTypes | null
}

const router = express.Router()

router.post('/register', registerUserController)

router.post('/login', loginUserController)

router.post('/refresh-token', checkTokensValidityController)

router.post('/check-access-token', authenticateAccessToken, (req: RequestWithUser, res: Response) => {
   // console.log(req.user)
   return res.json({ msg: 'sikeres authentikáció' })
})

// https://www.freecodecamp.org/news/how-to-make-input-validation-simple-and-clean-in-your-express-js-app-ea9b5ff5a8a7/

// https://auth0.com/blog/node-js-and-typescript-tutorial-secure-an-express-api/#Set-Up-an-Authorization-Service

module.exports = router
