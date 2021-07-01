import { NextFunction, Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from '../config/endpoints.config'
import { UserTypes } from '../models/User/UserTypes'
import { generateTokens } from '../routes/api/User/User.helper'
type GetUserAuthInfoRequest = Request & {
   user?: UserTypes | JwtPayload
   accessToken?: string
}

type test = Request & {
   user: UserTypes
   accessToken?: string
}

const getTokenFromAuthorizationHeader = (authHeader?: string) => {
   return authHeader && authHeader?.split(' ')[1]
}

export const authenticateAccessToken = (req: GetUserAuthInfoRequest, res: Response, next: NextFunction) => {
   const token = getTokenFromAuthorizationHeader(req.headers['authorization'])
   if (!token) return res.sendStatus(401)

   jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
      console.log(user)
      if (err) return res.sendStatus(403)
      req.user = user
      next()
   })
}

// export const verifyRefreshToken = (req: test, res: Response, next: NextFunction) => {
//    const token = getTokenFromAuthorizationHeader(req.headers['authorization'])
//    if (!token) return res.sendStatus(401)
//    jwt.verify(token, REFRESH_TOKEN_SECRET, (err, user) => {
//       if (err) return res.sendStatus(403)
//       req.accessToken = generateTokens(user, ACCESS_TOKEN_SECRET)
//       next()
//    })
// }
