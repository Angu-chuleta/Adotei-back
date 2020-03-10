import { Request, Response } from 'express'

export const userController = {
    getUsers(req: Request, res: Response) {
        res.json([])
    }
}