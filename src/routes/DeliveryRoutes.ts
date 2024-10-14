import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();


router.get('/', (req: Request, res: Response) => {
    res.send("Hello from Delivery Routes.");
});

export {router as DeliveryRoutes};