import { Request, Response } from 'express'


export function indexWelcome (req: Request, res:Response): Response{
    return res.json('welcome to my API')
}