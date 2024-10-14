import { Request, Response, NextFunction } from 'express';
import { Vendor } from '../models';
import { CreateVendorInput } from '../dto';
import { GeneratePassword, GenerateSalt } from '../utility';

export const GetVendors = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const vendors = await Vendor.find();
        if (vendors.length > 0) {
            res.json(vendors);
            return;
        }
        res.json({ message: "No vendors available to show." });
    } catch (error) {
        next(error);  
    }
};

export const FindVendor = async (id: string | undefined, email: string) => {
    if(email) {
        return await Vendor.findOne({ email: email });
    } else {
        return await Vendor.findById(id);
    }
};

export const CreateVendor = async (req: Request, res: Response, next: NextFunction) => {
    const { name, address, pincode, foodType, email, password, ownerName, phone } = <CreateVendorInput>req.body;

    const existingVendor = await FindVendor('', email);

    if(existingVendor !== null) {
        res.json({ message: "A vendor record with this email already exists in the system." });
        return;
    }

    const salt = await GenerateSalt();
    const userPassword = await GeneratePassword(password, salt);

    const newVendor = await Vendor.create({
        name: name,
        address: address,
        pincode: pincode,
        foodType: foodType,
        email: email,
        password: userPassword,
        salt: salt,
        ownerName: ownerName,
        phone: phone,
        rating: 0,
        serviceAvailable: false,
        coverImages: [],
        lat: 0,
        lng: 0
    });

    res.json(newVendor);
};