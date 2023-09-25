var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import authRouter from './routes/authRoutes.js';
import { errorHandlerMiddleware, notFoundMiddleware, } from './middleware/handler.js';
import { connectDB } from './db/connect.js';
const app = express();
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('Welcome!');
});
app.use(express.json());
app.get('/', (req, res) => {
    throw new Error();
    res.message = 'Hello, world!';
    res.send();
});
app.use('/api/v1/auth', authRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
app.listen(port, () => {
    console.log(`Timezones by location application is running on port ${port}.`);
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`Timezones by location application is running on port ${port}.`);
        });
    }
    catch (error) {
        console.error(error);
    }
});
start();
