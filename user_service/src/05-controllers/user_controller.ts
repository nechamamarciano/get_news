import express, { NextFunction, Request, Response } from 'express';
import {insertUserInDatabase} from '../04-logic/user_logic';
import { User, validateUser } from '../02-models/user_model';
import { sendRequestForFilteredNews } from '../04-logic/processLogic';


const server = express.Router();

// POST http://localhost:3000/users
server.post('/user', async (req: Request, res: Response, nextFunc:NextFunction) => {
    try {
        const { email, preferences } = req.body as User;
        const user = { email, preferences };
        validateUser(user);
        await insertUserInDatabase(user);

        res.status(201).json('We got your request. In a few moments, you will get an email with the latest news according to your preferences');
        sendRequestForFilteredNews(email, preferences)
    } catch (error:any) {
        nextFunc(error);
    }
});

export default server;