import express from 'express';
import { PORT } from './config';

const StartServer = () => {
    const app = express();

    app.listen(PORT, () => {    
        console.clear();
        console.log(`Server is listening on port ${PORT}`);
    });
};

StartServer();