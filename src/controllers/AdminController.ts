import { Request, Response, NextFunction } from 'express';
import { Vendor } from '../models';

export const GetVendors = async (req: Request, res: Response, next: NextFunction) => {
    const vendors = await Vendor.find();

    if(vendors !== null) {
        return res.json(vendors);
    }

    return res.json({ "message": "No vendors available to show." });
};

