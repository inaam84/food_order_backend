import express, { Application } from 'express';
import path from 'path';

import { AdminRoutes, VendorRoutes, CustomerRoutes, DeliveryRoutes, ShoppingRoutes } from '../routes';





export default async (app: Application) => {

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(express.json());

    const imagePath = path.join(__dirname, '../images');

    app.use('/images', express.static(imagePath));

    app.use('/admin', AdminRoutes);
    app.use('/vendor', VendorRoutes);
    app.use('/delivery', DeliveryRoutes);
    app.use('/shopping', ShoppingRoutes);
    app.use('/customer', CustomerRoutes);

    return app;
};