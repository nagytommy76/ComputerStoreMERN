import { NextFunction, Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { ACCESS_TOKEN_SECRET } from '../config/endpoints.config'
import { UserTypes } from '../models/User/UserTypes'
type GetUserAuthInfoRequest = Request & {
   user?: UserTypes | JwtPayload | string
   accessToken?: string
}

const getTokenFromAuthorizationHeader = (authHeader?: string) => {
   return authHeader && authHeader?.split(' ')[1]
}

export const authenticateAccessToken = (req: GetUserAuthInfoRequest, res: Response, next: NextFunction) => {
   const token = getTokenFromAuthorizationHeader(req.headers.authorization)
   if (!token) return res.sendStatus(401)
   jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).json({ errorMessage: 'accessToken token expired' })
      req.user = user
      next()
   })
}

export const checkUserIsAdmin = (req: GetUserAuthInfoRequest, res: Response, next: NextFunction) => {
   const token = getTokenFromAuthorizationHeader(req.headers.authorization)
   if (!token) return res.sendStatus(401)

   jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).json({ errorMessage: 'accessToken token expired' })
      if (user?.isAdmin) {
         req.user = user
         next()
      } else {
         return res.status(403).json({ msg: 'NEM VAGY ADMIN' })
      }
   })
}
