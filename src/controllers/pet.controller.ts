import { Request, Response } from 'express'

export const PetController = {
    getPet(req: Request, res: Response) {
        res.json([])
    },
    
    createPet(req: Request , res: Response){
        res.json()
    }
    
}