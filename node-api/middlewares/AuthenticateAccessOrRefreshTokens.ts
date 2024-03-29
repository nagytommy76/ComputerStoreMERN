import { NextFunction, Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { ACCESS_TOKEN_SECRET } from '../config/endpoints.config'
import { JWTUserType } from '../controllers/Types'

type GetUserAuthInfoRequest = Request & {
   user?: JWTUserType | JwtPayload | string
}

const getTokenFromAuthorizationHeader = (authHeader?: string) => {
   return authHeader && authHeader?.split(' ')[1]
}

export const authenticateAccessToken = (req: GetUserAuthInfoRequest, res: Response, next: NextFunction) => {
   // az access token-re van itt szükségem
   const token = getTokenFromAuthorizationHeader(req.headers.authorization)
   if (!token) return res.sendStatus(401)
   jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).json({ errorMessage: 'accessToken token expired' })
      if (!user) return res.status(404).json({ errorMessage: 'user not found' })

      req.user = user
      next()
   })
}

export const checkUserIsAdmin = (req: GetUserAuthInfoRequest, res: Response, next: NextFunction) => {
   const token = getTokenFromAuthorizationHeader(req.headers.authorization)
   if (!token) return res.sendStatus(401)

   jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).json({ errorMessage: 'accessToken token expired' })
      if (!user) return res.status(404).json({ errorMessage: 'user not found' })

      if (user.isAdmin) {
         req.user = user
         next()
      } else {
         return res.status(403).json({ errorMessage: 'user is not admin' })
      }
   })
}
// https://dev.to/nilanth/how-to-secure-jwt-in-a-single-page-application-cko
// https://www.youtube.com/watch?v=27KeYk-5vJw&ab_channel=DaveGray
