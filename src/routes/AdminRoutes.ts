import express, { Request, Response, NextFunction } from 'express';
import { GetVendors, CreateVendor } from '../controllers';

const router = express.Router();

router.post('/vendors', CreateVendor);

router.get('/vendors', GetVendors);


router.get('/', (req: Request, res: Response) => {
    res.send("Hello from Admin Routes.");
});

export { router as AdminRoutes };