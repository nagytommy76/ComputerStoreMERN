import express, { Request, Response } from 'express'
import { checkUserIsAdmin } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
const router = express.Router()

router.get('/check-is-admin', checkUserIsAdmin, (req: Request, res: Response) => {
   return res.status(200).json({ msg: 'is admin' })
})

module.exports = router
