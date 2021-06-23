import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken'
import { ACCESS_TOKEN_SECRET } from "../config/endpoints.config";
type GetUserAuthInfoRequest = Request & {
    user?: JwtPayload
}

export const authenticateAccessToken = (req:GetUserAuthInfoRequest,res: Response,next:NextFunction) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader?.split(' ')[1]
    if(!token) return res.sendStatus(401)

    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}